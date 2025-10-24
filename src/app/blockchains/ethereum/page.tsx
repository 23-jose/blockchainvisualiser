"use client";

import NavigationBar from "../../../../components/NavigationBar";
import SearchBar from "../../../../components/SearchBar";
import TransactionList from "../../../../components/TransactionList";
import transactions from "../../../../data/ethereum.json"; 
import { useState } from "react";

export default function EthereumPage() {

  const [searchQuery, setSearchQuery] = useState("");

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.receiver.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#2E2E2E] text-white">
      <NavigationBar></NavigationBar>
      <div className="h-full w-full flex flex-col px-8 md:px-18 pt-20">
        <h1 className="text-5xl pb-4">Ethereum</h1>
        <div className="flex flex-col sm:flex-row items-center justify-between text-xl gap-4">
          <p>Latest Transactions</p>
          <div className="flex items-center gap-4 w-full sm:w-auto">
              <SearchBar searchQuery = {searchQuery} setSearchQuery = {setSearchQuery}></SearchBar>
            </div>
        </div>
      </div>
      <div className="h-full w-full px-8 md:px-18 py-12">
        <TransactionList dataFile={filteredTransactions}></TransactionList> 
      </div>
    </main>
  );
}