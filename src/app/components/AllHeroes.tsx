import HeroCard from "@/components/HeroCard";
import React from "react";

const AllHeroes = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-items">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className=" px-5 font-medium text-grayPrimary whitespace-nowrap">
          Todos os heróis
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>
      <div className="flex flex-col items-center mt-5 gap-5">
        <HeroCard />
      </div>
    </div>
  );
};

export default AllHeroes;
