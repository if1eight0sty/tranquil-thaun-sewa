import { useState } from "react";
import { createCODPayment } from "./helper";
import toast from "react-hot-toast";
export default function CODCheckoutForm({ room }) {
  const [checkoutData, setCheckoutData] = useState({
    amount: room?.price,
    email: "",
    phone: "",
    months: 1,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCheckoutData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        amount: Number(room?.price) * Number(checkoutData.months || 1),
        email: checkoutData.email,
        phone: checkoutData.phone,
        type: "cod",
        months: checkoutData.months,
      };
      const res = await createCODPayment(room._id, data);
      if (res.status === 201) {
        toast.success("Payment successful");
        setCheckoutData({
          amount: room?.price,
          email: "",
          phone: "",
          months: 1,
        });
      }
    } catch {
      toast.error("Payment failed");
      throw new Error("Payment failed");
    }
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="p-4 space-y-6 border border-gray-200 rounded bg-gray-50 border-gray-700/75 bg-gray-900/50">
        <div className="space-y-1">
          <label htmlFor="card_name" className="font-medium">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            disabled
            value={`Rs. ${
              Number(room?.price) * Number(checkoutData.months || 1)
            }`}
            placeholder="Enter phone number"
            className="block w-full px-5 py-3 leading-6 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <div className="p-4 space-y-6 border border-gray-200 rounded bg-gray-50 dark:border-gray-700/75 dark:bg-gray-900/50">
        <div className="space-y-1">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={checkoutData.email}
            onChange={handleChange}
            className="block w-full px-5 py-3 leading-6 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className="font-medium">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={checkoutData.phone}
            onChange={handleChange}
            className="block w-full px-5 py-3 leading-6 placeholder-gray-400 border border-gray-200 rounded-lg focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 focus:border-blue-500"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="months" className="font-medium">
            Book for how many months?
          </label>
          <input
            type="number"
            id="months"
            name="months"
            value={checkoutData.months}
            onChange={handleChange}
            className="block w-full px-5 py-3 leading-6 placeholder-gray-400 border border-gray-200 rounded-lg focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 focus:border-blue-500"
          />
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold leading-6 text-white bg-blue-700 border border-blue-700 rounded-lg hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90"
      >
        <span>Pay</span>
      </button>
    </form>
  );
}
