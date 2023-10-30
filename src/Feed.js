import React, { useEffect, useState } from "react";
import FeedNavbar from "./Components/FeedNavbar";
import FeedSideBar from "./Components/FeedSideBar";
import PostCard from "./Components/PostCard";
import FarmerStats from "./Components/FarmerStats";
import CreatePost from "./Components/CreatePost";
import axios from "axios";
import ExpertStats from "./Components/ExpertStats";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  const API_BASE_URL = 'https://railway-django-cornleaf-production.up.railway.app'
  

  useEffect(() => {
    document.title = "Feed-Cornleaf Disease Classifier";

    const fetchPosts = async () => {
      try {
        const postsResponse = await axios.get(
          `${API_BASE_URL}/post/api2/posts/?is_classification=false`
        );
        const postsResponseResults = await postsResponse.data["results"];
        console.log(postsResponseResults);

        setPosts(postsResponseResults); // Update the state with the fetched posts
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
          <div className="w-full lg:w-1/2">
            {/* Write a post */}
            <CreatePost user={user} />

            {/* Start posts */}
            <div className="pt-5 flex flex-col gap-3">
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
                      user={user}
                      comments={post.comments}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
          {/* here for farmer and expert stats */}
          {user.user_type === "user" ? (
            <div className="px-5 hidden lg:flex flex-1 sticky top-28 right-0 h-fit">
              <FarmerStats />
            </div>
          ) : (
            <div className="px-5 hidden lg:flex flex-1 sticky top-28 right-0 h-fit">
              <ExpertStats />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Feed;
