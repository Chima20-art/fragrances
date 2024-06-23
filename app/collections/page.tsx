import Header from "@/components/Header";
import { NavBar } from "@/components/navBar";
import { sanityClient } from "../sanity/client";

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
    _createdAt
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

  return (
    <div className="bg-white overflow-hidden">
      <div className="fixed top-0 z-40  w-full">
        <Header websiteSettings={websiteSettings} />
        <NavBar collections={collections} />
      </div>
      <div className="flex  max-w-[1200px] m-auto pt-60">
        <div className="collections grid grid-cols-2 lg:grid-cols-3  lg:gap-4 gap-3">
          {/* {COLLECTIONS.map((collection) => {
            return (
              <div className="flex h-full flex-1 bg-secondary cursor-pointer">
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
                    src={collection.imageSrc}
                    alt="Descriptive Alt Text"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}
