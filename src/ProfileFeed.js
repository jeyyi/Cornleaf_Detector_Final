import React, { useEffect, useState } from "react";
import FeedNavbar from "./Components/FeedNavbar";
import FeedSideBar from "./Components/FeedSideBar";
import CreatePost from "./Components/CreatePost";
import PostCard from "./Components/PostCard";
import FarmerStats from "./Components/FarmerStats";
import axios from "axios";

function ProfileFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    document.title = "Farmer Lastname - Feed";
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://railway-django-cornleaf-production.up.railway.app/post/api2/posts/?author=${user.id}`
        ); // Replace with your API endpoint

        const data = await response.data;
        const postResult = data['results'].slice(0,4)
        console.log(postResult)
        setPosts(postResult); // Update the state with the fetched posts
        setLoading(false);

      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
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
                  alt='no image'
                    src={user.picture}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="lg:text-3xl text-xl font-semibold pt-3 pl-3">
                  {user.first_name} {user.last_name}
                </h3>
                <h5 className="pl-3 text-base lg:text-lg text-gray-500">
                  {user.user_type === 'user' ? 'Farmer': 'Expert'}
                </h5>
              </div>
            </div>
            {/* Posts feed */}
            <div className="pt-3">
              <CreatePost user={user}/>
              <div className="w-full rounded-lg shadow-md mt-2 flex">
                <h3 className="text-xl font-semibold px-5 py-3 flex-1">
                  3 latest posts
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
              {loading ? (
                <span className="loading loading-spinner loading-md mx-auto"></span>
              ) : (
                posts.map((post) => (
                  <div key={post.id}>
                    <PostCard
                      postID={post.id}
                      author={post.author_name}
                      authorType={
                        post.author_type === "farmer" ? "Farmer" : "Expert"
                      }
                      authorImage={post.author_image}
                      datePosted={post.date_posted}
                      content={post.content}
                      imageLink={post.image}
                      tags={post.tags}
                      user = {user}
                      comments={post.comments}
                    />
                  </div>
                ))
              )}
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
