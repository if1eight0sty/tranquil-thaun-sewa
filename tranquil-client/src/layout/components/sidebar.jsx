import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavItem from "./nav-item";
import { logout } from "../helper";
import toast from "react-hot-toast";
export default function Sidebar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const [selected, setSelected] = useState(0);
  const handleLogoutClick = async () => {
    try {
      const response = await logout();
      if (response.status !== 200) throw new Error(response.message);
      toast.success("Logged out successfully");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      navigate("/login");
    } catch {
      toast.error("Failed to logout");
    }
  };
  return (
    <nav className="flex flex-col items-center h-full gap-2 p-4 w-fit bg-slate-950">
      <Link
        to={"/dashboard"}
        className="mb-2 cursor-pointer select-none"
        title="Tranquil"
      >
        <Icon icon="cbi:living-room" width={40} className="text-white" />
      </Link>
      <div className="flex flex-col justify-center flex-1 gap-3">
        {user?.role?.includes("admin") && (
          <>
            <Link to={"/dashboard"}>
              <NavItem
                selected={selected === 0}
                id={0}
                setSelected={setSelected}
              >
                <Icon
                  icon="mage:dashboard-3-fill"
                  width={25}
                  className="text-white"
                />
              </NavItem>
            </Link>
            <Link to={"/dashboard/view-users"}>
              <NavItem
                selected={selected === 1}
                id={1}
                setSelected={setSelected}
              >
                <Icon
                  icon="heroicons:users-16-solid"
                  width={25}
                  className="text-white"
                />
              </NavItem>
            </Link>
          </>
        )}

        <Link to={"/dashboard/view-rooms"}>
          <NavItem selected={selected === 2} id={2} setSelected={setSelected}>
            <Icon icon="cbi:roomsattic" width={25} className="text-white" />
          </NavItem>
        </Link>
        <div onClick={handleLogoutClick}>
          <NavItem selected={selected === 2} id={2} setSelected={setSelected}>
            <Icon
              icon="solar:logout-2-bold"
              width={25}
              className="text-white"
            />
          </NavItem>
        </div>
      </div>
    </nav>
  );
}
