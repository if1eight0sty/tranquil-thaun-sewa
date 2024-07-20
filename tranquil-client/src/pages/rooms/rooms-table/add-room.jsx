import { useState } from "react";

export default function AddRoom() {
  const [roomData, setRoomData] = useState({
    title: "",
    address: "",
    description: "",
    price: "",
    images: [],
  });
  const handleOnChange = (e) => {
    if (e.target.name === "images") {
      setRoomData({ ...roomData, images: e.target.files });
      return;
    }
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
        <label htmlFor="title" className="font-medium">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={roomData.title}
          onChange={handleOnChange}
          placeholder="Enter title"
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

      <div className="space-y-1">
        <label htmlFor="price" className="font-medium">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={roomData.price}
          onChange={handleOnChange}
          placeholder="Enter price eg: Rs 13000"
          className="block w-full px-3 py-2 leading-6 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="description" className="font-medium">
          Description
        </label>
        <textarea
          id="description"
          onChange={handleOnChange}
          name="description"
          value={roomData.description}
          style={{ resize: "none" }}
          placeholder="Enter description"
          className="block w-full px-3 py-2 leading-6 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="price" className="font-medium">
          Images
        </label>
        <input
          type="file"
          id="images"
          name="images"
          onChange={handleOnChange}
          multiple
          accept="image/*"
          className="block w-full px-3 py-2 leading-6 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
        />
      </div>
      <div className="flex justify-end gap-x-5">
        <button className="px-6 py-2 font-bold text-white bg-transparent border rounded-lg dark:border-white">
          Cancel
        </button>
        <button className="px-6 py-2 font-bold text-white bg-transparent border rounded-lg dark:border-white">
          Add
        </button>
      </div>
    </form>
  );
}
