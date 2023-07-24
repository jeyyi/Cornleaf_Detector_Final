import React from "react";
import Logo from "../Assets/logo_white.png";
function FeedNavbar() {
  return (
    <div className="border-b-2 bg-lime-700 flex flex-row w-full px-10 py-4 sticky top-0 z-10">
      <div className="justify-between w-full flex flex-row">
        <img className="w-14" src={Logo} alt="Logo" />
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-full text-base-100 flex items-center hover:bg-white hover:text-black transition-colors cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mx-auto"
            >
              <path
                fillRule="evenodd"
                d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="avatar">
            <div className="w-11 h-11 rounded-full cursor-pointer">
              <img
                src="https://media.licdn.com/dms/image/C4E12AQGJMHJYg2NzWg/article-cover_image-shrink_720_1280/0/1546512971231?e=2147483647&v=beta&t=8JEuNbLs3TuGKrF5xGCCaAb5ZbXYuLBdel0CNCTlBX4"
                alt="Farmer profile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedNavbar;
