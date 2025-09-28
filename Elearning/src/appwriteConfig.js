
import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) 
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);

// export async function getCurrentUser() {
//   try {
//     const user = await account.get();
//     return user; // ✅ return user
//   } catch (error) {
//     console.error("Error fetching current user:", error);
//     return null; // ✅ return null instead of nothing
//   }
// }
export default client
