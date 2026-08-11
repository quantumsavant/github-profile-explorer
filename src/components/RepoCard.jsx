import React from "react";
import { FolderGit2 , Star, GitFork, ArrowRight } from "lucide-react";

const RepoCard = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="flex flex-col  mt-15 border border-gray-400 w-[700px] h-full px-4 py-8 rounded-3xl  gap-5 bg-gray-5q0">
        <div className="flex flex-row justify-between ">
          
            <h3 className="flex gap-4 text-3xl font-medium  items-center">
              <FolderGit2 size={30} className="text-blue-600" />
              AI-Stadium-Guide
            </h3>
          

          <div className="flex gap-6 text-gray-500">
            <p className="flex text-3xl gap-1 items-center"><Star size={30} className="text-gray-500"/>0</p>
            <p className="flex text-3xl gap-1 items-center"><GitFork size={30} className="text-gray-500" />0</p>
            <p className="flex text-3xl  items-center"><ArrowRight size={30} className="text-blue-600 font-medium" /></p>
          </div>
        </div>
        <p className="font-lightbold text-xl text-gray-500">
          AI-powered stadium assistant for FIFA World cup 2026 using Google
          Gemini AI.
        </p>
        <div className="flex text-blue-600 font-medium gap-5 items-center  ">
          <p className=" bg-blue-200 px-4 py-1  rounded-3xl ">React</p>
          <p className=" bg-blue-200 px-4 py-1 rounded-3xl ">Vite</p>
          <p className=" bg-blue-200 px-4 py-1 rounded-3xl ">Gemini</p>
          <p className=" bg-blue-200 px-4 py-1 rounded-3xl ">Google AI</p>
        </div>

        <div className="flex gap-5 text-xl ">
          <h3 className="text-blue-700 font-medium">JavaScript</h3>
          <h3 className="text-gray-500">Updated 2 days Ago</h3>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
