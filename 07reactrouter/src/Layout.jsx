import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
//outlet use to keep upper and base as same ad jaha pr outlet de diya usko aap same rkh skte ho

function Layout() {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>

        </>
    )
}
export default Layout