'use client";';
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useContext } from "react";
import { Button } from "@nextui-org/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CardItemsContext } from "./CardItemsContext";
import { urlForImage } from "@/app/sanity/client";

export default function CartModal({ showCartModal, setShowCartModal }: any) {
  const modalVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "100%", opacity: 0 },
  };
  let { cartItems, handleRemoveFromCart } = useContext<any>(CardItemsContext);
  return (
    <motion.div
      initial="closed"
      animate={showCartModal ? "open" : "closed"}
      variants={modalVariants}
      className="fixed top-0 right-0 lg:w-[30vw] w-[70vw]  h-screen z-50 flex justify-start items-center"
    >
      <motion.div className="relative p-4 rounded-l-lg shadow-md overflow-y-auto bg-white w-full h-full flex flex-col">
        <div className="border-b border-gray-400 py-4 text-center font-medium uppercase">
          Votre Panier
        </div>
        <div className="flex-1 pt-4 flex flex-col items-center">
          {cartItems.length > 0 ? (
            cartItems.map((selectedProduct: any) => {
              return (
                <div
                  key={selectedProduct.product._id}
                  className="group flex flex-row w-full mx-4 border-b border-gray-300 h-32"
                >
                  <img
                    src={urlForImage(selectedProduct.product.image)}
                    alt={selectedProduct.product.title}
                    className="w-1/5 bg-secondary object-contain m-4 transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={"flex-1 flex flex-col p-2"}>
                    <div className="flex flex-row flex-1 items-center">
                      <h2 className="flex-1 font-semibold text-md">
                        {selectedProduct.product.title}
                      </h2>
                      <div className="flex flex-col ">
                        <span className="font-semibold text-md">
                          {selectedProduct.product.price}
                        </span>
                        {selectedProduct.product.oldprice && (
                          <span className="text-gray-500 line-through">
                            {selectedProduct.product.oldprice}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-row justify-between">
                      <span>Quantité:{selectedProduct.quantity}</span>
                      <button
                        onClick={() =>
                          handleRemoveFromCart(selectedProduct.product._id)
                        }
                      >
                        <RiDeleteBin6Line className="w-6 h-8 text-red-700" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>Votre panier est vide</div>
          )}
        </div>
        <div className="flex flex-row justify-between">
          <span>Total</span>
          <span>
            {cartItems.reduce(
              (acc: number, item: any) =>
                acc + item.product.price * item.quantity,
              0
            )}
          </span>
        </div>
        <Link href={"/order"} className="pb-8">
          <Button
            type="button"
            className="text-white bg-primary tracking-wide rounded-full text-sm px-4 py-3 w-full !mt-6"
          >
            Continuez vers le paiement
          </Button>
        </Link>
        <p className="mt-1 text-center text-small text-default-400">
          &copy; 2024 Superbfragrance Inc. All rights reserved.
        </p>

        <button
          type="button"
          onClick={() => setShowCartModal(false)}
          className="absolute top-2 right-2 mt-2 mr-2 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}
