import React from "react";
import { UserRound, FolderCode } from "lucide-react";
import { Link } from "react-router";

const ProfileCard = () => {
  return (
    <div className=" bg-gray-100 pt-10  flex flex-col  relative mx-auto px-5  h-full w-270 justify-center items-center          rounded-2xl shadow-md ">
      <div className="flex flex-row gap-15 ">
        <img
          src="../src/assets/Avatar.png"
          alt="avatar"
          className="w-50   rounded-[50%]"
        />
        <div className="gap-5 flex flex-col">
          <h3 className="text-3xl font-semibold">Vijay varma</h3>
          <p className="text-xl text-blue-600">@quantumsavant</p>
          <p className="text-xl ">Frontend Developer</p>

          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            consequatur fugiat sunt repellendus asperiores tempora. Tempore,
            quia similique? Porro soluta voluptate dolor consequuntur aut
            voluptatum .
          </p>
        </div>
      </div>
      <div className="flex mt-20  gap-80">
        <div className="flex flex-col  items-center">
          <div className="flex items-center gap-3">
            <UserRound size={25} className="text-blue-600" />
            <p className="text-3xl font-bold">120</p>
          </div>
          <p className="text-xl text-gray-500">Followers</p>
        </div>
        <div className="flex flex-col items-center ">
          <div className="flex items-center gap-3">
            <FolderCode size={25} className="text-blue-600" />
            <p className="text-3xl font-bold">25</p>
          </div>
          <p className="text-xl text-gray-500">Repositories</p>
        </div>
      </div>

      <div className="mt-15">
        <Link to="/repositories">
          <button className="text-xl bg-blue-500 text-white px-4 py-2 m-4 rounded-2xl cursor-pointer   hover:scale-85 ">
            View repositories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
