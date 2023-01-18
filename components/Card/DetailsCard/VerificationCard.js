import { memo, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const VerificationCard = (props) => {
  const imageRef = useRef(null);

  return (
    <div className="w-full p-6 flex flex-col items-start last:mr-0 bg-white transition-all ease-in-out duration-300 rounded-xl shadow-md select-none">
      <h5 className="mb-4 text-lg font-semibold text-slate-600 capitalize">
        Verification
      </h5>
      <form action="" className="w-full flex flex-col gap-2">
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <label
            htmlFor="passport_number"
            className="text-sm text-slate-700 font-bold"
          >
            Passport Number :
          </label>
          <input
            type="text"
            id="passport_number"
            defaultValue={props.passport_number}
            className="grow text-sm text-slate-400 outline-none p-2 pl-0 col-span-2 bg-transparent"
          />
        </div>
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <label
            htmlFor="expiry_date"
            className="text-sm text-slate-700 font-bold"
          >
            Expiry Date :
          </label>
          <DatePicker
            selected={Date.parse(props.passport_expiry_date)}
            showPopperArrow={false}
            maxDate={new Date()}
            showDayMonthYearPicker
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className="grow text-sm text-slate-400 outline-none p-2 pl-0 col-span-2 bg-transparent"
            // {...field}
            required
          />
        </div>
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <label
            htmlFor="citizenship"
            className="text-sm text-slate-700 font-bold"
          >
            Citizenship :
          </label>
          <select
            id="citizenship"
            className="flex-none text-sm text-slate-400 outline-none p-2 pl-0 select_arrow col-span-2 bg-transparent"
            defaultValue={props.citizenship}
          >
            <option value="">Please select your citizenship</option>
            <option value="global">Global</option>
          </select>
        </div>
        <div className="w-full grid grid-cols-3 gap-4 items-center">
          <label htmlFor="image" className="text-sm text-slate-700 font-bold">
            Profile Image :
          </label>
          <input type="file" className="hidden" ref={imageRef} />
          {props.image.length > 0 && (
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
              className="rounded-xl h-16 w-16 shadow-md object-cover object-center cursor-pointer"
              onClick={() => imageRef.current?.click()}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default dynamic(() => Promise.resolve(memo(VerificationCard)), {
  ssr: false,
});
