import React from "react";
import { Search } from "lucide-react";

const SearchForm = () => {
  return (
    <div className=" h-80 flex flex-col   justify-between items-center pt-12 pb-8 ">
      <h2 className="font-bold text-6xl text-black">GitHub Profile Explorer</h2>
      <h3 className="text-3xl">Search any GitHub username</h3>
      <div className="flex gap-8 items-center relative">
        <Search size={20} className="absolute left-2 text-gray-500 " />
        <input
          type="text"
          placeholder="Search GitHub username..."
          className="border-2  bg-white pl-10 pr-6 py-4 text-xl text-gray-500  rounded-2xl w-full justify-between flex"
        />
        <button className=" bg-blue-500 text-white text-xl cursor-pointer hover:scale-90  px-4 py-4 rounded-xl
        ">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
