import React, { useEffect } from "react";
import FeedNavbar from "./Components/FeedNavbar";
import FeedSideBar from "./Components/FeedSideBar";
import CreatePostModal from "./Components/CreatePostModal";
import CreatePostCard from "./Components/CreatePostCard";
import PostCard from "./Components/PostCard";
function Feed() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Do something with the selected file
    console.log("Selected file:", file);
  };
  useEffect(() => {
    document.title = "Feed-Cornleaf Disease Classifier";
  }, []);

  return (
    <>
      <CreatePostModal />
      <div className="min-h-screen bg-base-100">
        <FeedNavbar />
        <div className="w-full h-full px-5 lg:px-10 py-5 flex gap-10">
          <div className="hidden lg:block w-80 h-full sticky top-28 left-0">
            <FeedSideBar />
          </div>
          {/* Feed div */}
          <div className="w-full lg:w-1/2">
            {/* Write a post */}
            <CreatePostCard/>
            {/* Start posts */}
            <div className="pt-5 flex flex-col gap-3">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
