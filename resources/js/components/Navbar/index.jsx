import React from "react";
import Button from "../utils/Button";

export default function Navbar() {
    return (
        <div className="w-full p-5 flex items-center justify-between">
            <div className="navbar__brand">
                <h2 className="text-2xl font-bold">dBOOK</h2>
            </div>
            <div className="">
                <ul className="flex md:gap-5 lg:gap-10 items-center">
                    <li>Home</li>
                    <li>Feature</li>
                    <li>About us</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="">
                <Button variant={"secondary"} size="sm" disabled={true}>
                    <i className="fa-regular fa-user"></i> Sign In
                </Button>
            </div>
        </div>
    );
}
