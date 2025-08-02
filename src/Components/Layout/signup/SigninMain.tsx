import { Link } from "react-router";
import img from "../../../assets/Img/R.png";
import Input from "../../Input";
import { useState } from "react";

const SigninMain = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowPassword((prev) => !prev);
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

      {/* Right Side - Signin Form */}
      <div className="flex items-center justify-center bg-white p-6 w-full md:w-1/2">
        <div className="w-full max-w-md">
          <h3 className="text-h4 Poppins mb-2">Sign In</h3>
          <p className="Inter text-gray-600 mb-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-green-600 font-medium cursor-pointer">
              Sign up
            </Link>
          </p>

          <form className="space-y-4 Inter">
            <Input type="text" placeholder="Your username or email address" />
            
            {/* Password Input with Show/Hide toggle */}
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <button
                type="button"
                onClick={handlePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <img className="w-6" src="/view.png" alt="Hide Password" />
                ) : (
                  <img className="w-6" src="/eye.png" alt="Show Password" />
                )}
              </button>
            </div>

            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              <div className="flex justify-between w-full">
                <p>Remember me</p>
                <button className="font-semibold">Forgot password?</button>
              </div>
            </label>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded mt-2 hover:bg-gray-900"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninMain;
