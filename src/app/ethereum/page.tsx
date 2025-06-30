import NavigationBar from "../../../components/NavigationBar";
import SearchBar from "../../../components/SearchBar";
import TransactionList from "../../../components/TransactionList";
import Button from "../../../components/Button";

export default function EthereumPage() {
  return (
    <div className="min-h-screen bg-[#2E2E2E] text-white">
      <NavigationBar></NavigationBar>
      <div className="h-full w-full flex flex-col px-18 pt-20">
        <div className="text-5xl pb-4">Ethereum</div>
        <div className="flex items-center justify-between text-xl">
          <div>Latest Transactions</div>
          <div className="flex">
            <div className="pr-15">
              <Button></Button>
            </div>
            <SearchBar></SearchBar></div>
        </div>  
      </div>
      <div className="h-full w-full px-18 pt-7">
        <TransactionList></TransactionList> 
      </div>
    </div>
  );
}