// SearchPanel.jsx

import { useState } from "react";
import { fetchRoutes } from "../api/routeService";
import { geocodePlace } from "../api/geocodeService";
import { fetchBlockedZones } from "../api/blockedService";

function SearchPanel({ setRoutes, setLoading, setSelectedRoute }) {
  const [start, setStart] = useState("Hyderabad");
  const [end, setEnd] = useState("Korutla");

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // Convert city names - coordinates
      const startCoords = await geocodePlace(start.trim());
      const endCoords = await geocodePlace(end.trim());

      // Optional blocked zones fetch
      await fetchBlockedZones();

      // Fetch 3 smart routes
      const data = await fetchRoutes(startCoords, endCoords, start, end);

      setRoutes(data);
      setSelectedRoute(0);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-card rounded-2xl p-5 border border-slate-700 shadow-xl">
      <h2 className="text-lg font-semibold mb-4">Generate Routes</h2>

      <div className="space-y-4">
        <input
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="w-full p-3 rounded-xl bg-soft outline-none"
          placeholder="Enter Start Location"
        />

        <input
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="w-full p-3 rounded-xl bg-soft outline-none"
          placeholder="Enter Destination"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-primary py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
        >
          Find Routes
        </button>
      </div>
    </div>
  );
}

export default SearchPanel;
