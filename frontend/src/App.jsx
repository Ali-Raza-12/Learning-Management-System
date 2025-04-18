import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Category,
  Checkout,
  Course,
  Mentor,
  MessageInbox,
  Order,
  OrderCompletion,
  Profile,
  ProfilePage,
  ProfileCourses,
  ProfileMessages,
  ProfileReviews,
  ProfileTeachers,
  Shopping,
  Signup,
  Login,
  AdminDashboard,
  AdminLogin
} from "./pages";
import Layout from "./components/Layout/Layout";
import Toast  from "./components/ToastComponent/showToast";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* HOME  */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* Category-Page  */}
          <Route path="/category" element={<Category />} />

          {/* Course-Page  */}
          <Route path="/course" element={<Course />} />

          {/* Shopping-Cart  */}
          <Route path="/shopping" element={<Shopping />} />

          {/* Checkoutout  */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Order-Complete  */}
          <Route path="/order-complete" element={<OrderCompletion />} />

          {/* Order  */}
          <Route path="/order" element={<Order />} />

          {/* Mentor  */}
          <Route path="/mentor" element={<Mentor />} />

          {/* Profile (Main Profile Page) */}
          <Route path="/profile/*" element={<Profile />} />

          {/* Profile Page */}
          {/* <Route path="/profile-page" element={<ProfilePage />} /> */}

          {/* Sign Up  */}
          <Route path="/signup" element={<Signup />} />

          {/* Login  */}
          <Route path="/login" element={<Login />} />

          {/* Admin Login  */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Admin Dashboard  */}
          <Route path="/admindashboard" element={<AdminDashboard />}></Route>
        </Routes>

        <Toast />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
