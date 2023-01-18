import dynamic from "next/dynamic";
import React, { memo } from "react";
// ASSETS
import professions from "@/assets/data/professions.json";

const InterestCard = (props) => {
  return (
    <div className="w-full p-6 flex flex-col items-start last:mr-0 bg-white transition-all ease-in-out duration-300 rounded-xl shadow-md select-none">
      <h5 className="mb-4 text-lg font-semibold text-slate-600 capitalize">
        Profession & Interest
      </h5>
      <form action="" className="w-full flex flex-col gap-2">
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <label
            htmlFor="profession"
            className="text-sm text-slate-700 font-bold"
          >
            Profession:
          </label>
          <select
            id="profession"
            className="flex-none text-sm text-slate-400 outline-none p-2 pl-0 select_arrow col-span-2 bg-transparent capitalize"
            defaultValue={props.interestData?.profession}
          >
            <option value=""></option>
            {professions.map((item, i) => {
              return (
                <option value={item} key={i} className="capitalize">
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <label
            htmlFor="interest"
            className="text-sm text-slate-700 font-bold"
          >
            Interest :
          </label>
          <select
            id="interest"
            className="flex-none text-sm text-slate-400 outline-none p-2 pl-0 select_arrow col-span-2 bg-transparent"
            defaultValue={props.interestData?.interest}
          >
            <option value=""></option>
          </select>
        </div>
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <label
            htmlFor="qualification"
            className="text-sm text-slate-700 font-bold"
          >
            Qualification :
          </label>
          <select
            id="qualification"
            className="flex-none text-sm text-slate-400 outline-none p-2 pl-0 select_arrow col-span-2 bg-transparent"
            defaultValue={props.interestData?.qualification}
          >
            <option value=""></option>
          </select>
        </div>
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <span className="text-sm text-slate-700 font-bold py-2">
            Project Notification :
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              defaultChecked={
                props.interestData?.project_notification === "yes"
                  ? true
                  : false
              }
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-800"></div>
          </label>
        </div>
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <span className="text-sm text-slate-700 font-bold py-2">
            Newsletter :
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              defaultChecked={
                props.interestData?.news_letter === "yes" ? true : false
              }
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-800"></div>
          </label>
        </div>
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <span className="text-sm text-slate-700 font-bold py-2">
            Volunteer :
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              defaultChecked={
                props.interestData?.volunteer === "yes" ? true : false
              }
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-800"></div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default dynamic(() => Promise.resolve(memo(InterestCard)), {
  ssr: false,
});
