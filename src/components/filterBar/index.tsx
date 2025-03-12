import React from "react";
import { ChevronDown } from "lucide-react";

const FilterBar = () => {
  return (
    <div className="w-full flex justify-between items-center p-4 border rounded-xl bg-slate-200">
      <div className="flex justify-evenly items-center gap w-2xl">
        <div className="flex justify-center items-center gap-1">
          <p>Price</p>
          <ChevronDown />
        </div>
        <div className="flex justify-center items-center gap-1">
          <p>Size</p>
          <ChevronDown />
        </div>
        <div className="flex justify-center items-center gap-1">
          <p>Sale</p>
          <ChevronDown />
        </div>
        <div className="flex justify-center items-center gap-1">
          <p>Product Type</p>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
