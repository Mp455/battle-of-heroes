import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

const HeroSearch = () => {
  return (
    <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat lg:py-28">
      <h1 className="font-semibold text-2xl text-secondary text-center lg:text-[2.5rem]">
        Encontre seu herói <span className="text-primary">favorito</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5 lg:flex-row lg:max-w-[948px] lg:mx-auto lg:p-4 lg:mt-12 lg:bg-opacity-20 lg:rounded-lg">
        <Input placeholder="Pesquise o nome do herói" />
        <Button className=" lg:h-fit w-full">Buscar</Button>
      </div>
    </div>
  );
};

export default HeroSearch;
