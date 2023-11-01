import Image from "next/image";

interface HeroCardProps {
  name: string;
  image: {
    lg: string;
  };
}

const HeroCard: React.FC<HeroCardProps> = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[280px] w-[280px]">
        <Image
          className="rounded-lg shadow-sm"
          style={{ objectFit: "cover" }}
          fill
          src={image.lg}
          alt={name}
        />
      </div>
      <h3 className="text-primaryDarker font-medium text-sm mt-2">{name}</h3>
      <p className="text-gray-600 mt-2">{}</p>{" "}
      {/* Adicione a URL da imagem se desejar */}
    </div>
  );
};

export default HeroCard;
