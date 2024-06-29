import { urlForImage } from "@/app/sanity/client";
import HomeSwiper from "@/components/HomeSwiper";
import Link from "next/link";

export default function HomeCatalogue({
  websiteSettings,
}: {
  websiteSettings: any;
}) {
  return (
    <div className="flex flex-col m-auto p-4">
      <HomeSwiper slider={websiteSettings?.slider ?? []} />
      <div className="collections flex flex-row  sm:items-stretch h-full gap-4">
        {websiteSettings?.featuredCollection
          ?.slice(0, 2)
          .map((collection: any, index: any) => {
            return (
              <Link key={collection._id} href={`/collections/${collection?._id}`} className="flex min-h-full flex-1 bg-secondary">
                <div className="w-1/2 flex flex-col justify-center p-6">
                  <p className="font-semibold mb-2 uppercase text-[8px] lg:text-xs text-primary">
                    {collection.subtitle}
                  </p>
                  <h1 className="text-base font-semibold capitalize lg:text-xl text-sm mb-3">
                    {" "}
                    {collection.title}
                  </h1>
                  <Link
                    href={`/collections/${collection._id}`}
                    className="underline font-bold text-xs mt-6"
                  >
                    Shop Now
                  </Link>
                </div>
                <div className="w-1/2 flex justify-center items-center p-4">
                  <img
                    src={urlForImage(collection.image)}
                    alt="Descriptive Alt Text"
                    className="w-full max-h-[250px] object-contain"
                  />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
