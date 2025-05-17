import NavigationBar from "../../components/NavigationBar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#3A3A3A] text-white">
      <NavigationBar></NavigationBar>
      <div className="flex flex-col items-start justify-start px-16 py-16">
        <div>Logo here</div>
        <div className="font-bold">Welcome to Blockchain Visualiser</div>
        <div className="font-semibold">
          Select a blockchain, and visualise all its transactions,
          or visit the impact page to see the environmental
          impact of these technologies
        </div>
      </div>
    </div>
  );
}
