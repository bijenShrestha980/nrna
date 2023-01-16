import dynamic from "next/dynamic";
import React, { memo } from "react";

const UserBreadcrumb = (props) => {
  return (
    <aside className="pb-3">
      <p className="font-semibold text-sky-600">{props.subTitle}</p>
      <span className="flex justify-between items-center">
        <h4 className="font-medium text-2xl">{props.title}</h4>
      </span>
    </aside>
  );
};

export default dynamic(() => Promise.resolve(memo(UserBreadcrumb)), {
  ssr: false,
});
