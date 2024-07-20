import { Icon } from "@iconify/react";
export default function Rooms() {
  return (
    <div className="m-5 overflow-hidden border border-gray-200 rounded-lg shadow-md">
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
          <tr className="hover:bg-gray-50">
            <th className="flex items-center gap-3 px-6 py-4 font-normal text-gray-900">
              <div className="relative w-10 h-10">
                <img
                  className="object-cover object-center w-full h-full rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full ring ring-white"></span>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-700 line-clamp-1 max-w-[15em]">
                  Address
                </div>
              </div>
            </th>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-green-600 rounded-full bg-green-50">
                Biratnagar
              </span>
            </td>
            <td className="px-6 py-4">13000</td>
            <td className="px-6 py-4">
              <div className="flex justify-end gap-4">
                <p className="cursor-pointer">
                  <Icon icon="akar-icons:edit" className="w-5 h-5" />
                </p>
                <p className="cursor-pointer">
                  <Icon
                    icon="ic:baseline-delete"
                    className="w-5 h-5 text-red-500"
                  />
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
