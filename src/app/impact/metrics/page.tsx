import NavigationBar from "../../../../components/NavigationBar";

export default function BitcoinPage() {
  return (
    <div className="min-h-screen bg-[#2E2E2E] text-white">
      <NavigationBar></NavigationBar>
      <div className="h-full w-full flex flex-col items-center justify-center px-18 py-20">
        <div className="text-5xl pb-8">METRICS</div>
      </div>
    </div>
  );
}