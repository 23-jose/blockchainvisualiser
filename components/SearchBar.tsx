"use client";
import { useState } from "react"
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {

    const [search, setSearch] = useState("");

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Searching: ");
    };

    return (
        <form onSubmit = {onSubmit} className="flex items-center border border-white rounded-md overflow-hidden max-w-md bg-[#212121] px-1">
            <input
                type= "text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a wallet"
                className=""/>
            <button type = "submit" className="">
                <IoSearch className="flex h-6 w-6" />
            </button>
        </form>
    );
}