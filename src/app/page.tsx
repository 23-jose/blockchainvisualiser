import NavigationBar from "../../components/NavigationBar";

export default function HomePage() {
  return (
    <main className="bg-[#2E2E2E] min-h-screen text-white">
      <NavigationBar></NavigationBar>
      <div className="w-full h-full flex flex-col items-start justify-start px-8 md:px-18 py-25">
        <img src="/LogoCube.png" alt="LogoPicture" className="w-35 h-auto"/>
        <h1 className="font-semibold pt-5 text-5xl max-w-xs md:max-w-lg" style={{ lineHeight: '1.2' }}>Welcome to Blockchain Visualiser</h1>
        <p className="pt-3 text-2xl max-w-xs md:max-w-lg">
          Select a blockchain, and visualise all its transactions, or visit the impact page to see the environmental impact of these technologies
        </p>
      </div>
    </main>
  );
}
