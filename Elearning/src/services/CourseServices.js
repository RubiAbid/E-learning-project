
import { databases } from "../appwriteConfig";
import { ID, Query } from "appwrite";


// env variables
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_TABLE_NAME;


//  Enroll a user in a course

export const enrollCourse = async (userId, courseId) => {
  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),  
      {
        userId,
        courseId
      }
    );
    return response;
  } catch (err) {
    console.error("❌ Error enrolling course:", err);
    throw err;
  }
};


//  Get all enrollments for a specific user

export const getUserEnrollments = async (userId) => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [
        // query filter
        Query.equal("userId", userId)
      ]
    );
    return response.documents;
  } catch (err) {
    console.error("❌ Error fetching enrollments:", err);
    throw err;
  }
};
