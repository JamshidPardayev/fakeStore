import React from "react";
import MainRoutes from "./pages";
import 'aos/dist/aos.css';

const App = () => {
  return (
    <div className="bg-gray-950 text-white min-h-[100vh]">
      <MainRoutes />
    </div>
  );
};

export default React.memo(App);
