import Grid from "../../components/grid";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import RoomCards from "../../components/room-cards";
import { getAvailableRooms } from "../helper";
export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const getRooms = useCallback(async () => {
    try {
      const rooms = await getAvailableRooms();
      setRooms(rooms);
    } catch {
      toast.error("Error in fetching rooms");
    }
  }, []);
  useEffect(() => {
    getRooms();
  }, [getRooms]);
  return (
    <Grid className="max-w-5xl mx-auto">
      {Array.isArray(rooms) &&
        rooms.map((room) => <RoomCards key={room._id} room={room} />)}
    </Grid>
  );
}
