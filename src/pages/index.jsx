import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense } from "../utils";
const Layout = lazy(() => import("./layout/Layout"))
const Home = lazy(() => import("./home/Home"))
const Users = lazy(() => import("./users/Users"))
const Carts = lazy(() => import("./carts/Carts"))
const NotFound = lazy(() => import("./notFound/NotFound"))
const Login = lazy(() => import("./login/Login"))

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Suspense><Layout /></Suspense>}>
            <Route path="/" element={<Suspense><Home/></Suspense>}/>
            <Route path="/users" element={<Suspense><Users/></Suspense>}/>
            <Route path="/carts" element={<Suspense><Carts/></Suspense>}/>
            <Route path="*" element={<Suspense><NotFound/></Suspense>}/>
        </Route>

        <Route path="/login" element={<Suspense><Login /></Suspense>} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />

    </>
  );
};

export default React.memo(MainRoutes);
