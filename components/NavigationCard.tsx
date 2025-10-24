import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

interface NavigationCardProps {
  text: string;
  link: string;
}

export default function NavigationCard({ text, link }: NavigationCardProps) {
  return (
    <Link href={link} className="block">
      <div className="bg-[#212121] rounded-2xl text-white flex flex-col justify-between items-start w-72 h-72 hover:scale-105 transition-transform">
        <div className="text-5xl px-6 pt-6 max-w-[10rem] leading-tight">
          {text}
        </div>
        <div className="flex justify-end w-full px-6 pb-6">
          <IoIosArrowForward className="h-8 w-8" />
        </div>
      </div>
    </Link>
  );
}
