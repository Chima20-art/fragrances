import Header from "@/components/Header";
import { sanityClient, urlForImage } from "../sanity/client";
import { NavBar } from "@/components/navBar";
import Link from "next/link";
import Footer from "@/components/footer";

export default async function Collections() {
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

  let [websiteSettings, collections]: [any, any] = await Promise.all([
    websiteSettingsPromise,
    collectionsPromise,
  ]);

  console.log("collections ", collections);

  return (
    <div className="bg-white overflow-hidden">
      <div className="fixed top-0 z-[1000] w-full">
        <Header websiteSettings={websiteSettings} />
        <NavBar collections={collections} />
      </div>
      <div className="body">
        <div className="text-gray-700 uppercase font-bold text-xl py-2 mb-8 text-center relative lg:pt-60 pt-40">
          Nos Collections
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-primary h-[3px] w-20"></span>
        </div>
        <div className="flex  max-w-[1200px] m-auto">
          <div className="collections grid grid-cols-2 lg:grid-cols-3  lg:gap-4 gap-3">
            {collections.map((collection: any) => {
              return (
                <Link
                  href={`/collections/${collection._id}`}
                  className="flex lg:min-h-[280px] min-h-[220px]  h-full flex-1 bg-secondary cursor-pointer"
                >
                  <div className="w-1/2 flex flex-col justify-center p-6">
                    <p className="font-semibold mb-2 uppercase text-[8px] lg:text-xs text-primary">
                      {collection.subtitle}
                    </p>
                    <h1 className="text-base font-semibold capitalize lg:text-xl text-sm mb-3">
                      {" "}
                      {collection.title}
                    </h1>
                  </div>
                  <div className="w-1/2 flex justify-center items-center p-4">
                    <img
                      src={urlForImage(collection.image)}
                      alt="Descriptive Alt Text"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
