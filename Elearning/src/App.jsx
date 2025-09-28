import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Coourses from "./pages/Coourses";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./utils/AuthContext";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route element={<PrivateRoutes />}>
            <Route path="/courses" element={<Coourses />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
             <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
