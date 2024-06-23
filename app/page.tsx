import Header from "@/components/Header";
import { NextUIProvider } from "@nextui-org/react";
import { NavBar } from "@/components/navBar";
import HomeCatalogue from "@/components/HomeCatalogue";
import BestSellers from "@/components/BestSellers";
import { sanityClient } from "./sanity/client";
import Footer from "@/components/footer";

export default async function Home() {
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

  let productsPromise = sanityClient.fetch({
    query: `*[_type == 'products']
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
    }
    `,
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
    }`,
    config: {
      cache: "no-cache",
    },
  });

  let [websiteSettings, products, collections]: [any, any, any] =
    await Promise.all([
      websiteSettingsPromise,
      productsPromise,
      collectionsPromise,
    ]);

  console.log("products", products);

  return (
    <NextUIProvider>
      <div className="bg-white overflow-hidden">
        <div className="fixed top-0 z-40 w-full">
          <Header websiteSettings={websiteSettings} />
          <NavBar collections={collections} />
        </div>
        <div className="lg:w-[54vw] mx-auto lg:pt-48 pt-24">
          <HomeCatalogue websiteSettings={websiteSettings} />
          <BestSellers products={products} />
        </div>
      </div>
    </NextUIProvider>
  );
}
