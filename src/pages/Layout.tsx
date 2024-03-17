import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      {/* prose ? this utility class cause our page to not take the whole width */}
      <main className="prose p-5 w-full">
        <Outlet />
        <Toaster />
      </main>
    </>
  );
};

export default Layout;
