import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { getRooms, deleteRoom } from "./helper";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const getAllRooms = useCallback(async () => {
    try {
      const rooms = await getRooms();
      setRooms(rooms);
    } catch {
      toast.error("Error in fetching rooms");
    }
  }, []);
  const handleDeleteClick = useCallback(
    async (id) => {
      try {
        const isSuccess = await deleteRoom(id);
        if (isSuccess) {
          toast.success("Room deleted successfully");
          getAllRooms();
        }
      } catch {
        toast.error("Error in deleting room");
      }
    },
    [getAllRooms]
  );
  useEffect(() => {
    getAllRooms();
  }, [getAllRooms]);
  return (
    <div className="px-6 mt-3 space-y-5">
      <Link
        to="/dashboard/add-room"
        className="px-5 py-2 mt-5 font-bold text-white bg-transparent border rounded"
      >
        Add
      </Link>
      <div className="overflow-hidden border border-gray-200 rounded-lg shadow-md bg-slate-200 h-[calc(100dvh-10em)] overflow-y-auto">
        <table className="w-full text-sm text-left text-gray-500 bg-white border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Room
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Address
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Rate(Rs)
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900"
              ></th>
            </tr>
          </thead>
          <tbody className="border-t border-gray-100 divide-y divide-gray-100">
            {Array.isArray(rooms) && rooms.length > 0 ? (
              rooms.map((room) => (
                <tr key={room._id} className="hover:bg-gray-50">
                  <th className="flex items-center gap-3 px-6 py-4 font-normal text-gray-900">
                    <div className="relative w-10 h-10 border">
                      <img
                        className="object-cover object-center w-full h-full rounded-full"
                        src={room.images?.[0]}
                        alt={room.title}
                      />
                      <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full ring ring-white"></span>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-700">
                        <p className="capitalize">{room.title}</p>
                        {room?.seller.name && (
                          <p className="text-xs text-gray-400">
                            {room.seller.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-green-600 rounded-full bg-green-50">
                      {room.address ?? ""}
                    </span>
                  </td>
                  <td className="px-6 py-4">{room?.price}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-4">
                      <Link to={`/room/${room._id}`} className="cursor-pointer">
                        <Icon
                          icon="ic:baseline-info"
                          className="w-5 h-5 text-blue-700"
                        />
                      </Link>
                      <Link
                        to={`/dashboard/update-room/${room._id}`}
                        className="cursor-pointer"
                      >
                        <Icon icon="akar-icons:edit" className="w-5 h-5" />
                      </Link>
                      <p
                        className="cursor-pointer"
                        onClick={() => handleDeleteClick(room._id)}
                      >
                        <Icon
                          icon="ic:baseline-delete"
                          className="w-5 h-5 text-red-500"
                        />
                      </p>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>No rooms found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
