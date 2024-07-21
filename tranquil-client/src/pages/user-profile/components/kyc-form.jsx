import { useState } from "react";

export default function KycForm() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [roomData, setRoomData] = useState({
    name: "",
    address: "",
    phone: "",
    email: user.email,
  });
  const handleOnChange = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="space-y-4 text-gray-100 max-w-[25em] border bg-gray-700 p-5 mt-5 rounded"
    >
      <h3 className="text-xl font-semibold">Add Room</h3>
      <div className="space-y-1">
        <label htmlFor="name" className="font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={roomData.name}
          onChange={handleOnChange}
          placeholder="Enter name"
          className="block w-full px-3 py-2 leading-6 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={roomData.email}
          disabled
          placeholder="Enter address"
          className="block w-full px-3 py-2 leading-6 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="address" className="font-medium">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={roomData.address}
          onChange={handleOnChange}
          placeholder="Enter address"
          className="block w-full px-3 py-2 leading-6 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
        />
      </div>

      <div className="flex justify-end gap-x-5">
        <button className="px-6 py-2 font-bold text-white bg-transparent border rounded-lg dark:border-white">
          Clear
        </button>
        <button className="px-6 py-2 font-bold text-white bg-transparent border rounded-lg dark:border-white">
          Submit
        </button>
      </div>
    </form>
  );
}
