"use server";

import { sanityAdminClient } from "../sanity/adminClient";
import { sanityClient } from "../sanity/client";

export async function createContactRequest({
  name,
  phone,
  email,
  message,
}: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) {
  try {
    let contactRequest = await sanityAdminClient.create({
      _type: "contactRequest",
      name,
      phone,
      email,
      message,
    });

    console.log("contactRequest", contactRequest);

    return {
      status: true,
      message: "Contact request created successfully",
    };
  } catch (error: any) {
    console.error("createContactRequest ", error.message);
    return {
      status: false,
      message: error.message,
    };
  }
}
