import React from "react";
import MainRoutes from "./pages";

const App = () => {
  return (
    <div className="bg-gray-950 text-white min-h-[100vh]">
      <MainRoutes />
    </div>
  );
};

export default React.memo(App);
