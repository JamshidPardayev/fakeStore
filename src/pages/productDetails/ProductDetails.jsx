import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`products/${id}`);

  const handleClick = () => {
    toast.success("Product Added!✅")
  }
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
    <div className="max-w-[1200px] flex gap-6 mx-auto p-4 max-sm:flex-col">
      <div className="max-w-[400px] min-w-[250px] h-full w-full min-h-[250px] max-h-[400px] mb-4 max-sm:mx-auto rounded-[10px] overflow-hidden">
        <img
        src={data?.image}
        alt={data?.title}
        className="max-w-[400px] min-w-[250px] w-full h-full min-h-[250px] max-h-[400px] mb-4 max-sm:mx-auto rounded-[10px] hover:scale-102 duration-300 cursor-grabbing"
      />
      </div>
      <div>
        <h1 className="text-[28px] font-bold">{data?.title}</h1>
        <p className="mt-3 text-[16px] font-medium">Category: {data?.category}</p>
        <p className="mt-3 text-gray-300">{data?.description}</p>
        <p className="text-green-700 text-[20px] font-semibold mt-3"><span className="text-gray-400">Price:</span> ${data?.price}</p>
        <button onClick={handleClick} className="w-full max-w-[400px] h-[40px] rounded-[10px] border-violet-800 border mt-3 shadow-[0px_2px_8px_3px_#360564] hover:bg-violet-800 duration-300 cursor-pointer">Add Product</button>
      </div>
    </div>
  );
};

export default React.memo(ProductDetails);
