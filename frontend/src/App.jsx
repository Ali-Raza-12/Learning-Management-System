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
} from "./pages";
import Layout from "./components/Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

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

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
