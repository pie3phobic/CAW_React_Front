import {
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

import React from "react";
import MyCustomButton from "./helpers/MyCustomButton";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {
  Link
} from "react-router-dom";

function Header({ pageRefs }) {
  function scrollIntoView(type) {
    pageRefs.current[type].scrollIntoView({
      behavior: "smooth",
    });
  }
 

  return (
    <GoogleOAuthProvider clientId="1047839081489-v1v1dubc557qiqq36mhag4neskapnurk.apps.googleusercontent.com">
      <header className="sticky top-0 z-50 grid grid-cols-2 bg-gray-100 py-5 px-5 md:px-10">
          <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Link to='/' onClick={() => scrollIntoView("home")}>
            <img
              src="logo.png"
              layout="fill"
              width="300px"
              className="lg:w-[300px] md:w-[200px] sm:w-[100px] xs:w-[100px]"
            />
        </Link>
          </div>
        <div className="flex justify-end gap-5 space-x-10 py-5 text-blue-700 font-semibold md:">
          <Link
            className="lg:p-1 cursor-pointer text-sm md:text-base"
            onClick={() => scrollIntoView("about")}
          >
            About
          </Link>
          <Link
            className="lg:p-1 cursor-pointer text-sm md:text-base"
            onClick={() => scrollIntoView("learning")}
          >
            Learning
          </Link>
          <Link
            className="lg:p-1 cursor-pointer text-sm md:text-base"
            onClick={() => scrollIntoView("partners")}
          >
            Partners
          </Link>
          <MyCustomButton />
          <div className="flex items-center space-x-4 justify-end text-blue-700">
            <div className=" flex items-center space-x-2 border-2 border-gray-300 p-1 rounded-full">
              <MenuIcon className="h-6" />
              <Link to="/profile">
                <UserCircleIcon
                  className="h-6 cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </GoogleOAuthProvider>
  );
}
export default Header;
