import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchPanel from "../components/SearchPanel";
import RouteList from "../components/RouteList";
import MapSection from "../maps/MapSection";

function Dashboard() {
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#06101d] via-[#0b1730] to-[#081120] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 pt-8 pb-4">
        <div className="rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
                Smart Routing Platform
              </p>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
                Navigate Smarter <br />
                <span className="text-blue-400">Across India</span>
              </h1>

              <p className="text-slate-400 mt-4 max-w-xl">
                Generate multiple optimized routes, avoid blocked zones, compare
                travel times, and explore routes in immersive 2D & 3D views.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <div className="px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-300 text-sm">
                  Live Avoidance Zones
                </div>

                <div className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                  2D / 3D Maps
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-5">
                <p className="text-slate-400 text-sm">Routes Generated</p>
                <h2 className="text-3xl font-bold mt-2">{routes.length}</h2>
              </div>

              <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-5">
                <p className="text-slate-400 text-sm">Selected Route</p>
                <h2 className="text-3xl font-bold mt-2">
                  {selectedRoute !== null ? selectedRoute + 1 : "-"}
                </h2>
              </div>

              <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-5">
                <p className="text-slate-400 text-sm">Map Modes</p>
                <h2 className="text-3xl font-bold mt-2">2</h2>
              </div>

              <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-5">
                <p className="text-slate-400 text-sm">Status</p>
                <h2 className="text-lg font-semibold mt-3 text-green-400">
                  Ready
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <main className="max-w-7xl mx-auto px-4 pb-10 grid lg:grid-cols-3 gap-6">
        {/* Left Panel */}
        <section className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-xl p-4 shadow-xl">
            <SearchPanel
              setRoutes={setRoutes}
              setLoading={setLoading}
              setSelectedRoute={setSelectedRoute}
              setError={setError}
            />
          </div>

          {error && (
            <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
              {error}
            </div>
          )}

          <div className="rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-xl p-4 shadow-xl">
            <RouteList
              routes={routes}
              selectedRoute={selectedRoute}
              setSelectedRoute={setSelectedRoute}
              loading={loading}
            />
          </div>
        </section>

        {/* Right Panel */}
        <section className="lg:col-span-2">
          <div className="rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-xl p-4 shadow-2xl">
            <MapSection routes={routes} selectedRoute={selectedRoute} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
