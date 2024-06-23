import "server-only";
import { createClient } from "@sanity/client";

export const sanityAdminClient = createClient({
  projectId: "t7orougd",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  token:
    "skTXzqU4KggNVeQ7vbXqypdDgbeyaEWTbAvAaXGl8JblZPzOPFOH4iTbxF3EsjXvkUpVlg4ExkeVLfxuLp7aEQbkGWafnqPpl80QulEdntj0jz8Z0ltfW1yENx5W6Gfvrp0shU96bcnOIcBns9awJqh8WdNShIz3FUhdLL63Yg7FBluUZE5G", // Only if you want to update content with the client
});
