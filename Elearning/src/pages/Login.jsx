import { useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; 
import { useAuth } from "../utils/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation(); //  get previous location
  const { loginUser } = useAuth();
  const loginForm = useRef(null);

  //  if user came from private page, remember it
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;

    const userInfo = { email, password };
    try {
      await loginUser(userInfo);
      navigate("/profile", { replace: true }); //  redirect back to previous page
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFEDE1] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white w-full max-w-md sm:max-w-lg lg:max-w-xl p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg flex flex-col gap-6">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1B5241] text-center">
          Log in
        </h1>

        {/* Form */}
        <form ref={loginForm} onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="rubiridz@gmail.com"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1B5241]"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••••••••••••"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1B5241]"
              required
            />
          </div>

          {/* Sign in button */}
          <button
            type="submit"
            className="bg-[#1B5241] text-white py-2 rounded-md hover:bg-[#A05425] transition-colors"
          >
            Log in
          </button>
        </form>

        {/* Footer text */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-[#1B5241] font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
