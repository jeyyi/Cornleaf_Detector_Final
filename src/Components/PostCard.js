import React from "react";

function PostCard() {
  return (
    <div className="w-full h-fit bg-white rounded-md shadow-md py-10">
      {/* Info div */}
      <div className="flex px-5 lg:px-10">
        <div className="flex gap-2 flex-1">
          <div className="avatar">
            <div className="w-11 h-11 rounded-full cursor-pointer">
              <img
                src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/23-03-2022_WHO_Kenya-3.jpg/image1170x530cropped.jpg"
                alt="Farmer profile"
              />
            </div>
          </div>
          <div>
            <h3 className="font-medium">
              Arnel Pineda{" "}
              <span className="text-gray-400 font-normal text-sm">
                added a post
              </span>
            </h3>
            <p className="font-light text-sm text-gray-400">
              Tuesday at 9:30pm
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/* Three dots */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-gray-400 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M3 13.75C3 14.9926 4.00736 16 5.25 16C6.49264 16 7.5 14.9926 7.5 13.75C7.5 12.5074 6.49264 11.5 5.25 11.5C4.00736 11.5 3 12.5074 3 13.75ZM12 13.75C12 14.9926 13.0074 16 14.25 16C15.4926 16 16.5 14.9926 16.5 13.75C16.5 12.5074 15.4926 11.5 14.25 11.5C13.0074 11.5 12 12.5074 12 13.75ZM20.25 13.75C20.25 14.9926 21.2574 16 22.5 16C23.7426 16 24.75 14.9926 24.75 13.75C24.75 12.5074 23.7426 11.5 22.5 11.5C21.2574 11.5 20.25 12.5074 20.25 13.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {/* Text section */}
      <p className="pt-5 px-5 lg:px-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        molestie, sapien quis hendrerit scelerisque, arcu diam imperdiet felis,
        id semper odio arcu quis odio. Donec interdum, quam in aliquet rhoncus,
        tortor eros varius risus, non dignissim erat enim vel odio. Etiam id
        scelerisque urna. Donec convallis fringilla eros, quis dignissim nisi
        ornare non.
      </p>
      <div className="w-full h-96 mt-5 px-5 lg:px-10">
        <img
          src="https://cropwatch.unl.edu/styles/hero/public/images/hero/2018/corn-Goss-NCLB-lesions-same-leaf.jpg?itok=rf8lYfKq"
          alt="Post leaf"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="pt-5 px-5 lg:px-10 text-gray-400 text-sm font-light">
        1 comment
      </p>
      <div className="divider" />
      {/* Comment section */}
      <div className="flex flex-col w-full gap-2">
        <div className="px-5 lg:px-10 flex gap-2 w-full">
          <div className="avatar">
            <div className="w-11 h-11 rounded-full cursor-pointer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7B473dsmEpbIei9ehdCpGxtW9jDkgzgDazyIqa2eCbp6sD044n-ndxIvoropmqHa3KYw&usqp=CAU"
                alt="Commentor profile"
              />
            </div>
          </div>
          <div className="w-fit h-fit px-3 py-2 rounded-2xl bg-lime-300">
            <h3 className="text-sm font-semibold text-gray-700">
              Michael Swell
            </h3>
            <p className="text-sm font-light text-gray-600">
              This is an example comment to ail the disease of cornleaf
            </p>
          </div>
        </div>
      </div>

      {/* Enter your comment */}
      <div className="px-5 lg:px-10 flex gap-2 w-full pt-3">
        <div className="avatar">
          <div className="w-11 h-11 rounded-full cursor-pointer">
            <img
              src="https://media.licdn.com/dms/image/C4E12AQGJMHJYg2NzWg/article-cover_image-shrink_720_1280/0/1546512971231?e=2147483647&v=beta&t=8JEuNbLs3TuGKrF5xGCCaAb5ZbXYuLBdel0CNCTlBX4"
              alt="Farmer profile"
            />
          </div>
        </div>
        <input
          type="text"
          placeholder={`Write a comment...`}
          className="input w-full rounded-full bg-gray-100"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 my-auto text-lime-600 cursor-pointer"
        >
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>
      </div>
    </div>
  );
}

export default PostCard;
