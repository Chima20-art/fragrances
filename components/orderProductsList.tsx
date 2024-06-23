"use client";

import { useContext } from "react";
import { CardItemsContext } from "./CardItemsContext";
import { urlForImage } from "@/app/sanity/client";

export default function OrderProductsList() {
  const { cartItems, handleRemoveFromCart } = useContext(CardItemsContext);

  const onRemoveItem = (productId: string) => {
    console.log("productId", productId);
    handleRemoveFromCart(productId);
  };

  return (
    <div className="lg:mt-60 mt-40 lg:max-w-4xl sm:max-w-2xl  w-[95%] uppercase  my-10 text-grey-700 flex flex-col items-center mx-auto py-8 h-full  bg-[#f5f5f5] w-full border border-grey-300 ">
      <div id="tableau" className="mb-6 w-[100%] flex flex-col items-center ">
        <div className="bg-grey-900 w-[98%] flex text-black text-[10px] flex-6 py-4 px-2">
          <div className=" w-[20%]"></div>
          <div className="w-[40%]">Nom de l'article</div>
          <div className="w-[20%]">Prix</div>
          <div className="w-[20%]"></div>
        </div>
        {cartItems?.map((item) => {
          return (
            <div
              key={item.product._id}
              className="bg-white w-[98%] flex text-gray text-[10px] h-full flex-6 py-3 px-2 "
            >
              <div className="w-[20%]">
                {item?.product?.image && (
                  <img
                    src={urlForImage(item.product.image)}
                    alt={item.product.title}
                    className="  w-[60px] h-[60px] object-contain"
                  />
                )}
              </div>
              <div className="w-[40%] h-full  h-full">
                <p className=" pb-1 font-bold">{item?.product.title}</p>
                <p className=" pb-1"> {item?.quantity}</p>
              </div>
              <div className="w-[20%]">{item?.product.price}Dh</div>

              <div className="w-[20%]">
                <button
                  onClick={() => onRemoveItem(item.product._id)}
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
          <span className="font-semibold">
            {cartItems.reduce((acc, item) => {
              return acc + item.product.price * item.quantity;
            }, 0)}
            Dh
          </span>
        </div>
        <input
          required
          type="text"
          placeholder="Nom et  Prénom"
          className="w-full rounded-md py-3 px-4 bg-white text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="w-full rounded-md py-3 px-4 bg-white text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
        />
        <input
          required
          type="phoneNumber"
          placeholder="Numero de telephone"
          className="w-full rounded-md py-3 px-4 bg-white text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
        />
        <button
          type="button"
          className="text-white bg-primary tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
        >
          Completez la commande
        </button>
      </form>
    </div>
  );
}
