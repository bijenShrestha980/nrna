import { memo } from "react";

const Btn = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`px-20 py-3 text-center text-slate-50 duration-300 ease-in-out hover:scale-105 active:scale-100 shadow-lg shadow-gray-500/50 hover:shadow-gray-400/50 ${props.className}`}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
};

export default memo(Btn);
