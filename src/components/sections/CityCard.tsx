
interface CityCardProps {
  name: string;
  description: string;
  image: string;
  index: number;
}

export const CityCard = ({ name, description, image, index }: CityCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg group">
      <img 
        src={image}
        alt={`DiepClean in ${name}`}
        width="300"
        height="256"
        loading="lazy"
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
        <div className="p-6 text-white">
          <h4 className="text-2xl font-bold mb-1">{name}</h4>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
};
