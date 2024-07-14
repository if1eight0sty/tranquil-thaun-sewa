import Block from "./block";

import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
export default function RoomsBlock() {
  return (
    <>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-red-500 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full text-3xl text-white place-content-center"
        >
          <SiYoutube />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-green-600 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full text-3xl text-white place-content-center"
        >
          <SiGithub />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-zinc-50 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full text-3xl text-black place-content-center"
        >
          <SiTiktok />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-blue-500 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full text-3xl text-white place-content-center"
        >
          <SiTwitter />
        </a>
      </Block>
    </>
  );
}
