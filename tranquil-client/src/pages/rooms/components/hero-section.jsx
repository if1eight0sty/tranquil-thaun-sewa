import roomExplore from "../../../assets/images/login-page-image.png";
export default function HeroSection() {
  return (
    <div className="container relative flex flex-col gap-16 px-4 py-16 mx-auto text-center lg:flex-row lg:gap-0 lg:px-8 lg:py-32 lg:text-left xl:max-w-7xl">
      <div className="lg:flex lg:w-1/2 lg:items-center">
        <div>
          <h1 className="mb-4 text-4xl font-black text-black">
            Next generation
            <span className="pl-2 text-blue-600 dark:text-blue-500">
              Room Finder
            </span>
          </h1>
          <h2 className="text-xl font-medium leading-relaxed text-gray-700 ">
            Super fast and easy to find a room for rent.
            <span className="block">Get started now!</span>
          </h2>
          <div className="flex flex-col justify-center gap-2 pt-10 pb-16 sm:flex-row sm:items-center lg:justify-start">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-700 bg-blue-700 px-7 py-3.5 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90">
              <span>Explore more</span>
              <svg
                width="25"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:ml-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
        <div className="relative mx-5 lg:w-96">
          <div className="absolute top-0 left-0 -mt-16 -ml-20 border border-blue-200 rounded-full bg-tranparent size-40 lg:size-72 dark:border-blue-900" />
          <div className="absolute top-0 left-0 -mt-20 border border-blue-100 rounded-full bg-tranparent -ml-14 size-40 lg:size-72 dark:border-blue-950" />
          <div className="absolute bottom-0 right-0 -mb-16 -mr-20 border border-blue-200 rounded-full bg-tranparent size-40 lg:size-72 dark:border-blue-900" />
          <div className="absolute bottom-0 right-0 -mb-20 border border-blue-100 rounded-full bg-tranparent -mr-14 size-40 lg:size-72 dark:border-blue-950" />
          <div className="absolute inset-0 -m-6 bg-gray-200 -rotate-2 rounded-xl dark:bg-gray-800" />
          <div className="absolute inset-0 -m-6 shadow-inner rotate-1 rounded-xl bg-blue-800/75 dark:bg-blue-900/75" />
          <img
            src={roomExplore}
            className="relative mx-auto rounded-lg shadow-lg"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
}
