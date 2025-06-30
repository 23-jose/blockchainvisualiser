import NavigationBar from "../../../components/NavigationBar";
import ImpactCard from "../../../components/ImpactCard";

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-[#2E2E2E] text-white">
      <NavigationBar></NavigationBar>
      <div className="h-full w-full flex flex-col items-center justify-center px-18 py-20">
        <div className="text-5xl pb-8">Impact</div>
        <div className="flex space-x-4 justify-center text-xl">
          <ImpactCard />
          <ImpactCard />
          <ImpactCard />
        </div> 
      </div>
    </div>
  );
}