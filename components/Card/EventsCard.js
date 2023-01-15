const EventsCard = () => {
  return (
    <div className="w-full p-4 flex flex-col gap-4 items-start bg-white transition-all ease-in-out duration-300 rounded-xl shadow-md max-h-[450px]">
      <h5 className="text-lg font-bold uppercase pt-4 pl-4">Events</h5>
      <div className="flex flex-col gap-4 w-full max-h-[340px] overflow-x-auto p-4">
        <div className="flex flex-row gap-4 items-center group cursor-pointer">
          <span className="flex flex-col justify-center items-center bg-red-400 text-white rounded-xl px-5 py-2 duration-300 ease-in-out transition-all group-hover:scale-105 group-hover:shadow-xl">
            <h3 className="font-semibold text-3xl">13</h3>
            <small>FEB</small>
          </span>
          <div>
            <p className="font-medium">NCC MEETING</p>
            <small className="font-sm">20:00 - 22:00</small>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center group cursor-pointer">
          <span className="flex flex-col justify-center items-center bg-blue-800 text-white rounded-xl px-5 py-2 duration-300 ease-in-out transition-all group-hover:scale-105 group-hover:shadow-xl">
            <h3 className="font-semibold text-3xl">13</h3>
            <small>FEB</small>
          </span>
          <div>
            <p className="font-medium">NCC MEETING</p>
            <small className="font-sm">20:00 - 22:00</small>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center group cursor-pointer">
          <span className="flex flex-col justify-center items-center bg-blue-800 text-white rounded-xl px-5 py-2 duration-300 ease-in-out transition-all group-hover:scale-105 group-hover:shadow-xl">
            <h3 className="font-semibold text-3xl">13</h3>
            <small>FEB</small>
          </span>
          <div>
            <p className="font-medium">NCC MEETING</p>
            <small className="font-sm">20:00 - 22:00</small>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center group cursor-pointer">
          <span className="flex flex-col justify-center items-center bg-blue-800 text-white rounded-xl px-5 py-2 duration-300 ease-in-out transition-all group-hover:scale-105 group-hover:shadow-xl">
            <h3 className="font-semibold text-3xl">13</h3>
            <small>FEB</small>
          </span>
          <div>
            <p className="font-medium">NCC MEETING</p>
            <small className="font-sm">20:00 - 22:00</small>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center group cursor-pointer">
          <span className="flex flex-col justify-center items-center bg-red-400 text-white rounded-xl px-5 py-2 duration-300 ease-in-out transition-all group-hover:scale-105 group-hover:shadow-xl">
            <h3 className="font-semibold text-3xl">13</h3>
            <small>FEB</small>
          </span>
          <div>
            <p className="font-medium">NCC MEETING</p>
            <small className="font-sm">20:00 - 22:00</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
