import React, { memo } from "react";
// import paypal from "../../../assets/images/payment/paypal_small.png";
// import khalti from "../../../assets/images/payment/khalti_small.webp";
// import esewa from "../../../assets/images/payment/esewa_small.png";
// import bank from "../../../assets/images/payment/bank.png";

const TotalTableRow = (props) => {
  return (
    <tr
      className="border-solid border-b border-slate-400 border-opacity-20 transition duration-500 ease-in-out hover:bg-slate-100 hover:cursor-pointer hover:shadow-md"
      onClick={props.onClick}
    >
      {/* <td className="py-3 pl-5">{props.sn + 1 + props.itemOffset}</td> */}
      <td className="py-3 px-5 select-none">#{props.id}</td>
      <td className="py-3 px-5 capitalize select-none">{props.name}</td>
      <td className="py-3 px-5 capitalize select-none">{props.country}</td>
      <td className="py-3 px-5 select-none">{props.email}</td>
      {/* <td className="py-3 px-5">{props.number}</td> */}
      <td className="py-3 px-5 capitalize select-none">
        <span
          className={`badge rounded-pill ${
            props.type === "new"
              ? "badge-light-primary"
              : props.type === "old"
              ? "badge-light-warning"
              : "badge-light-danger"
          }`}
        >
          {props.type}
        </span>
      </td>
      {/* <td className="py-3 px-5 capitalize">
        <span className="flex justify-start items-center">
          <img
            src={
              props.payment === "paypal"
                ? paypal
                : props.payment === "khalti"
                ? khalti
                : props.payment === "esewa"
                ? esewa
                : bank
            }
            alt="paument"
            loading="lazy"
            className="mr-2 w-5 h-5 rounded-xl object-contain"
          />
          {props.payment}
        </span>
      </td> */}
    </tr>
  );
};

export default memo(TotalTableRow);
