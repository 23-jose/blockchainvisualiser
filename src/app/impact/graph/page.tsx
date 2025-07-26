import Button from "../../../../components/Button";
import NavigationBar from "../../../../components/NavigationBar";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";

export default function GraphPage() {
  return (
    <div className="min-h-screen bg-[#2E2E2E] text-white">
      <NavigationBar></NavigationBar>
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 pt-20 pb-12">
        <Link href="/impact"><div className="text-3xl"><MdArrowBackIosNew /></div></Link>
        <Button></Button>
      </div>
      <div className="bg-red-500 h-full w-full flex items-center justify-center px-18 py-20">
        <div>Graph here</div>
      </div>
    </div>
  );
}