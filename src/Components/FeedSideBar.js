import React from "react";

function FeedSideBar() {
  return (
    <>
      <div className="w-full h-full bg-white rounded-md shadow-md">
        <h3 className="px-5 pt-10 pb-5 text-lg font-bold text-gray-400">
          MENU
        </h3>
        {/* Menu */}
        <div className="flex flex-col">
          {/* Home */}
          <a
            href="/"
            className="w-full h-12 flex px-10 items-center gap-5 hover:bg-lime-100 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>

            <h3 className="text-gray-400 font-semibold" href="/">
              Home
            </h3>
          </a>
          {/* Feed */}
          <a href="/feed">
            <div className="w-full h-12 bg-lime-100 flex px-10 items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-gray-600 font-semibold">Feed</h3>
            </div>
          </a>
          {/* Disease Classification */}
          <a
            href="/classify"
            className="w-full h-12 flex px-10 items-center gap-5 hover:bg-lime-100 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-gray-400 font-semibold">Classify Disease</h3>
          </a>
          {/* About Us */}
          <a
            href="/about"
            className="w-full h-12 flex px-10 items-center gap-5 hover:bg-lime-100 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
              <path
                fillRule="evenodd"
                d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-gray-400 font-semibold">About Us</h3>
          </a>
        </div>
        <div className="divider" />
        <h3 className="px-5 pb-5 text-lg font-bold text-gray-400">
          CORNLEAF DISEASE {<br />}AILMENTS
        </h3>
        {/* Avatar of disease */}
        {/* Blight */}
        <a href="/cures/blight">
          <div className="flex w-full px-5 items-center gap-4 cursor-pointer hover:bg-lime-100 transition-colors py-1">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full cursor-pointer">
                <img
                  src="https://cropprotectionnetwork.org/image?s=%2Fimg%2Fhttp%2Fgeneral%2FNLB-Daren-Mueller-02.jpg%2Fb66174470dfc96d91292b8c2eb5f2619.jpg&h=0&w=316&fit=contain"
                  alt="Farmer profile"
                />
              </div>
            </div>
            <h3 className="text-gray-400">
              Blight
            </h3>
          </div>
        </a>

        {/* Rust */}
        <a href="/cures/rust">
          <div className="flex w-full px-5 items-center gap-4 cursor-pointer hover:bg-lime-100 transition-colors py-1">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full cursor-pointer">
                <img
                  src="https://cropprotectionnetwork.org/image?s=%2Fimg%2Fhttp%2Fgeneral%2FCommon-rust-Daren-Mueller-20-1643298874.jpg%2F447b0d5918efb30f1966764b3542da65.jpg&h=256&w=316&fit=cover"
                  alt="Rust"
                />
              </div>
            </div>
            <h3 className="text-gray-400">
              Common Rust
            </h3>
          </div>
        </a>

        {/* Gray Leaf Spot */}
        <a href="/cures/gls">
          <div className="flex w-full px-5 items-center gap-4 cursor-pointer hover:bg-lime-100 transition-colors py-1">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full cursor-pointer">
                <img
                  src="https://cropprotectionnetwork.org/image?s=%2Fimg%2Fhttp%2Fgeneral%2FGray-leaf-spot-Adam-Sisson-56.jpg%2F32dda7f013d6333d2d7651dea5ffbe6a.jpg&h=0&w=316&fit=contain"
                  alt="GLS"
                />
              </div>
            </div>
            <h3 className="text-gray-400">
              Gray Leaf Spot
            </h3>
          </div>
        </a>
        <div className="divider" />
        <h5 className="pb-5 px-5 font-light text-sm text-gray-400 cursor-pointer">
          Help
        </h5>
      </div>
    </>
  );
}

export default FeedSideBar;
