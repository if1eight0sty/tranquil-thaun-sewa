import { useCallback, useEffect, useState } from "react";
import { RoomGrid } from "./components/grid";
import { GridItem } from "./components/grid-item";
import { getFeaturedRooms } from "./helper";
export default function AvailableRooms() {
  const [rooms, setRooms] = useState([]);
  const getRooms = useCallback(async () => {
    try {
      const rooms = await getFeaturedRooms();
      setRooms(rooms);
    } catch {
      throw new Error("Error fetching rooms");
    }
  }, []);
  useEffect(() => {
    getRooms();
  }, [getRooms]);

  return (
    <RoomGrid className="max-w-4xl mx-auto">
      {Array.isArray(rooms) &&
        rooms.map((item, i) => (
          <GridItem
            key={i}
            image={item.images?.[0]}
            address={item.address}
            price={item.price}
          />
        ))}
    </RoomGrid>
  );
}
