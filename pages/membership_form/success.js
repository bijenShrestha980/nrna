import UserLayout from "@/layout/UserLayout";
import React from "react";

const Success = () => {
  return (
    <UserLayout>
      <div className="text-center h-full m-auto text-lg font-semibold text-slate-500">
        <p>Thank you for Registration</p>
        <p>After validation we will send confirmation email.</p>
      </div>
    </UserLayout>
  );
};

export default Success;
