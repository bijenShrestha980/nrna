import { memo } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
// ASSETS
import logo from "../../assets/images/logo.png";
import { sidebar } from "@/assets/data/sidebar";

const Sidebar = (props) => {
  const router = useRouter();

  return (
    <div
      className={`sticky top-0 w-[80px] md:w-[250px] flex flex-col items-center transition-all ease-in-out duration-700 bg-sky-50 ${
        props.sidebar === false
          ? "-translate-x-full w-0 md:w-0"
          : "translate-x-0"
      }`}
    >
      <div className={`flex flex-col justify-center items-center py-8 w-full`}>
        <Image
          src={logo}
          alt="NRNA"
          width={"40"}
          height={"40"}
          object-fit="contain"
          priority
          quality={85}
          className="h-auto w-auto rounded-full"
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
        {sidebar.map((item, i) => (
          <li
            className={`flex items-center justify-center md:justify-start py-4 pl-2 cursor-pointer transition-all ease-in-out duration-300 hover:bg-sky-100 border-solid border-l-[7px] border-transparent hover:border-indigo-800 group ${
              props.sidebar === false ? "-translate-x-96 " : "translate-x-0 "
            }${
              item.title === "home"
                ? router.pathname.split("/")[1] === "dashboard" &&
                  router.pathname.split("/").length < 3 &&
                  "border-indigo-800"
                : router.pathname.split("/")[2] === item.title &&
                  "border-indigo-800"
            } `}
            onClick={() => router.push(item.path)}
            key={i}
          >
            {item.icon}
            <h5
              className={`text-xl px-2 text-slate-400 hidden capitalize md:inline-block transition-all ease-in-out duration-300 md:group-hover:translate-x-2 select-none`}
            >
              {item.title}
            </h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Sidebar);
