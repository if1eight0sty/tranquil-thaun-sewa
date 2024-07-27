import { useState } from "react";
import { applyKYC } from "../helper";
import toast from "react-hot-toast";
import { getUser } from "../../../layout/helper";
export default function KycForm({ setFlag }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [kycData, setKycData] = useState({
    name: "",
    address: "",
    phone: "",
    email: user.email,
  });
  const handleOnChange = (e) => {
    setKycData({ ...kycData, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!kycData.name || !kycData.address || !kycData.phone) {
      return toast.error("All fields are required");
    }
    try {
      const response = await applyKYC(kycData);
      if (response.status !== 200) throw new Error(response.message);
      await getUser();
      setKycData({ name: "", address: "", phone: "", email: user.email });
      setFlag(false);
      toast.success("KYC applied successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="space-y-4 text-gray-100 max-w-[25em] border bg-gray-700 p-5 mt-5 rounded"
    >
      <h3 className="text-xl font-semibold">Add KYC</h3>
      <div className="space-y-1">
        <label htmlFor="name" className="font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={kycData.name}
          onChange={handleOnChange}
          placeholder="Enter name"
          className="block w-full px-3 py-2 leading-6 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50"
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
          value={kycData.email}
          disabled
          placeholder="Enter address"
          className="block w-full px-3 py-2 leading-6 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50 "
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="phone" className="font-medium">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={kycData.phone}
          onChange={handleOnChange}
          placeholder="Enter phone"
          className="block w-full px-3 py-2 leading-6 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50 "
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
          value={kycData.address}
          onChange={handleOnChange}
          placeholder="Enter address"
          className="block w-full px-3 py-2 leading-6 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50 "
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
