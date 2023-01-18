import React, { memo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { UserCogIcon } from "@/utils/icons";
// ASSETS

const DetailHeaderCard = (props) => {
  return (
    <div className="w-full p-6 flex justify-between items-center last:mr-0 bg-white transition-all ease-in-out duration-300 rounded-xl shadow-md select-none mb-4">
      <div className="flex items-center gap-5">
        {props.image.length === 0 ? (
          <UserCogIcon className="rounded-xl h-16 w-16 shadow-md object-cover object-center text-indigo-800 p-2" />
        ) : (
          <Image
            width={"100"}
            height={"100"}
            unoptimized={props.image.length === 0 ? false : true}
            alt={"Profile Image"}
            loader={() =>
              `${process.env.REACT_APP_BASE_URL}/images/${props.image[0]?.name}`
            }
            src={
              props.image.length > 0 &&
              `${process.env.REACT_APP_BASE_URL}/images/${props.image[0]?.name}`
            }
            className="rounded-xl h-16 w-16 shadow-md object-cover object-center"
          />
        )}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-slate-800 capitalize">
            {`${props.first_name} ${props?.middle_name} ${props?.last_name}`}
          </h3>
          <h5 className="text-md capitalize text-slate-500 font-semibold">
            Public dwu
          </h5>
        </div>
      </div>
      <div className="text-end">
        <span
          className={`capitalize badge rounded-pill ${
            props.membership === "new"
              ? "badge-light-primary"
              : "badge-light-danger"
          }`}
        >
          {props.membership}
        </span>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(memo(DetailHeaderCard)), {
  ssr: false,
});
