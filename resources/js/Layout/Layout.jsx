import React from "react";
import Navbar from "../components/Navbar";
import { ReactLenis } from "lenis/react";

export default function Layout({ children }) {
    return (
        <ReactLenis root>
            <Navbar />
            <div className="continer mx-auto px-4 md:px-8 lg:px-24">
                <div className="my-3">{children}</div>
            </div>
        </ReactLenis>
    );
}
