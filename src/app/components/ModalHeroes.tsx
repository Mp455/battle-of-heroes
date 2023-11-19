import React from "react";

interface Hero {
  name: string;
  image: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
}

interface ModalHeroProps {
  heroes: [Hero, Hero];
  closeModal: () => void;
}

const ModalHeroes: React.FC<ModalHeroProps> = ({ heroes, closeModal }) => {
  const calculateTotalPower = (powerstats: Hero["powerstats"]) => {
    return Object.values(powerstats).reduce((acc, value) => acc + value, 0);
  };

  const [hero1, hero2] = heroes;
  const totalPower1 = calculateTotalPower(hero1.powerstats);
  const totalPower2 = calculateTotalPower(hero2.powerstats);

  const winner = totalPower1 > totalPower2 ? hero1 : hero2;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-80 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Comparação de Heróis</h2>

        <div className="flex justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">{hero1.name}</h3>
            <img
              src={hero1.image}
              alt={hero1.name}
              className="w-24 h-24 rounded-full"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{hero2.name}</h3>
            <img
              src={hero2.image}
              alt={hero2.name}
              className="w-24 h-24 rounded-full"
            />
          </div>
        </div>

        <div className="mb-4">
          <p>
            {hero1.name} - Pontuação Total: {totalPower1}
          </p>
          <p>
            {hero2.name} - Pontuação Total: {totalPower2}
          </p>
        </div>

        <h3 className="text-xl font-semibold">Vencedor: {winner.name}</h3>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={closeModal}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ModalHeroes;
