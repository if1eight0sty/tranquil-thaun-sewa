import { Icon } from "@iconify/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/images/login-page-image.png";
import { isValidateRegisterData, registerHelper } from "./helper";
export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!isValidateRegisterData(data))
      return toast.error("Empty name, email or password");
    try {
      const res = await registerHelper(data);
      if (res.status !== 200) throw new Error(res.message);

      toast.success(res.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main className="flex items-center justify-center w-full h-screen">
      {/* Left section */}
      <section className="min-[900px]:flex-1 hidden min-[900px]:block min-[900px]:border-r h-screen ">
        <img src={image} alt="" className="object-cover w-full h-full" />
      </section>

      {/* Right section */}
      <section className="relative flex-1 h-screen overflow-hidden isolate">
        <form
          className="flex items-center justify-center w-full h-screen backdrop-blur-md "
          onSubmit={handleOnSubmit}
        >
          <div className="flex flex-col items-center px-4 py-4 w-[20em] min-[500px]:w-[25em] min-[650px]:w-[27em]">
            <div className="mb-8 ">
              <h1 className="text-2xl font-bold text-gray-600">
                Welcome to Tanquil
              </h1>
              <p className="capitalize">Your Accommodation partner</p>
            </div>
            <div className="flex flex-col w-full gap-y-4">
              {/* Name input field */}
              <div className="flex flex-col w-full text-gray-500 border-b-[2px] border-gray-400/60">
                <label
                  htmlFor="name"
                  className="mb-1 text-[.95rem] font-semibold min-[650px]:text-[1rem] min-[650px]:mb-[0.3rem] capitalize"
                >
                  Name
                </label>
                <div className="flex items-center w-full gap-x-1">
                  <span className="text-[1rem] min-[650px]:text-[1.3rem]">
                    <Icon icon="pixelarticons:user" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="outline-none text-[1rem] px-1 pb-1 placeholder:text-gray-500 font-semibold placeholder:font-normal tracking-wide placeholder:text-[1rem] min-[650px]:placeholder:text-[1.03rem] min-[650px]:text-[1.03rem] flex-1"
                    placeholder="Name"
                    value={data.name}
                    onChange={(e) => {
                      onChange(e);
                    }}
                  />
                </div>
              </div>
              {/* Email input field */}
              <div className="flex flex-col w-full text-gray-500 border-b-[2px] border-gray-400/60">
                <label
                  htmlFor="email"
                  className="mb-1 text-[.95rem] font-semibold min-[650px]:text-[1rem] min-[650px]:mb-[0.3rem] capitalize"
                >
                  Email
                </label>
                <div className="flex items-center w-full gap-x-1">
                  <span className="text-[1rem] min-[650px]:text-[1.3rem]">
                    <Icon icon="memory:email" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="outline-none text-[1rem] px-1 pb-1 placeholder:text-gray-500 font-semibold placeholder:font-normal tracking-wide placeholder:text-[1rem] min-[650px]:placeholder:text-[1.03rem] min-[650px]:text-[1.03rem] flex-1"
                    placeholder="Email address"
                    value={data.email}
                    onChange={(e) => {
                      onChange(e);
                    }}
                  />
                </div>
              </div>

              {/* Password input field */}
              <div className="flex flex-col w-full text-gray-500 border-b-[2px] border-gray-400/60">
                <label
                  htmlFor="password"
                  className="mb-1 text-[.95rem] font-semibold min-[650px]:text-[1rem] min-[650px]:mb-[0.3rem] capitalize"
                >
                  Password
                </label>
                <div className="flex items-center w-full gap-x-1">
                  <span className="text-[1rem] min-[650px]:text-[1.3rem]">
                    <Icon icon="pixelarticons:lock" />
                  </span>
                  <input
                    type="password"
                    name="password"
                    className="outline-none text-[1rem] px-1 pb-1 placeholder:text-gray-500 font-semibold placeholder:font-normal tracking-wide placeholder:text-[1rem] min-[650px]:placeholder:text-[1.03rem] min-[650px]:text-[1.03rem] flex-1"
                    placeholder="*********"
                    value={data.password}
                    onChange={(e) => {
                      onChange(e);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full px-4 py-2 mt-6 text-lg font-semibold text-white rounded bg-[#2e2e2e] hover:shadow-lg"
            >
              Register
            </button>

            {/* Register link */}
            <div className="flex justify-start w-full mt-3 text-[.8rem]">
              <p>
                Already have an account?{" "}
                <Link to={"/login"} className="text-blue-800">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </form>

        {/* Background circles */}
        <div className="w-[5em] h-[5em] bg-sky-500/70 rounded-full absolute z-[-1] top-20 left-10"></div>
        <div className="w-[20em] h-[20em] bg-rose-500/70 rounded-full absolute z-[-1] bottom-[-7em] right-[-7em]"></div>
        <div className="w-[10em] h-[10em] bg-green-500/70 rounded-full absolute z-[-1] top-[-5em] right-[-5em]"></div>
        <div className="w-[15em] h-[15em] bg-yellow-500/70 rounded-full absolute z-[-1] bottom-[-10em] left-[-10em]"></div>
        <div className="w-[8em] h-[8em] bg-purple-500/70 rounded-full absolute z-[-1] bottom-[-3em] right-[-3em]"></div>
      </section>
    </main>
  );
}
