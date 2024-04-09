import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      {/* This will be always rendered */}
      <Navbar />
      {/* This element will render child element when the URL is matched */}
      {/* Like slot in vue js layout */}
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
