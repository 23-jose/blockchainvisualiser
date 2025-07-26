import Button from "../../../../components/Button";
import NavigationBar from "../../../../components/NavigationBar";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import MetricsCard from "../../../../components/MetricsCard";

export default function MetricsPage() {
  return (
    <div className="min-h-screen bg-[#2E2E2E] text-white">
      <NavigationBar></NavigationBar>
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 pt-20 pb-12">
        <Link href="/impact"><div className="text-3xl"><MdArrowBackIosNew /></div></Link>
        <Button></Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-24 pb-12 max-w-7xl mx-auto place-items-center">
        {Array.from({ length: 9 }).map((_, index) => (
          <MetricsCard key={index} />))}
      </div>
    </div>
  );
}