import { createContext } from "react";

export const CardItemsContext = createContext<{
  cartItems: any[];
  handleAddToCart: (product: any, quantity: number) => void;
  handleRemoveFromCart: (productId: string) => void;
}>({
  cartItems: [],
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
});
