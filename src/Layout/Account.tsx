import { Outlet } from "react-router";
import { AccountDropdown } from "../Components/Account/AccountDropdown";

const Account = () => {
  return (
    <>
      <main className="min-h-screen px-6 py-10 bg-white">
        <h1 className="text-3xl font-bold text-center mb-10">My Account</h1>
        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          <AccountDropdown />
          <div className="flex-1 space-y-10">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default Account;
