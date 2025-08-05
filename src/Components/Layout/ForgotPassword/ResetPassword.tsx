import { useParams, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { http } from "../../../config/Axios";
import { toast } from "react-toastify";

type FormValues = {
  newPassword: string;
};

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      await http.post(`/api/user/reset-password/${token}`, data);
      toast.success("Password reset successfully.");
      navigate("/signin");
    } catch(error) {
      console.error(error);
      toast.error("Invalid or expired token.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <input
        {...register("newPassword", { required: "Password is required" })}
        type="password"
        placeholder="Enter new password"
        className="w-full p-2 border rounded"
      />
      {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword.message}</p>}

      <button className="bg-black text-white px-4 py-2 rounded" type="submit">
        Reset Password
      </button>
    </form>
  );
};

export default ResetPassword;
