import { Outlet } from "react-router-dom";
import Footer from "../components/commonComponents/Footer";
import NavBar from "../components/commonComponents/NavBar";

function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
