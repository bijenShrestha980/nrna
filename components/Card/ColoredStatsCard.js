import dynamic from "next/dynamic";
import { memo } from "react";

const ColoredStatsCard = () => {
  return (
    <div className="p-8 bg-teal-400 w-full text-white transition-all ease-in-out duration-300 rounded-xl shadow-md cursor-pointer hover:-translate-y-1 hover:scale-105 hover:shadow-xl max-h-[205px] min-h-[205px] group select-none">
      <h5>TOTAL COLLECTED</h5>
      <p>MEMBERSHIP FEE</p>
      <p className="font-semibold">2022-2025</p>

      <h3 className="font-semibold text-3xl pt-4">2000.00</h3>
      <p className="font-semibold">USD</p>
    </div>
  );
};

export default dynamic(() => Promise.resolve(memo(ColoredStatsCard)), {
  ssr: false,
});
