import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import Headroom from "react-headroom";

function AppLayout() {
  return (
    <>
      <Headroom className="fixed left-0 right-0 z-50">
        <NavBar />
      </Headroom>

      <div className="z-20 m-auto min-h-screen max-w-[1400px] pt-[64px]">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default AppLayout;
