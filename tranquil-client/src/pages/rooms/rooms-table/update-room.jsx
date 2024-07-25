import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { getRoom } from "../helper";
import { updateRoom } from "./helper";
export default function UpdateRoom() {
  const { id } = useParams();
  const [roomData, setRoomData] = useState({
    title: "",
    description: "",
    price: "",
    images: [],
  });
  const getRoomDetails = useCallback(async () => {
    try {
      const room = await getRoom(id);
      setRoomData({
        title: room.title,
        description: room.description,
        price: room.price,
        images: room.images,
      });
    } catch {
      toast.error("Error in fetching room");
    }
  }, [id]);
  const handleOnChange = (e) => {
    if (e.target.name === "images") {
      setRoomData({ ...roomData, images: e.target.files });
      return;
    }
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", roomData.title);
    formData.append("description", roomData.description);
    formData.append("price", roomData.price);
    for (let i = 0; i < roomData.images.length; i++) {
      formData.append("images", roomData.images[i]);
    }
    const isSuccess = await updateRoom(id, formData);
    if (isSuccess) {
      toast.success("Room updates successfully");
      setRoomData({
        title: "",
        description: "",
        price: "",
        images: [],
      });
    }
  };

  useEffect(() => {
    getRoomDetails();
  }, [getRoomDetails]);
  return (
    <form
      onSubmit={handleOnSubmit}
      className="space-y-4 text-gray-100 max-w-[25em] border bg-gray-700 p-5 mt-5 rounded"
    >
      <h3 className="text-xl font-semibold">Update Room</h3>
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
          className="block w-full px-3 py-2 leading-6 text-gray-900 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50"
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
          className="block w-full px-3 py-2 leading-6 text-gray-900 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50"
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
          className="block w-full px-3 py-2 leading-6 text-gray-900 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50"
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
          className="block w-full px-3 py-2 leading-6 text-gray-100 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50 "
        />
      </div>
      <div className="flex justify-end gap-x-5">
        <button className="px-6 py-2 font-bold text-white bg-transparent border rounded-lg ">
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 font-bold text-white bg-transparent border rounded-lg "
        >
          Update
        </button>
      </div>
    </form>
  );
}
