const LargColorCard = (props) => (
  <div
    className={`w-full h-35 p-8 flex flex-col justify-around items-start last:mr-0 capitalize bg-white cursor-pointer transition-all ease-in-out duration-300 rounded-xl shadow-md hover:-translate-y-1 hover:scale-105 hover:shadow-xl`}
    onClick={props.onClick}
  >
    <h5 className="text-xl text-slate-500">{props.title}</h5>
    <h4
      className={`text-4xl font-bold 
      ${
        props.title === "new application"
          ? "text-indigo-800"
          : props.title === "member"
          ? "text-emerald-500"
          : props.title === "rejected"
          ? "text-rose-600"
          : "text-zinc-500"
      }
      `}
    >
      {props.count}
    </h4>
  </div>
);

export default LargColorCard;
