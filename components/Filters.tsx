"use client";

type FiltersProps = {
  onClose: () => void;
};

export default function Filters({ onClose }: FiltersProps) {
  return (
    <div className="fixed inset-0 backdrop-blur flex justify-center items-center px-75">
      <div className="bg-[#2E2E2E] p-6 rounded-xl text-white w-full">
        <div className="text-2xl items-center justify-center">Filters</div>


        <div className="flex flex-col"></div>
            <div className="flex justify-between gap-4 pt-5 pb-10 px-20">
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
            <div className="flex justify-between gap-4 pt-5 pb-10 px-20">
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
        <div className="flex justify-between">
            <button
                onClick={onClose}
                className="mt-2 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-300"
            >Close</button>
            <button
                onClick={onClose}
                className="mt-2 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-300"
            >Apply</button>
        </div>
      </div>
    </div>
  );
}
