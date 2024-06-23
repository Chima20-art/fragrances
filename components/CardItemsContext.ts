import { createContext } from "react";

export const CardItemsContext = createContext<{
  cartItems: any[];
  setCartItems: (cartItems: any[]) => void;
}>({
  cartItems: [],
  setCartItems: () => {},
});
