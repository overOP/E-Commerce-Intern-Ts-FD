export const AccountDetailsForm = () => (
    <form className="space-y-4">
      <h3 className="text-xl font-semibold">Account Details</h3>
  
      <div>
        <label className="block text-sm font-medium mb-1">First name *</label>
        <input type="text" className="w-full border rounded-md p-2" placeholder="First name" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Last name *</label>
        <input type="text" className="w-full border rounded-md p-2" placeholder="Last name" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Display name *</label>
        <input type="text" className="w-full border rounded-md p-2" placeholder="Display name" />
        <p className="text-sm text-gray-500">This will be how your name will be displayed in the account section and in reviews</p>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email *</label>
        <input type="email" className="w-full border rounded-md p-2" placeholder="Email" />
      </div>
    </form>
  );
  