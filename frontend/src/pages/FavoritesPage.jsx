import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useFavoritesContext } from "../context/FavoritesContext";
import { kulinerData } from "../data/UMKMData";
import KulinerCard from "../components/umkm/UMKMCard";

const FavoritesPage = () => {
  const { favorites } = useFavoritesContext();
  const favItems = kulinerData.filter((k) => favorites.includes(k.id));

  return (
    <div className="min-h-screen pt-20 px-6 bg-amber-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
            <Heart className="text-red-500 fill-red-500" size={32} />
            UMKM Favorit Saya
          </h1>
          <p className="text-gray-500 mt-1">{favItems.length} UMKM tersimpan</p>
        </motion.div>

        {favItems.length === 0 ? (
          <div className="text-center py-20">
            <Heart size={60} className="text-gray-200 mx-auto mb-4" />
            <h3 className="text-2xl text-gray-400 mb-2">Belum ada favorit</h3>
            <p className="text-gray-400 mb-6">
              Tap ikon hati pada UMKM yang kamu suka
            </p>
            <Link
              to="/map"
              className="bg-orange-500 text-white px-6 py-3 rounded-2xl font-medium hover:bg-orange-600"
            >
              Jelajahi UMKM
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favItems.map((k, i) => (
              <motion.div
                key={k.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <KulinerCard kuliner={k} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
