import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PasswordForm = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match.");
      return;
    }
    toast.success("Password updated successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-10">
      <h3 className="text-xl font-semibold">Password</h3>
      <div>
        <label className="block text-sm font-medium mb-1">Old password</label>
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full border rounded-md p-2"
          placeholder="Old password"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">New password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full border rounded-md p-2"
          placeholder="New password"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Repeat new password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full border rounded-md p-2"
          placeholder="Repeat new password"
        />
      </div>
      <button type="submit" className="bg-black text-white px-5 py-2 rounded-md">
        Save Changes
      </button>
      <div className="text-sm text-gray-500 mt-2">This may take a few moments.</div>
    </form>
  );
};
