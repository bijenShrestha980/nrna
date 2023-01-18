import React, { memo } from "react";
import dynamic from "next/dynamic";
import { COUNTRIES } from "@/utils/countries";

const InformationCard = (props) => {
  return (
    <div className="w-full p-6 flex flex-col items-start last:mr-0 bg-white transition-all ease-in-out duration-300 rounded-xl shadow-md select-none">
      <h5 className="mb-4 text-lg font-semibold text-slate-600 capitalize">
        Personal Information
      </h5>
      <form action="" className="w-full flex flex-col gap-2">
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <label
            htmlFor="first_name"
            className="text-sm text-slate-700 font-bold"
          >
            First Name :
          </label>
          <input
            type="text"
            id="first_name"
            defaultValue={props.first_name}
            className="grow text-sm text-slate-400 outline-none p-2 pl-0 bg-transparent"
          />
        </div>
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <label
            htmlFor="middle_name"
            className="text-sm text-slate-700 font-bold"
          >
            Middle Name :
          </label>
          <input
            type="text"
            id="middle_name"
            defaultValue={props.middle_name}
            className="grow text-sm text-slate-400 outline-none p-2 pl-0 col-span-2 bg-transparent"
          />
        </div>
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <label
            htmlFor="last_name"
            className="text-sm text-slate-700 font-bold"
          >
            Last Name :
          </label>
          <input
            type="text"
            id="last_name"
            defaultValue={props.last_name}
            className="grow text-sm text-slate-400 outline-none p-2 pl-0 col-span-2 bg-transparent"
          />
        </div>
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <label htmlFor="country" className="text-sm text-slate-700 font-bold">
            Country :
          </label>
          <select
            id="code"
            className="flex-none text-sm text-slate-400 outline-none p-2 pl-0 select_arrow bg-transparent"
            defaultValue={props.country}
          >
            {COUNTRIES.map((item, i) => {
              return (
                <option value={item.name} key={i}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <label htmlFor="city" className="text-sm text-slate-700 font-bold">
            City :
          </label>
          <input
            type="text"
            id="city"
            defaultValue={props.city}
            className="grow text-sm text-slate-400 outline-none p-2 pl-0 col-span-2 bg-transparent"
          />
        </div>
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <label htmlFor="mobile" className="text-sm text-slate-700 font-bold">
            Mobile :
          </label>
          <div className="col-span-2">
            <select
              id="code"
              className="flex-none text-sm text-slate-400 outline-none p-2 pl-0 select_arrow bg-transparent"
              defaultValue={props?.mobile?.split("-")[0]}
            >
              {COUNTRIES.map((item, i) => {
                return (
                  <option value={item.prefix} key={i}>
                    {item.prefix}
                  </option>
                );
              })}
            </select>
            <input
              type="text"
              id="mobile"
              defaultValue={props.mobile.split("-")[1]}
              className="grow text-sm text-slate-400 outline-none p-2 pl-0 bg-transparent"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default dynamic(() => Promise.resolve(memo(InformationCard)), {
  ssr: false,
});
