import { useState } from "react";
import {
  Menu,
  X,
  Home,
  Settings,
  BookOpen,
  Users,
  Bell,
  ChevronDown,
  Search,
  School,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/authentication/authSlice";
import { useNavigate } from "react-router-dom";

const AdminSidebar = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-gray-800/50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-30 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:z-auto`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <Link to="/" className="ml-2 text-xl font-bold text-gray-800">
                LMS Portal
              </Link>
            </div>
            <button
              className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-600 lg:hidden"
              onClick={toggleSidebar}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col justify-between h-full">
            <div className="flex-1 space-y-1  px-2 py-4">
              <a
                href="/admindashboard"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Home className="mr-3 h-5 w-5 text-gray-500 group-hover:text-gray-600" />
                Dashboard
              </a>
              <a
                href="/teachers"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <School className="mr-3 h-5 w-5 text-gray-500 group-hover:text-gray-600" />
                Teachers
              </a>
              <a
                href="/courses"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <BookOpen className="mr-3 h-5 w-5 text-gray-500 group-hover:text-gray-600" />
                Courses
              </a>
              <a
                href="/students"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Users className="mr-3 h-5 w-5 text-gray-500 group-hover:text-gray-600" />
                Students
              </a>
            </div>
            <div className="space-y-1  px-2 py-4">
              <a
                href="/students"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Settings className="mr-3 h-5 w-5 text-gray-500" />
                Settings
              </a>

              <button
                onClick={() => {
                  dispatch(logout());
                  navigate("/login");
                }}
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign out
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:pl-64">
        {/* Top navbar */}
        <div className="sticky top-0 z-10 flex h-16 bg-white shadow">
          <button
            className="px-4 text-gray-500 lg:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex flex-1 items-center justify-between px-4">
            <div className="flex flex-1 items-center">
              <div className="max-w-lg w-full lg:max-w-xs relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </span>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-blue-300 focus:ring-blue-300 focus:ring-1 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>

            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
              </button>

              <div className="ml-3 relative">
                <button className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">
                    John Doe
                  </span>
                  <ChevronDown className="ml-1 h-4 w-4 text-gray-400 hidden md:block" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminSidebar;
