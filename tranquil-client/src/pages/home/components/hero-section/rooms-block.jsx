import room1 from "../../../../assets/images/room-1.png";
import room2 from "../../../../assets/images/room-2.png";
import room3 from "../../../../assets/images/room-3.png";
import room4 from "../../../../assets/images/room-4.png";
import Block from "./block";
export default function RoomsBlock() {
  return (
    <>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 p-0 bg-red-500 md:col-span-3 h-[6em] overflow-hidden border-none"
      >
        <img
          src={room1}
          alt="a beautiful room with its inner view"
          className="object-cover w-full h-full"
        />
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-green-600 md:col-span-3 h-[6em] p-0 overflow-hidden border-none"
      >
        <img
          src={room2}
          alt="a beautiful room with its inner view"
          className="object-cover w-full h-full"
        />
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-green-600 md:col-span-3 h-[6em] p-0 overflow-hidden border-none"
      >
        <img
          src={room3}
          alt="a beautiful room with its inner view"
          className="object-cover w-full h-full"
        />
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-green-600 md:col-span-3 h-[6em] p-0 overflow-hidden border-none"
      >
        <img
          src={room4}
          alt="a beautiful room with its inner view"
          className="object-cover w-full h-full"
        />
      </Block>
    </>
  );
}
