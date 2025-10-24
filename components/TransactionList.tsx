"use client";

import { useState } from "react";

interface Transaction {
  sender: string;
  receiver: string;
  amount: string;
  fee: string;
  date: string;
  time: string;
}

interface TransactionListProps {
  dataFile: Transaction[];
  itemsPerPage?: number;
}

export default function TransactionList({dataFile, itemsPerPage = 10}: TransactionListProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(dataFile.length / itemsPerPage);
    const currentTransactions = dataFile.slice(
        (currentPage - 1) * itemsPerPage, 
        currentPage * itemsPerPage
    );
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="bg-transparent flex flex-col w-full overflow-x-auto">
            <header className="grid grid-cols-6 gap-4 text-xl text-white text-center py-2 border-t border-b border-white">
                <div>Sender</div>
                <div>Receiver</div>
                <div>Amount</div>
                <div>Fee</div>
                <div>Date (yyyy/mm/dd)</div>
                <div>Time (UTC)</div>
            </header>

            {currentTransactions.map((transaction, index) => (
                <div
                    key={index}
                    className={`${index % 2 === 0 ? 'bg-[#212121]' : 'bg-[#3A3A3A]'} grid grid-cols-6 gap-4 text-xl text-white text-center px-4 pl-4 py-2 border-t border-b border-white`}
                >
                    <div className="truncate max-w-[150px]" title={transaction.sender}>{transaction.sender}</div>
                    <div className="truncate max-w-[150px]" title={transaction.receiver}>{transaction.receiver}</div>
                    <div>{transaction.amount}</div>
                    <div>{transaction.fee}</div>
                    <div>{transaction.date}</div>
                    <div>{transaction.time}</div>
                </div>
            ))}

            <div className="flex justify-center mt-4 gap-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 bg-[#212121] text-white rounded disabled:opacity-50"
                >Prev</button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`px-3 py-1 rounded ${
                            currentPage === i + 1 ? "bg-[#FFD900] text-black" : "bg-[#212121] text-white"
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 bg-[#212121] text-white rounded disabled:opacity-50"
                >Next</button>
            </div>
        </div>
    );
}
