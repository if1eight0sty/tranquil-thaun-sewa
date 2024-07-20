import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
export default function RoomDetails() {
  const { id } = useParams();
  useEffect(() => {}, [id]);
  return (
    <div className="px-4 py-8 lg:px-20 md:px-6 md:py-12 h-[calc(100dvh-5em)]">
      <div className="items-center justify-between lg:flex">
        <div className="lg:w-1/3">
          <h1 className="text-4xl font-semibold leading-9 text-gray-800">
            Indoor Interiors
          </h1>
          <p className="mt-4 text-base leading-6 text-gray-600">
            Get inspired by our curated selection of luxiwood interiors. We hope
            get inspired to have luxiwood interior yourself. You’ll find tips
            here where you can buy a lot of cool furniture.
          </p>

          <p className="mt-2 font-semibold">Rs. 13000</p>
          <button className="flex items-center text-base font-semibold leading-none text-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none md:mt-8 hover:underline">
            <span>Proceed to Rent</span>
            <Icon
              icon={"iconoir:fast-arrow-right"}
              width={20}
              className="ml-1"
            />
          </button>
        </div>
        <div className="mt-8 lg:w-7/12 lg:mt-0">
          <div className="w-full h-full bg-red-200">
            <img
              src="https://i.ibb.co/cbyDY74/pexels-max-vakhtbovych-6782351-1-1.png"
              alt="apartment design"
              className="hidden w-full sm:block"
            />
            <img
              src="https://i.ibb.co/ZVPGjGJ/pexels-max-vakhtbovych-6782351-1.png"
              alt="apartment design"
              className="block w-full sm:hidden"
            />
          </div>
          <div className="grid gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 lg:mt-8 md:mt-6">
            <img
              src="https://i.ibb.co/4Jrp5TB/pexels-max-vakhtbovych-6782370-1.png"
              className="w-full"
              alt="kitchen"
            />
            <img
              src="https://i.ibb.co/0Jv3FSy/pexels-max-vakhtbovych-6436799-1-1.png"
              className="w-full"
              alt="sitting room"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
