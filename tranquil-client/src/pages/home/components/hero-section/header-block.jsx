import Block from "./block";

import { FiArrowRight } from "react-icons/fi";
export default function HeaderBlock() {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <h1 className="mb-12 text-4xl font-medium leading-tight">
        Tranquil, Here:{" "}
        <span className="text-zinc-400">Your Dream Room Await</span>
      </h1>
      <a
        href="#"
        className="flex items-center gap-1 text-red-300 hover:underline"
      >
        Explore <FiArrowRight />
      </a>
    </Block>
  );
}
