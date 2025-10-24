"use client";

type FiltersProps = {
  onClose: () => void;
};

export default function Filters({ onClose }: FiltersProps) {
  return (
    <div className="fixed inset-0 backdrop-blur flex justify-center items-center px-4">
      <div className="bg-[#2E2E2E] p-6 rounded-xl text-white w-full max-w-lg">
        <div className="text-2xl items-center mb-6">Filters</div>
        <div className="flex flex-col gap-6"></div>
            <div className="flex flex-col justify-between gap-6 text-center">
                <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-white" />
                    Water Usage
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-white" />
                    Carbon Emissions
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-white" />
                    Electricity Spent
                </label>
            </div>
        <div className="flex justify-between gap-4 pt-6">
            <button
                onClick={onClose}
                className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-300"
            >Close</button>
            <button
                onClick={onClose}
                className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-300"
            >Apply</button>
        </div>
      </div>
    </div>
  );
}
