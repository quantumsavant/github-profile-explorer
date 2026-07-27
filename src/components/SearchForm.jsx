import React from "react";
import { Search } from "lucide-react";

const SearchForm = () => {
  return (
    <div className="bg-amber-200 h-40 flex flex-col flex-wrap  justify-between items-center pt- ">
      <h2 className="font-bold text-4xl">Github Profile Explorer</h2>
      <div className="flex gap-8 items-center relative">
        <Search size={20} className="absolute left-2 text-gray-500" />
        <input
          type="text"
          placeholder="Search GitHub username..."
          className="border-2  bg-white pl-10 pr-6 py-2 text-xl text-gray-500 rounded-2xl w-full justify-between flex"
        />
        <button className=" bg-blue-400 text-white text-xl cursor-pointer   px-4 py-2 rounded-2xl hover:bg-blue-200
        hover:text-black ">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
