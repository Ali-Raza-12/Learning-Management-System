import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import { ExternalLink } from "lucide-react";
import { useSelector } from "react-redux";
import Avatar from "../../assets/avatar.jpg";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <aside className="w-full max-w-[290px] h-fit bg-white shadow-lg rounded-2xl overflow-hidden">
      {/* Profile Section */}
      <div className="flex flex-col items-center p-6 border-b border-gray-200">
        <div className="relative mb-4">
          <img
            src={user?.image || Avatar}
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
            alt="Profile"
          />
        </div>

        <h4 className="text-gray-900 font-bold text-xl mb-2">{user?.name}</h4>
        <p className="text-gray-500 text-sm mb-4">{user?.role}</p>

        <Button
          text="Share Profile"
          icon={<ExternalLink className="w-4 h-4 mr-2" />}
          btnClass="flex items-center justify-center border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col">
        <NavLink
          to="/profile"
          end
          className={({ isActive }) =>
            `flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 transition-colors ${
              isActive
                ? "bg-blue-100 border-l-4 border-blue-500 font-medium"
                : ""
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          Profile
        </NavLink>

        <NavLink
          to="/profile/courses"
          className={({ isActive }) =>
            `flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 transition-colors ${
              isActive
                ? "bg-blue-100 border-l-4 border-blue-500 font-medium"
                : ""
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          My Courses
        </NavLink>

        <NavLink
          to="/profile/teachers"
          className={({ isActive }) =>
            `flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 transition-colors ${
              isActive
                ? "bg-blue-100 border-l-4 border-blue-500 font-medium"
                : ""
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Teachers
        </NavLink>

        <NavLink
          to="/profile/messages"
          className={({ isActive }) =>
            `flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 transition-colors ${
              isActive
                ? "bg-blue-100 border-l-4 border-blue-500 font-medium"
                : ""
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          Messages
        </NavLink>

        <NavLink
          to="/profile/reviews"
          className={({ isActive }) =>
            `flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 transition-colors ${
              isActive
                ? "bg-blue-100 border-l-4 border-blue-500 font-medium"
                : ""
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          My Reviews
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
