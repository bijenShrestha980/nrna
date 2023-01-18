import React, { memo } from "react";
import UserLayout from "@/layout/UserLayout";

const Success = () => {
  return (
    <UserLayout>
      <main className="main-content">
        <div className="p-8 bg-slate-100">
          <div className="text-center h-full m-auto text-lg font-semibold text-slate-500">
            <p>Thank you for Registration</p>
            <p>After validation we will send confirmation email.</p>
          </div>
        </div>
      </main>
    </UserLayout>
  );
};

export default memo(Success);
