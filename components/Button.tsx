"use client";
import { useState } from "react";
import Filters from "./Filters";

export default function Button() {

    const [showFilters, setFilters] = useState(false);

    return (
        <>
            <button
                onClick={() => setFilters(true)}
                className="w-40 px-4 text-xl flex justify-center items-center border border-white rounded-md overflow-hidden bg-[#212121]"
            >
                Filters
            </button>
            {showFilters && (
                <Filters onClose={() => setFilters(false)} />
            )}
      </>
    );
}