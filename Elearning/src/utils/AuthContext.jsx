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
      // If already logged in, return that session
      try {
        let currentSession = await account.get();
        console.log("Already logged in:", currentSession);
        setUser(currentSession);
        setLoading(false);
        return;
      } catch {
        console.log("No active session, creating a new one...");
      }

      // Create new session
      await account.createEmailPasswordSession(userInfo.email, userInfo.password);

      // Fetch account details after login
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    setLoading(true);
    try {
      await account.deleteSession("current");
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
      //  Only create account
      await account.create(
        ID.unique(),       // Unique ID for the user
        userInfo.email,
        userInfo.password1,
        userInfo.name,
      );

    } catch (error) {
      console.error("Registration failed:", error);
      throw error; // pass error to Register.js
    } finally {
      setLoading(false);
    }
  };

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch {
      // no active session
    } finally {
      setLoading(false);
    }
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
