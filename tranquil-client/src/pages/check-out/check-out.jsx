import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkout-form";
import { loadStripe } from "@stripe/stripe-js";
import { useCallback, useEffect, useState } from "react";
import { createPayment } from "./helper";
import { useParams } from "react-router-dom";

export default function CheckOut() {
  const stripePromise = loadStripe(
    `${import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}`
  );
  const { room } = useParams();
  const [clientSecret, setClientSecret] = useState("");
  const getSecret = useCallback(async () => {
    try {
      const secret = await createPayment(room);
      setClientSecret(secret);
    } catch {
      throw new Error("Payment failed");
    }
  }, [room]);
  useEffect(() => {
    getSecret();
  }, [getSecret]);
  const options = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
    clientSecret,
  };
  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <div className="container px-4 py-16 mx-auto lg:px-8 xl:max-w-7xl">
        <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:text-gray-100">
          <div className="w-full max-w-lg p-5 mx-auto grow">
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm />
            </Elements>
            {/* END Checkout Form */}

            {/* Footer */}
            <div className="my-5 text-center">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
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
