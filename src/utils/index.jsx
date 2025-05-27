import React from "react";

export const Loading = () => {
  return <div>Loading...</div>;
};
export const Suspense = ({ children }) => {
  return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
};
