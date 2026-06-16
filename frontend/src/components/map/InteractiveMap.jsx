import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useMapStyle } from "../../hooks/useMapStyle";
import { useFavoritesContext } from "../../context/FavoritesContext";
import { kulinerData } from "../../data/UMKMData";
import MapStyleSwitcher from "./MapStyleSwitcher";

const foodEmojis = {
  "Warung Makan": "🍛",
  "Cafe & Kopi": "☕",
  Seafood: "🦐",
  "Tradisional Kalimantan": "🌿",
  "Street Food": "🥢",
  "Desserts & Snacks": "🍌",
};

const InteractiveMap = ({ filteredData }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const { style, setStyle, currentStyle, MAP_STYLES } = useMapStyle();
  const { isFavorite, toggleFavorite } = useFavoritesContext();
  const data = filteredData || kulinerData;

  useEffect(() => {
    if (mapInstanceRef.current) return;

    mapInstanceRef.current = L.map(mapRef.current).setView([-0.5, 115.5], 10);

    L.tileLayer(currentStyle.url, {
      attribution: currentStyle.attribution,
    }).addTo(mapInstanceRef.current);

    data.forEach((k) => {
      const emoji = foodEmojis[k.category] || "🍽️";
      const icon = L.divIcon({
        html: `<div style="background:#E85D04;border-radius:50% 50% 50% 0;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;transform:rotate(-45deg);box-shadow:0 3px 10px rgba(232,93,4,0.4)">
          <span style="transform:rotate(45deg)">${emoji}</span>
        </div>`,
        className: "",
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -36],
      });

      const marker = L.marker([k.lat, k.lng], { icon });
      marker.bindPopup(`
        <div style="min-width:220px;padding:4px">
          <img src="${k.image}" style="width:100%;height:100px;object-fit:cover;border-radius:8px;margin-bottom:8px"/>
          <b style="font-size:13px">${k.name}</b>
          <div style="color:#f97316;font-size:12px;margin-top:2px">⭐ ${k.rating} (${k.reviews} ulasan)</div>
          <div style="font-size:11px;color:#666;margin-top:4px">📍 ${k.address}</div>
          <div style="font-size:11px;color:#666">🕐 ${k.hours.open} - ${k.hours.close}</div>
          <div style="font-size:11px;color:#666">📞 ${k.phone}</div>
          <div style="color:#ea580c;font-weight:600;font-size:12px;margin-top:4px">${k.priceRange}</div>
          <div style="background:#fff7ed;padding:6px;border-radius:6px;margin-top:6px;font-size:11px;color:#c2410c">💡 ${k.funFact}</div>
        </div>
      `);
      marker.addTo(mapInstanceRef.current);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) {
        mapInstanceRef.current.removeLayer(layer);
      }
    });
    L.tileLayer(currentStyle.url, {
      attribution: currentStyle.attribution,
    }).addTo(mapInstanceRef.current);
  }, [style]);

  return (
    <div className="relative w-full h-full">
      <MapStyleSwitcher
        style={style}
        setStyle={setStyle}
        MAP_STYLES={MAP_STYLES}
      />
      <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default InteractiveMap;
