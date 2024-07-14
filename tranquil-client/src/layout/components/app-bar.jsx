import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
export default function AppBar() {
  const navigate = useNavigate();
  // Get user data from local storage
  const user = JSON.parse(localStorage.getItem("user"));
  // Handle logout button click event
  const handleLogoutClick = () => {
    // Remove user data from local storage
    localStorage.removeItem("user");

    // Navigate to login page
    navigate("/login");
  };
  return (
    <header className="py-4 px-20 text-[#2e2e2e]/80 @[30em]:px-6 @[50em]:px-10 @[1300px]:px-16 @[1300px]:py-3 border-b sticky top-0 z-10 bg-white ">
      <nav className="flex items-center justify-between px-4">
        {/* Logo */}
        <Link to={"/"} className="cursor-pointer select-none" title="Tranquil">
          <Icon icon="cbi:living-room" width={35} className="text-orange-600" />
        </Link>
        {/* Navigation */}
        <ul className="flex gap-x-3 font-semibold uppercase text-[.95rem]">
          <li>
            <Link to="/" className="outline-none">
              Home
            </Link>
          </li>
          <li>
            <Link to="/rooms" className="outline-none">
              Rooms
            </Link>
          </li>
          {user ? (
            <li className="" onClick={() => handleLogoutClick()}>
              <Link to="/login" className="outline-none">
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
        {/* Account */}
        <div className="border rounded-full border-[#2e2e2e] p-[3px] group relative">
          <span title="Account" className="cursor-pointer select-none">
            <Icon icon="memory:user" width={20} />
          </span>
          {/* Account dropdown */}
          <div className="absolute top-5 right-0 group-hover:block hover:block w-[7em] border-r border-l border-b rounded-sm hidden">
            <ul className="grid gap-1 px-3 pb-3 mt-3 bg-white">
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
          </div>
        </div>
      </nav>
    </header>
  );
}
