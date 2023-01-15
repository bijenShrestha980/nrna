// REDUCERS
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRegisterMutation } from "../features/api/membershipApi";
import { appSelector } from "../features/slice/appSlice";
// HANDLER
import { dataURLtoFile } from "../utils/dataURLtoFile";

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
      <Registration />
    </Header>
  );
};

const Registration = () => {
  const formData = new FormData();
  const { membershipForm } = useSelector(appSelector);
  const [register, { data, isSuccess, error, isLoading }] =
    useRegisterMutation();
  console.log(membershipForm);

  useEffect(() => {
    if (
      membershipForm?.personalInfo &&
      membershipForm?.profAndInt &&
      membershipForm?.verification &&
      membershipForm?.payment
    ) {
      membershipForm.verification.picture &&
        formData.append(
          "picture",
          dataURLtoFile(membershipForm.verification.picture, "profile.jpg")
        );
      membershipForm?.payment?.paymentOption === "bank" &&
        membershipForm?.payment?.voucher &&
        formData.append(
          "voucher",
          dataURLtoFile(membershipForm.payment.voucher, "voucher.jpg")
        );

      Object.values(membershipForm).map((value) =>
        Object.entries(value).map((key) => {
          if (
            key[1] === "" ||
            key[1] === null ||
            key[0] === "picture" ||
            key[0] === "voucher"
          ) {
            // console.log(key, "not");
          } else {
            // Object.assign(registrationData, { [key[0]]: key[1] });
            formData.append(key[0], key[1]);
          }
        })
      );
      register(formData);
    }
  }, [membershipForm?.payment]);
};

export default UserLayout;
