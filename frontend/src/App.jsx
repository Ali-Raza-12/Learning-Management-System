import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Category,
  Checkout,
  Course,
  Mentor,
  Order,
  OrderCompletion,
  Profile,
  Shopping,
  Signup,
  Login,
} from "./pages/User";

import {
  AdminDashboard,
  AdminLogin,
  Courses ,
  Teachers,
  Students,
  Settings
} from './pages/Admin';

import Layout from "./layouts/StudentLayout/Layout";
import AdminLayout from './layouts/AdminLayout/DashboardLayout';
import Toast from "./components/ToastComponent/showToast";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ------------------------------------ Public + Student Routes ------------------------------------ */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/course" element={<Course />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-complete" element={<OrderCompletion />} />
          <Route path="/order" element={<Order />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* ------------------------------------- Admin Login (Outside Layout) ------------------------------------- */}
        <Route path="/adminlogin" element={<AdminLogin />} />

        {/* ------------------------------------ Admin Routes (Inside Admin Layout) ------------------------------------ */}
        <Route element={<AdminLayout />}>
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/adminsettings" element={<Settings />} />
        </Route>

      </Routes>

      <Toast />
    </BrowserRouter>
  );
}

export default App;
