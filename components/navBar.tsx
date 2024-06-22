"use client"
import {GrHome} from "react-icons/gr";

import Link from "next/link";
import {FiChevronDown} from "react-icons/fi";
import {useState} from "react";

const COLLECTIONS = [
    {
        id: 1,
        subtitle: "Superbfance Best collection",
        title: "Parfums Homme",
        imageSrc: "product-item-23.png",

    },
    {
        id: 1,
        subtitle: "Superbfance Best collection",
        title: "Parfums Femme",
        imageSrc: "product-item-23.png",

    },
    {
        id: 1,
        subtitle: "Superbfance Best collection",
        title: "5ML",
        imageSrc: "product-item-23.png",

    },
    {
        id: 1,
        subtitle: "Superbfance Best collection",
        title: "Packs + cadeaux",
        imageSrc: "product-item-21.png",

    },
    {
        id: 1,
        subtitle: "Superbfance Best collection",
        title: "Homme",
        imageSrc: "product-item-23.png",

    },
    {
        id: 1,
        subtitle: "Superbfance Best collection",
        title: "pack liv grATUITE + 10 ml GRATUITE",
        imageSrc: "product-item-21.png",

    },
    {
        id: 1,
        subtitle: "Superbfance Best collection",
        title: "NOS BEST SELLERS",
        imageSrc: "product-item-21.png",

    },
];

export function NavBar({collections}) {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };
    return (
        <div className="bg-secondary w-full lg:flex hidden">
            <div className="md:w-[1200px] m-auto flex gap-x-4 flex-row text-[10px] uppercase font-bold">
                <Link href="/"
                      className="px-4 py-4 cursor-pointer text-white flex bg-primary justify-center items-center gap-x-2">
                    <GrHome size={15}/>
                    <div>Accueil</div>
                </Link>
                <Link href="/collections"
                    onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                     className="px-4 py-4 cursor-pointer flex justify-center items-center gap-x-2 relative">
                    <div>Collections</div>
                    <FiChevronDown/>
                    {isDropdownVisible && (
                        <div className="dropdown absolute top-10 left-2 bg-white flex flex-col gap-y-2  shadow-lg">
                            {COLLECTIONS.map((collection: any) => {
                                return <Link href={`/collections/${collection.id}`} className="hover:bg-secondary hover:text-primary p-3 px-4 w-full">
                                    <div className="whitespace-nowrap overflow-hidden text-ellipsis font-semibold w-full flex-grow">{collection.title}</div>
                                </Link>
                            })}
                        </div>
                    )}
                </Link>

                <div className="px-4 py-4 cursor-pointer">Contactez-nous</div>
            </div>
        </div>
    )
}