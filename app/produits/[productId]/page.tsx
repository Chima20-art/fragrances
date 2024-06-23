import { sanityClient } from "@/app/sanity/client";
import Header from "@/components/Header";

import Product from "@/components/productPage";
import { NavBar } from "@/components/navBar";
import {
  Button,
  Accordion,
  AccordionItem,
  ScrollShadow,
} from "@nextui-org/react";
import { useState } from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import Footer from "@/components/footer";

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let productId = decodeURIComponent(params.productId ?? "");
  console.log("productId", productId);

  let websiteSettingsPromise = sanityClient.fetch({
    query: `*[_type == 'siteSettings'][0]
    {
    websiteHeaderBanner,
    featuredCollection[]->,
    _updatedAt,
    description,
    _id,
    _type,
    slider,
    title,
    image,
    _createdAt,
    instagram,
    facebook,
    contactEmail,
    contactPhone
    }
    `,
    config: {
      next: {
        revalidate: process.env.NODE_ENV === "development" ? 1 : 60,
      },
    },
  });

  let productPromise = sanityClient.fetch({
    query: `*[_type == 'products' && _id == "${productId}"][0]
    {
    _createdAt,
    image,
    extraImages,
    collections[]->,
    _updatedAt,
    _id,
    _type,
    title,
    price,
    oldprice,
    description,
    }`,
    config: {
      cache: "no-cache",
    },
  });

  let collectionsPromise = sanityClient.fetch({
    query: `*[_type == 'collections']
    {
    image,
    title,
    _updatedAt,
    price,
    subtitle,
    _id,
    _type,
    _createdAt
    }
    `,
    config: {
      cache: "no-cache",
    },
  });

  let [websiteSettings, product, collections]: [any, any, any] =
    await Promise.all([
      websiteSettingsPromise,
      productPromise,
      collectionsPromise,
    ]);

  console.log("product", product);

  return (
    <div className="bg-white overflow-hidden">
      <div className="fixed top-0 z-40  w-full">
        <Header websiteSettings={websiteSettings} />
        <NavBar collections={collections} />
      </div>
      <Product product={product} />
      <Footer />
    </div>
  );
}
