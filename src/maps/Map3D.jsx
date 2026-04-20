import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

function Map3D({ routes, selectedRoute }) {
  const mapRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [78.4867, 17.385],
      zoom: 6,
      pitch: 60,
      bearing: -20,
      antialias: true,
    });

    mapRef.current = map;

    map.on("style.load", () => {
      map.setFog({});
    });

    map.on("load", () => {
      routes.forEach((route, index) => {
        const id = `route-${index}`;

        map.addSource(id, {
          type: "geojson",
          data: route,
        });

        map.addLayer({
          id,
          type: "line",
          source: id,
          paint: {
            "line-color":
              index === 0 ? "#22c55e" : index === 1 ? "#3b82f6" : "#eab308",
            "line-width": selectedRoute === index ? 7 : 4,
            "line-opacity": selectedRoute === index ? 1 : 0.5,
          },
        });
      });
    });

    return () => map.remove();
  }, [routes, selectedRoute]);

  return <div ref={containerRef} className="h-[700px] w-full rounded-2xl" />;
}

export default Map3D;
