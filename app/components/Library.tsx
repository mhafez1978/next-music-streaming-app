"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

const Library = () => {
  const onClick = () => {
    //handle upload later
    //alert("clicked");
  };

  return (
    <div className="flex flex-col">
      <div className="flex item-center justify-between px-5 pt-4">
        <div className="inline-flex item-center gap-x-2">
          <TbPlaylist size={34} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          size={34}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          onClick={onClick}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of Songs !</div>
    </div>
  );
};

export default Library;
