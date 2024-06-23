import Header from "@/components/Header";
import { NavBar } from "@/components/navBar";
import Footer from "@/components/footer";
import { sanityClient } from "../sanity/client";
import OrderProductsList from "@/components/orderProductsList";

export default async function Order() {
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

  return (
    <div className="bg-white overflow-hidden ">
      <div className="fixed top-0 z-[1000] w-full">
        <Header websiteSettings={websiteSettings} />
        <NavBar collections={collections} />
      </div>

      <OrderProductsList />
      <Footer />
    </div>
  );
}
