import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`/users/${id}`);

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

  return <div className="max-w-[1200px] mx-auto p-4 ">
    <h1>{data?.name?.firstname} {data?.name?.lastname}</h1>
    <p>{data.username}</p>
    <p>{data.email}</p>
    <p>{data.phone}</p>
    <p>{data.address?.city}, {data.address?.street}, {data.address?.number}</p>
    <p>{data.username}</p>
  </div>;
};

export default React.memo(UserDetails);
