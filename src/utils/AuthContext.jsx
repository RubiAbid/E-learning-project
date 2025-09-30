import { createContext, useContext, useState, useEffect } from "react";
import { account } from "../appwriteConfig";
import { ID } from "appwrite";
import Loader from "../components/Loader";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      //  It checks if a session already exists
      try {
        let currentSession = await account.get();
        console.log("Already logged in:", currentSession);
        setUser(currentSession);
        setLoading(false);
        return;
      } catch (err) {
        console.log("No active session, creating a new one...");
      }

      // Create new session if not logged in
      let response = await account.createEmailPasswordSession({
        email: userInfo.email,
        password: userInfo.password,
      });

      console.log("SESSION:", response);

      // Fetch account details after login
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.error("Login failed:", error);
    }
    setLoading(false);
  };

  const logoutUser = async () => {
    setLoading(true);
    try {
      await account.deleteSession({ sessionId: "current" }); 
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };



  const registerUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.create({
        userId: ID.unique(),       // Unique ID for the user
        email: userInfo.email,
        password: userInfo.password1,
        name: userInfo.name,
      });

      await account.createEmailPasswordSession({
        email: userInfo.email,
        password: userInfo.password1,
      });




      // Fetch account details after login
      let accountDetails = await account.get();
      setUser(accountDetails);
    } 
    catch (error) {
    console.error("Registration failed:", error);
    throw error;  //pass error to register file
  } finally {
    setLoading(false);
  }

    setLoading(false);
  };

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {}

    setLoading(false);
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <Loader/>: children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
