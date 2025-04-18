import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import { ClipLoader } from "react-spinners";
import { Eye, EyeOff } from "react-feather";
import signupImage from "../../assets/Signup-page/34554-technology.gif";
import { toastError, toastSuccess } from "../ToastComponent/showToast";
// import { AdminDashboard } from "../../pages";

const AdminSignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const validateForm = () => {
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setError("Please enter a valid email address");
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
      const response = await API.post("/api/auth/adminlogin", formData);

      toastSuccess("Login Successfully!")

      navigate("/admindashboard")

    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "Network error occurred";

      setError(errorMessage);
      toastError(errorMessage);
      setLoading(false)

    } finally {
        setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col md:flex-row">
        {/* Left side with illustration - hidden on mobile */}
        <div className="hidden md:flex md:w-1/2 p-4 items-center justify-center">
          <img
            src={signupImage}
            alt="Admin Authentication"
            className="w-full max-w-md"
          />
        </div>

        {/* Right side with login form */}
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Admin Portal</h2>
              <p className="mt-2 text-gray-600">
                Please enter your credentials
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Please enter your email"
                  required
                  autoComplete="username"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 pr-12"
                    placeholder="••••••••"
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
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
                disabled={loading}
                className={`w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center gap-2 ${
                  loading ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <>
                    <ClipLoader color="white" size={20} />
                    <span>Authenticating...</span>
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSignIn;
