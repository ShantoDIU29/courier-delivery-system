import { Outlet } from "react-router-dom";
import authImage from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-[#f4f3ee] px-2 py-3 sm:px-3 lg:px-4">
      <div className="mx-auto max-w-[1500px] overflow-hidden bg-[#f7f7f3] shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
        <div className="grid min-h-[calc(100vh-1.5rem)] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="bg-[#f7f7f3] px-5 py-5 sm:px-8 sm:py-6 lg:px-14 lg:py-8">
            <Outlet />
          </div>

          <div className="hidden items-center justify-center bg-[#dfead1] lg:flex">
            <img
              src={authImage}
              alt="Delivery illustration"
              className="h-[440px] w-[440px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
