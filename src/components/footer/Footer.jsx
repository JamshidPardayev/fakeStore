import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";

const Footer = () => {
  const [value, setValue] = useState("");
  const handleClick = (e) => {
    e.preventDefault();

    if (value.trim() !== "") {
      toast.success("Muvaffaqiyatli to'ldirildi!✅ ");
    } else {
      toast.error("Inputlarni to'ldiring!");
    }
    setValue("");
  };

  return (
    <div className="bg-black py-5">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between flex-wrap gap-6 font-normal text-gray-400 max-sm:justify-evenly">
        <div>
          <Link to="/">
            <img src={logo} alt="footerLogo" className="h-[100px] max-sm:mx-auto" />
          </Link>
          <p className="max-w-[200px] max-sm:text-center">
            Our site can you give some information about products, users, posts,
            recipes.
          </p>
        </div>
        <div className="max-sm:hidden">
          <p className="text-[20px] font-semibold text-white">Users</p>
          <p>Jon Doe</p>
          <p>Jon Uik</p>
          <p>Chan Uk</p>
          <p>Elvin Jr</p>
        </div>
        <div className="max-sm:hidden">
          <p className="text-[20px] font-semibold text-white">Carts</p>
          <p>Cars</p>
          <p>Comedy</p>
          <p>Sport</p>
          <p>Gadjets</p>
        </div>
        <div id="contact">
          <p className="text-[20px] font-semibold text-white max-sm:text-center max-sm:mt-3">Contact us</p>
          <form action="" className="w-[250px] h-[40px] flex items-center my-2">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="email"
              required
              placeholder="Enter Your Email"
              className="h-[40px] border border-pink-600 rounded-l-[5px] px-2 outline-none"
            />
            <button
              onClick={handleClick}
              className="bg-pink-600 rounded-r-[5px] w-[80px] h-[40px] cursor-pointer hover:bg-pink-700 text-white duration-300"
            >
              Send
            </button>
          </form>
          <div className="flex gap-4 text-[25px] max-md:justify-center mt-5">
            <FaTelegramPlane className="text-blue-500 hover:text-blue-800 cursor-pointer duration-300" />
            <FaInstagram className="text-pink-500 hover:text-pink-800 cursor-pointer duration-300" />
            <FaTwitter className="text-blue-300 hover:text-blue-800 cursor-pointer duration-300" />
            <FaFacebookF className="text-violet-600 hover:text-violet-900 cursor-pointer duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
