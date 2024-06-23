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
        let productsIds = cartItems.map((item: any) => item.productId);
        console.log("productsIds ", productsIds);
        let products = await sanityClient.fetch({
          query: `*[_type == 'products' && id in [${productsIds.join(",")}]]`,
          config: {
            next: {
              revalidate: process.env.NODE_ENV === "development" ? 1 : 60,
            },
          },
        });

        setCartItems(products as any);
      }
    }

    getCartItems();

    return () => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };
  }, []);

  return (
    <CardItemsContext.Provider
      value={{
        cartItems: cartItems,
        setCartItems: setCartItems,
      }}
    >
      {children}
    </CardItemsContext.Provider>
  );
}
