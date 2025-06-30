"use client";

export default function Button() {
    const onClick = () => {
        console.log("Button clicked: "); 

    }

    return (
        <button
            onClick={onClick}
            className="w-40 px-4 text-xl flex justify-center items-center border border-white rounded-md overflow-hidden bg-[#212121]"
        >
            Filters
        </button>
    );
}