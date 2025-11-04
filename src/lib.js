/**
 * @param {string} filterText
 * @param {boolean} inStockOnly
 * @param {number} maxPrice
 * @param {number} maxProductPrice
 * @returns {string}
 */
export const generateEmptyProductMessage = ({
  filterText,
  inStockOnly,
  maxFilterPrice,
  maxProductPrice,
}) => {
  const conditions = [
    filterText && `matching "${filterText}"`,
    inStockOnly && "in stock",
    maxFilterPrice < maxProductPrice && `under $${maxFilterPrice}`,
  ].filter(Boolean);

  if (!conditions.length) return "No products found";
  if (conditions.length === 1) return `No products ${conditions[0]}`;

  return `No products ${conditions.slice(0, -1).join(", ")} and ${
    conditions[conditions.length - 1]
  }`;
};

export const parsePrice = (priceString) => Number(priceString.replace("$", ""));
