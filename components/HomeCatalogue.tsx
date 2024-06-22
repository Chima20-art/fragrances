import HomeSwiper from "@/components/HomeSwiper";

export  default function HomeCatalogue({collections}){


    return (
        <div className="flex flex-col m-auto p-4">
            <HomeSwiper/>
            <div className="collections flex flex-row  sm:items-stretch h-full gap-4">
                {
                    collections.map(collection=> {
                        return <div className="flex h-full flex-1 bg-secondary">
                            <div className="w-1/2 flex flex-col justify-center p-6">
                                <p className="font-semibold mb-2 uppercase text-[8px] lg:text-xs text-primary">{collection.subtitle}</p>
                                <h1 className="text-base font-semibold capitalize lg:text-xl text-sm mb-3"> {collection.title}</h1>
                                <p className="text-gray-600 text-[8px] font-semibold capitalize"> prix:<span
                                    className="ml-1 font-bold text-primary  lg:text-xs text-[8px] ">{collection.price}Dh</span></p>
                                <a href="" className="underline font-bold text-xs mt-6">Shop Now</a>
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
    )
}