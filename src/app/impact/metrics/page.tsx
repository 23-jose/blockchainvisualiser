import Button from "../../../../components/Button";
import NavigationBar from "../../../../components/NavigationBar";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import MetricsCard from "../../../../components/MetricsCard";

export default function MetricsPage() {
  return (
    <div className="min-h-screen bg-[#2E2E2E] text-white">
      <NavigationBar></NavigationBar>
      <div className="h-full w-full flex items-center justify-between px-32 pt-27 pb-12">
        <Link href="/impact"><div className="text-3xl"><MdArrowBackIosNew /></div></Link>
        <div className=""><Button></Button></div>
      </div>
      <div id="cardTable" className="flex flex-col space-y-8 pb-24">
        <div className="flex space-x-12 justify-center text-xl">
          <MetricsCard />
          <MetricsCard />
          <MetricsCard />
        </div>
        <div className="flex space-x-12 justify-center text-xl">
          <MetricsCard />
          <MetricsCard />
          <MetricsCard />
        </div>
        <div className="flex space-x-12 justify-center text-xl">
          <MetricsCard />
          <MetricsCard />
          <MetricsCard />
        </div>
      </div>
    </div>
  );
}