"use client";

import { urlForImage } from "@/app/sanity/client";
import {
  Button,
  Accordion,
  AccordionItem,
  ScrollShadow,
} from "@nextui-org/react";
import Link from "next/link";
import { useContext, useState } from "react";

import { RiShoppingCart2Line, RiShoppingCartFill } from "react-icons/ri";
import { CardItemsContext } from "./CardItemsContext";

export default function Product({ product }: { product: any }) {
  const details = [
    {
      title: "Garantie 30 jours",
      description:
        "Tous les produits affichés dans notre boutique sont soumis à une politique d'échange et de remboursement conformément aux termes et conditions indiqués sur cette page.",
    },
    {
      title: "Livraison",
      description: "Livraison a Domicile dans les 48H Partout au Maroc",
    },
    {
      title: "Politique de Retour\n",
      description:
        "Retour dans les trois jours et échange dans les sept jours à compter de la date d'achat",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(product.image);
  const { cartItems, handleAddToCart } = useContext<any>(CardItemsContext);
  let isItemInCart = cartItems.some(
    (item: any) => item.product._id === product._id
  );

  const [quantity, setQuantity] = useState(
    !isItemInCart
      ? 1
      : cartItems.find((item: any) => item.product._id === product._id).quantity
  );

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (event: any) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const onAddToCard = () => {
    handleAddToCart(product, quantity);
  };

  return (
    <div className="relative flex flex-col gap-4 max-w-[1200px] h-full m-auto lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:pt-28 mt-40  max-lg:px-4">
      <div className="group relative h-full w-full flex-none">
        {/* Main Image */}
        <img
          alt={product.title}
          className="w-full object-contain max-h-[400px] transform transition-transform duration-300 group-hover:scale-110 "
          src={urlForImage(selectedImage)}
        />
        {/* Image Gallery */}
        <ScrollShadow
          className="-mx-2  mt-4 flex w-full h-full  gap-4 px-2 pb-4 pt-2"
          orientation="horizontal"
        >
          <button
            className="group relative h-24 w-24 flex-none cursor-pointer items-center justify-center rounded-medium ring-offset-background transition-shadow data-[selected=true]:outline-none data-[selected=true]:ring-2 data-[selected=true]:ring-focus data-[selected=true]:ring-offset-2"
            data-selected={
              product.image.asset._ref === selectedImage.asset._ref
            }
            onClick={() => setSelectedImage(product.image)}
          >
            <img
              alt={product.title}
              className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-110"
              src={urlForImage(product.image)}
            />
          </button>
          {product?.extraImages?.map((image: any, index: any) => (
            <button
              key={`${image}-${index}`}
              className="relative h-24 w-24 flex-none cursor-pointer items-center justify-center rounded-medium ring-offset-background transition-shadow data-[selected=true]:outline-none data-[selected=true]:ring-2 data-[selected=true]:ring-focus data-[selected=true]:ring-offset-2"
              data-selected={image.asset._ref === selectedImage.asset._ref}
              onClick={() => setSelectedImage(image)}
            >
              <img
                alt={product.title}
                className="w-full h-full object-contain"
                src={urlForImage(image)}
              />
            </button>
          ))}
        </ScrollShadow>
      </div>

      {/* Product Info */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-tight text-primary">
          {product?.title}
        </h1>
        <p className="text-xl font-medium tracking-tight mt-4">
          {product?.price}Dh
        </p>
        <div className="flex flex-row border h-10 rounded-full w-fit border-gray-400 relative mt-10">
          <button
            onClick={handleDecrease}
            className="font-semibold px-4 text-black hover:text-primary hover:text-xl border-gray-400 h-full flex rounded-r focus:outline-none cursor-pointer flex items-center justify-center"
          >
            -
          </button>
          <div className="bg-white px-4 text-xs md:text-base flex items-center justify-center cursor-default">
            <span>{quantity}</span>
          </div>

          <button
            onClick={handleIncrease}
            className="font-semibold px-4 text-black hover:text-primary hover:text-xl border-gray-400 h-full flex rounded-r focus:outline-none cursor-pointer flex items-center justify-center"
          >
            +
          </button>
        </div>

        <Accordion
          className="-mx-1 mt-2"
          itemClasses={{
            title: "text-default-400",
            content: "pt-0 pb-6 text-base text-default-500",
          }}
          items={details}
          selectionMode="multiple"
        >
          {details
            ? details.map(({ title, description }) => (
                <AccordionItem key={title} title={title}>
                  <div className="list-inside list-disc text-default-500">
                    {description}
                  </div>
                </AccordionItem>
              ))
            : []}
        </Accordion>
        <div className="mt-2 w-fit px-3 flex gap-2">
          <Button
            fullWidth
            className="text-medium font-medium rounded-full"
            color="primary"
            size="lg"
            startContent={<RiShoppingCartFill className="lg:h-5 lg:w-5" />}
            onClick={onAddToCard}
          >
            Ajouter au panier
          </Button>
        </div>
      </div>
    </div>
  );
}
