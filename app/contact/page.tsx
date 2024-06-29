import Header from "@/components/Header";

import {NavBar} from "@/components/navBar";
import {GoChevronRight} from "react-icons/go";
import Link from "next/link";
import Footer from "@/components/footer";
import {sanityClient} from "../sanity/client";
import ContactForm from "@/components/contactForm";

export default async function Contact() {
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
        <div className="bg-white min-h-[100vh] flex flex-col justify-between bg-red-300">
            <div className="fixed top-0 z-[1000] w-full">s
                <Header websiteSettings={websiteSettings}/>
                <NavBar collections={collections}  selectedTab={'/contact'}/>
            </div>
            <div className="flex items-center lg:mt-60 mt-40 p-4 max-w-[1200px] mx-auto">
                <Link href="/">Accueil</Link>
                <GoChevronRight/>
                <Link href={"/contact"} className="font-bold">
                    Contact
                </Link>
            </div>
            <div
                className="grid md:grid-cols-2 items-start gap-16 lg:p-8 p-4 mx-auto max-w-4xl bg-white font-[sans-serif] shadow-lg">
                <div>
                    <h1 className="text-gray-800 text-xl  font-medium">
                        Comment pouvons-nous vous aidez ?
                    </h1>
                    <div className="text-sm text-gray-500 mt-4">
                        <p className="text-green-700 font-bold">
                            Contactez Téléphone VIA <span> WhatsApp:</span>
                        </p>
                        <p>
                            {websiteSettings.title}: {websiteSettings.contactPhone}
                        </p>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-gray-800 text-base font-bold">Email</h2>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <div
                                    className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        fill="##00011"
                                        viewBox="0 0 479.058 479.058"
                                    >
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                </div>
                                <div className="text-[#00011] text-sm ml-4">
                                    <strong>{websiteSettings.email}</strong>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-gray-800 text-base font-bold">Socials</h2>
                        <ul className="flex mt-4 space-x-4">
                            {
                                websiteSettings.tiktok &&
                                <li className="tiktok bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <Link href={websiteSettings.tiktok}>
                                        <img src="/tiktok.svg" alt="tiktok" className="w-4 h-6"/>
                                    </Link>
                                </li>
                            }
                            {
                                websiteSettings.instagram &&
                                <li className="instagram bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <Link href={websiteSettings.instagram}>
                                        <img src="/insta.svg" alt='insta'/>
                                    </Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>

                <ContactForm/>
            </div>

            <Footer/>
        </div>
    );
}
