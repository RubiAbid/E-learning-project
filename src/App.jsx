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

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/courses" element={<CourseCatalog />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            {/* <Route path="/contact" element={<ContactUs />} /> */}
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
