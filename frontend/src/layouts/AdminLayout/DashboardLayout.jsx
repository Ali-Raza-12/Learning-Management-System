import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import Header from "./Header";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar for mobile (overlay) */}
        <div
          className={`
        fixed inset-0 z-40 lg:hidden
        ${sidebarOpen ? "block" : "hidden"}
      `}
        >
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
            // onClick={toggleSidebar}
          />

          {/* Sidebar component */}
          <div className="fixed inset-y-0 left-0 flex w-64 flex-col">
            <AdminSidebar />
            {/* closeSidebar={toggleSidebar} */}
          </div>
        </div>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:w-64 lg:flex-col">
          <AdminSidebar />
        </div>

        {/* Main content */}
        <div className="lg:pl-64 flex flex-col flex-1 overflow-hidden">
          <Header />
          {/* toggleSidebar={toggleSidebar} */}

          <main className="flex-1 overflow-auto p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
