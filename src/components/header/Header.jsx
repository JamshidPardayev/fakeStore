import React from "react";
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo1.png"

const Header = () => {
  return (
    <div className="bg-black ">
      <div className="h-[100px] max-w-[1200px] mx-auto px-4 flex justify-between items-center ">
        <Link to="/">
        <img
          src={logo}
          alt="logoImg"
          className="h-[100px] bg-transparent"
        />
        </Link>
        <ul className="flex gap-x-5 text-[18px] font-semibold max-sm:hidden">
          <li className="relative before:absolute before:left-0 before:bottom-0 before:w-[0%] before:h-[2px] before:bg-[#aaaaaa] before:duration-300 hover:before:w-[100%]">
            <NavLink to={"/"} className={"headerLink"}>
              Home
            </NavLink>
          </li>
          <li className="relative before:absolute before:left-0 before:bottom-0 before:w-[0%] before:h-[2px] before:bg-[#aaaaaa] before:duration-300 hover:before:w-[100%]">
            <NavLink to={"/users"} className={"headerLink"}>
              Users
            </NavLink>
          </li>
          <li className="relative before:absolute before:left-0 before:bottom-0 before:w-[0%] before:h-[2px] before:bg-[#aaaaaa] before:duration-300 hover:before:w-[100%]">
            <NavLink to={"/login"} className={"headerLink"}>
              Login
            </NavLink>
          </li>
        </ul>
        <button className="w-[120px] h-[35px] text-white rounded-[10px] border shadow-[0px_2px_8px_3px_#333333] hover:bg-gray-900 duration-300 cursor-pointer max-sm:hidden">
          <a href="#contact">Contact</a>
        </button>

        <IoMdMenu className="hidden max-sm:block text-[30px] hover:text-[#aaaaaa] duration-300 cursor-pointer" />
      </div>
    </div>
  );
};

export default React.memo(Header);
