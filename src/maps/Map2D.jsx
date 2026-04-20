import { MapContainer, TileLayer, Polyline, Polygon } from "react-leaflet";

function Map2D({ routes, selectedRoute, blockedZones }) {
  const colors = ["lime", "cyan", "yellow"];

  return (
    <div className="rounded-2xl overflow-hidden">
      <MapContainer
        center={[17.385, 78.486]}
        zoom={7}
        style={{ height: "700px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Routes */}
        {routes.map((route, index) => {
          const coords = route.geometry.coordinates.map(([lng, lat]) => [
            lat,
            lng,
          ]);

          return (
            <Polyline
              key={index}
              positions={coords}
              pathOptions={{
                color: colors[index],
                weight: selectedRoute === index ? 8 : 4,
                opacity: selectedRoute === index ? 1 : 0.5,
              }}
            />
          );
        })}

        {/* Blocked Zones */}
        {blockedZones.map((zone, i) => (
          <Polygon
            key={i}
            positions={zone}
            pathOptions={{
              color: "red",
              fillColor: "red",
              fillOpacity: 0.35,
            }}
          />
        ))}
      </MapContainer>
    </div>
  );
}

export default Map2D;
