import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layout/dashboard-layout";
import UserLayout from "./layout/user-layout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import CheckOut from "./pages/check-out/check-out";
import Dashboard from "./pages/dashboard/dashboard";
import Home from "./pages/home/home";
import Room from "./pages/rooms/rooms-details/room";
import AddRoom from "./pages/rooms/rooms-table/add-room";
import Rooms from "./pages/rooms/rooms-table/rooms";
import UpdateRoom from "./pages/rooms/rooms-table/update-room";
import ViewRooms from "./pages/rooms/view-rooms/view-rooms";
import UserProfile from "./pages/user-profile/user-profile";
import Users from "./pages/users/users-table/users";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<UserLayout />}>
        <Route path="" element={<Home />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="room/:id" element={<Room />} />
        <Route path="view-rooms" element={<ViewRooms />} />
        <Route path="checkout/:room" element={<CheckOut />} />
      </Route>
      <Route path="/dashboard/" element={<DashboardLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="view-rooms" element={<Rooms />} />
        <Route path="view-users" element={<Users />} />
        <Route path="add-room" element={<AddRoom />} />
        <Route path="update-room/:id" element={<UpdateRoom />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="add-room" element={<AddRoom />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
