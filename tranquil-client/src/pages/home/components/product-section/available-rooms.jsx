import room1 from "../../../../assets/images/room-1.png";
import room5 from "../../../../assets/images/room-5.png";
import room6 from "../../../../assets/images/room-6.png";
import room7 from "../../../../assets/images/room-7.png";
import room8 from "../../../../assets/images/room-8.png";
import room9 from "../../../../assets/images/room-9.png";
import { RoomGrid } from "./components/grid";
import { GridItem } from "./components/grid-item";

export default function AvailableRooms() {
  return (
    <RoomGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <GridItem
          key={i}
          image={item.image}
          address={item.address}
          price={item.price}
        />
      ))}
    </RoomGrid>
  );
}
const items = [
  {
    title: "The Dawn of Innovation",
    image: room5,
    price: 900,
    address: "Myanmar (Burma)",
  },
  {
    title: "The Digital Revolution",
    image: room6,
    price: 1300,
    address: "Faroe Islands",
  },
  {
    title: "The Art of Design",
    image: room7,
    price: 1500,
    address: "Eritrea",
  },
  {
    title: "The Power of Communication",
    image: room8,
    price: 1300,
    address: "Sint Maarten",
  },
  {
    title: "The Pursuit of Knowledge",
    image: room9,
    price: 1800,
    address: "British Indian Ocean Territory",
  },
  {
    title: "The Joy of Creation",
    image: room1,
    price: 2500,
    address: "Cocos (Keeling) Islands",
  },
];
