import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import Headroom from "react-headroom";

function AppLayout() {
  return (
    <>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname.includes("/products");
        }}
      />
      <Headroom className="fixed left-0 right-0 z-50">
        <NavBar />
      </Headroom>

      <div className="z-20 m-auto min-h-screen max-w-[1400px] bg-[#fcfcfc] px-5 pt-32">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default AppLayout;
