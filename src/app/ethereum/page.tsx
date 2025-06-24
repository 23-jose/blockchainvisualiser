import NavigationBar from "../../../components/NavigationBar";
import SearchBar from "../../../components/SearchBar";

export default function BitcoinPage() {
  return (
    <div className="min-h-screen bg-[#3A3A3A] text-white">
      <NavigationBar></NavigationBar>
      <div className="h-full w-full flex flex-col px-18 py-20">
        <div className="text-5xl pb-4">Ethereum</div>
        <div className="flex items-center justify-between text-xl">
          <div>Latest Transactions</div>
          <div className="flex">
            <div className="pr-15">
              Filters Button
            </div>
            <SearchBar></SearchBar></div>
        </div>  
      </div>
    </div>
  );
}