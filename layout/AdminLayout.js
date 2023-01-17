import { memo, useEffect, useState } from "react";
// COMPONENTS
import Auth from "./Auth";
import AdminBreadcrumb from "./Breadcrumb/AdminBreadcrumb";
import AdminHeader from "./Header/AdminHeader";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const AdminLayout = ({ children }) => {
  const [sidebar, setSidebar] = useState(true);
  useEffect(() => {
    window.innerWidth <= 1024 ? setSidebar(false) : setSidebar(true);
  }, []);
  return (
    <>
      <Header>
        <Auth>
          <main className="mx-auto flex">
            <span className="bg-sky-50 h-screen w-full absolute -z-50 transition-all ease-in-out duration-700"></span>
            <div
              className={`transition ease-in-out duration-700 bg-sky-50 ${
                sidebar === false ? "-translate-x-full" : "translate-x-0"
              }`}
            >
              <Sidebar sidebar={sidebar} />
            </div>
            <div className="main-content w-full transition-all ease-in-out duration-700">
              <span className="bg-indigo-900 h-2/6 w-full fixed top-0 -z-10 transition-all ease-in-out duration-700"></span>
              <span className="bg-slate-50 h-4/6 w-full fixed bottom-0 -z-10 transition-all ease-in-out duration-700"></span>
              <div className=" pt-5 pb-8 px-4 md:p-8 transition ease-in-out duration-700">
                <AdminHeader setSidebar={setSidebar} sidebar={sidebar} />
                <AdminBreadcrumb subTitle={"NCC"} title={"Dashboard"} />
                {children}
              </div>
            </div>
          </main>
        </Auth>
      </Header>
    </>
  );
};

export default memo(AdminLayout);
