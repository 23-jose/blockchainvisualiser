import Link from 'next/link';

export default function NavigationBar() {
    return (
        <nav className="h-[56px] bg-[#212121] text-white text-xl font-bold flex items-center justify-between pr-12 pl-12">
            <Link href="/">BV</Link>
            <div className="flex gap-16">
                <Link href="/impact">Impact</Link>
                <Link href="/ethereum">Ethereum</Link>
                <Link href="/bitcoin">Bitcoin</Link>
            </div>
        </nav>
    );
}