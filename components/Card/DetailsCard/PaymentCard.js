import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
// ASSETS
import paypal from "../../../assets/images/payment/paypal_small.png";
import khalti from "../../../assets/images/payment/khalti_small.webp";
import esewa from "../../../assets/images/payment/esewa_small.png";
import bank from "../../../assets/images/payment/bank.png";

const PaymentCard = (props) => {
  return (
    <div className="w-full p-6 flex flex-col items-start last:mr-0 bg-white transition-all ease-in-out duration-300 rounded-xl shadow-md select-none">
      <h5 className="mb-4 text-lg font-semibold text-slate-600 capitalize">
        Payment
      </h5>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <label htmlFor="amount" className="text-sm text-slate-700 font-bold">
            Amount :
          </label>
          <p className="grow text-sm text-slate-400 outline-none p-2 pl-0 col-span-2 bg-transparent capitalize">
            $ {props.paymentData.amount}
          </p>
        </div>
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <label htmlFor="type" className="text-sm text-slate-700 font-bold">
            Type :
          </label>
          <p className="grow text-sm text-slate-400 outline-none p-2 pl-0 col-span-2 bg-transparent capitalize">
            {props.paymentData.type}
          </p>
        </div>
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <label htmlFor="type" className="text-sm text-slate-700 font-bold">
            Option :
          </label>
          <span className="grow text-sm text-slate-400 outline-none p-2 pl-0 col-span-2 bg-transparent capitalize flex justify-start items-center">
            <Image
              width={"10"}
              height={"10"}
              src={
                props.paymentData.options === "paypal"
                  ? paypal
                  : props.paymentData.options === "khalti"
                  ? khalti
                  : props.paymentData.options === "esewa"
                  ? esewa
                  : bank
              }
              alt="payment"
              className="mr-2 w-auto h-auto rounded-xl object-contain"
            />
            {props.paymentData.options}
          </span>
        </div>
        {props.paymentData.options !== "bank" && (
          <div className="w-full grid grid-cols-3 gap-4 items-center">
            <label
              htmlFor="type"
              className="text-sm text-slate-700 font-bold py-2"
            >
              Transaction ID :
            </label>
            <p className="grow text-sm text-slate-400 outline-none p-2 pl-0 col-span-2 bg-transparent capitalize">
              {props.paymentData.txn_id}
            </p>
          </div>
        )}
        {props.paymentData.options !== "bank" && (
          <div className="w-full grid grid-cols-3 gap-4 items-center">
            <label
              htmlFor="type"
              className="text-sm text-slate-700 font-bold py-2"
            >
              Reference ID :
            </label>
            <p className="grow text-sm text-slate-400 outline-none p-2 pl-0 col-span-2 bg-transparent capitalize">
              {props.paymentData.ref_id}
            </p>
          </div>
        )}
        {props.paymentData.options === "bank" && (
          <div className="w-full grid grid-cols-3 gap-4 items-center">
            <label htmlFor="type" className="text-sm text-slate-700 font-bold">
              Voucher :
            </label>
            <Link
              href={`${process.env.REACT_APP_BASE_URL}/images/${props.paymentData?.image[0]?.name}`}
              target="_blank"
              className="col-span-2"
            >
              <Image
                width={"100"}
                height={"100"}
                unoptimized={
                  props.paymentData?.image?.length > 0 ? false : true
                }
                alt={"Profile Image"}
                loader={() =>
                  `${process.env.REACT_APP_BASE_URL}/images/${props.paymentData?.image[0]?.name}`
                }
                src={
                  props.paymentData?.image?.length > 0 &&
                  `${process.env.REACT_APP_BASE_URL}/images/${props.paymentData?.image[0]?.name}`
                }
                className="rounded-xl h-60 w-full shadow-md object-contain object-center cursor-pointer"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(memo(PaymentCard)), {
  ssr: false,
});
