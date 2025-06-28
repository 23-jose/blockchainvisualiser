import NavigationBar from "../../components/NavigationBar";

export default function HomePage() {
  return (
    <div className="bg-[#2E2E2E] min-h-screen text-white">
      <NavigationBar></NavigationBar>
      <div className="w-full h-full flex flex-col items-start justify-start px-18 py-25">
        <div><img src="/LogoCube.png" alt="LogoPicture" className="w-35 h-auto"/></div>
        <div className="font-semibold pt-5 text-5xl" style={{ lineHeight: '1.2' }}>Welcome to<br />Blockchain Visualiser</div>
        <div className="pt-3 text-2xl">
          Select a blockchain, and visualise all its transactions,<br />
          or visit the impact page to see the environmental<br />
          impact of these technologies
        </div>
      </div>
    </div>
  );
}
