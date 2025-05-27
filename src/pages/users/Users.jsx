import React from "react";
// import { useFetch } from "../../hooks/useFetch";

const Users = () => {
  // const { data, error, loading } = useFetch("/users");
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      <h1 className="relative text-[30px] w-[80px] mx-auto font-semibold text-center before:absolute before:left-0 before:bottom-0 before:w-[80px] before:h-[2px] before:bg-white before:scale-0 hover:before:scale-100 cursor-pointer before:duration-300">
        Users
      </h1>
      <div>
        {}
      </div>
    </div>
  );
};

export default Users;
