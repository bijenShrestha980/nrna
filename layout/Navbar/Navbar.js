import React, { memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import navlink from "../../assets/data/navlink.json";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="grid grid-cols-1 md:grid-cols-4 bg-sky-200">
      {navlink.map((item, i) => (
        <span
          key={i}
          className={`space-x-0 h-[45px] py-2 text-center relative ease-in-out duration-700 ${
            item.id !== 4 && "md:navlink"
          } ${
            parseInt(router.pathname.split("/")[2]) === item.id
              ? "bg-sky-600 before:border-l-sky-600"
              : parseInt(router.pathname.split("/")[2]) - 1 === item.id
              ? "bg-sky-500 before:border-l-sky-500"
              : parseInt(router.pathname.split("/")[2]) + 1 === item.id
              ? "bg-sky-500 before:border-l-sky-500"
              : parseInt(router.pathname.split("/")[2]) - 2 === item.id
              ? "bg-sky-400 before:border-l-sky-400"
              : parseInt(router.pathname.split("/")[2]) + 2 === item.id
              ? "bg-sky-400 before:border-l-sky-400"
              : "bg-sky-300 before:border-l-sky-300"
          }
            `}
        >
          <Link href={`/membership_form/${item.id}`}>
            <h3 className="text-slate-100 text-sm lg:text-lg xl:text-xl capitalize">
              {item.id}. {item.title}
            </h3>
          </Link>
        </span>
      ))}
    </nav>
  );
};

export default memo(Navbar);
