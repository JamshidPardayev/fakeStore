import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "@/context";
import toast, { Toaster } from "react-hot-toast";

const Wishlist = () => {
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const removeFromWishlist = (product) => {
    dispatch({ type: "LIKED", payload: product });
    toast.error("Product Deleted! ❌");
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      <Toaster position="top-right" />
      <h1
        data-aos="fade-down"
        className="relative text-[30px] w-[120px] mx-auto font-semibold text-center before:absolute before:left-0 before:bottom-0 before:w-[120px] before:h-[2px] before:bg-white before:scale-0 hover:before:scale-100 cursor-pointer before:duration-300"
      >
        Wishlist
      </h1>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {state.wishlist?.map((product) => (
            <div
              data-aos="flip-right"
              key={product?.id}
              className="border border-[#360564] p-3 rounded transition shadow-[0px_2px_8px_3px_#360564]"
            >
              <div className="h-[300px] max-w-[350px] mx-auto rounded-[10px] overflow-hidden">
                <img
                  src={product?.image}
                  alt={product?.title}
                  className="h-full w-full rounded-[10px] hover:scale-102 duration-300"
                />
              </div>
              <h2 className="font-semibold text-lg line-clamp-1 my-5">
                {product?.title}
              </h2>
              <FaHeart
                onClick={() => removeFromWishlist(product)}
                className="text-[22px] text-red-500 mb-4 cursor-pointer hover:scale-110  duration-300 "
              />
              <button
                onClick={() => navigate(`/productDetails/${product.id}`)}
                className="h-[40px] w-full border border-violet-800 rounded-[10px] shadow-[0px_2px_8px_3px_#360564] hover:bg-violet-800 duration-300 cursor-pointer"
              >
                See More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Wishlist);
