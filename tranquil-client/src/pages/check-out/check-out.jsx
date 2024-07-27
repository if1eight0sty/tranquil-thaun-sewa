// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./checkout-form";
// import { loadStripe } from "@stripe/stripe-js";
import { useCallback, useEffect, useState } from "react";
// import { createPayment } from "./helper";
import { useParams } from "react-router-dom";
import CODCheckoutForm from "./cod-checkout-form";
import { getRoomInfo } from "../rooms/rooms-details/helper";

export default function CheckOut() {
  const { room } = useParams();
  // const stripePromise = loadStripe(
  //   `${import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}`
  // );

  const [roomDetails, setRoomDetails] = useState({});
  const getRoomDetails = useCallback(async () => {
    try {
      const roomDetail = await getRoomInfo(room);
      setRoomDetails(roomDetail);
    } catch {
      throw new Error("Error fetching room info");
    }
  }, [room]);
  useEffect(() => {
    getRoomDetails();
  }, [getRoomDetails]);
  // const [clientSecret, setClientSecret] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const getSecret = useCallback(async () => {
    try {
      // const secret = await createPayment(room);
      // setClientSecret(secret);
    } catch {
      throw new Error("Payment failed");
    }
  }, []);
  useEffect(() => {
    getSecret();
  }, [getSecret]);
  // const options = {
  //   mode: "payment",
  //   amount: 1099,
  //   currency: "usd",
  //   clientSecret,
  // };
  return (
    <div className="text-white bg-gray-900">
      <div className="container px-4 py-16 mx-auto lg:px-8 xl:max-w-7xl">
        <div className="flex justify-between">
          <div className="m-5 space-x-5">
            <button
              onClick={() => setPaymentMethod("cod")}
              className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              COD
            </button>
            <button
              onClick={() => setPaymentMethod("stripe")}
              className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Stripe
            </button>
          </div>
          <p>The payable amount is: Rs {roomDetails?.price}</p>
        </div>
        <div className="flex flex-col overflow-hidden bg-gray-800 rounded-lg shadow-sm">
          <div className="w-full max-w-lg p-5 mx-auto grow">
            {/* {paymentMethod === "stripe" && (
              <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
              </Elements>
            )} */}
            {paymentMethod === "cod" && <CODCheckoutForm room={roomDetails} />}

            {/* Footer */}
            <div className="my-5 text-center">
              <p className="text-sm font-medium text-gray-400">
                Thanks for using our service
              </p>
            </div>
            {/* Footer */}
          </div>
        </div>
        {/* END Box */}
      </div>
    </div>
  );
}
