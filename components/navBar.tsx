"use client";
import { GrHome } from "react-icons/gr";

import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

export function NavBar({ collections }: { collections: any[] }) {
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
        <Link
          href="/"
          className="px-4 py-4 cursor-pointer text-white flex bg-primary justify-center items-center gap-x-2"
        >
          <GrHome size={15} />
          <div>Accueil</div>
        </Link>
        <Link
          href="/collections"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="collections-tab px-4 py-4 cursor-pointer flex justify-center items-center gap-x-2 relative"
        >
          <div>Collections</div>
          <FiChevronDown />
          {isDropdownVisible && (
            <div className="collection dropdown absolute top-10 left-2 bg-white flex flex-col gap-y-2  shadow-lg">
              {collections.map((collection: any) => {
                return (
                  <Link
                    key={collection._id}
                    href={`/collections/${collection._id}`}
                    className="hover:bg-secondary hover:text-primary p-3 px-4 w-full"
                  >
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis font-semibold w-full flex-grow">
                      {collection.title}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </Link>

        <Link href={"/contact"} className="px-4 py-4 cursor-pointer">
          Contactez-nous
        </Link>
      </div>
    </div>
  );
}
