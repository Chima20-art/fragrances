"use client";

import { useContext, useState } from "react";
import { CardItemsContext } from "./CardItemsContext";
import { urlForImage } from "@/app/sanity/client";
import { addOrder } from "@/app/actions/addOrder";
import { Input, Spinner } from "@nextui-org/react";

export default function OrderProductsList() {
  const { cartItems, handleRemoveFromCart } = useContext(CardItemsContext);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !phoneNumber || !city || !address) {
      setError("Please fill in all required fields");
      return;
    }

    //validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email && email != "" && !emailPattern.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    const data = {
      cartItems,
      name,
      email,
      phone: phoneNumber,
      city,
      address,
      items: cartItems,
    };

    try {
      setLoading(true);
      const response = await addOrder(data);
      if (response.status) {
        setSuccess(response.message);
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.error("An error occurred", error);
    } finally {
      setLoading(false);
    }
  };

  const onRemoveItem = (productId: string) => {
    console.log("productId", productId);
    handleRemoveFromCart(productId);
  };

  if (success) {
    //TODO: add order create page
    return (
      <div className="lg:mt-60 mt-40 m-auto lg:max-w-4xl sm:max-w-2xl  w-[95%] uppercase  my-10 text-grey-700 flex flex-col items-center mx-auto py-8 h-full  bg-[#f5f5f5] w-full border border-grey-300">
        <p className="text-primary  md:text-xl text-md font-bold">{success}</p>
      </div>
    );
  }

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

      <form
        onSubmit={handleSubmit}
        className="m-auto w-[80%] space-y-4 max-md:px-4"
      >
        <div className="w-full flex justify-between mb-4 ">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">
            {cartItems.reduce((acc, item) => {
              return acc + item.product.price * item.quantity;
            }, 0)}
            Dh
          </span>
        </div>
        <Input
          isRequired
          variant="bordered"
          type="text"
          placeholder="Nom et  Prénom"
          className="w-full bg-white "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          variant="bordered"
          type="email"
          placeholder="Email"
          className="w-full bg-white "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          isRequired
          variant="bordered"
          type="phoneNumber"
          placeholder="Numero de telephone"
          className="w-full  bg-white"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <Input
          isRequired
          variant="bordered"
          type="text"
          placeholder="Ville"
          className="w-full bg-white "
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <Input
          isRequired
          variant="bordered"
          type="text"
          placeholder="Adresse"
          className="w-full bg-white "
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="text-white bg-primary tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
        >
          {!loading && "Completez la commande"}

          {loading && <Spinner color="white" className="" />}
        </button>
      </form>
    </div>
  );
}
