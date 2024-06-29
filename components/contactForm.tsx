"use client";

import { createContactRequest } from "@/app/actions/addContactRequest";
import { Input, Spinner, Textarea } from "@nextui-org/react";
import { useState } from "react";

export default function ContactForm() {
  //add usestate here to track value of input and then call the function to send the data to the server
  //called addContactRequest in the actions folder
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill in all required fields");
      return;
    }

    //validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    const data = {
      name,
      email,
      phone: !phoneNumber || phoneNumber == "" ? "N/A" : phoneNumber,
      message,
    };

    try {
      setLoading(true);
      const response = await createContactRequest(data);
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

  if (success)
    return <p className="text-primary  md:text-xl text-md font-bold">{success}</p>;

  return (
    <form onSubmit={handleSubmit} className=" min-w-[200px] space-y-4">
      <Input
        type="text"
        placeholder="Nom et  Prénom"
        className="w-full "
        value={name}
        onChange={(e) => setName(e.target.value)}
        isRequired
      />
      <Input
        type="email"
        placeholder="Email"
        className="w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        isRequired
      />
      <Input
        type="phoneNumber"
        placeholder="Numero de telephone"
        className="w-full "
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <Textarea
        placeholder="Message"
        className="w-full "
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        isRequired
      ></Textarea>

      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        className="text-white bg-primary tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
      >
        {!loading && "Send"}
        {loading && <Spinner color="white" className="" />}
      </button>
    </form>
  );
}
