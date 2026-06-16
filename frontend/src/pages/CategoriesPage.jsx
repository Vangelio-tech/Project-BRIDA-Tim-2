import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { kulinerData, categories } from "../data/UMKMData";
import KulinerCard from "../components/umkm/UMKMCard";

const CategoriesPage = () => {
  const [params] = useSearchParams();
  const [active, setActive] = useState(params.get("cat") || "all");

  const filtered =
    active === "all"
      ? kulinerData
      : kulinerData.filter((k) => k.category === active);

  return (
    <div className="min-h-screen pt-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Kategori Produk UMKM
        </motion.h1>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${
                active === cat.id
                  ? "bg-orange-500 text-white"
                  : "bg-orange-50 text-orange-700 hover:bg-orange-100"
              }`}
            >
              {cat.icon} {cat.name}
            </motion.button>
          ))}
        </div>

        <p className="text-gray-400 text-sm mb-6">
          {filtered.length} UMKM ditemukan
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((k, i) => (
            <motion.div
              key={k.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <KulinerCard kuliner={k} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
