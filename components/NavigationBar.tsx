import Link from 'next/link';

export default function NavigationBar() {
    return (
        <nav className="bg-gray-800 text-white flex">
            <Link href="">BV</Link>
            <Link href="">Impact</Link>
            <Link href="">Ethereum</Link>
            <Link href="">Bitcoin</Link>
        </nav>
    );
}