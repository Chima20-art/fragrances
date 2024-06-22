"use client"
import {useParams} from "next/navigation";



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
        id: 4,
        title: "A Range of perfume",
        oldPrice: "180",
        price: "100",
        imageUrl: "/product-item-23.png",
        link: "#"
    },
    {
        id: 5,
        title: "A Range of perfume",
        oldPrice: "180",
        price: "100",
        imageUrl: "/product-item-21.png",
        link: "#"
    },
    {
        id: 6,
        title: "A Range of perfume",
        oldPrice: "180",
        price: "100",
        imageUrl: "/product-item-20.png",
        link: "#"
    },
    {
        id: 7,
        title: "A Range of perfume",
        oldPrice: "180",
        price: "100",
        imageUrl: "/product-item-13.png",
        link: "#"
    },
    {
        id: 8,
        title: "A Range of perfume",
        oldPrice: "180",
        price: "100",
        imageUrl: "/product-item-21.png",
        link: "#"
    },
    {
        id: 9,
        title: "A Range of perfume",
        oldPrice: "180",
        price: "100",
        imageUrl: "/product-item-21.png",
        link: "#"
    },
    {
        id: 10,
        title: "A Range of perfume",
        oldPrice: "180",
        price: "100",
        imageUrl: "/product-item-20.png",
        link: "#"
    },
]

export default function ProductDetail() {
    const  {id}  = useParams();
    const productId = Array.isArray(id) ? id[0] : id;

    const product = PRODUCTS.find(p => p.id === parseInt(productId, 10));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-detail p-4">
            <div className="image pb-3 bg-secondary">
                <img src={product.imageUrl} alt={product.title} className="w-full h-full object-contain" />
            </div>
            <h2 className="text-primary font-bold text-center">{product.title}</h2>
            <div className="flex justify-center">
                <span className="old-price text-sm mr-1 text-gray-500 line-through">{product.oldPrice}dh</span>
                <span className="current-price text-sm font-bold">{product.price}dh</span>
            </div>
            <button className="mt-4 bg-primary text-white py-2 px-4 rounded">Add to Cart</button>
        </div>
    );
}