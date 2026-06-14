import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const icons = {
  light: Sun,
  dark: Moon,
  satellite: () => <span className="text-xs">🛰</span>,
};

const MapStyleSwitcher = ({ style, setStyle, MAP_STYLES }) => (
  <div className="absolute top-4 right-4 z-[1000] bg-white/95 backdrop-blur rounded-xl shadow-lg p-1 flex gap-1">
    {Object.entries(MAP_STYLES).map(([key, val]) => {
      const Icon = icons[key];
      return (
        <motion.button
          key={key}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setStyle(key)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors ${
            style === key
              ? "bg-orange-500 text-white"
              : "text-gray-600 hover:bg-orange-50"
          }`}
        >
          <Icon size={12} />
          {val.name}
        </motion.button>
      );
    })}
  </div>
);

export default MapStyleSwitcher;
