import React, { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import AOS from "aos";
const UserDetails = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`/users/${id}`);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  if (loading) {
    return loading;
  }

  if (error) {
    return (
      <p className="text-red-500 text-2xl text-center my-4">
        Failed to load product. Please try again.
      </p>
    );
  }

  return (
    <div data-aos="flip-right" className="max-w-[1200px] mx-auto p-4 ">
      <h1 className="relative text-[30px] w-[235px] my-4 font-semibold text-center before:absolute before:left-0 before:bottom-0 before:w-[235px] before:h-[2px] before:bg-white before:scale-0 hover:before:scale-100 cursor-pointer before:duration-300">
        User Information
      </h1>
      <p className="text-[20px] capitalize text-gray-400 mt-2">
        <span className="text-[20px] mr-3 font-semibold text-white">
          Full Name:{" "}
        </span>
        {data?.name?.firstname} {data?.name?.lastname}
      </p>
      <p className="text-[20px] capitalize text-gray-400 mt-2">
        <span className="text-[20px] mr-3 font-semibold text-white">
          Username:{" "}
        </span>
        {data?.username}
      </p>
      <p className="text-[20px] text-gray-400 mt-2">
        <span className="text-[20px] mr-3 font-semibold text-white">
          Email:{" "}
        </span>
        {data?.email}
      </p>
      <p className="text-[20px] capitalize text-gray-400 mt-2">
        <span className="text-[20px] mr-3 font-semibold text-white">
          Phone Number:{" "}
        </span>
        {data?.phone}
      </p>
      <p className="text-[20px] capitalize text-gray-400 mt-2">
        <span className="text-[20px] mr-3 font-semibold text-white">
          Address:{" "}
        </span>
        {data?.address?.city}, {data?.address?.street}, {data?.address?.number}
      </p>
      <div className="flex gap-8 text-[25px] max-md:justify-center mt-5">
        <FaTelegramPlane className="text-blue-500 hover:text-blue-800 cursor-pointer duration-300" />
        <FaInstagram className="text-pink-500 hover:text-pink-800 cursor-pointer duration-300" />
        <FaTwitter className="text-blue-300 hover:text-blue-800 cursor-pointer duration-300" />
        <FaFacebookF className="text-violet-600 hover:text-violet-900 cursor-pointer duration-300" />
      </div>
    </div>
  );
};

export default React.memo(UserDetails);
