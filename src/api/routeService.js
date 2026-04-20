import axios from "axios";

const key = import.meta.env.VITE_ORS_KEY;

const url =
  "https://api.openrouteservice.org/v2/directions/driving-car/geojson";

const headers = {
  Authorization: key,
  "Content-Type": "application/json",
};

//Create route request

const createRequest = (coordinates, extra = {}) => {
  return axios.post(
    url,
    {
      coordinates,
      instructions: true,
      units: "km",
      language: "en",
      ...extra,
    },
    { headers },
  );
};

//  Dunamic mid-point waypoints generator

const getDynamicWaypoints = (start, end) => {
  const midLon = (start[0] + end[0]) / 2;
  const midLat = (start[1] + end[1]) / 2;

  const offset = 0.8;

  return [
    [midLon, midLat + offset],
    [midLon + offset, midLat],
    [midLon - offset, midLat],
    [midLon, midLat - offset],
    [midLon + offset, midLat + 0.5],
    [midLon - offset, midLat + 0.5],
    [midLon + offset, midLat - 0.5],
    [midLon - offset, midLat - 0.5],
  ];
};

//Remove duplicate routes
const uniqueRoutes = (routes) => {
  const seen = new Set();

  return routes.filter((route) => {
    const dist = Math.round(route.properties.summary.distance / 1000);
    const time = Math.round(route.properties.summary.duration / 60);

    const routeKey = `${dist}-${time}`;

    if (seen.has(routeKey)) return false;

    seen.add(routeKey);
    return true;
  });
};

//sort routes into Fastest, Shortest and Balanced
const classifyRoutes = (routes) => {
  const cloned = routes.map((route) => ({
    ...route,
    tag: "",
  }));

  const fastest = [...cloned].reduce((a, b) =>
    a.properties.summary.duration < b.properties.summary.duration ? a : b,
  );

  fastest.tag = " Fastest Route";

  const shortest = [...cloned].reduce((a, b) =>
    a.properties.summary.distance < b.properties.summary.distance ? a : b,
  );

  if (!shortest.tag) {
    shortest.tag = " Shortest Route";
  }

  cloned.forEach((route) => {
    if (!route.tag) {
      route.tag = " Balanced Route";
    }
  });

  return cloned;
};

// Main function
export const fetchRoutes = async (startCoords, endCoords) => {
  try {
    let allRoutes = [];

    try {
      const altRes = await createRequest([startCoords, endCoords], {
        alternative_routes: {
          target_count: 3,
          weight_factor: 1.6,
        },
      });

      if (altRes.data.features?.length) {
        allRoutes.push(...altRes.data.features);
      }
    } catch {
      console.log("Alternative routes unavailable");
    }

    if (allRoutes.length < 3) {
      const waypoints = getDynamicWaypoints(startCoords, endCoords);

      const requests = waypoints.map((point) =>
        createRequest([startCoords, point, endCoords]),
      );

      const results = await Promise.allSettled(requests);

      results.forEach((item) => {
        if (item.status === "fulfilled" && item.value.data.features?.length) {
          allRoutes.push(item.value.data.features[0]);
        }
      });
    }

    allRoutes = uniqueRoutes(allRoutes);

    if (allRoutes.length === 1) {
      allRoutes.push(allRoutes[0], allRoutes[0]);
    }

    if (allRoutes.length === 2) {
      allRoutes.push(allRoutes[0]);
    }

    allRoutes = classifyRoutes(allRoutes.slice(0, 3));

    return allRoutes;
  } catch (error) {
    console.error(error.response?.data || error.message);
    throw new Error("Unable to fetch routes");
  }
};
