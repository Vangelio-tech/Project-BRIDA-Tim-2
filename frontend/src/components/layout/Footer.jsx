import { Heart, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-amber-900 text-amber-100 py-10 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <UtensilsCrossed size={20} className="text-orange-400" />
          <span className="font-bold text-xl text-white">KulinerKubar</span>
        </div>
        <p className="text-sm text-amber-200">
          Platform pencarian kuliner UMKM lokal Kutai Barat untuk mendukung
          perekonomian daerah.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-white mb-3">Navigasi</h4>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Beranda", "/"],
            ["Peta Kuliner", "/map"],
            ["Kategori", "/categories"],
            ["UMKM", "/umkm"],
            ["Favorit", "/favorites"],
          ].map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className="text-amber-200 hover:text-orange-400 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-white mb-3">Tentang</h4>
        <p className="text-sm text-amber-200">
          Dibuat dengan <Heart size={12} className="inline text-red-400" />{" "}
          untuk mendukung UMKM Kutai Barat, Kalimantan Timur.
        </p>
      </div>
    </div>

    <div className="mt-8 pt-6 border-t border-amber-800 text-center text-xs text-amber-300">
      © 2024 KulinerKubar. Mendukung Ekonomi Lokal Kutai Barat.
    </div>
  </footer>
);

export default Footer;
