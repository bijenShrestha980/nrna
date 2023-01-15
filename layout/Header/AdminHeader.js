import Image from "next/image";
// UTILS
import {
  ArrowDownIcon,
  BellIcon,
  MenuIcon,
  SearchIcon,
} from "../../utils/icons";
// ASSETS
import logo from "../../assets/images/payment/esewa_small.png";

const AdminHeader = (props) => {
  return (
    <header
      className={`sm:flex sm:items-center sm:justify-between z-10 h-22 sm:h-16 text-slate-50 transition-all ease-in-out duration-700 mb-4`}
    >
      <div className="flex items-center justify-start gap-5">
        <button
          className="py-4"
          onClick={() => props.setSidebar(!props.sidebar)}
        >
          <MenuIcon className="transition-all ease-in-out duration-300 hover:scale-110 active:scale-125" />
        </button>
        <span className="flex items-center relative group">
          <SearchIcon className="ml-3 group-focus-within:scale-110 transition-all ease-in-out duration-300" />
          <input
            type="text"
            className="rounded-full py-3 pl-14 absolute transition-all ease-in-out duration-300 bg-slate-500/50 text-sm md:min-w-[300px] focus-visible:outline-none w-[190px] md:w-auto"
            placeholder="Type in to search .."
          />
        </span>
      </div>
      <div className="flex items-center justify-between sm:justify-end gap-5">
        <BellIcon className="text-white " />
        <div className="relative group py-4">
          <span className="flex items-center gap-2 cursor-pointer">
            <Image
              src={logo}
              alt="Profile image"
              loading="lazy"
              width="500"
              height="500"
              className="h-6 w-6 bg-white rounded-full object-contain ring-[1px] ring-white ring-offset-2 ring-offset-indigo-800"
            />
            <p className="text-xs font-semibold hidden lg:inline-block">
              Arjun Larry
            </p>
            <ArrowDownIcon className="w-3 h-3" />
          </span>
          <div className="">
            <ul
              className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all ease-in-out duration-300 -translate-y-96 opacity-0 group-hover:opacity-100 group-hover:translate-y-4"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <li
                className="text-gray-700 font-semibold block p-4 text-sm cursor-pointer transition duration-500 ease-in-out first:rounded-t-md last:rounded-b-md hover:bg-indigo-800 hover:text-white hover:cursor-pointer hover:shadow-md"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                Account settings
              </li>
              <li
                className="text-gray-700 font-semibold block p-4 text-sm cursor-pointer transition duration-500 ease-in-out first:rounded-t-md last:rounded-b-md hover:bg-indigo-800 hover:text-white hover:cursor-pointer hover:shadow-md"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
