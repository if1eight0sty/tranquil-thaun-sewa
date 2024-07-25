import { Link } from "react-router-dom";
import roomImage from "../../../assets/images/room-1.png";
export default function RoomCard({ room }) {
  return (
    <Link
      to={`/room/${room?._id}`}
      className="relative flex items-center gap-4 p-4 mx-0 mt-4 overflow-hidden bg-transparent shadow-none rounded-xl bg-clip-border w-full max-w-[26rem] border border-gray-600"
    >
      <img
        src={room.images?.[0] || roomImage}
        alt="Tania Andrew"
        className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center border border-gray-600"
      />
      <div className="flex w-full flex-col gap-0.5">
        <div className="flex items-center justify-between">
          <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            <span className="max-w-[20em] line-clamp-1">{room.title}</span>
            <span>Rs. {room.price}</span>
          </h5>
        </div>
      </div>
    </Link>
  );
}
