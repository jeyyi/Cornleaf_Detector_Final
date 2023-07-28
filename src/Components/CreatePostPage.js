import React, { useState } from "react";
import FeedNavbar from "./FeedNavbar";
import axios from "axios";
import FeedSideBar from "./FeedSideBar";

export default function CreatePostPage() {
  // const [author, setAuthor] = useState('');
  const [content, setContent] = useState("");
  const [pictures, setPictures] = useState("");
  
  const user = JSON.parse(localStorage.getItem("user"))
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(user)
    console.log(file)
    setPictures(file);
    // Do something with the selected file
    console.log("Selected file:", file);
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      console.log(e);

      const formData = new FormData();
      formData.append("content", content);
      formData.append("pictures", pictures);
      formData.append("author", 1);
      const response = await axios.post(
        "https://wj2e17sxka.execute-api.ap-southeast-1.amazonaws.com/dev/post/api2/posts/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
      if (response.status === 201) {
        if (typeof window !== "undefined") {
          // window.location = "/feed";
        }
      } else {
        alert("Wrong payload");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-base-100">
      <FeedNavbar />
      <div className="w-full h-full px-5 lg:px-10 py-5 flex gap-10">
        <div className="hidden lg:block w-80 h-full sticky top-28 left-0">
          <FeedSideBar />
        </div>
        {/* Feed div */}
        {/* HEREEEE */}
        <div className="w-full lg:w-1/2">
          <form
            onSubmit={handleCreatePost}
            className="shadow-md p-5 rounded-md w-full lg:w-3/4"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Create Post</h3>
            </div>
            <div className="divider" />
            <div className="flex gap-2">
              {/* Avatar */}
              <div className="avatar">
                <div className="w-12 h-12 rounded-full cursor-pointer">
                  <img
                    src="https://media.licdn.com/dms/image/C4E12AQGJMHJYg2NzWg/article-cover_image-shrink_720_1280/0/1546512971231?e=2147483647&v=beta&t=8JEuNbLs3TuGKrF5xGCCaAb5ZbXYuLBdel0CNCTlBX4"
                    alt="Farmer profile"
                  />
                </div>
              </div>
              {/* Name */}
              <div>
                <h3 className="font-medium text-gray-700">Juan Dela Cruz</h3>
                <h5 className="bg-gray-300 p-1 flex justify-center rounded-full text-sm font-light">
                  Farmer
                </h5>
              </div>
            </div>
            <textarea
              className="textarea w-full mt-5"
              placeholder="Share What's happening with your Cornleaf..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            {/* Photo Carousel, hide mo nalang to sir pag wala pang photo */}
            <div id="photo_carousel" className="w-full h-20 mt-2 flex gap-3">
              {/* Photo placeholder */}
              <div className="h-full w-20 bg-gray-600 cursor-pointer" />
              <div className="h-full w-20 bg-gray-600 cursor-pointer" />
              <div className="h-full w-20 bg-gray-600 cursor-pointer" />
              <div className="h-full w-20 bg-gray-600 cursor-pointer flex items-center justify-center text-white text-2xl">
                4+
              </div>
            </div>
            {/* Tags */}
            <div className="divider" />
            <div>
              <h3 className="font-medium pt-2">Tag</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <span className="label-text">Blight</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <span className="label-text">Rust</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <span className="label-text">Gray Leaf Spot</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <span className="label-text">Healthy</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <span className="label-text">Other</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full rounded-md border border-gray-300 py-4 mt-2 flex px-3">
              <h3 className="text-sm font-light text-gray-500 flex-1">
                Add to your post
              </h3>
              <label htmlFor="fileInput" className="cursor-pointer">
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-lime-700 cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <button className="w-full mt-3 btn hover:bg-lime-700 hover:text-white">
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
