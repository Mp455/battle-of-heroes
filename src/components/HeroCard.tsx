import Image from "next/image";

interface HeroCardProps {
  name: string;
  image: {
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
  onClick: () => void;
}

const HeroCard: React.FC<HeroCardProps> = ({ name, image, powerstats }) => {
  const calculateTotalPower = (powerstats: HeroCardProps["powerstats"]) => {
    return (
      powerstats.intelligence +
      powerstats.strength +
      powerstats.speed +
      powerstats.durability +
      powerstats.power +
      powerstats.combat
    );
  };

  const totalPower = calculateTotalPower(powerstats);

  return (
    <div className="flex flex-col items-center bg-transparent p-4 rounded-lg border border-primary">
      <div className="relative h-[280px] w-[280px]">
        <Image
          className="rounded-lg shadow-sm"
          style={{ objectFit: "cover" }}
          fill
          src={image.lg}
          alt={name}
        />
      </div>
      <h3 className="text-primary font-medium text-sm mt-2">{name}</h3>
      <p className="text-primary mt-2">
        Total Power: <span className="text-secondary">{totalPower}</span>
      </p>
      {/* Adicione a URL da imagem se desejar */}
    </div>
  );
};

export default HeroCard;
