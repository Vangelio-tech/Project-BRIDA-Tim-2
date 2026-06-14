import { useState, useMemo } from "react";
import { kulinerData } from "../data/kulinerData";

export const useSearch = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [district, setDistrict] = useState("Semua");

  const results = useMemo(() => {
    return kulinerData.filter((item) => {
      const matchQuery =
        !query ||
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.specialties.some((s) =>
          s.toLowerCase().includes(query.toLowerCase()),
        );
      const matchCategory = category === "all" || item.category === category;
      const matchDistrict = district === "Semua" || item.district === district;
      return matchQuery && matchCategory && matchDistrict;
    });
  }, [query, category, district]);

  return {
    query,
    setQuery,
    category,
    setCategory,
    district,
    setDistrict,
    results,
  };
};
