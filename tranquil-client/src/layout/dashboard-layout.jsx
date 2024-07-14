import { Icon } from "@iconify/react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen max-h-screen bg-slate-900 text-slate-100">
      <Sidebar />
      <div className="w-full">
        <header className="py-4 pl-6 pr-20 @[30em]:px-6 @[50em]:px-10 @[1300px]:px-16 @[1300px]:py-3 border-b sticky top-0 z-10 ">
          <nav className="flex items-center justify-between">
            {/* Account */}
            <h1 className="text-xl font-semibold">Hi, User!</h1>
            <div className="border rounded-full border-[#2e2e2e] p-[3px] group relative">
              <span title="Account" className="cursor-pointer select-none">
                <Icon icon="memory:user" width={20} />
              </span>
              {/* Account dropdown */}
              {/* <div className="absolute top-6 -right-1 group-hover:block hover:block w-[7em] rounded-sm hidden bg-slate-800">
                <ul className="grid gap-1 px-3 pb-3 mt-3">
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>

                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <p className="cursor-pointer">Settings</p>
                  </li>
                </ul>
              </div> */}
            </div>
          </nav>
        </header>
        <div className="px-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
