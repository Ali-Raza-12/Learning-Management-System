import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/authentication/authSlice";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  GraduationCap as Graduation,
  BookOpen,
  User,
  LogIn,
  UserPlus,
  LogOut,
} from "lucide-react";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest(".relative")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  const categories = [
    "Development",
    "Business",
    "Design",
    "Marketing",
    "Personal Development",
  ];

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md shadow-sm [.scrolled>&]:bg-white/80 transition-all duration-300">
      <div className="xs:px-6 sm:px-2 sm:container sm:mx-auto ">
        <div className="flex justify-between items-center h-14">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Byway
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-6">
            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center space-x-1 text-base text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span>Categories</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Categories Dropdown Menu */}
              {isCategoryOpen && (
                <div className="absolute top-full mt-4 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-1 z-50">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/category/${category.toLowerCase()}`}
                      className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-base"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-56 pl-10 pr-3 py-2 text-sm rounded-full border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all duration-200"
              />
            </div>

            {/* Teach Link */}
            <Link
              to="/teach"
              className="flex items-center space-x-1 text-base text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Graduation className="h-5 w-5" />
              <span>Teach on Byway</span>
            </Link>

            {/* Cart Icon */}
            <button className="relative p-1.5 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Auth Buttons - Enhanced Version */}
            {isLoggedIn ? (
              <div className="relative">
                {/* Profile Button with Dropdown */}
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-1 focus:outline-none"
                >
                  <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-400 transition-all duration-200">
                    {user?.profileImage ? (
                      <img
                        src={user.profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-500" />
                      </div>
                    )}
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md py-1 z-50 border border-gray-100 animate-fade-in"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {user?.name || "Welcome back"}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user?.email}
                      </p>
                    </div>

                    {user?.role === "admin" ? (
                      <>
                        <Link
                          to="/admindashboard"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                        >
                          Dashboard
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/profile"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                        >
                          <User className="w-4 h-4 mr-2" />
                          Profile
                        </Link>
                      </>
                    )}

                    <div className="border-t border-gray-100 my-1"></div>

                    <button
                      onClick={() => dispatch(logout())}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors group"
                >
                  <LogIn className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform" />
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-md hover:from-blue-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-md"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1.5 rounded-md hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-gray-700" />
            ) : (
              <Menu className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-3 pt-1 pb-2 space-y-1 bg-white border-t border-gray-100">
            {/* Mobile Search */}
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-3 py-2 text-sm rounded-md border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
              />
            </div>

            {/* Mobile Categories */}
            <div className="py-1">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-base text-gray-700 hover:bg-gray-50 rounded-md"
              >
                <span>Categories</span>
                <ChevronDown
                  className={`h-4 w-4 transform transition-transform ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isCategoryOpen && (
                <div className="mt-1 space-y-1">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/category/${category.toLowerCase()}`}
                      className="block px-3 py-2 text-base text-gray-600 hover:bg-gray-50 rounded-md ml-3"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Navigation Links */}
            <Link
              to="/teach"
              className="flex items-center space-x-2 px-3 py-2 text-base text-gray-700 hover:bg-gray-50 rounded-md"
            >
              <Graduation className="h-5 w-5" />
              <span>Teach on Byway</span>
            </Link>

            {/* Mobile Auth */}
            <div className="pt-3 space-y-2">
              <Link
                to="/login"
                className="block w-full px-3 py-2 text-center text-base text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="block w-full px-3 py-2 text-center text-base bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
