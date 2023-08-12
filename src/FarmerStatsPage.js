import React, { useEffect } from "react";
import FeedNavbar from "./Components/FeedNavbar";
import FeedSideBar from "./Components/FeedSideBar";
import FarmerStats from "./Components/FarmerStats";

function FarmerStatsPage() {
  useEffect(() => {
  console.log('fmer stats page')

    /* Change farmer to name */
    document.title = "Stats - Farmer";
    // const fetchDailyStats = async (e) => {

    //   try {
    //     const user = JSON.parse(localStorage.getItem("user"));

    //     const response = await axios.get(
    //       `https://sngrvepvgc.execute-api.ap-southeast-1.amazonaws.com/dev/stats/total-stats/${user.id}/`
    //     ); // Replace with your API endpoint

    //     const data = await response.data;
    //     setClassifications(data)
    //     // setPosts(data); // Update the state with the fetched posts
    //     // setLoading(false);
    //   } catch (error) {
    //     console.error("Error fetching posts:", error);
    //   }
    // };


    

    // fetchDailyStats();
  }, []);
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
