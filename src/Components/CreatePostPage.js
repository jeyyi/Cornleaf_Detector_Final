import React, { useState, useEffect } from "react";
import FeedNavbar from "./FeedNavbar";
import axios from "axios";
import FeedSideBar from "./FeedSideBar";

export default function CreatePostPage() {
  // const [author, setAuthor] = useState('');
  const [content, setContent] = useState("");
  const [pictures, setPictures] = useState("");
  const [blight, setBlight] = useState(false);
  const [rust, setRust] = useState(false);
  const [grayLeafSpot, setGrayLeafSpot] = useState(false);
  const [healthy, setHealthy] = useState(false);
  const [other, setOther] = useState(false);
  const [fileInfo, setFileInfo] = useState({ name: "", size: 0 });
  const user = JSON.parse(localStorage.getItem("user"));
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileInfo({ name: file.name, size: file.size });
      setPictures(file);
      // Do something with the selected file
      console.log("Selected file:", file);
    }
  };
  useEffect(() => {
    document.title = "Create Post";
  }, []);
  const handleDeletePhoto = (event) => {
    setPictures("");
    setFileInfo({ name: "", size: 0 });
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("content", content);
      formData.append("image", pictures);
      formData.append("author", user.id);
      formData.append("blight", blight);
      formData.append("rust", rust);
      formData.append("gray_leaf_spot", grayLeafSpot);
      formData.append("healthy", healthy);
      formData.append("other", other);

      const response = await axios.post(
        "https://wj2e17sxka.execute-api.ap-southeast-1.amazonaws.com/dev/post/api2/posts/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        if (typeof window !== "undefined") {
          /* Redirect */
          window.my_modal_1.showModal();
          setTimeout(() => {
            window.location.href = "/feed";
          }, 2000);
        }
      } else {
        alert("Wrong payload");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
    {/* Success Modal */}
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box flex flex-col items-center">
          <h3 className="font-bold text-lg">Posting</h3>
          <p className="py-4">
            <span className="loading loading-spinner loading-md"></span>
          </p>
        </form>
      </dialog>
      <div className="min-h-screen bg-base-100">
        {/* Loading modal */}
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
                    <img src={user.picture} alt="Farmer profile" />
                  </div>
                </div>
                {/* Name */}
                <div>
                  <h3 className="font-medium text-gray-700">
                    {user.first_name} {user.last_name}
                  </h3>
                  <h5 className="bg-gray-300 p-1 flex justify-center rounded-full text-sm font-light">
                    {user.user_type}
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
              {fileInfo.size > 0 && (
                <div
                  id="photo_name_holder"
                  className="w-full h-10 mt-2 flex items-center gap-3 rounded-md bg-gray-300 px-5 text-sm font-light justify-between"
                >
                  <div className="flex">
                    {fileInfo.name && (
                      <p className="text-blue-500 pr-2"> {fileInfo.name}</p>
                    )}
                    {fileInfo.size > 0 && <p>({fileInfo.size}K)</p>}
                  </div>
                  <button
                    className="cursor-pointer text-red-500 tooltip"
                    data-tip="Delete photo"
                    onClick={handleDeletePhoto}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              )}
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
                        onClick={(e) => setBlight(e.target.checked)}
                        value={blight}
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <span className="label-text">Rust</span>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                        onChange={(e) => setRust(e.target.checked)}
                        value={rust}
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <span className="label-text">Gray Leaf Spot</span>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                        onChange={(e) => setGrayLeafSpot(e.target.checked)}
                        value={grayLeafSpot}
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <span className="label-text">Healthy</span>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                        onChange={(e) => setHealthy(e.target.checked)}
                        value={healthy}
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <span className="label-text">Other</span>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                        onChange={(e) => setOther(e.target.checked)}
                        value={other}
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
    </>
  );
}
