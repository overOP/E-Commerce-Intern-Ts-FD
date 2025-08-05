import { Navigate, useNavigate } from "react-router";
import Input from "../../Input";
import img from "../../../assets/Img/R.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { AxiosError } from "axios";
import { http } from "../../../config/Axios";
import { toast } from "react-toastify";

type FormValues = {
  identifier: string;
  password: string;
  remember: boolean;
};

const SigninMain = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const isAuthenticated = localStorage.getItem("accessToken");
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await http.post("/api/user/signin", {
        identifier: data.identifier,
        password: data.password,
      });
      toast.success(response.data.message);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("userData", JSON.stringify(response.data.user));
      navigate("/");
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      if (axiosError.response?.data?.message) {
        toast.error(axiosError.response.data.message);
      } else {
        toast.error("Signin failed.");
      }
    }
  };

  const handlePasswordVisibility = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="flex flex-col items-center justify-center bg-[#F3F5F7] p-6 w-full md:w-1/2">
        <h2 className="text-3xl Poppins absolute top-1 lg:top-10">3legant.</h2>
        <img
          src={img}
          alt="Chair"
          className="w-full max-w-xl md:max-w-3lg lg:max-w-4xl object-contain"
        />
      </div>

      <div className="flex items-center justify-center bg-white p-6 w-full md:w-1/2">
        <div className="w-full max-w-md">
          <h3 className="text-h4 Poppins mb-2">Sign In</h3>
          <p className="Inter text-gray-600 mb-4">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-green-600 font-medium cursor-pointer"
            >
              Sign up
            </a>
          </p>

          <form className="space-y-4 Inter" onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              placeholder="Your username or email address"
              {...register("identifier", {
                required: "Username or email is required",
              })}
            />
            {errors.identifier && (
              <p className="text-red-500 text-sm">
                {errors.identifier.message}
              </p>
            )}

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
              />
              <button
                type="button"
                onClick={handlePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <img
                  className="w-6"
                  src={showPassword ? "/view.png" : "/eye.png"}
                  alt="Toggle"
                />
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="mr-2"
                {...register("remember")}
              />
              <div className="flex justify-between w-full">
                <p>Remember me</p>
                <button
                  type="button"
                  onClick={() => navigate("/forgot-password")}
                  className="font-semibold text-green-600"
                >
                  Forgot password?
                </button>
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
