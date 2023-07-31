import React from "react";
import Logo from "../Assets/logo_white.png";
function FeedNavbar() {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };
  return (
    <div className="border-b-2 bg-lime-600 flex flex-row w-full px-5 lg:px-10 py-4 sticky top-0 z-10">
      <div className="justify-between w-full flex flex-row">
        <a href="/feed">
          <img className="h-10" src={Logo} alt="Logo" />
        </a>

        <div className="bg-lime-700 w-96 rounded-md cursor-pointer items-center px-5 text-gray-300 text-sm font-light hidden lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
          Search...
        </div>
        {/* Bell */}
        <div className="flex gap-3">
          <div className="indicator dropdown dropdown-bottom dropdown-end w-10 h-10 rounded-full bg-lime-700 text-base-100 flex items-center hover:bg-white hover:text-lime-700 transition-colors cursor-pointer">
            <span className="indicator-item badge badge-primary text-xs font-extralight">
              1
            </span>
            <label tabIndex={0} className="cursor-pointer mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            {/* Dropdown for Notif */}
            <ul
              tabIndex={0}
              className="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-72 lg:w-80 text-black"
            >
              <div className="flex w-full px-3 pt-5">
                <h3 className="text-lg font-medium flex-1">Notifications</h3>
                {/* Three dots */}
                <div
                  className="tooltip tooltip-primary"
                  data-tip="Clear Notifications"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-red-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 13.75C3 14.9926 4.00736 16 5.25 16C6.49264 16 7.5 14.9926 7.5 13.75C7.5 12.5074 6.49264 11.5 5.25 11.5C4.00736 11.5 3 12.5074 3 13.75ZM12 13.75C12 14.9926 13.0074 16 14.25 16C15.4926 16 16.5 14.9926 16.5 13.75C16.5 12.5074 15.4926 11.5 14.25 11.5C13.0074 11.5 12 12.5074 12 13.75ZM20.25 13.75C20.25 14.9926 21.2574 16 22.5 16C23.7426 16 24.75 14.9926 24.75 13.75C24.75 12.5074 23.7426 11.5 22.5 11.5C21.2574 11.5 20.25 12.5074 20.25 13.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h5 className="ml-3 pt-3 font-medium text-gray-500">Earlier</h5>
              <li className="pt-2">
                <div className="flex flex-row cursor pointer hover:bg-gray-100 items-start">
                  <div className="avatar">
                    {/* Profile pic of commentor */}
                    <div className="w-12 h-12 rounded-full">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7B473dsmEpbIei9ehdCpGxtW9jDkgzgDazyIqa2eCbp6sD044n-ndxIvoropmqHa3KYw&usqp=CAU"
                        alt="Commentor profile"
                      />
                    </div>
                  </div>
                  <h3 className="font-nedium text-base text-gray-700">
                    Michael Swell{" "}
                    <span className="text-gray-500 text-sm font-normal">
                      commented on your post
                    </span>
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="avatar dropdown dropdown-bottom dropdown-end">
            <div className="w-10 h-10 rounded-full">
              <label tabIndex={0} className="cursor-pointer">
                <img
                  src="https://media.licdn.com/dms/image/C4E12AQGJMHJYg2NzWg/article-cover_image-shrink_720_1280/0/1546512971231?e=2147483647&v=beta&t=8JEuNbLs3TuGKrF5xGCCaAb5ZbXYuLBdel0CNCTlBX4"
                  alt="Farmer profile"
                />
              </label>
            </div>
            {/* Dropdown for avatar */}
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-lime-700"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="/profilefeed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-lime-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  My Feed
                </a>
              </li>
              <li className="block lg:hidden">
                <a href="/farmerstats">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-lime-700"
                  >
                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                  </svg>
                  Stats
                </a>
              </li>
              <li>
                <a href="/" onClick={handleLogout}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-lime-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedNavbar;
