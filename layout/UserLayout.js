import { memo } from "react";
// COMPONENTS
import UserBreadcrumb from "./Breadcrumb/UserBreadcrumb";
import Header from "./Header/Header";
import UserHeader from "./Header/UserHeader";

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
