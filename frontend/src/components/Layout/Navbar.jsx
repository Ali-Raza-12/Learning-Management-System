import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  GraduationCap as Graduation,
  BookOpen,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const categories = [
    "Development",
    "Business",
    "Design",
    "Marketing",
    "Personal Development",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md shadow-sm [.scrolled>&]:bg-white/80 transition-all duration-300">
      <div className="px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Byway
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center space-x-1 text-lg text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span>Categories</span>
                <ChevronDown className="h-5 w-5" />
              </button>

              {/* Categories Dropdown Menu */}
              {isCategoryOpen && (
                <div className="absolute top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/category/${category.toLowerCase()}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-lg"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-72 pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-lg"
              />
            </div>

            {/* Teach Link */}
            <Link
              to="/teach"
              className="flex items-center space-x-2 text-lg text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Graduation className="h-6 w-6" />
              <span>Teach on Byway</span>
            </Link>

            {/* Cart Icon */}
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="h-7 w-7 text-gray-700" />
              <span className="absolute top-0 right-0 h-6 w-6 bg-blue-600 text-white text-sm rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="px-5 py-2.5 text-lg text-gray-700 hover:text-blue-600 transition-colors"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="px-5 py-2.5 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                Sign up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-7 w-7 text-gray-700" />
            ) : (
              <Menu className="h-7 w-7 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg"
              />
            </div>

            {/* Mobile Categories */}
            <div className="py-2">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center justify-between w-full px-3 py-3 text-lg text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <span>Categories</span>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isCategoryOpen && (
                <div className="mt-2 space-y-1">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/category/${category.toLowerCase()}`}
                      className="block px-3 py-3 text-lg text-gray-600 hover:bg-gray-50 rounded-lg ml-4"
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
              className="flex items-center space-x-3 px-3 py-3 text-lg text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <Graduation className="h-6 w-6" />
              <span>Teach on Byway</span>
            </Link>

            {/* Mobile Auth */}
            <div className="pt-4 space-y-3">
              <Link
                to="/login"
                className="block w-full px-3 py-3 text-center text-lg text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="block w-full px-3 py-3 text-center text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700"
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
