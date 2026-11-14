import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

export default function RootLayout() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
