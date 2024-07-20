import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import UserLayout from "./layout/user-layout";
import Home from "./pages/home/home";
import UserProfile from "./pages/user-profile/user-profile";
import DashboardLayout from "./layout/dashboard-layout";
import ViewRooms from "./pages/rooms/view-rooms/view-rooms";
import Dashboard from "./pages/dashboard/dashboard";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<UserLayout />}>
        <Route path="" element={<Home />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="view-rooms" element={<ViewRooms />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="profile" element={<UserProfile />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
