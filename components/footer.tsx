"use client";

import React from "react";
import {Link, Spacer} from "@nextui-org/react";

import {AcmeIcon} from "@/components/social";
import {urlForImage} from "@/app/sanity/client";




const navLinks = [  {
    name: "Accueil",
    href: "/",
},
    {
        name: "Collections",
        href: "/collections",
    },
    {
        name: "Contact",
        href: "/contact",
    },
    {
        name: "blog",
        href: "",
    },

];



export default function Footer({websiteSettings}:{websiteSettings:any}) {

    const phoneNumber = '212675255685';
    const defaultMessage = "Bonjour, je suis intéressé par vos parfums.";


    const handleClick = () => {
        const encodedMessage = encodeURIComponent(defaultMessage);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };
    const socialItems = [  {
        name: "Tiktok",
        href: websiteSettings?.tiktok,
        icon: (props) => <img src="/tiktok.svg" alt="tiktok" className="w-4 h-6"/>,
    },
        {
            name: "Instagram",
            href: websiteSettings?.instagram,
        icon:
    (props) => <img src="/insta.svg" alt='insta'/>,
},
    {
        name: "Whatsapp",
            href: "#",
        icon: (props) => <div onClick={handleClick}>
            <img src="/whatsapp.svg" alt='insta'/>
        </div>,
    },

    ];
    return (
        <div className="flex w-full flex-col bg-secondary mt-20  bottom-0 ">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-12 lg:px-8">
                <div className="flex items-center justify-center">
                    {websiteSettings?.image &&
                        <img src={urlForImage(websiteSettings.image)} alt={websiteSettings.title} className='h-16'/>}
                </div>
                <Spacer y={4}/>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                    {navLinks.map((item) => (
                         <Link
                                key={item.name}
                                isExternal
                                className="text-default-500"
                                href={item.href}
                                size="sm"
                            >
                                {item.name}
                            </Link>
                    ))}
                </div>
                <Spacer y={6}/>
                <div className="flex justify-center gap-x-4">
                    {socialItems.map((item) => (
                        <Link key={item.name} isExternal className="text-default-400" href={item.href}>
                            <span className="sr-only">{item.name}</span>
                            <item.icon aria-hidden="true" className="w-5"/>
                        </Link>
                    ))}
                </div>
                <Spacer y={4}/>
                <p className="mt-1 text-center text-small text-default-400">
                    &copy; 2024 Superbfragrance Inc. All rights reserved.
                </p>
            </div>
        </div>
    );
}