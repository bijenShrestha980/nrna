import dynamic from "next/dynamic";
import { memo } from "react";
import Spinner from "./Loader/Spinner";
// COMPONENTS
const UserBreadcrumb = dynamic(() => import("./Breadcrumb/UserBreadcrumb"), {
  loading: () => <Spinner />,
});
const Header = dynamic(() => import("./Header/Header"), {
  loading: () => <Spinner />,
});
const UserHeader = dynamic(() => import("./Header/UserHeader"), {
  loading: () => <Spinner />,
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
