import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import { useFetch } from "@/hooks/useFetch";

const Users = () => {


  const { data, error, loading } = useFetch("/users");
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      <h1
        data-aos="fade-down"
        className="relative text-[30px] w-[80px] mx-auto font-semibold text-center before:absolute before:left-0 before:bottom-0 before:w-[80px] before:h-[2px] before:bg-white before:scale-0 hover:before:scale-100 cursor-pointer before:duration-300"
      >
        Users
      </h1>

      {loading}

      {error && (
        <p className="text-red-500 text-2xl text-center my-4">
          Failed to load users. Please try again.
        </p>
      )}

      <div className=" w-full px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  mt-8">
        {data?.map((user) => (
          <div
            data-aos="flip-right"
            key={user?.id}
            className="min-w-[240px] max-lg:min-w-[220px] w-full border border-[#360564] p-3 rounded text-center shadow-[0px_2px_8px_3px_#360564]"
          >
            <h2 className="text-2xl capitalize font-semibold">
              {user?.name?.firstname} {user?.name?.lastname}
            </h2>
            <p className="my-4 font-medium">{user?.email}</p>
          
            <button
              onClick={() => navigate(`/userDetails/${user?.id}`)}
              className="h-[40px] w-full border border-violet-800 rounded-[10px] shadow-[0px_2px_8px_3px_#360564] hover:bg-violet-800 duration-300 cursor-pointer"
            >
              See More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Users);
