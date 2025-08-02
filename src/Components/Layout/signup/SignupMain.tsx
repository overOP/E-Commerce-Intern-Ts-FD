import { Link } from "react-router";
import img from "../../../assets/Img/R.png";
import Input from "../../Input";
import { useState } from "react";

const SignupMain = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = (event: React.MouseEvent) => {
    setShowPassword(!showPassword);
    event.preventDefault();
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image & Branding */}
      <div className="flex flex-col items-center justify-center bg-[#F3F5F7] p-6 w-full md:w-1/2">
        <h2 className="text-3xl Poppins absolute top-1 lg:top-10">3legant.</h2>
        <img
          src={img}
          alt="Chair"
          className="w-full max-w-xl md:max-w-3lg lg:max-w-4xl object-contain"
        />
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex items-center justify-center bg-white p-6 w-full md:w-1/2">
        <div className="w-full max-w-md">
          <h3 className="text-h4 Poppins mb-2">Sign up</h3>
          <p className="Inter text-gray-600 mb-4">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-green-600 font-medium cursor-pointer"
            >
              Sign in
            </Link>
          </p>

          <form className="space-y-4 Inter">
            <Input type="text" placeholder="Your name" />
            <Input type="text" placeholder="Username" />
            <Input type="email" placeholder="Email address" />
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={handlePasswordVisibility}
              >
                {showPassword ? (
                  <img className="w-6" src="/view.png" alt="Hide Password" />
                ) : (
                  <img className="w-6" src="/eye.png" alt="Show Password" />
                )}
              </button>
            </div>

            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />I agree with{" "}
              <span className="font-semibold mx-1">Privacy Policy</span> and{" "}
              <span className="font-semibold">Terms of Use</span>
            </label>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded mt-2 hover:bg-gray-900"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupMain;
