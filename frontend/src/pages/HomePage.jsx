import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, ChevronDown, Heart } from "lucide-react";
import { kulinerData, categories } from "../data/UMKMData";
import KulinerCard from "../components/umkm/UMKMCard";

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  emoji: ["🧺", "🧵", "⚔️", "💎", "🪵", "🍘", "🏺", "🪡"][i % 8],
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: 3 + Math.random() * 4,
  delay: Math.random() * 2,
  size: 16 + Math.random() * 20,
}));

const HomePage = () => {
  const navigate = useNavigate();
  const featured = kulinerData.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-orange-800 to-orange-600">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute select-none pointer-events-none opacity-20"
            style={{ left: `${p.x}%`, top: `${p.y}%`, fontSize: p.size }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {p.emoji}
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white text-sm px-4 py-2 rounded-full mb-6"
          >
            <MapPin size={14} className="text-amber-300" />
            Kutai Barat, Kalimantan Timur
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4"
          >
            Temukan UMKM <span className="text-amber-300">Kutai Barat</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-orange-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Jelajahi produk UMKM lokal — dari anyaman anjat, tenun doyo, hingga
            ukiran khas Kutai Barat
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(250,163,7,0.4)",
                  "0 0 0 15px rgba(250,163,7,0)",
                  "0 0 0 0 rgba(250,163,7,0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Link
                to="/map"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold px-8 py-4 rounded-2xl text-lg transition-colors"
              >
                <MapPin size={20} />
                Jelajahi Peta
              </Link>
            </motion.div>
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-4 rounded-2xl text-lg backdrop-blur transition-colors"
            >
              Lihat Kategori
            </Link>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "UMKM Terdaftar", value: "200+" },
            { label: "Produk Lokal", value: "500+" },
            { label: "Kecamatan", value: "16" },
            { label: "Pengrajin Aktif", value: "150+" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white">{s.value}</div>
              <div className="text-orange-200 text-sm mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-gray-900 mb-10"
          >
            Jelajahi Berdasarkan Kategori Produk
          </motion.h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {categories.slice(1).map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => navigate(`/categories?cat=${cat.id}`)}
                className="bg-white rounded-2xl p-4 text-center cursor-pointer shadow-sm hover:shadow-md border border-orange-100 transition-shadow"
              >
                <div className="text-3xl mb-2">{cat.icon}</div>
                <div className="text-xs font-medium text-gray-700">
                  {cat.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold text-gray-900"
            >
              UMKM Unggulan
            </motion.h2>
            <Link
              to="/map"
              className="text-orange-500 hover:text-orange-600 font-medium text-sm flex items-center gap-1"
            >
              <MapPin size={14} /> Lihat di Peta
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((k, i) => (
              <motion.div
                key={k.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <KulinerCard
                  kuliner={k}
                  onClick={() => navigate(`/kuliner/${k.id}`)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-600 to-amber-500">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Punya Usaha UMKM?
          </motion.h2>
          <p className="text-orange-100 mb-6">
            Daftarkan usaha UMKM kamu dan jangkau lebih banyak pelanggan di
            Kutai Barat
          </p>
          <Link
            to="/umkm"
            className="inline-block bg-white text-orange-600 font-bold px-8 py-3 rounded-2xl hover:bg-orange-50 transition-colors"
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
