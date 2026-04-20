import axios from "axios";

export const ors = axios.create({
  baseURL: "https://api.openrouteservice.org",
  headers: {
    Authorization: import.meta.env.VITE_ORS_API_KEY,
    "Content-Type": "application/json",
  },
});
