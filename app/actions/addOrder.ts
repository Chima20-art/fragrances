"use server";

import { sanityAdminClient } from "../sanity/adminClient";
import { sanityClient } from "../sanity/client";
import { uid } from "uid";

export async function addOrder({
  cartItems,
  name,
  phone,
  email,
  city,
  address,
}: {
  cartItems: {
    product: any;
    quantity: number;
  }[];
  name: string;
  phone: string;
  email: string;
  city: string;
  address: string;
}) {
  try {
    let productsIds = cartItems.map((item: any) => item.product._id);
    console.log("productsIds ", productsIds);
    let products: any[] = await sanityClient.fetch({
      query: `*[_type == 'products' && _id in $productsIds]`,
      params: {
        productsIds: productsIds,
      },
      config: {
        next: {
          revalidate: process.env.NODE_ENV === "development" ? 1 : 60,
        },
      },
    });

    let confirmedCartItems = cartItems.map((item: any) => {
      let product = products.find(
        (product: any) => product._id === item.product._id
      );

      if (!product) return null;

      return { product, quantity: item.quantity };
    });

    confirmedCartItems = confirmedCartItems.filter(
      (item: any) => item !== null
    );

    // let order = await sanityClient.console.log(
    //   "confirmedCartItems",
    //   confirmedCartItems
    // );

    let order = await sanityAdminClient.create({
      _type: "orders",
      products: confirmedCartItems.map((item: any) => ({
        _key: uid(32),
        product: {
          _type: "reference",
          _ref: item.product._id,
        },
        quantity: item.quantity,
      })),
      name,
      phone,
      email,
      city,
      address,
      status: "pending",
      total: confirmedCartItems.reduce(
        (acc: number, item: any) => acc + item.product.price * item.quantity,
        0
      ),
    });

    return {
      status: true,
      message: "Order added successfully",
    };
  } catch (error: any) {
    console.error("addOrder ", error.message);
    return {
      status: false,
      message: error.message,
    };
  }
}
