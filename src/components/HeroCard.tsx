import React from "react";
import Image from "next/image";

const HeroCard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[280px] w-[280px]">
        <Image
          className="rounded-lg shadow-sm"
          style={{ objectFit: "cover" }}
          fill
          src="/icon-logo.png"
          alt="alo"
        />
      </div>
      <h3 className="text-primaryDarker font-medium text-sm mt-2">Teste</h3>
      <div className="flex items-center gap-1 mt-1">Teste</div>
    </div>
  );
};

export default HeroCard;
