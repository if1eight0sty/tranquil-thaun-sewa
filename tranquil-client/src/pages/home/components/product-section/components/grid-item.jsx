import { Link } from "react-router-dom";
import { cn } from "../../../../../utility/index";

export const GridItem = ({ className, address, price, image }) => {
  console.log("👻 -> GridItem -> image <3", image);
  return (
    <div
      data-aos="fade-up"
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-zinc-700 dark:border-white/ border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="h-[9em]">
        <img src={image} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <p className="font-semibold text-white"> Rs. {price}</p>
        <div className="mt-2 mb-2 font-sans font-semibold text-neutral-600 dark:text-neutral-200 line-clamp-1">
          {address}
        </div>
        <Link
          to="/view-rooms"
          className="relative inline-block p-px text-xs font-semibold leading-6 text-white no-underline rounded-full shadow-2xl cursor-pointer bg-slate-700 group shadow-zinc-900"
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative z-10 flex items-center px-4 py-1 space-x-2 rounded-full bg-zinc-800 ring-1 ring-white/10 ">
            <span>Explore</span>
            <svg
              width="16"
              height="16"
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
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </Link>
      </div>
    </div>
  );
};
