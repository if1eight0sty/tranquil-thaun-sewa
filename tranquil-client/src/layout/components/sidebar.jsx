import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./nav-item";
export default function Sidebar() {
  const [selected, setSelected] = useState(0);
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
        <Link to={"/dashboard"}>
          <NavItem selected={selected === 0} id={0} setSelected={setSelected}>
            <Icon
              icon="mage:dashboard-3-fill"
              width={25}
              className="text-white"
            />
          </NavItem>
        </Link>
        <Link to={"/dashboard/view-users"}>
          <NavItem selected={selected === 1} id={1} setSelected={setSelected}>
            <Icon
              icon="heroicons:users-16-solid"
              width={25}
              className="text-white"
            />
          </NavItem>
        </Link>
        <Link to={"/dashboard/view-rooms"}>
          <NavItem selected={selected === 2} id={2} setSelected={setSelected}>
            <Icon icon="cbi:roomsattic" width={25} className="text-white" />
          </NavItem>
        </Link>
      </div>
    </nav>
  );
}
