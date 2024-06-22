"use client"

import Header from "@/components/Header";

import {NavBar} from "@/components/navBar";
import {GoChevronRight} from "react-icons/go";
import Link from "next/link";
import Footer from "@/components/footer";


const COLLECTIONS = [
    {
        id: 1,
        subtitle: "Superbfance Best collection",
        title: "Parfums Homme",
        imageSrc: "product-item-23.png",
        products:[
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
                id: 4,
                title: "A Range of perfume",
                oldPrice: "180",
                price: "100",
                imageUrl: "/product-item-23.png",
                link: "#"
            },],

    },
    {
        id: 2,
        subtitle: "Superbfance Best collection",
        title: "Parfums Femme",
        imageSrc: "product-item-23.png",
        products:[
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
                id: 4,
                title: "A Range of perfume",
                oldPrice: "180",
                price: "100",
                imageUrl: "/product-item-23.png",
                link: "#"
            },]

    },
    {
        id: 3,
        subtitle: "Superbfance Best collection",
        title: "5ML",
        imageSrc: "product-item-23.png",
        products:[
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
                id: 4,
                title: "A Range of perfume",
                oldPrice: "180",
                price: "100",
                imageUrl: "/product-item-23.png",
                link: "#"
            },]

    },
    {
        id: 4,
        subtitle: "Superbfance Best collection",
        title: "Packs + cadeaux",
        imageSrc: "product-item-21.png",
        products:[
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
                id: 4,
                title: "A Range of perfume",
                oldPrice: "180",
                price: "100",
                imageUrl: "/product-item-23.png",
                link: "#"
            },]

    },
    {
        id: 5,
        subtitle: "Superbfance Best collection",
        title: "Homme",
        imageSrc: "product-item-23.png",
        products:[
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
                id: 4,
                title: "A Range of perfume",
                oldPrice: "180",
                price: "100",
                imageUrl: "/product-item-23.png",
                link: "#"
            },]

    },
    {
        id: 6,
        subtitle: "Superbfance Best collection",
        title: "pack liv grATUITE + 10 ml GRATUITE",
        imageSrc: "product-item-21.png",
        products:[
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
                id: 4,
                title: "A Range of perfume",
                oldPrice: "180",
                price: "100",
                imageUrl: "/product-item-23.png",
                link: "#"
            },]

    },
    {
        id: 7,
        subtitle: "Superbfance Best collection",
        title: "NOS BEST SELLERS",
        imageSrc: "product-item-21.png",
        products:[
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
                id: 4,
                title: "A Range of perfume",
                oldPrice: "180",
                price: "100",
                imageUrl: "/product-item-23.png",
                link: "#"
            },]


    },
];

export default function  Collection({
                                        params,
                                        searchParams,
                                    }: {
    params: { collectionId: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) {

    let collectionId = params.collectionId;

    const images = [
        '/product-item-13.png',
        '/product-item-20.png',
        '/product-item-21.png',
        '/product-item-23.png',
    ]
    const details = [
        {
            title: 'Garantie 30 jours',
            description: 'Tous les produits affichés dans notre boutique sont soumis à une politique d\'échange et de remboursement conformément aux termes et conditions indiqués sur cette page.',
        },
        {
            title: 'Livraison',
            description: 'Livraison a Domicile dans les 48H Partout au Maroc',
        },
        {
            title: 'Politique de Retour\n',
            description: 'Retour dans les trois jours et échange dans les sept jours à compter de la date d\'achat',
        },
    ]

    const collection = COLLECTIONS.find((c:any) => c.id === parseInt(collectionId, 10));



    return <div className="bg-white overflow-hidden">
        <div className="fixed top-0 z-[1000] w-full">
            <Header/>
            <NavBar collections={COLLECTIONS}/>
        </div>
        <div className="lg:mt-60 mt-40 mx-auto max-w-[1200px] max-lg:p-4">
            <div className="flex items-center">
                <span>Collection</span>
                <GoChevronRight/>
                <span className="collection-title">{collection?.title}</span>
            </div>
            <div className="products grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4 gap-3 pt-10">
                {collection?.products!.map(product => (
                    <Link key={product.id} href={`/produits/${product.id}`}>
                        <div
                            className="border border-gray-300 rounded-md flex flex-col min-h-[350px] cursor-pointer h-full">
                            <div className="image pb-3 h-3/4 bg-secondary">
                                <img
                                    src={product.imageUrl}
                                    alt={product.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="h-1/4 flex items-center flex-col px-3 py-2">
                                <h2 className="text-primary font-bold text-center">{product.title}</h2>
                                <div className="flex justify-center">
                                    <span
                                        className="old-price text-sm mr-1 text-gray-500 line-through">{product.oldPrice}dh</span>
                                    <span className="current-price text-sm font-bold">{product.price}dh</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    <Footer/>
    </div>


}

