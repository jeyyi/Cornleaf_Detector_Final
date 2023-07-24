import React from "react";
import FeedNavbar from "./Components/FeedNavbar";
import FeedSideBar from "./Components/FeedSideBar";
function Feed() {
  return (
    <>
      <div className="min-h-screen bg-base-100">
        <FeedNavbar />
        <div className="w-full h-full px-10 py-5 flex">
          <div className="hidden lg:block w-96 h-fit">
            <FeedSideBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
