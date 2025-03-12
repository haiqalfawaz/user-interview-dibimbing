import FilterBar from "@/components/filterBar";
import Navbar from "@/components/layout/navbar";
import TitlePage from "@/components/tittle";
import useProduct from "@/hooks/useProduct";
import React from "react";

const woman = () => {
  return (
    <>
      <Navbar />
      <div className="py-6 px-9">
        <div className="flex justify-start items-center gap-1.5">
          <TitlePage />
          <p>()</p>
        </div>
        <div>
          <FilterBar />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default woman;
