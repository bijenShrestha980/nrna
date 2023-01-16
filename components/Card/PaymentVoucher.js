import dynamic from "next/dynamic";
import React, { memo, useRef } from "react";
// COMPONENTS
import Btn from "../Button/Btn";

const PaymentVoucher = (props) => {
  const imageRef = useRef(null);

  const onChangePicture = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener("load", () => {
        props.setPicture(reader.result);
      });
    }
  };

  return (
    <div className="lg:w-1/2 md:flex md:justify-between md:space-x-5 text-slate-400 text-center border-2 border-slate-400 px-5 py-10 mb-5">
      <div>
        <p>Global NRNA Canada</p>
        <p>7994545DW88484 A</p>
        <p>Bank of Canada</p>
        <p>BOC32</p>
      </div>
      <div className="relative">
        <p className="mb-5">Upload your payment voucher</p>
        <Btn
          title={"Upload"}
          className={`bg-sky-600 active:bg-sky-700 ${
            props.picture === null && "border-solid border-2 border-red-600"
          }`}
          onClick={(e) => {
            e.preventDefault();
            imageRef.current.click();
          }}
        />
        <input
          type="file"
          className="opacity-0 absolute left-0 bottom-0 h-1"
          ref={imageRef}
          onChange={onChangePicture}
          style={{ width: "-webkit-fill-available" }}
          required={props.paymentOption === "bank" ? true : false}
        />
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(memo(PaymentVoucher)), {
  ssr: false,
});
