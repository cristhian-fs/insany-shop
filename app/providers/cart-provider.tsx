"use client";
import { createContext } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";
import type { Product } from "../types/api";
import type { TLocalStorage } from "../types/local-storage";

type CartState = {
  cart: TLocalStorage;
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
  updateProductAmount: (productId: number, amount: number) => void;
};

const initialCart: TLocalStorage = {
  products: [],
  subtotal: 0,
  delivery: 40,
  total: 0,
};

export const CartContext = createContext<CartState>({
  addProduct: () => {},
  cart: initialCart,
  removeProduct: () => {},
  updateProductAmount: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useLocalStorage<TLocalStorage>(
    "insanyshop-cristhianfs",
    initialCart,
  );
  const addProduct = (product: Product) => {
    const updatedProducts = [...cart.products];

    const existingIndex = updatedProducts.findIndex((p) => p.id === product.id);
    if (existingIndex >= 0) {
      updatedProducts[existingIndex] = {
        ...updatedProducts[existingIndex],
        amount: updatedProducts[existingIndex].amount + 1,
      };
    } else {
      updatedProducts.push({ ...product, amount: 1 });
    }

    const subtotal = updatedProducts.reduce(
      (acc, p) => acc + p.price * p.amount,
      0,
    );

    const delivery = cart.delivery;

    const total = subtotal + delivery;

    const newCart = {
      ...cart,
      products: updatedProducts,
      subtotal,
      delivery,
      total,
    };

    setCart(newCart);
  };

  const removeProduct = (productId: number) => {
    const updatedProducts = cart.products.filter((p) => p.id !== productId);

    const subtotal = updatedProducts.reduce(
      (acc, p) => acc + p.price * p.amount,
      0,
    );

    const delivery = updatedProducts.length === 0 ? 0 : cart.delivery;

    const total = subtotal + delivery;

    const newCart = {
      ...cart,
      products: updatedProducts,
      subtotal,
      delivery,
      total,
    };

    setCart(newCart);
  };

  const updateProductAmount = (productId: number, amount: number) => {
    const updatedProducts = cart.products.map((p) => {
      if (p.id === productId) {
        return { ...p, amount };
      }
      return p;
    });

    const subtotal = updatedProducts.reduce(
      (acc, p) => acc + p.price * p.amount,
      0,
    );

    const delivery = cart.delivery;

    const total = subtotal + delivery;

    const newCart = {
      ...cart,
      products: updatedProducts,
      subtotal,
      delivery,
      total,
    };

    setCart(newCart);
  };

  const value: CartState = {
    cart,
    addProduct,
    removeProduct,
    updateProductAmount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
