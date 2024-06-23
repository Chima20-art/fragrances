import Header from "@/components/Header";
import {NavBar} from "@/components/navBar";
import Footer from "@/components/footer";

export default function Order (){

    const SELECTEDPRODUCTS = [
        {
            id: 1,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-20.png",
            quantity: 1,
        },
        {
            id: 2,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-21.png",
            quantity: 1,
        },
        {
            id: 3,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-13.png",
            quantity: 1,
        },
    ]
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

    return(
        <div className="bg-white overflow-hidden ">
            <div className="fixed top-0 z-[1000] w-full">
                <Header/>
                <NavBar collections={COLLECTIONS}/>
            </div>
            <div
                className="lg:mt-60 mt-40 lg:max-w-4xl sm:max-w-2xl  w-[95%] uppercase  my-10 text-grey-700 flex flex-col items-center mx-auto py-8 h-full  bg-[#f5f5f5] w-full border border-grey-300 ">
                <div
                    id="tableau"
                    className="mb-6 w-[100%] flex flex-col items-center "
                >
                    <div className="bg-grey-900 w-[98%] flex text-black text-[10px] flex-6 py-4 px-2">
                        <div className=" w-[20%]"></div>
                        <div className="w-[40%]">Nom de l'article</div>
                        <div className="w-[20%]">Prix</div>
                        <div className="w-[20%]"></div>
                    </div>
                    {SELECTEDPRODUCTS?.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="bg-white w-[98%] flex text-gray text-[10px] h-full flex-6 py-3 px-2 "
                            >
                                <div className="w-[20%]">
                                    {item?.imageUrl && (
                                        <img
                                            src={item?.imageUrl}
                                            alt={item?.imageUrl}
                                            className="  w-[60px] h-[60px] object-contain"
                                        />
                                    )}
                                </div>
                                <div className="w-[40%] h-full  h-full">
                                    <p className=" pb-1 font-bold">{item?.title}</p>
                                    <p className=" pb-1"> {item?.quantity}</p>
                                </div>
                                <div className="w-[20%]">{item?.price}Dh</div>

                                <div className="w-[20%]">
                                    <button
                                        className="bg-red-400 py-3 px-2 uppercase text-beige hover:bg-gray rounded-[20px]"
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <form className="m-auto w-[80%] space-y-4 max-md:px-4">
                    <div className="w-full flex justify-between mb-4 ">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">500 Dh</span>
                    </div>
                    <input required type='text' placeholder='Nom et  Prénom'
                           className="w-full rounded-md py-3 px-4 bg-white text-gray-800 text-sm outline-blue-500 focus:bg-transparent"/>
                    <input required type='email' placeholder='Email'
                           className="w-full rounded-md py-3 px-4 bg-white text-gray-800 text-sm outline-blue-500 focus:bg-transparent"/>
                    <input required type='phoneNumber' placeholder='Numero de telephone'
                           className="w-full rounded-md py-3 px-4 bg-white text-gray-800 text-sm outline-blue-500 focus:bg-transparent"/>
                    <button type='button'
                            className="text-white bg-primary tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6">Completez
                        la commande
                    </button>
                </form>
            </div>

            <Footer/>
        </div>

    )
}