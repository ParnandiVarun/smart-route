import { FaRoute } from "react-icons/fa";

function Navbar() {
  return (
    <header className="border-b border-slate-700 bg-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <FaRoute className="text-primary text-2xl" />
          <div>
            <h1 className="font-bold text-xl">RouteVision</h1>
            <p className="text-xs text-slate-400">Smart GIS Routing Platform</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
