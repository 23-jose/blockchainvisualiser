import NavigationBar from "../../../components/NavigationBar";
import NavigationCard from "../../../components/NavigationCard";

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-[#2E2E2E] text-white">
      <NavigationBar></NavigationBar>
      <div className="h-full w-full flex flex-col items-center justify-center px-4 md:px-16 py-20">
        <div className="text-4xl md:text-5xl pb-8">Impact</div>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center text-xl pt-6">
          <NavigationCard text="Energy Spent" link="/impact/graph" />
          <NavigationCard text="Other Metrics" link="/impact/metrics"/>
        </div> 
      </div>
    </div>
  );
}