import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; 
import signupImage from "../../assets/Signup-page/34554-technology.gif";
import { toastSuccess, toastError } from "../ToastComponent/showToast";
import { EyeOff, Eye } from "react-feather";
import { ClipLoader } from "react-spinners";
import API from "../../services/api";
import { useDispatch } from "react-redux";
import { login, logout } from "../../features/authentication/authSlice";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setError("Please enter valid email");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setError("");

    try {
      const response = await API.post("api/auth/login", formData, {
        timeout: 5000,
      });
      const accessToken = response.data.accessToken
      
      dispatch(
          login({
            token: accessToken,
            user: {
              name: response.data.user.name,
              email: response.data.user.email,
              role: response.data.user.role,
            },
          })
        );

        setLoading(false);
        toastSuccess("Login Successful");

        // Navigate to the appropriate dashboard based on user role
        navigate(
          response.data.user.role === "admin" ? "/admindashboard" : "/home"
        );
      }
     catch (error) {
      let errorMessage = "Network error occurred";

      // Handling timeout error
      if (error.code === "ECONNABORTED") {
        errorMessage =
          "Request timed out. Please check your connection or try again later.";
      } else if (error.response?.data?.message) {
        // Handling API-specific error message
        errorMessage = error.response.data.message;
      }

      setError(errorMessage); // Set error state to display the error message
      toastError(errorMessage); // Show error toast message
      setLoading(false); // Set loading to false after handling error
    }
  };

  return (
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
      <div className="w-1/2 p-4 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Log in to continue your learning journey
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                autoComplete="email"
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

            <button
              type="submit"
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
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-purple-600 hover:text-purple-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
