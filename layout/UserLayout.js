import dynamic from "next/dynamic";
import { memo } from "react";
// COMPONENTS
const UserBreadcrumb = dynamic(() => import("./Breadcrumb/UserBreadcrumb"), {
  loading: () => "Loading...",
});
const Header = dynamic(() => import("./Header/Header"), {
  loading: () => "Loading...",
});
const UserHeader = dynamic(() => import("./Header/UserHeader"), {
  loading: () => "Loading...",
});

const UserLayout = ({ children }) => {
  return (
    <Header>
      <div className="container mx-auto px-3">
        <UserHeader />
        <UserBreadcrumb subTitle={"Registered"} title={"Membership Form"} />
        {children}
      </div>
    </Header>
  );
};

export default memo(UserLayout);
