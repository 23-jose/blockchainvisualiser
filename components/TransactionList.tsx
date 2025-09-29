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
}

export default function TransactionList({dataFile}: TransactionListProps) {
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

            {dataFile.map((transaction, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'bg-[#212121]' : 'bg-[#3A3A3A]'} grid grid-cols-6 gap-4 text-xl text-white text-center px-4 pl-4 py-2 border-t border-b border-white`}>
                    <div className="truncate max-w-[150px]" title={transaction.sender}>{transaction.sender}</div>
                    <div className="truncate max-w-[150px]" title={transaction.sender}>{transaction.receiver}</div>
                    <div>{transaction.amount}</div>
                    <div>{transaction.fee}</div>
                    <div>{transaction.date}</div>
                    <div>{transaction.time}</div>
                </div>
            ))}
        </div>
    );
}