// import { useCallback, useEffect } from "react";
// import toast from "react-hot-toast";
import { Navigate, Outlet } from "react-router-dom";
import AppBar from "./components/app-bar";
import Footer from "./components/footer";
// import { getUser } from "./helper";
export default function UserLayout() {
  const token = localStorage.getItem("token");
  // const getUserInfo = useCallback(async () => {
  //   try {
  //     const res = await getUser();
  //     localStorage.setItem("user", JSON.stringify(res.user));
  //   } catch (error) {
  //     toast.error(error.message);
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("user");
  //     // window.location.href = "/login";
  //   }
  // }, []);
  // useEffect(() => {
  //   getUserInfo();
  // }, [getUserInfo]);
  return !token ? (
    <Navigate to={"/login"} />
  ) : (
    <>
      <AppBar />
      <div className="px-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
