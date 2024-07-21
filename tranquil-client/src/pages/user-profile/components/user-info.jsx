import Block from "../../home/components/hero-section/block";

export default function UserInfo() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Block className="w-1/2 text-white bg-slate-600">
      <div className="flex flex-col">
        <h4 className="mt-2 text-lg ">Account Overview</h4>
        <div className="flex p-[1.5em_1em] drop-shadow-dashboard gap-x-8 rounded-2xl flex-1">
          <div className="[#6B7280]  space-y-3">
            <p>Full Name</p>
            <p>Email Address</p>
            <p>Role</p>
          </div>
          <div className="] space-y-3">
            <p className="capitalize">{user?.name || "John Doe"}</p>
            <p>{user?.email || "johndoe@gmail.com"}</p>
            <p className="capitalize">{user?.role || "user"}</p>
          </div>
        </div>
      </div>
    </Block>
  );
}
