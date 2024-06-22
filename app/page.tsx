import Header from "@/components/Header";
import {NextUIProvider} from "@nextui-org/react";
import {NavBar} from "@/components/navBar";
import HomeCatalogue from "@/components/HomeCatalogue";
import BestSellers from "@/components/BestSellers";


export default function Home() {
    const COLLECTIONS = [
        {
            id:1,
            subtitle:"Superbfance Best collection",
            title:"Homme",
            imageSrc:"product-item-23.png",
            price:'250',

        },
        {
            id:1,
            subtitle:"Superbfance Best collection",
            title:"Parfums complets",
            imageSrc:"product-item-21.png",
            price:'250',

        }
    ];

    const PRODUCTS: any= [
        {
            id: 1,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-20.png",
            link: "#"
        },
        {
            id: 2,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-21.png",
            link: "#"
        },
        {
            id: 3,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-13.png",
            link: "#"
        },
        {
            id: 1,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-23.png",
            link: "#"
        },
        {
            id: 2,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-21.png",
            link: "#"
        },
        {
            id: 3,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-20.png",
            link: "#"
        },
        {
            id: 3,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-13.png",
            link: "#"
        },
        {
            id: 1,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-21.png",
            link: "#"
        },
        {
            id: 2,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-21.png",
            link: "#"
        },
        {
            id: 3,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-20.png",
            link: "#"
        },


    ]
    return (
      <NextUIProvider>
         <div className="bg-white overflow-hidden">
             <div className="fixed top-0 z-[1000] w-full">
                 <Header/>
                 <NavBar collections={COLLECTIONS}/>
             </div>
             <div className="lg:w-[54vw] mx-auto lg:pt-48 pt-24">
                 <HomeCatalogue collections={COLLECTIONS}/>
                 <BestSellers products={PRODUCTS}/>
             </div>
         </div>
      </NextUIProvider>
  );
}
