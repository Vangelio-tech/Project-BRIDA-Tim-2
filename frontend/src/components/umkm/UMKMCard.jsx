import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  MapPin,
  Clock,
  Heart,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { useFavoritesContext } from "../../context/FavoritesContext";

const UMKMCard = ({ kuliner, onClick }) => {
  const { isFavorite, toggleFavorite } = useFavoritesContext();
  const fav = isFavorite(kuliner.id);
  const [showHistory, setShowHistory] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(232,93,4,0.15)" }}
      className="bg-white rounded-2xl overflow-hidden border border-orange-100"
    >
      {/* Gambar */}
      <div
        className="relative h-44 overflow-hidden cursor-pointer"
        onClick={() => onClick && onClick(kuliner)}
      >
        <img
          src={kuliner.image}
          alt={kuliner.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            {kuliner.category}
          </span>
        </div>
        {kuliner.isUmkm && (
          <div className="absolute top-3 right-10">
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              UMKM
            </span>
          </div>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(kuliner.id);
          }}
          className="absolute top-3 right-3 bg-white/90 rounded-full p-1.5"
        >
          <Heart
            size={14}
            fill={fav ? "#ef4444" : "none"}
            className={fav ? "text-red-500" : "text-gray-400"}
          />
        </button>
      </div>

      {/* Konten */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 leading-tight mb-1">
          {kuliner.name}
        </h3>

        <div className="flex items-center gap-1 mb-2">
          <Star size={13} className="text-amber-400 fill-amber-400" />
          <span className="text-sm font-semibold text-gray-800">
            {kuliner.rating}
          </span>
          <span className="text-xs text-gray-400">
            ({kuliner.reviews} ulasan)
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
          <MapPin size={11} />
          <span>{kuliner.district}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-500 text-xs mb-3">
          <Clock size={11} />
          <span>
            {kuliner.hours.open} - {kuliner.hours.close}
          </span>
        </div>

        {/* Produk unggulan */}
        <div className="flex flex-wrap gap-1 mb-3">
          {kuliner.specialties.slice(0, 2).map((s) => (
            <span
              key={s}
              className="bg-orange-50 text-orange-700 text-xs px-2 py-0.5 rounded-full"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Fun fact */}
        <div className="bg-amber-50 rounded-xl p-2 mb-3">
          <p className="text-xs text-amber-800 italic">💡 {kuliner.funFact}</p>
        </div>

        {/* Tombol Cerita Sejarah */}
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="w-full flex items-center justify-between text-xs font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 px-3 py-2 rounded-xl transition-colors"
        >
          <span className="flex items-center gap-1">
            <BookOpen size={12} />
            Cerita Sejarah
          </span>
          <motion.div
            animate={{ rotate: showHistory ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={12} />
          </motion.div>
        </button>

        {/* Isi Cerita Sejarah */}
        <AnimatePresence>
          {showHistory && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-2 p-3 bg-orange-50 rounded-xl border border-orange-100">
                <p className="text-xs text-gray-700 leading-relaxed">
                  {kuliner.history}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default UMKMCard;
