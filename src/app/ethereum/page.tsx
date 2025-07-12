import NavigationBar from "../../../components/NavigationBar";
import SearchBar from "../../../components/SearchBar";
import TransactionList from "../../../components/TransactionList";
import Button from "../../../components/Button";

export default function BitcoinPage() {
  return (
    <main className="min-h-screen bg-[#2E2E2E] text-white">
      <NavigationBar></NavigationBar>
      <div className="h-full w-full flex flex-col px-8 md:px-18 pt-20">
        <h1 className="text-5xl pb-4">Ethereum</h1>
        <div className="flex flex-col sm:flex-row items-center justify-between text-xl gap-4">
          <p>Latest Transactions</p>
          <div className="flex items-center gap-4 w-full sm:w-auto">
              <Button></Button>
              <SearchBar></SearchBar>
            </div>
        </div>
      </div>
      <div className="h-full w-full px-8 md:px-18 py-8">
        <TransactionList></TransactionList> 
      </div>
    </main>
  );
}