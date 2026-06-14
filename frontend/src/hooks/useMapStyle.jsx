import { useState } from "react";

export const MAP_STYLES = {
  light: {
    name: "Terang",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "© OpenStreetMap contributors",
  },
  dark: {
    name: "Gelap",
    url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
    attribution: "© Stadia Maps © OpenStreetMap contributors",
  },
  satellite: {
    name: "Satelit",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "© Esri © OpenStreetMap contributors",
  },
};

export const useMapStyle = () => {
  const [style, setStyle] = useState("light");

  return {
    style,
    setStyle,
    currentStyle: MAP_STYLES[style],
    MAP_STYLES,
  };
};
