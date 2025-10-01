import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./utils/AuthContext";
import PrivateRoutes from "./utils/PrivateRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CourseCatalog from "./pages/courseCatalog/CourseCatalog";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import CourseDetails from "./pages/courseDetails/CourseDetails";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./components/ScrollToTop";
import Teaching from "./pages/Teaching";


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <AuthProvider>
          <Header />
          <Routes>
            {/* ✅ Protected Routes */}
            <Route element={<PrivateRoutes />}>
              <Route path="/profile/:id" element={<Profile />} />
              {/* <Route path="/courses" element={<CourseCatalog />} /> */}
              {/* <Route path="/course/:id" element={<CourseDetails />} /> */}
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CourseCatalog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
