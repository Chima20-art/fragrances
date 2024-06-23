import { sanityClient, urlForImage } from "@/app/sanity/client";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import { NavBar } from "@/components/navBar";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

export default async function Collection({
  params,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
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

  let collectionId = decodeURIComponent(params.id ?? ""); // This is the collection title but it has %20 instead of spaces can you parse it

  let selectedCollectionPromise = sanityClient.fetch({
    query: `*[_type == 'collections' && id == "${collectionId}"][0]{
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

  let productsPromise = sanityClient.fetch({
    query: `*[_type == 'products' && references("${collectionId}") ]
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
    }
    `,
    config: {
      cache: "no-cache",
    },
  });

  let [websiteSettings, selectedCollection, products, collections]: [
    any,
    any,
    any,
    any
  ] = await Promise.all([
    websiteSettingsPromise,
    selectedCollectionPromise,
    productsPromise,
    collectionsPromise,
  ]);

  return (
    <div className="bg-white overflow-hidden flex flex-col min-h-screen">
      <div className="fixed top-0 z-[1000] w-full">
        <Header websiteSettings={websiteSettings} />
        <NavBar collections={collections} />
      </div>
      <div className="flex-1 lg:mt-60 mt-40 mx-auto max-w-[1200px] max-lg:p-4">
        <div className="flex items-center">
          <Link href={"/"}>Accueil</Link>
          <GoChevronRight />
          <Link href={"/collections"}>Collections</Link>
          <GoChevronRight />
          <span className="collection-title">{selectedCollection?.title}</span>
        </div>
        <div className="products grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4 gap-3 pt-10">
          {products.map((product: any) => (
            <Link key={product._id} href={`/produits/${product._id}`}>
              <div className="border border-gray-300 rounded-md flex flex-col cursor-pointer min-h-[600px] h-full">
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
      <Footer />
    </div>
  );
}
