import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { createPayment } from "./helper";
export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { room } = useParams();
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (elements == null) {
      return;
    }
    const { error: submitError } = await elements.submit(room);
    if (submitError) {
      setErrorMessage(submitError.message);
      return;
    }

    const clientSecret = await createPayment();

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "http://localhost:5173",
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <PaymentElement />
      {/* <div className="p-4 space-y-6 border border-gray-200 rounded bg-gray-50 dark:border-gray-700/75 dark:bg-gray-900/50">
                  <div className="space-y-1">
                    <input
                      type="text"
                      id="phone_number"
                      name="phone_number"
                      placeholder="Enter phone number"
                      className="block w-full px-5 py-3 leading-6 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="p-4 space-y-6 border border-gray-200 rounded bg-gray-50 dark:border-gray-700/75 dark:bg-gray-900/50">
                  <div className="space-y-1">
                    <label htmlFor="card_name" className="font-medium">
                      Name on card
                    </label>
                    <input
                      type="text"
                      id="card_name"
                      name="card_name"
                      className="block w-full px-5 py-3 leading-6 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="card_number" className="font-medium">
                      Card number
                    </label>
                    <input
                      type="text"
                      id="card_number"
                      name="card_number"
                      className="block w-full px-5 py-3 leading-6 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-6 sm:flex sm:gap-3 sm:space-y-0">
                    <div className="space-y-1 grow">
                      <label htmlFor="card_exp" className="font-medium">
                        Expiration date (MM/YY)
                      </label>
                      <input
                        type="text"
                        id="card_exp"
                        name="card_exp"
                        className="block w-full px-5 py-3 leading-6 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-1 sm:w-40">
                      <label htmlFor="card_cvc" className="font-medium">
                        CVC
                      </label>
                      <input
                        type="text"
                        id="card_cvc"
                        name="card_cvc"
                        className="block w-full px-5 py-3 leading-6 placeholder-gray-500 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div> */}
      <button
        type="submit"
        className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold leading-6 text-white bg-blue-700 border border-blue-700 rounded-lg hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90"
      >
        <span>Pay</span>
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}
