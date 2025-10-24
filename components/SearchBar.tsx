"use client";
import { IoSearch } from "react-icons/io5";

type SearchBarProps = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit = {onSubmit} className="flex items-center border border-white rounded-md overflow-hidden max-w-md bg-[#212121] px-1">
            <input
                type= "text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a wallet"
                className=""/>
            <button type = "submit" className="">
                <IoSearch className="flex h-6 w-6" />
            </button>
        </form>
    );
}