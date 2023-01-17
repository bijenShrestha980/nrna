import {
  BellIcon,
  CalendarIcon,
  DollarIcon,
  FileSearchIcon,
  HomeIcon,
  RefreshIcon,
} from "@/utils/icons";

const sidebar = [
  {
    id: 1,
    icon: (
      <HomeIcon
        className={`h-5 mr-2 md:ml-2 text-indigo-800 transition-all ease-in-out duration-300 md:group-hover:translate-x-2 group-hover:h-6`}
      />
    ),
    title: "home",
    path: "/dashboard",
    permission: 25,
  },
  {
    id: 2,
    icon: (
      <FileSearchIcon
        className={`h-5 mr-2 md:ml-2 text-indigo-800 transition-all ease-in-out duration-300 md:group-hover:translate-x-2 group-hover:h-6`}
      />
    ),
    title: "status",
    path: "/dashboard/status",
    permission: 25,
  },
  {
    id: 3,
    icon: (
      <BellIcon
        className={`h-5 mr-2 md:ml-2 text-indigo-800 transition-all ease-in-out duration-300 md:group-hover:translate-x-2 group-hover:h-6`}
      />
    ),
    title: "bulk notification",
    path: "/dashboard/notification",
    permission: 25,
  },
  {
    id: 4,
    icon: (
      <RefreshIcon
        className={`h-5 mr-2 md:ml-2 text-indigo-800 transition-all ease-in-out duration-300 md:group-hover:translate-x-2 group-hover:h-6`}
      />
    ),
    title: "insights",
    path: "/dashboard/insights",
    permission: 25,
  },
  {
    id: 4,
    icon: (
      <CalendarIcon
        className={`h-5 mr-2 md:ml-2 text-indigo-800 transition-all ease-in-out duration-300 md:group-hover:translate-x-2 group-hover:h-6`}
      />
    ),
    title: "Events",
    path: "/dashboard/events",
    permission: 25,
  },
  {
    id: 5,
    icon: (
      <DollarIcon
        className={`h-5 mr-2 md:ml-2 text-indigo-800 transition-all ease-in-out duration-300 md:group-hover:translate-x-2 group-hover:h-6`}
      />
    ),
    title: "finance",
    path: "/dashboard/finance",
    permission: 25,
  },
];

export { sidebar };
