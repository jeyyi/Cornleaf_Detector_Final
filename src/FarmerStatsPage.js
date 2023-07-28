import React, { useEffect } from "react";
import FeedNavbar from "./Components/FeedNavbar";
import FeedSideBar from "./Components/FeedSideBar";
import FarmerStats from "./Components/FarmerStats";

function FarmerStatsPage() {
  useEffect(() => {
    /* Change farmer to name */
    document.title = "Stats - Farmer";
  });
  return (
    <>
      <div className="min-h-screen bg-base-100">
        <FeedNavbar />
        <div className="w-full h-full px-5 lg:px-10 py-5 flex gap-10">
          <div className="hidden lg:block w-80 h-full sticky top-28 left-0">
            <FeedSideBar />
          </div>
          {/* Feed div */}
          <div className="w-full lg:w-1/2">
            <h1 className="py-3 text-2xl font-semibold">Stats</h1>
            {/* Write a post */}
            <FarmerStats />
          </div>
          {/* Pa hide nalang neto sa expert sir */}
        </div>
      </div>
    </>
  );
}

export default FarmerStatsPage;
