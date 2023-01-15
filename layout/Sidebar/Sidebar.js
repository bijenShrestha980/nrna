import Image from "next/image";
import { useRouter } from "next/router";
// ASSETS
import logo from "../../assets/images/logo.png";
// UTILS
import {
  BellIcon,
  CalendarIcon,
  FileSearchIcon,
  HomeIcon,
  UserCogIcon,
} from "../../utils/icons";

const Sidebar = (props) => {
  const router = useRouter();
  return (
    <div
      className={`sticky top-0 w-[80px] md:w-[250px] flex flex-col items-center transition-all ease-in-out duration-700 ${
        props.sidebar === false
          ? "-translate-x-full w-0 md:w-0"
          : "translate-x-0"
      }`}
    >
      <div className={`flex flex-col justify-center items-center py-8 w-full`}>
        <Image
          src={logo}
          alt=""
          loading="lazy"
          width={"500"}
          height={"500"}
          className="h-10 w-10 md:h-14 md:w-14 rounded-full"
        />
        <span
          className={`py-2 text-center hidden md:inline-block transition-all ease-in-out duration-700 ${
            props.sidebar === false ? "-translate-x-full" : "translate-x-0 "
          }`}
        >
          <p className="text-indigo-800 text-sm font-semibold leading-4">
            Registered
          </p>
          <p className="text-indigo-800 text-sm font-semibold leading-4">
            Membership form
          </p>
        </span>
      </div>
      <ul className={`py-4 w-full`}>
        <li
          className={`flex items-center justify-center md:justify-start py-4 cursor-pointer transition-all ease-in-out duration-300 hover:bg-sky-100 border-solid border-l-[7px] border-transparent hover:border-indigo-800 group ${
            props.sidebar === false ? "-translate-x-96 " : "translate-x-0 "
          }${
            router.pathname.split("/")[1] === "dashboard" && "border-indigo-800"
          }`}
        >
          <HomeIcon
            className={`h-5 mr-2 md:ml-2 text-indigo-800 transition-all ease-in-out duration-300 md:group-hover:translate-x-2 group-hover:h-6`}
          />
          <h5
            className={`text-xl px-2 text-slate-400 hidden md:inline-block transition-all ease-in-out duration-300 md:group-hover:translate-x-2`}
          >
            Home
          </h5>
        </li>
        <li
          className={`flex items-center justify-center md:justify-start py-4 cursor-pointer transition-all ease-in-out duration-300 hover:bg-sky-100 border-solid border-l-[7px] border-transparent hover:border-indigo-800 group ${
            props.sidebar === false ? "-translate-x-96" : "translate-x-0 "
          }`}
        >
          <UserCogIcon className="h-5 mr-2 md:ml-2 text-indigo-800 active:bg-indigo-800 active:text-white transition-all ease-in-out duration-300 md:group-hover:translate-x-2 group-hover:h-6" />
          <h5
            className={`text-xl text-slate-400 px-2 hidden md:inline-block transition-all md:group-hover:translate-x-2 ease-in-out duration-300`}
          >
            Settings
          </h5>
        </li>
        <li
          className={`flex items-center justify-center md:justify-start py-4 cursor-pointer transition-all ease-in-out duration-300 hover:bg-sky-100 border-solid border-l-[7px] border-transparent hover:border-indigo-800 group ${
            props.sidebar === false ? "-translate-x-96" : "translate-x-0 "
          }`}
        >
          <FileSearchIcon className="h-5 mr-2 md:ml-2 text-indigo-800  transition-all ease-in-out duration-300 md:group-hover:translate-x-2 group-hover:h-6" />
          <h5 className="text-xl text-slate-400 px-2 hidden md:inline-block transition-all ease-in-out duration-300 md:group-hover:translate-x-2">
            Status
          </h5>
        </li>
        <li
          className={`flex items-center justify-center md:justify-start py-4 cursor-pointer transition-all ease-in-out duration-300 hover:bg-sky-100 border-solid border-l-[7px] border-transparent hover:border-indigo-800 group ${
            props.sidebar === false ? "-translate-x-96" : "translate-x-0 "
          }`}
        >
          <BellIcon className="h-5 mr-2 md:ml-2 text-indigo-800  transition-all ease-in-out duration-300 md:group-hover:translate-x-2 group-hover:h-6" />
          <h5 className="text-xl text-slate-400 px-2 hidden md:inline-block transition-all ease-in-out duration-300 md:group-hover:translate-x-2">
            Bulk Notification
          </h5>
        </li>
        <li
          className={`flex items-center justify-center md:justify-start py-4 cursor-pointer transition-all ease-in-out duration-300 hover:bg-sky-100 border-solid border-l-[7px] border-transparent hover:border-indigo-800 group ${
            props.sidebar === false ? "-translate-x-96" : "translate-x-0 "
          }`}
        >
          <HomeIcon className="h-5 mr-2 md:ml-2 text-indigo-800  transition-all ease-in-out duration-300 md:group-hover:translate-x-2 group-hover:h-6" />
          <h5 className="text-xl text-slate-400 px-2 hidden md:inline-block transition-all ease-in-out duration-300 md:group-hover:translate-x-2">
            Home
          </h5>
        </li>
        <li
          className={`flex items-center justify-center md:justify-start py-4 cursor-pointer transition-all ease-in-out duration-300 hover:bg-sky-100 border-solid border-l-[7px] border-transparent hover:border-indigo-800 group ${
            props.sidebar === false ? "-translate-x-96" : "translate-x-0 "
          }`}
        >
          <CalendarIcon className="h-5 mr-2 md:ml-2 text-indigo-800  transition-all ease-in-out duration-300 md:group-hover:translate-x-2 group-hover:h-6" />
          <h5 className="text-xl text-slate-400 px-2 hidden md:inline-block transition-all ease-in-out duration-300 md:group-hover:translate-x-2">
            Event
          </h5>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
