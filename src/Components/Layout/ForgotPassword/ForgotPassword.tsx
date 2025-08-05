import { useForm } from "react-hook-form";
import { http } from "../../../config/Axios";
import { toast } from "react-toastify";

type FormValues = {
  email: string;
};

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await http.post("/api/user/forgot-password", data);
      toast.success(res.data.message);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <input
        {...register("email", { required: "Email is required" })}
        placeholder="Enter your email"
        className="w-full p-2 border rounded"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      <button className="bg-black text-white px-4 py-2 rounded" type="submit">
        Send Reset Link
      </button>
    </form>
  );
};

export default ForgotPassword;
