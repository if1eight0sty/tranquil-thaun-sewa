import Block from "./block";

import { SiTiktok } from "react-icons/si";
export default function TranquilBlock() {
  return (
    <Block className="flex flex-col items-center col-span-12 gap-4 md:col-span-3">
      <a
        href="#"
        className="grid h-full text-3xl text-black place-content-center"
      >
        <SiTiktok />
      </a>
    </Block>
  );
}
