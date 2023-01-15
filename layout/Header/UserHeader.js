import Image from "next/image";
import React, { memo } from "react";
// ASSETS
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="flex justify-between align-center py-8">
      <div className="w-14 h-14">
        <Image width="100" height="100" src={logo} alt="NRNA" />
      </div>
      <div>
        <h3 className="text-3xl font-semibold text-right text-sky-600">NCC</h3>
        <h3 className="text-3xl font-semibold text-right">Oceania</h3>
      </div>
    </header>
  );
};

export default memo(Header);
