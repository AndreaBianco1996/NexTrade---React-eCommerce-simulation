import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function AppLayout() {
  return (
    <>
      <div className="fixed left-0 right-0 z-50">
        <Header />
      </div>

      <div className="z-20 m-auto min-h-screen max-w-[1400px] pt-[64px]">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default AppLayout;
