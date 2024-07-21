import Statistics from "./components/statistics";
import UserCard from "./components/user-card";
import Divider from "../../components/divider";
import RoomCard from "./components/room-card";
import toast from "react-hot-toast";
import { useCallback, useEffect, useState } from "react";
import { getLatestUsers } from "./helper";
export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const getUsers = useCallback(async () => {
    try {
      const users = await getLatestUsers();
      setUsers(users);
    } catch (error) {
      toast.error(error.message);
    }
  }, []);
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <div>
      <Statistics />
      <div className="gap-3 mt-5 md:flex">
        <div className="flex-1">
          <Divider title={"Users"} />
          <div className="h-[15em] overflow-y-auto">
            {users.map((user) => (
              <UserCard key={user._id} user={user} />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <Divider title={"Rooms"} />
          <div className=" h-[15em] overflow-y-auto ">
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
          </div>
        </div>
      </div>
    </div>
  );
}
