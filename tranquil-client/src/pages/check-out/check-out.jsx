export default function CheckOut() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <div className="container px-4 py-16 mx-auto lg:px-8 xl:max-w-7xl">
        <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:text-gray-100">
          <div className="w-full max-w-lg p-5 mx-auto grow">
            <div className="space-y-6">
              <form className="space-y-6">
                <div className="p-4 space-y-6 border border-gray-200 rounded bg-gray-50 dark:border-gray-700/75 dark:bg-gray-900/50">
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
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold leading-6 text-white bg-blue-700 border border-blue-700 rounded-lg hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90"
                >
                  <span>Pay</span>
                </button>
              </form>
            </div>
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
