import React, { useEffect } from "react";
import FeedNavbar from "./Components/FeedNavbar";
import FeedSideBar from "./Components/FeedSideBar";
import CreatePostCard from "./Components/CreatePostCard";
import CreatePost from "./Components/CreatePost";
import PostCard from "./Components/PostCard";
import FarmerStats from "./Components/FarmerStats";
function ProfileFeed() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Do something with the selected file
    console.log("Selected file:", file);
  };
  useEffect(() => {
    document.title = "Farmer Lastname - Feed";
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
          {/* Cover Photo */}
          <div className="w-full lg:w-1/2">
            <div className="w-full h-32 lg:h-64">
              <img
                src="https://cdn.britannica.com/33/75933-050-826C8817/Rows-corn-field-Nebraska.jpg"
                alt="Farm"
                className="object-cover w-full h-full brightness-50"
              />
            </div>
            {/* Info */}
            <div className="flex w-full">
              {/* Avatar */}
              <div className="avatar lg:w-40 lg:h-40 w-24 h-24 -mt-10 online z-0">
                <div className="rounded-full">
                  <img
                    src="https://media.licdn.com/dms/image/C4E12AQGJMHJYg2NzWg/article-cover_image-shrink_720_1280/0/1546512971231?e=2147483647&v=beta&t=8JEuNbLs3TuGKrF5xGCCaAb5ZbXYuLBdel0CNCTlBX4"
                    alt="Profile"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="lg:text-3xl text-xl font-semibold pt-3 pl-3">
                  Juan Dela Cruz
                </h3>
                <h5 className="pl-3 text-base lg:text-lg text-gray-500">
                  Farmer
                </h5>
              </div>
            </div>
            {/* Posts feed */}
            <div className="pt-3">
              <CreatePost />
              <div className="w-full rounded-lg shadow-md mt-2 flex">
                <h3 className="text-xl font-semibold px-5 py-3 flex-1">
                  6 Total Posts
                </h3>
                <div className="flex items-center pr-3 text-lg text-lime-700 font-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3>ListView</h3>
                </div>
              </div>
              {/* Posts go here */}
              <div className="flex flex-col pt-3 gap-2">
              {/*   <PostCard /> */}
            
              </div>
            </div>
          </div>
          {/* Pa hide nalang neto sa expert sir */}
          <div className="px-5 hidden lg:flex flex-1 sticky top-28 right-0 h-fit">
            <FarmerStats />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileFeed;
