import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export default function ImpactCard() {
  return (
    <div className="bg-[#212121] rounded-2xl text-white w-100 h-128 flex flex-col justify-between">
        <div className="text-5xl pl-8 pt-8">
            Energy<br />
            Spent
        </div>
        <Link href="/impact/graph">
            <div className="flex justify-end pr-8 pb-8">
                <IoIosArrowForward className="h-8 w-8" />
            </div>
        </Link>
    </div>
  );
}
