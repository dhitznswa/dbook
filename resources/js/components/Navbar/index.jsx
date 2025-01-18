import React, { useEffect, useRef, useState } from "react";
import Button from "../utils/Button";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null);

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setOpenMenu(false);
        }
    };

    console.log(openMenu);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full p-5">
            <div
                className="container mx-auto flex items-center justify-between relative"
                ref={menuRef}
            >
                <div className="navbar__brand">
                    <h2 className="text-2xl font-bold">dBOOK</h2>
                </div>
                <div
                    className={`${
                        openMenu ? "top-[100%] left-0" : "-top-[500px]"
                    } absolute md:static w-full md:w-auto p-5 md:p-0 bg-white border md:border-none border-slate-400 rounded-md shadow md:shadow-none shadow-slate-800 mt-2 md:mt-0 transition-transform duration-300`}
                >
                    <ul className="flex flex-col md:flex-row gap-5 lg:gap-10 items-center justify-center">
                        <li className="nav-link active">Home</li>
                        <li className="nav-link">Feature</li>
                        <li className="nav-link">About us</li>
                        <li className="nav-link">Support</li>
                    </ul>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setOpenMenu(!openMenu)}
                        className={"md:hidden"}
                    >
                        <i className="fa-regular fa-bars"></i>
                    </Button>
                    <Button variant={"secondary"} size="sm">
                        <i className="fa-regular fa-user"></i> Sign In
                    </Button>
                </div>
            </div>
        </div>
    );
}
