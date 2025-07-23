export const PasswordForm = () => (
    <form className="space-y-4 mt-10">
      <h3 className="text-xl font-semibold">Password</h3>
      <div>
        <label className="block text-sm font-medium mb-1">Old password</label>
        <input type="password" className="w-full border rounded-md p-2" placeholder="Old password" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">New password</label>
        <input type="password" className="w-full border rounded-md p-2" placeholder="New password" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Repeat new password</label>
        <input type="password" className="w-full border rounded-md p-2" placeholder="Repeat new password" />
      </div>
      <button type="submit" className="bg-black text-white px-5 py-2 rounded-md">
        Save changes
      </button>
    </form>
  );
  