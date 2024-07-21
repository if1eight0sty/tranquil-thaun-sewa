import { Icon } from "@iconify/react";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getUsers, deleteUser, verifyKYC } from "./helper";
import { micah } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
export default function Users() {
  const [users, setUsers] = useState([]);

  const avatar = useCallback((seed) => {
    return createAvatar(micah, {
      size: 128,
      seed,
    }).toDataUri();
  }, []);
  const getUsersDetails = useCallback(async () => {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch {
      toast.error("Failed to fetch users");
    }
  }, []);
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      toast.success("User deleted successfully");
      getUsersDetails();
    } catch {
      toast.error("Failed to delete user");
    }
  };
  const handleVerifyKYC = async (user) => {
    try {
      await verifyKYC(user);
      toast.success("KYC verified successfully");
      getUsersDetails();
    } catch {
      toast.error("Failed to verify KYC");
    }
  };
  useEffect(() => {
    getUsersDetails();
  }, [getUsersDetails]);
  return (
    <div className="m-5 overflow-hidden border border-gray-200 rounded-lg shadow-md">
      <table className="w-full text-sm text-left text-gray-500 bg-white border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Name
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Address
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Phone
            </th>

            <th
              scope="col"
              className="px-6 py-4 font-medium text-gray-900"
            ></th>
          </tr>
        </thead>
        <tbody className="border-t border-gray-100 divide-y divide-gray-100">
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user) => (
              <tr className="hover:bg-gray-50" key={user._id}>
                <th className="flex items-center gap-3 px-6 py-4 font-normal text-gray-900">
                  <div className="relative w-10 h-10">
                    <img
                      className="object-cover object-center w-full h-full rounded-full"
                      src={avatar(user.name)}
                      alt=""
                    />
                    <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full ring ring-white"></span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-700 line-clamp-1 max-w-[15em] capitalize">
                      {user.name}
                    </div>
                    <div className="font-medium text-gray-700 line-clamp-1 max-w-[15em]">
                      {user.email}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-green-600 rounded-full bg-green-50">
                    {user.address}
                  </span>
                </td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
                    <button
                      disabled={user.canPost}
                      title="verify kyc"
                      onClick={() => handleVerifyKYC(user._id)}
                    >
                      <Icon
                        icon="mage:tag-check-fill"
                        className="text-green-500 "
                        width={25}
                      />
                    </button>
                    <button onClick={() => handleDelete(user._id)}>
                      <Icon
                        icon="ic:baseline-delete"
                        className="text-red-500 "
                        width={25}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-4 text-center">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
