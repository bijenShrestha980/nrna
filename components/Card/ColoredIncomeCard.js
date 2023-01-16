import dynamic from "next/dynamic";
import { memo } from "react";

const ColoredIncomeCard = () => {
  return (
    <div className="flex flex-cols gap-4 p-8 bg-teal-400 w-full text-white transition-all ease-in-out duration-300 rounded-xl shadow-md cursor-pointer hover:-translate-y-1 hover:scale-105 hover:shadow-xl max-h-[205px] group select-none">
      <div className="pr-5 flex justify-center items-center">
        <h2 className="h-12 w-12 text-center pt-1 text-3xl rounded-full ring-[1px] ring-white ring-offset transition-all ease-in-out duration-300 group-hover:scale-105 group-hover:shadow-lg">
          $
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <span>
          <h5 className="leading-4">NCC</h5>
          <p className="font-semibold text-lg">1200.00</p>
        </span>
        <span>
          <h5 className="leading-4">NCC</h5>
          <p className="font-semibold text-lg">1200.00</p>
        </span>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(memo(ColoredIncomeCard)), {
  ssr: false,
});
