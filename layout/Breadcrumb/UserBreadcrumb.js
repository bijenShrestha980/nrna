import React, { memo } from "react";
// import { useDispatch } from "react-redux";
// import { useLocation } from "react-router-dom";
// REDUCERS
// import { logout } from "../../features/slice/appSlice";

const UserBreadcrumb = (props) => {
  // const dispatch = useDispatch();
  // const location = useLocation();

  return (
    <aside className="pb-3">
      <p className="font-semibold text-sky-600">{props.subTitle}</p>
      <span className="flex justify-between items-center">
        <h4 className="font-medium text-2xl">{props.title}</h4>
        {/* <button
          className={`font-semibold cursor-pointer ease-in-out duration-150 hover:scale-105 active:scale-110 ${
            location.pathname.split("/")[1] !== "dashboard" && "hidden"
          }`}
          onClick={() => dispatch(logout())}
        >
          Logout
        </button> */}
      </span>
    </aside>
  );
};

export default memo(UserBreadcrumb);
