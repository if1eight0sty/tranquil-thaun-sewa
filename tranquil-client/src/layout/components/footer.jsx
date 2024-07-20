import { Icon } from "@iconify/react";
export default function Footer() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen mt-10 bg-zinc-800">
      <div className="flex flex-col w-full px-4 text-white md:w-2/3">
        <div className="w-full font-bold text-7xl">
          <h1 className="w-full md:w-2/3">
            How can we help you. get your Rent
          </h1>
        </div>
        <div className="flex flex-col mt-8 md:flex-row md:justify-between">
          <p className="w-full text-gray-400 md:w-2/3">
            To get best room for rent, you can contact us. We will help you{" "}
            <span className="block">to find the best room for you.</span>
          </p>
          <div className="pt-6 w-44 md:pt-0">
            <a className="flex items-center justify-center px-10 py-3 text-center bg-red-500 rounded-lg shadow">
              Contact US
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between mt-24 mb-12">
            <div className="">
              <Icon icon="cbi:living-room" width={35} className="text-white" />
            </div>
            <a className="hidden text-gray-600 uppercase cursor-pointer md:block hover:text-white">
              Home
            </a>
            <a className="hidden text-gray-600 uppercase cursor-pointer md:block hover:text-white">
              Rooms
            </a>
            <a className="hidden text-gray-600 uppercase cursor-pointer md:block hover:text-white">
              Profile
            </a>
            <div className="flex flex-row items-center justify-between space-x-8">
              <a>
                <Icon icon={"mage:facebook-circle"} width={25} />
              </a>
              <a></a>
              <Icon icon={"lucide:instagram"} width={25} />
              <a></a>
              <Icon icon={"bi:youtube"} width={25} />
            </div>
          </div>
          <hr className="border-gray-600" />
          <p className="w-full my-12 text-center text-gray-600">
            Copyright © 2020 Tranquil
          </p>
        </div>
      </div>
    </div>
  );
}
