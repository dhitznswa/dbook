import React from "react";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
    return (
        <div className="continer mx-auto px-4 md:px-8 lg:px-24">
            <Navbar />

            <div className="mt-3">{children}</div>
        </div>
    );
}
