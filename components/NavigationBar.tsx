import Link from 'next/link';

export default function NavigationBar() {
    return (
        <nav className="h-[56px] bg-[#212121] text-white text-xl font-bold flex items-center justify-between pr-12 pl-12">
            <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2.5"> 
                    <img src="/LogoCube.png" alt="LogoPicture" className="w-8 h-auto"/>
                    <span>BV</span>
                </Link>
            </div>
            <div className="flex gap-16">
                <Link href="/impact">Impact</Link>
                <Link href="/ethereum">Ethereum</Link>
                <Link href="/bitcoin">Bitcoin</Link>
            </div>
        </nav>
    );
}