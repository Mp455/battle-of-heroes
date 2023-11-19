"use client";
import React, { useState, useEffect } from "react";
import HeroCard from "@/components/HeroCard";
import ModalHeroes from "./ModalHeroes";

interface Hero {
  id: number;
  name: string;
  images: {
    lg: string;
  };
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
}

const AllHeroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [selectedHeroes, setSelectedHeroes] = useState<Hero[]>([]);
  const [showModal, setShowModal] = useState(false);

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

  const handleHeroClick = (hero: Hero) => {
    if (selectedHeroes.length < 2) {
      setSelectedHeroes((prevSelected) => {
        if (prevSelected.length < 2) {
          return [...prevSelected, hero];
        } else {
          // Se já houver 2 heróis selecionados, substitua o primeiro
          prevSelected[0] = hero;
          return prevSelected;
        }
      });

      if (selectedHeroes.length === 1) {
        setShowModal(true);
      }
    }
  };

  const closeModal = () => {
    setSelectedHeroes([]);
    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">
          Todos os heróis
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {heroes.map((hero) => (
          <HeroCard
            key={hero.id}
            name={hero.name}
            image={hero.images}
            powerstats={hero.powerstats}
            onClick={() => handleHeroClick(hero)}
          />
        ))}
      </div>
      {showModal && (
        <ModalHeroes heroes={selectedHeroes} closeModal={closeModal} />
      )}
    </div>
  );
};

export default AllHeroes;
