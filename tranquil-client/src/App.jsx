import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import UserLayout from "./layout/user-layout";
import Home from "./pages/home/home";
import UserProfile from "./pages/user-profile/user-profile";
import DashboardLayout from "./layout/dashboard-layout";
import ViewRooms from "./pages/rooms/view-rooms/view-rooms";
import Dashboard from "./pages/dashboard/dashboard";
import Rooms from "./pages/rooms/rooms-table/rooms";
import AddRoom from "./pages/rooms/rooms-table/add-room";
import RoomDetails from "./pages/rooms/rooms-details/room-details";
import CheckOut from "./pages/check-out/check-out";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<UserLayout />}>
        <Route path="" element={<Home />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="view-rooms" element={<ViewRooms />} />
        <Route path="room/:id" element={<RoomDetails />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="view-rooms" element={<Rooms />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="add-room" element={<AddRoom />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
