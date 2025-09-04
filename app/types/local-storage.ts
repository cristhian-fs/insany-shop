import type { Product } from "./api";

export type TLocalStorage = {
  products: Array<Product & { amount: number }>;
  subtotal: number;
  delivery: number;
  total: number;
};
