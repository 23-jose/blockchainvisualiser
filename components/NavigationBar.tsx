import Link from 'next/link';

export default function NavigationBar() {
    return (
        <nav className="h-[56px] bg-[#212121] text-white text-xl font-bold flex items-center justify-between px-4 md:px-12">
            <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2.5"> 
                    <img src="/LogoCube.png" alt="LogoPicture" className="w-8 h-auto"/>
                    <p>BV</p>
                </Link>
            </div>
            <nav className="flex gap-6 md:gap-16">
                <Link href="/blockchains">Blockchains</Link>
                <Link href="/impact">Impact</Link>
            </nav>
        </nav>
    );
}