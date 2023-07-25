import React, { useEffect, useState } from "react";
import FeedNavbar from "./Components/FeedNavbar";
import FeedSideBar from "./Components/FeedSideBar";
import CreatePostModal from "./Components/CreatePostModal";
import CreatePostCard from "./Components/CreatePostCard";
import PostCard from "./Components/PostCard";
import CreatePost from "./Components/CreatePost";
function Feed() {
  const [posts, setPosts] = useState([])
 
  const handleFileChange = (event) => {
    console.log(event)
    const file = event.target.files[0];
    // Do something with the selected file
    console.log("Selected file:", file);
  };
  useEffect(() => {
    document.title = "Feed-Cornleaf Disease Classifier";

    const fetchPosts = async () => {
      try {
        const response = await fetch('https://wj2e17sxka.execute-api.ap-southeast-1.amazonaws.com/dev/post/api2/posts/'); // Replace with your API endpoint
        const data = await response.json();
        console.log(data)
        setPosts(data); // Update the state with the fetched posts
      } catch (error) {
        console.error('Error fetching posts:', error);
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
      <CreatePost/>

            {/* Start posts */}
            <div className="pt-5 flex flex-col gap-3">

              {posts.map((post) => (
                <div key={post.id}>
                  <PostCard author={post.author} content={post.content} imageLink={post.pictures}/>
                </div>
              ))}
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
