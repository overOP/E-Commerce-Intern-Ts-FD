import { Navigate, useNavigate } from "react-router";
import img from "../../../assets/Img/R.png";
import Input from "../../Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { AxiosError } from "axios";
import { http } from "../../../config/Axios";
import { toast } from "react-toastify";

type FormValues = {
  yourname: string;
  username: string;
  email: string;
  password: string;
  agreed: boolean;
};

const SignupMain = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  // ✅ Always call hooks at the top level
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
    if (!data.agreed) {
      setFormError("You must agree to the Privacy Policy and Terms of Use.");
      return;
    }

    setFormError("");

    try {
      const response = await http.post("/api/user/signup", data);
      toast.success(response.data.message);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("userData", JSON.stringify(response.data.user));
      navigate("/");
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      if (axiosError.response?.data?.message) {
        toast.error(axiosError.response.data.message);
      } else {
        toast.error("Signup failed.");
      }
    }
  };

  const handlePasswordVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="flex flex-col items-center justify-center bg-[#F3F5F7] p-6 w-full md:w-1/2">
        <h2 className="text-3xl Poppins absolute top-1 lg:top-10">3legant.</h2>
        <img src={img} alt="Chair" className="w-full max-w-xl object-contain" />
      </div>

      <div className="flex items-center justify-center bg-white p-6 w-full md:w-1/2">
        <div className="w-full max-w-md">
          <h3 className="text-h4 Poppins mb-2">Sign up</h3>
          <p className="Inter text-gray-600 mb-4">
            Already have an account?{" "}
            <a href="/signin" className="text-green-600 font-medium">
              Sign in
            </a>
          </p>

          <form className="space-y-4 Inter" onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              placeholder="Your name"
              {...register("yourname", { required: "Name is required" })}
            />
            {errors.yourname && <p className="text-red-500 text-sm">{errors.yourname.message}</p>}

            <Input
              type="text"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

            <Input
              type="email"
              placeholder="Email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

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
                  alt="Toggle Password"
                />
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="mr-2"
                {...register("agreed", { required: true })}
              />
              I agree with <span className="font-semibold mx-1">Privacy Policy</span> and{" "}
              <span className="font-semibold">Terms of Use</span>
            </label>
            {formError && <p className="text-red-500 text-sm">{formError}</p>}

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
