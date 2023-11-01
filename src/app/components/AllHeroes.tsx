"use client";
import React, { useEffect, useState } from "react";
import HeroCard from "@/components/HeroCard";

// Define um tipo para os heróis
interface Hero {
  id: number;
  name: string;
  images: {
    lg: string;
  };
  // Adicione outras propriedades, se necessário
}

const AllHeroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://homologacao3.azapfy.com.br/api/ps/metahumans"
        );
        const data: Hero[] = await response.json();

        setHeroes(data);
      } catch (error) {
        console.error("Erro ao buscar heróis: ", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">
          Todos os heróis
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>
      <div className="flex flex-col items-center mt-5 gap-5">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} name={hero.name} image={hero.images} />
        ))}
      </div>
    </div>
  );
};

export default AllHeroes;
