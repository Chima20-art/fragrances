"use client";

import { createContext, useEffect, useState } from "react";
import { sanityClient } from "./sanity/client";
import { CardItemsContext } from "@/components/CardItemsContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    async function getCartItems() {
      const cartItemsString = localStorage.getItem("cartItems");
      if (cartItemsString) {
        //setCartItems(JSON.parse(cartItems));
        let cartItems = JSON.parse(cartItemsString);
        console.log("cartItems", cartItems);

        let productsIds = cartItems.map((item: any) => item.product._id);
        console.log("productsIds ", productsIds);
        let products: any[] = await sanityClient.fetch({
          query: `*[_type == 'products' && _id in productsIds]`,
          params: {
            productsIds: productsIds,
          },
          config: {
            next: {
              revalidate: process.env.NODE_ENV === "development" ? 1 : 60,
            },
          },
        });

        let newCartItems = cartItems.map((item: any) => {
          let product = products.find(
            (product: any) => product.id === item.product.productId
          );
          return { product, quantity: item.quantity };
        });

        console.log("newCartItems", newCartItems);
      }
    }

    getCartItems();
  }, []);

  const handleAddToCart = (product: any, quantity: number) => {
    let item = cartItems.find((item: any) => item._id === product._id);
    if (item) {
      item.quantity += quantity;
      setCartItems([...cartItems]);
      localStorage.setItem("cartItems", JSON.stringify([...cartItems]));
    } else {
      setCartItems([...cartItems, { product, quantity }]);
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...cartItems, { product, quantity }])
      );
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    let newCartItems = cartItems.filter((item: any) => item._id !== productId);
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  return (
    <CardItemsContext.Provider
      value={{
        cartItems: cartItems,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CardItemsContext.Provider>
  );
}
