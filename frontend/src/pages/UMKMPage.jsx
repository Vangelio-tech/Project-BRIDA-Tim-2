import { motion } from "framer-motion";
import { Star, MapPin, BadgeCheck } from "lucide-react";
import { kulinerData } from "../data/UMKMData";

const UMKMPage = () => {
  const umkm = kulinerData.filter((k) => k.isUmkm);

  return (
    <div className="min-h-screen pt-20 px-6 bg-amber-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-500 rounded-3xl p-8 mb-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <BadgeCheck size={28} />
              <h1 className="text-4xl font-bold">Direktori UMKM</h1>
            </div>
            <p className="text-orange-100">
              Mendukung {umkm.length}+ usaha mikro, kecil, dan menengah lokal
              Kutai Barat
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {umkm.map((k, i) => (
            <motion.div
              key={k.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100"
            >
              <img
                src={k.image}
                alt={k.name}
                className="w-full h-36 object-cover rounded-xl mb-3"
              />
              <div className="flex items-start justify-between">
                <h3 className="font-bold text-base text-gray-900 flex-1">
                  {k.name}
                </h3>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full ml-2 flex-shrink-0">
                  UMKM
                </span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <Star size={12} className="text-amber-400 fill-amber-400" />
                <span className="text-sm font-semibold">{k.rating}</span>
                <span className="text-xs text-gray-400">
                  ({k.reviews} ulasan)
                </span>
              </div>
              <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                <MapPin size={11} />
                <span>{k.district}</span>
              </div>
              <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                {k.description}
              </p>
              <div className="mt-2 p-2 bg-orange-50 rounded-lg">
                <p className="text-xs text-orange-700 italic">💡 {k.funFact}</p>
              </div>
              <div className="text-orange-600 font-semibold text-sm mt-2">
                {k.priceRange}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UMKMPage;
