"use client";

import { useState } from "react";

export default function ContactForm() {
  //add usestate here to track value of input and then call the function to send the data to the server
  //called addContactRequest in the actions folder
  const [name, setName] = useState("");

  return (
    <form className="ml-auto space-y-4">
      <input
        type="text"
        placeholder="Nom et  Prénom"
        className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
      />
      <input
        type="phoneNumber"
        placeholder="Numero de telephone"
        className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
      />
      <input
        type="text"
        placeholder="Message"
        className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
      />
      <textarea
        placeholder="Message"
        rows={6}
        className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
      ></textarea>
      <button
        type="button"
        className="text-white bg-primary tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
      >
        Send
      </button>
    </form>
  );
}
