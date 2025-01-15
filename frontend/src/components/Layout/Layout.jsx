import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {

  const location = useLocation();

  const hideLocation = location.pathname === '/signup' || location.pathname === '/login'
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {!hideLocation && <Footer />}

    </>
  )
}

export default Layout