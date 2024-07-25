import Divider from "../../../components/divider";
import Review from "./review";
import RoomDetails from "./room-details";

export default function Room() {
  return (
    <div>
      <RoomDetails />
      <Divider />
      <Review />
    </div>
  );
}
