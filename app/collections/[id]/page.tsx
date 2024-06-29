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
    tiktok,
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

  let collectionId = params.id ;

  let selectedCollectionPromise = sanityClient.fetch({
    query: `*[_type == 'collections' && _id == "${collectionId}"][0]{
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
  console.log('selectedCollection', selectedCollection)
  return (
    <div className="bg-white overflow-hidden flex flex-col min-h-screen">
      <div className="fixed top-0 z-[1000] w-full">
        <Header websiteSettings={websiteSettings} />
        <NavBar collections={collections}  selectedTab={'/collections'}/>
      </div>
      <div className="flex-1 lg:mt-60 mt-40 mx-auto max-w-[1200px] max-lg:p-4">
        <div className="flex items-center">
          <Link href={"/"}>Accueil</Link>
          <GoChevronRight />
          <Link href={"/collections"}>Collections</Link>
          <GoChevronRight />
          <span className="collection-title ">{selectedCollection.title}</span>
        </div>
        <div className="products grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4 gap-3 pt-10">
          {products.map((product: any) => (
            <Link key={product._id} href={`/produits/${product._id}`}>
              <div className="border border-gray-300 rounded-md flex flex-col cursor-pointer min-h-[700px] h-full">
                <div className="image pb-3 h-2/3 h-full bg-secondary  group overflow-hidden">
                <img
                      src={urlForImage(product.image)}
                    alt={product.title}
                      className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="h-1/3 flex items-center flex-col px-3 py-2">
                  <h2 className="text-primary font-bold text-center h-full pb-4" >
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
      <Footer websiteSettings={websiteSettings}/>
    </div>
  );
}
