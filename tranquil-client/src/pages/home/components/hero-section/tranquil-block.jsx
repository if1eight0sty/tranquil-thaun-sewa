import Block from "./block";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
export default function TranquilBlock() {
  return (
    <Block className="flex flex-col items-center col-span-12 gap-4 md:col-span-3">
      <Link
        to="/"
        className="grid h-full text-3xl text-black place-content-center"
      >
        <Icon icon="cbi:living-room" width={35} className="text-white" />
      </Link>
    </Block>
  );
}
