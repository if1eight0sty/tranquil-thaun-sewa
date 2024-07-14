import { Outlet } from "react-router-dom";
import AppBar from "./components/app-bar";

export default function UserLayout() {
  return (
    <>
      <AppBar />
      <div className="px-20">
        <Outlet />
      </div>
    </>
  );
}
