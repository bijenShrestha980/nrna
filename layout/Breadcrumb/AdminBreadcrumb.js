import React, { memo } from "react";

const AdminBreadcrumb = (props) => {
  return (
    <aside className="pb-8">
      <h4 className="font-medium text-3xl text-white">{props.title}</h4>
      <p className="font-semibold text-lg text-white">{props.subTitle}</p>
    </aside>
  );
};

export default memo(AdminBreadcrumb);
