import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

export default function MoreAboutUs() {
  return (
    <Link
      href="/"
      className="w-[209px] relative flex items-center font-extrabold text-blue group"
    >
      <IoMdArrowDropright size={20} />
      <span className="mr-2">Know more about us</span>

      <span className="w-[194px] absolute left-2 right-0 bottom-0 h-[2px] bg-blue scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
    </Link>
  );
}
