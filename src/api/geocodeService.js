// geocodeService.js

import axios from "axios";

export const geocodePlace = async (place) => {
  try {
    const res = await axios.get("https://nominatim.openstreetmap.org/search", {
      params: {
        q: place,
        format: "json",
        limit: 1,
      },
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.data || res.data.length === 0) {
      throw new Error("Location not found");
    }

    const location = res.data[0];

    return [parseFloat(location.lon), parseFloat(location.lat)];
  } catch (error) {
    throw new Error("Failed to geocode location");
  }
};
