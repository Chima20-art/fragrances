import Header from "@/components/Header";
import {NavBar} from "@/components/navBar";
import Link from "next/link";
import Footer from "@/components/footer";

const COLLECTIONS = [
    {
        id: 1,
        subtitle: "Superbfance Best collection",
        title: "Parfums Homme",
        imageSrc: "product-item-23.png",

    },
    {
        id: 2,
        subtitle: "Superbfance Best collection",
        title: "Parfums Femme",
        imageSrc: "product-item-23.png",

    },
    {
        id: 3,
        subtitle: "Superbfance Best collection",
        title: "5ML",
        imageSrc: "product-item-23.png",

    },
    {
        id: 4,
        subtitle: "Superbfance Best collection",
        title: "Packs + cadeaux",
        imageSrc: "product-item-21.png",

    },
    {
        id: 5,
        subtitle: "Superbfance Best collection",
        title: "Homme",
        imageSrc: "product-item-23.png",

    },
    {
        id: 6,
        subtitle: "Superbfance Best collection",
        title: "pack liv grATUITE + 10 ml GRATUITE",
        imageSrc: "product-item-21.png",

    },
    {
        id: 7,
        subtitle: "Superbfance Best collection",
        title: "NOS BEST SELLERS",
        imageSrc: "product-item-21.png",

    },


];
export default function Collections(){
    return (
        <div className="bg-white overflow-hidden">
            <div className="fixed top-0 z-[1000] w-full">
                <Header/>
                <NavBar collections={COLLECTIONS}/>
            </div>
            <div className="body">
                <div className="text-gray-700 uppercase font-bold text-xl py-2 mb-8 text-center relative lg:pt-60 pt-40">
                    Nos Collections
                    <span
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-primary h-[3px] w-20"></span>
                </div>
                <div className="flex  max-w-[1200px] m-auto">
                    <div className="collections grid grid-cols-2 lg:grid-cols-3  lg:gap-4 gap-3">
                        {
                            COLLECTIONS.map(collection => {
                                return <Link href={`/collections/${collection.id}`}
                                             className="flex h-full flex-1 bg-secondary cursor-pointer">
                                    <div className="w-1/2 flex flex-col justify-center p-6">
                                        <p className="font-semibold mb-2 uppercase text-[8px] lg:text-xs text-primary">{collection.subtitle}</p>
                                        <h1 className="text-base font-semibold capitalize lg:text-xl text-sm mb-3"> {collection.title}</h1>
                                    </div>
                                    <div className="w-1/2 flex justify-center items-center p-4">
                                        <img src={collection.imageSrc} alt="Descriptive Alt Text"
                                             className="w-full h-full object-cover"/>
                                    </div>
                                </Link>
                            })
                        }
                    </div>
                </div>
            </div>
    <Footer/>

        </div>


    )
}
