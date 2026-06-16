import InteractiveMap from "../components/map/InteractiveMap";
import { useSearch } from "../hooks/useSearch";
import { Search } from "lucide-react";
import { categories, districts } from "../data/kulinerData";
import KulinerCard from "../components/kuliner/KulinerCard";

const MapPage = () => {
  const {
    query,
    setQuery,
    category,
    setCategory,
    district,
    setDistrict,
    results,
  } = useSearch();

  return (
    <div className="h-screen pt-16 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-80 bg-white border-r border-orange-100 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-orange-100">
          <div className="relative mb-3">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari UMKM atau produk..."
              className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                  category === cat.id
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-orange-50"
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="mt-2 w-full text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-orange-400"
          >
            {districts.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>

          <div className="text-xs text-gray-500 mt-2">
            {results.length} UMKM ditemukan
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {results.map((k) => (
            <KulinerCard key={k.id} kuliner={k} />
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 relative">
        <InteractiveMap filteredData={results} />
      </div>
    </div>
  );
};

export default MapPage;
