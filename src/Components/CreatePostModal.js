import React from "react";

function CreatePostModal(handleFileChange) {
  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Create Post</h3>
            <div className="modal-action -mt-0">
              <button>
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <textarea
            className="textarea w-full mt-5"
            placeholder="Share What's happening with your Cornleaf..."
          ></textarea>
          {/* Photo Carousel, hide mo nalang to sir pag wala pang photo */}
          <div className="w-full h-20 mt-2 flex gap-3 hidden">
            {/* Photo placeholder */}
            <div className="h-full w-20 bg-gray-600 cursor-pointer" />
            <div className="h-full w-20 bg-gray-600 cursor-pointer" />
            <div className="h-full w-20 bg-gray-600 cursor-pointer" />
            <div className="h-full w-20 bg-gray-600 cursor-pointer flex items-center justify-center text-white text-2xl">
              4+
            </div>
          </div>
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
      </dialog>
    </>
  );
}

export default CreatePostModal;
