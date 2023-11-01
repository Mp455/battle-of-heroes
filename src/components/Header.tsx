import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto flex">
      <div className="relative h-[80px] w-[80px]">
        <Image src="/icon-logo.png" alt="Battle of heroes" fill />
      </div>
      <div
        className="flex flex-row items-center font-medium text-primary
        "
      >
        Battle of Heroes
      </div>
    </div>
  );
};

export default Header;
