import Image from "next/image";

const brands = [
  { id: 1, brand: "/google.png" },
  { id: 2, brand: "/forbes.png" },
  { id: 3, brand: "/bloomberg.png" },
  { id: 4, brand: "/sleepreview.png" },
  { id: 5, brand: "/influencive.png" },
];

export default function Brands() {
  return (

      <div className="bg-white shadow-xl p-4 flex flex-row justify-around items-center gap-3 sm:gap-20">
        {brands.map((item) => (
          <Image
            key={item.id}
            src={item.brand}
            width={100}
            height={100}
            alt="brands"
            className="w-[48px] sm:w-[120px]"
          />
        ))}
      </div>
 
  );
}
