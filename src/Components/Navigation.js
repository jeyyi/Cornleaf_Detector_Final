import { React, useState, useEffect } from "react";
import Logo from "../Assets/logo2.png";
import { Outlet } from "react-router-dom";

function Navigation() {
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setNavbarBackground("white");
      } else {
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col" id="drawerref">
        {/* Navbar */}
        <div className={`sticky top-0 w-full`}>
          <div
            className={`w-full navbar lg:px-64 lg:py-5 absolute  ${
              navbarBackground === "transparent" ? "bg-transparent " : "bg-white "
            }transition-colors duration-500`}
          >
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 lg:px-2 lg:mx-2 py-4 cursor-pointer">
              <a href="/">
                <img src={Logo} alt="Logo" className="w-1/2 lg:w-3/4" />
              </a>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal items-center font-medium text-stone-700">
                {/* Navbar menu content here */}
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/classify">Disease Classification</a>
                </li>
                <li>
                  <a href="/">About us</a>
                </li>

                <a
                  className="btn btn-primary rounded-full text-white"
                  href="/classify"
                >
                  Classify
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
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                  </span>
                </a>
              </ul>
            </div>
          </div>
        </div>
        {/* Page content here */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/classify">Disease Classification</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navigation;
