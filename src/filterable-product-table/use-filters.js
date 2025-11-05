import { useState } from "react";

import { MAX_PRODUCT_PRICE } from "../constants";

export default function useFilters() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("category");
  const [maxFilterPrice, setMaxFilterPrice] = useState(MAX_PRODUCT_PRICE);

  const clearFilters = () => {
    setFilterText("");
    setInStockOnly(false);
    setSortBy("category");
    setMaxFilterPrice(MAX_PRODUCT_PRICE);
  };

  return {
    filterText,
    inStockOnly,
    sortBy,
    maxFilterPrice,
    setFilterText,
    setInStockOnly,
    setSortBy,
    setMaxFilterPrice,
    clearFilters,
  };
}
