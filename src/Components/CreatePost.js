import React from "react";
import CreatePostCard from "./CreatePostCard";

export default function CreatePost({user}) {
  const handleClick = () => {
    // Redirect to the specified page
    window.location = "/create/post";
  };
  return (
    <div
      onClick={handleClick}
      className="h-48 bg-white rounded-md shadow-lg cursor-pointer hover:bg-base-200 transition-colors"
    >
      <div className="flex gap-5 pt-10 px-5 overflow-auto">
        <h3 className="font-semibold">Posts</h3>
        <h3 className=" text-gray-400">Photos</h3>
      </div>
      <div className="divider" />
      <div className="px-5 lg:px-10 flex gap-2">
        <div className="avatar">
          <div className="w-11 h-11 rounded-full cursor-pointer">
            <img
              src={user.picture}
              alt="Farmer profile"
            />
          </div>
        </div>
        <div className="w-full bg-gray-100 rounded-full flex items-center pl-5 text-sm font-light text-gray-500">
          Write a post...
        </div>
      </div>
    </div>
  );
}
