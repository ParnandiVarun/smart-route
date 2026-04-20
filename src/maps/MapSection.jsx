import { useState } from "react";
import Map2D from "./Map2D";
import Map3D from "./Map3D";

function MapSection({ routes, selectedRoute }) {
  const [mode, setMode] = useState("2D");

  const blockedZones = [
    [
      [17.4, 78.45],
      [17.4, 78.46],
      [17.41, 78.46],
      [17.41, 78.45],
    ],
  ];

  return (
    <div className="bg-card rounded-2xl border border-slate-700 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-slate-700 flex justify-between">
        <h2 className="font-semibold text-lg">Navigation View</h2>

        <div className="flex gap-2">
          <button
            onClick={() => setMode("2D")}
            className={`px-4 py-2 rounded-xl ${
              mode === "2D" ? "bg-primary" : "bg-soft"
            }`}
          >
            2D
          </button>

          <button
            onClick={() => setMode("3D")}
            className={`px-4 py-2 rounded-xl ${
              mode === "3D" ? "bg-primary" : "bg-soft"
            }`}
          >
            3D
          </button>
        </div>
      </div>

      {/* Map */}
      {mode === "2D" ? (
        <Map2D
          routes={routes}
          selectedRoute={selectedRoute}
          blockedZones={blockedZones}
        />
      ) : (
        <Map3D
          routes={routes}
          selectedRoute={selectedRoute}
          blockedZones={blockedZones}
        />
      )}
    </div>
  );
}

export default MapSection;
