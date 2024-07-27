import { Icon } from "@iconify/react";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRoomInfo } from "./helper";
export default function RoomDetails() {
  const { id } = useParams();
  const [roomDetails, setRoomDetails] = useState({});
  const getRoomDetails = useCallback(async () => {
    try {
      const room = await getRoomInfo(id);
      setRoomDetails(room);
    } catch {
      throw new Error("Error fetching room info");
    }
  }, [id]);
  useEffect(() => {
    getRoomDetails();
  }, [getRoomDetails]);
  return (
    <div className="px-4 py-8 lg:px-20 md:px-6 md:py-12 sm:h-[calc(100dvh-5em)]">
      <div className="items-center justify-between lg:flex">
        <div className="lg:w-1/3">
          <h1 className="text-4xl font-semibold leading-9 text-gray-800 capitalize">
            {roomDetails?.title}
          </h1>
          <p className="mt-4 text-base leading-6 text-gray-600">
            {roomDetails?.description}
          </p>

          <p className="mt-2 text-lg font-bold capitalize">
            {roomDetails?.address}
          </p>
          <p className="mt-2 font-semibold">Rs. {roomDetails?.price}</p>
          <Link
            to={`/checkout/${id}`}
            className="flex items-center text-base font-semibold leading-none text-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none md:mt-8 hover:underline"
          >
            <span>Proceed to Rent</span>
            <Icon
              icon={"iconoir:fast-arrow-right"}
              width={20}
              className="ml-1"
            />
          </Link>
        </div>
        <div className="mt-8 lg:w-7/12 lg:mt-0">
          <div className="w-full h-full bg-red-200">
            <img
              src={
                roomDetails?.images?.[0] ??
                "https://i.ibb.co/cbyDY74/pexels-max-vakhtbovych-6782351-1-1.png"
              }
              alt="apartment design"
              className="hidden w-full sm:block h-[13em] object-cover"
            />
            <img
              src={
                roomDetails?.images?.[0] ??
                "https://i.ibb.co/cbyDY74/pexels-max-vakhtbovych-6782351-1-1.png"
              }
              alt="apartment design"
              className="block w-full sm:hidden h-[10em] object-cover"
            />
          </div>
          <div className="grid gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 lg:mt-8 md:mt-6">
            <img
              src={
                roomDetails?.images?.[1] ??
                "https://i.ibb.co/4Jrp5TB/pexels-max-vakhtbovych-6782370-1.png"
              }
              className="w-full h-[12em] object-cover"
              alt="kitchen"
            />
            <img
              src={
                roomDetails?.images?.[2] ??
                "https://i.ibb.co/4Jrp5TB/pexels-max-vakhtbovych-6782370-1.png"
              }
              className="w-full h-[12em] object-cover"
              alt="sitting room"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
