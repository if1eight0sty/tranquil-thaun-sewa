import { micah } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { useMemo } from "react";
export default function UserCard({ user }) {
  const avatar = useMemo(() => {
    return createAvatar(micah, {
      size: 128,
      seed: user.name,
    }).toDataUri();
  }, [user.name]);
  return (
    <div className="relative flex items-center gap-4 p-4 mx-0 mt-4 overflow-hidden bg-transparent shadow-none rounded-xl bg-clip-border w-full max-w-[26rem] border border-gray-600">
      <img
        src={avatar}
        alt="Tania Andrew"
        className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center border border-gray-600"
      />
      <div className="flex w-full flex-col gap-0.5">
        <div className="flex items-center justify-between">
          <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {user.name}
          </h5>
        </div>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
          {user.email}
        </p>
      </div>
    </div>
  );
}
