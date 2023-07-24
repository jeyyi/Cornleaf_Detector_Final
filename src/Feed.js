import React from "react";
import FeedNavbar from "./Components/FeedNavbar";
import FeedSideBar from "./Components/FeedSideBar";
import CreatePostModal from "./Components/CreatePostModal";
function Feed() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Do something with the selected file
    console.log("Selected file:", file);
  };
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
            <div
              onClick={() => window.my_modal_1.showModal()}
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
                      src="https://media.licdn.com/dms/image/C4E12AQGJMHJYg2NzWg/article-cover_image-shrink_720_1280/0/1546512971231?e=2147483647&v=beta&t=8JEuNbLs3TuGKrF5xGCCaAb5ZbXYuLBdel0CNCTlBX4"
                      alt="Farmer profile"
                    />
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full flex items-center pl-5 text-sm font-light text-gray-500">
                  Write a post...
                </div>
              </div>
            </div>
            {/* Start posts */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
