import Statistics from "./components/statistics";
import UserCard from "./components/user-card";
import Divider from "../../components/divider";
import RoomCard from "./components/room-card";
import toast from "react-hot-toast";
import { useCallback, useEffect, useState } from "react";
import { getLatestUsers, getLatestRooms } from "./helper";
import { Navigate } from "react-router-dom";
export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const getUsers = useCallback(async () => {
    try {
      const users = await getLatestUsers();
      setUsers(users);
    } catch (error) {
      toast.error(error.message);
    }
  }, []);
  const getRooms = useCallback(async () => {
    try {
      const users = await getLatestRooms();
      setRooms(users);
    } catch (error) {
      toast.error(error.message);
    }
  }, []);
  useEffect(() => {
    getUsers();
    getRooms();
  }, [getUsers, getRooms]);

  return user?.role?.includes("admin") ? (
    <div>
      <Statistics />
      <div className="gap-3 mt-5 md:flex">
        <div className="flex-1">
          <Divider title={"Users"} />
          <div className="h-[15em] overflow-y-auto">
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user) => <UserCard key={user._id} user={user} />)
            ) : (
              <p className="text-center">No users found</p>
            )}
          </div>
        </div>
        <div className="flex-1">
          <Divider title={"Rooms"} />
          <div className=" h-[15em] overflow-y-auto ">
            {Array.isArray(rooms) && rooms.length > 0 ? (
              rooms.map((room) => <RoomCard key={room._id} room={room} />)
            ) : (
              <p className="text-center">No rooms found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={"/dashboard/view-rooms"} />
  );
}
