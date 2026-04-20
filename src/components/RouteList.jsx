const colors = ["bg-green-500", "bg-blue-500", "bg-yellow-500"];

function RouteList({
  routes,
  selectedRoute,
  setSelectedRoute,
  loading,
  blockedZones = [],
}) {
  if (loading) {
    return (
      <div className="bg-card p-4 rounded-2xl border border-slate-700 text-slate-300 animate-pulse">
        Loading routes...
      </div>
    );
  }

  const formatDuration = (seconds) => {
    const hours = seconds / 3600;

    if (hours < 1) {
      return `${Math.round(seconds / 60)} mins`;
    }

    return `${hours.toFixed(1)} hrs`;
  };

  const formatDistance = (distance) => {
    // ORS usually returns meters
    if (distance > 1000) {
      return `${(distance / 1000).toFixed(0)} km`;
    }

    // fallback if API already gives km
    return `${distance.toFixed(0)} km`;
  };

  return (
    <div className="space-y-4">
      {/*  Blocked Zone Banner */}
      {routes.length > 0 && blockedZones.length > 0 && (
        <div className="bg-red-500/10 text-red-300 p-3 rounded-xl border border-red-500/30 text-sm">
          ⚠️ {blockedZones.length} blocked zone(s) detected. Routes optimized
          automatically.
        </div>
      )}

      {/* Empty State */}
      {routes.length === 0 && (
        <div className="bg-card p-5 rounded-2xl border border-slate-700 text-slate-400 text-center">
          Search locations to generate smart routes.
        </div>
      )}

      {/* Route Cards */}
      {routes.map((route, index) => {
        const summary = route.properties?.summary || {};

        const distance = summary.distance || 0;
        const duration = summary.duration || 0;

        return (
          <div
            key={index}
            onClick={() => setSelectedRoute(index)}
            className={`p-4 rounded-2xl cursor-pointer border transition-all duration-300
            ${
              selectedRoute === index
                ? "border-primary bg-slate-800 scale-[1.02] shadow-lg"
                : "border-slate-700 bg-card hover:scale-[1.01]"
            }`}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-white">Route {index + 1}</h3>

              <div className={`w-4 h-4 rounded-full ${colors[index]}`}></div>
            </div>

            <p className="text-sm text-slate-400 mt-2">
              {formatDistance(distance)} • {formatDuration(duration)}
            </p>

            {/* Route Tags */}
            {index === 0 && (
              <span className="text-xs text-green-400 mt-2 block">
                Fastest Route
              </span>
            )}

            {index === 1 && (
              <span className="text-xs text-blue-400 mt-2 block">
                Balanced Route
              </span>
            )}

            {index === 2 && (
              <span className="text-xs text-yellow-400 mt-2 block">
                Safe Route
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default RouteList;
