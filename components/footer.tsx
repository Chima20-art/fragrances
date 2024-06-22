"use client";

import React from "react";
import {Link, Spacer} from "@nextui-org/react";
import type {IconProps} from "@iconify/react";


import type {SVGProps} from "react";
import {Icon} from "@iconify/react";
import {AcmeIcon} from "@/components/social";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};



const navLinks = [  {
    name: "Accueil",
    href: "#",
},
    {
        name: "Collections",
        href: "#",
    },
    {
        name: "Contact",
        href: "#",
    },
    {
        name: "blog",
        href: "#",
    },

];

const socialItems = [  {
    name: "Facebook",
    href: "#",
    icon: (props) => <Icon {...props} icon="fontisto:facebook" />,
},
    {
        name: "Instagram",
        href: "#",
        icon: (props) => <Icon {...props} icon="fontisto:instagram" />,
    },
    {
        name: "Whatsapp",
        href: "#",
        icon: (props) => <Icon {...props} icon="fontisto:whatsapp" />,
    },

];

export default function Footer() {
    return (
        <footer className="flex w-full flex-col bg-secondary mt-20  bottom-0 ">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-12 lg:px-8">
                <div className="flex items-center justify-center">
                    <AcmeIcon size={44}/>
                    <span className="text-medium font-medium">Superbfragrance</span>
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
        </footer>
    );
}