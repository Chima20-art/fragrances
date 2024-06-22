import Header from "@/components/Header";
import {NavBar} from "@/components/navBar";

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
export default function Collections(){
    return (
        <div className="bg-white overflow-hidden">
            <div className="fixed top-0 z-[1000] w-full">
                <Header/>
                <NavBar collections={COLLECTIONS}/>
            </div>
            <div className="flex  max-w-[1200px] m-auto pt-60">
                <div className="collections grid grid-cols-2 lg:grid-cols-3  lg:gap-4 gap-3">
                    {
                        COLLECTIONS.map(collection => {
                            return <div className="flex h-full flex-1 bg-secondary cursor-pointer">
                                <div className="w-1/2 flex flex-col justify-center p-6">
                                    <p className="font-semibold mb-2 uppercase text-[8px] lg:text-xs text-primary">{collection.subtitle}</p>
                                    <h1 className="text-base font-semibold capitalize lg:text-xl text-sm mb-3"> {collection.title}</h1>
                                </div>
                                <div className="w-1/2 flex justify-center items-center p-4">
                                    <img src={collection.imageSrc} alt="Descriptive Alt Text"
                                         className="w-full h-full object-cover"/>
                                </div>
                            </div>
                        })
                    }


                </div>
            </div>

        </div>


    )
}
