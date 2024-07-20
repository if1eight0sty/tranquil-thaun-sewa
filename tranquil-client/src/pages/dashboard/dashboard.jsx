import Statistics from "./components/statistics";
import UserCard from "./components/user-card";
import Divider from "../../components/divider";
import RoomCard from "./components/room-card";
export default function Dashboard() {
  return (
    <div>
      <Statistics />
      <div className="gap-3 mt-5 md:flex">
        <div className="flex-1">
          <Divider title={"Users"} />
          <div className="h-[15em] overflow-y-auto">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
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
