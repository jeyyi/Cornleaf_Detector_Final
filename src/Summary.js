import React from "react";

function Summary() {
  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-bl from-lime-100 to-amber-200 justify-center">
      {/* Predicting modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box bg-primary">
          <h3 className="font-bold text-lg">Please wait</h3>
          <p className="py-4 items-center">
            Predicting disease...
            <span className="loading loading-spinner loading-lg"></span>
          </p>
          <div className="modal-action hidden">
            <button className="btn" id="closeButton">
              Close
            </button>
          </div>
        </form>
      </dialog>
      {/* Switch Model Modal */}

      <h1 className="text-3xl font-semibold">Result Summary</h1>

      <div
        className="flex flex-col justify-center w-64 h-64 lg:w-96 lg:h-96 border-green-800 border mt-5 py-5 px-5 tooltip cursor-pointer"
        data-tip="See photo"
      >
        <div className="w-full flex mb-3">
          <h1 className="text-sm lg:text-lg font-semibold">
            Number of leaves detected
          </h1>
          <div className="flex-1 mb-3 border-b-2 border-black mx-3"></div>
          <h1 className="text-base lg:text-xl font-bold">20</h1>
        </div>
        <div className="w-full flex pl-5">
          <h1 className="text-sm lg:text-lg">Healthy</h1>
          <div className="flex-1 mb-3 border-b-2 border-black mx-3"></div>
          <h1 className="text-base lg:text-xl font-medium">15</h1>
        </div>
        <div className="w-full flex pl-5">
          <h1 className="text-sm lg:text-lg">Rust</h1>
          <div className="flex-1 mb-3 border-b-2 border-black mx-3"></div>
          <h1 className="text-base lg:text-xl font-medium">3</h1>
        </div>
        <div className="w-full flex pl-5">
          <h1 className="text-sm lg:text-lg">Gray Spot</h1>
          <div className="flex-1 mb-3 border-b-2 border-black mx-3"></div>
          <h1 className="text-base lg:text-xl font-medium">2</h1>
        </div>
        <div className="w-full flex pl-5">
          <h1 className="text-sm lg:text-lg">Blight</h1>
          <div className="flex-1 mb-3 border-b-2 border-black mx-3"></div>
          <h1 className="text-base lg:text-xl font-medium">0</h1>
        </div>
      </div>

      <label htmlFor="file" className="btn btn-primary btn-wide mt-10">
        Share Results
        <span>
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
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
        </span>
      </label>

      <label htmlFor="file" className="btn btn-primary btn-wide mt-3">
        Classify Again
        <span>
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
              d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
            />
          </svg>
        </span>
      </label>
      {/* Change onchange function to latest api */}
    </div>
  );
}

export default Summary;
