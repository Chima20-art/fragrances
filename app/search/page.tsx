import Header from "@/components/Header";
import { NextUIProvider } from "@nextui-org/react";
import { NavBar } from "@/components/navBar";
import HomeCatalogue from "@/components/HomeCatalogue";
import BestSellers from "@/components/BestSellers";
import { sanityClient, urlForImage } from "../sanity/client";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Search({
  params,
  searchParams,
}: {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let search = searchParams["search"] as string;

  if (!search && search == "") {
    redirect("/");
  }

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
    query: `*[_type == 'products' && title match "*${search}*"]
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
          <div className="pb-40 my-8 z-0 mx-auto max-lg:px-4">
            <div className="text-gray-700 uppercase font-bold text-xl py-2 mb-8 text-center relative">
              Search
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-primary h-[3px] w-20"></span>
            </div>

            <div className="products grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4 gap-3">
              {products.map((product: any) => (
                <Link key={product._id} href={`/produits/${product._id}`}>
                  <div className="border border-gray-300 rounded-md flex flex-col min-h-[350px] cursor-pointer h-full">
                    <div className="image pb-3 h-3/4 bg-secondary">
                      <img
                        src={urlForImage(product.image)}
                        alt={product.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="h-1/4 flex items-center flex-col px-3 py-2">
                      <h2 className="text-primary font-bold text-center">
                        {product.title}
                      </h2>
                      <div className="flex justify-center">
                        {product.oldprice && (
                          <span className="old-price text-sm line-through text-gray-400 mr-2">
                            {product.oldprice}dh
                          </span>
                        )}
                        <span className="current-price text-sm font-bold">
                          {product.price}dh
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}
