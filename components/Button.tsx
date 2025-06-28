"use client";
import { IoSearch } from "react-icons/io5";

export default function Button() {
    const onClick = () => {
        console.log("Button clicked: "); 

    }

    return (
        <button
            onClick={onClick}
            className="flex items-center border border-white rounded-md overflow-hidden max-w-md bg-[#212121] px-12"
        >
            Filters
        </button>
    );
}