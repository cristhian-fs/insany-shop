import type { Products } from "../types/api";

export type SortOption =
  | "newest"
  | "price-high-low"
  | "price-low-high"
  | "best-selling";

export const sortProducts = (products: Products, sortBy: SortOption) => {
  const sortedProducts = [...products];

  switch (sortBy) {
    case "best-selling":
      // Limitation: API does not return best selling products, so I'll sort by rating
      return sortedProducts.sort((a, b) => b.rating - a.rating);

    case "newest":
      // Limitation: API does not return some kind of createdAt field, so I'll sort by id
      return sortedProducts.sort((a, b) => b.id - a.id);

    case "price-high-low":
      return sortedProducts.sort((a, b) => b.price - a.price);

    case "price-low-high":
      return sortedProducts.sort((a, b) => a.price - b.price);

    default:
      return sortedProducts;
  }
};
