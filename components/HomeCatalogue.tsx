import HomeSwiper from "@/components/HomeSwiper";

export  default function HomeCatalogue(){
    return (
        <div className="flex flex-col m-auto p-4">
            <HomeSwiper/>
            <div className="flex flex-row  sm:items-stretch h-full gap-4">
                <div className="flex h-full flex-1 bg-secondary">
                    <div className="w-1/2 flex flex-col justify-center p-6">
                        <p className="font-semibold mb-2 uppercase text-[8px] text-primary">Superbfance Best
                            collection</p>
                        <h1 className="text-base font-semibold capitalize text-xl mb-3"> collection pour homme</h1>
                        <p className="text-gray-600 text-[8px] font-semibold capitalize"> prix:<span
                            className="ml-1 font-bold text-primary  text-xs">250.00Dh</span></p>
                        <a href="" className="underline font-bold text-xs mt-6">Shop Now</a>
                    </div>
                    <div className="w-1/2 flex justify-center items-center p-4">
                        <img src="/product-item-23.png" alt="Descriptive Alt Text"
                             className="w-full h-full object-cover"/>
                    </div>
                </div>
                <div className="flex sm:min-h-full flex-1 bg-secondary">
                    <div className="w-1/2 flex flex-col justify-center p-6">
                        <p className="font-semibold mb-2 uppercase text-[8px] text-primary">Superbfance Best
                            collection</p>
                        <h1 className="text-base capitalize font-semibold text-xl mb-3">Parfums complets</h1>
                        <p className="text-gray-600 text-[8px] font-semibold capitalize"> prix:<span
                            className="ml-1 font-bold text-primary text-xs">250.00Dh</span></p>
                        <a href="" className="underline font-bold text-xs mt-6">Shop Now</a>
                    </div>
                    <div className="w-1/2 flex justify-center items-center p-4">
                        <img src="/product-item-13.png" alt="Descriptive Alt Text"
                             className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>

        </div>
    )
}