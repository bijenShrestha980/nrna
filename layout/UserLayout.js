import { memo } from "react";
// COMPONENTS
import UserBreadcrumb from "./Breadcrumb/UserBreadcrumb";
import Header from "./Header/Header";
import UserHeader from "./Header/UserHeader";
import Navbar from "./Navbar/Navbar";

const UserLayout = ({ children }) => {
  return (
    <Header>
      <div className="container mx-auto px-3">
        <UserHeader />
        <UserBreadcrumb subTitle={"Registered"} title={"Membership Form"} />
        <Navbar />
        <main className="main-content">
          <div className="p-8 bg-slate-100">{children}</div>
        </main>
      </div>
    </Header>
  );
};

export default memo(UserLayout);
