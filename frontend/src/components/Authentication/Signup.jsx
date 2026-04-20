import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";

import signupImage from "../../assets/Signup-page/34554-technology.gif";
import { toastError, toastSuccess } from "../ToastComponent/showToast";
import { ClipLoader } from "react-spinners";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setError("Please enter a valid email");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Your password and confirm password do not match.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    setLoading(true);
    setError("");
  
    try {
      const response = await API.post("api/auth/register", formData);
      
      if (response.status >= 200 && response.status < 300) {
        toastSuccess("Registration successful!");
        navigate("/login");
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message 
        || error.message 
        || "Network error occurred";
      
      setError(errorMessage);
      toastError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen my-10 bg-white flex">
        {/* Left side with illustration */}
        <div className="w-1/2 p-4 flex items-center justify-center">
          <img
            src={signupImage}
            alt="Learning Illustration"
            className="w-full max-w-md"
          />
        </div>

        {/* Right side with login form */}
        <div className="w-1/2 p-6 flex items-center justify-center">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Sign up with email
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Full name
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Password"
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="absolute right-0 pr-3 flex items-center inset-y-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="repeat-password" className="sr-only">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirm-password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Confirm Password"
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="absolute right-0 pr-3 flex items-center inset-y-0"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <ClipLoader color="white" size={20} />
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <>
                    <Mail className="h-5 w-5" />
                    <span>Continue with email</span>
                  </>
                )}
              </button>
              {error && (
                <div className="text-red-700 text-sm mt-2 bg-red-100 border border-red-300 p-3 rounded-lg flex items-center gap-2 shadow-sm animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{error}</span>
                </div>
              )}
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Other log in options
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <button className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                  alt="Google"
                  className="h-5 object-contain"
                />
              </button>
              <button className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                  alt="Facebook"
                  className="h-5 object-contain"
                />
              </button>
              <button className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png"
                  alt="Apple"
                  className="h-5 object-contain"
                />
              </button>
            </div>

            <div className="text-center space-y-4">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-purple-600 hover:text-purple-500"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
