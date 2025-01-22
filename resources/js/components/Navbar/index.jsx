import React, { useEffect, useRef, useState } from "react";
import Button from "../utils/Button";
import { Link } from "@inertiajs/react";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const menuRef = useRef(null);

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setOpenMenu(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={` w-full p-5 sticky top-0 left-0  transition-shadow duration-300 bg-white z-50 ${
                isScrolled ? "shadow-md" : ""
            }`}
        >
            <div
                className="continer mx-auto px-4 md:px-8 lg:px-24 flex items-center justify-between relative"
                ref={menuRef}
            >
                <div className="navbar__brand">
                    <h2 className="text-2xl font-bold">dBOOK</h2>
                </div>
                <div
                    className={`${
                        openMenu ? "top-[100%]" : "-top-[500px]"
                    } absolute  left-0 md:static w-full md:w-auto p-5 md:p-0 bg-white border md:border-none border-slate-400 rounded-md shadow md:shadow-none shadow-slate-800 mt-8 md:mt-0 transition-all duration-300`}
                >
                    <ul className="flex flex-col md:flex-row gap-5 lg:gap-10  justify-center">
                        <li className="nav-link active">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="nav-link">
                            <Link href="/book">Books</Link>
                        </li>
                        <li className="nav-link">
                            <Link href="">About</Link>
                        </li>
                        <li className="nav-link">
                            <Link href="">Support</Link>
                        </li>
                        <li className="w-full md:hidden">
                            <Button variant={"secondary"} className={"w-full"}>
                                <i className="fa-regular fa-user"></i> Sign In
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setOpenMenu(!openMenu)}
                        className={"md:hidden"}
                    >
                        <i
                            className={`fa-regular fa-${
                                openMenu ? "xmark" : "bars"
                            }`}
                        ></i>
                    </Button>
                    <Button
                        variant={"secondary"}
                        size="sm"
                        className={"hidden md:inline-flex"}
                    >
                        <i className="fa-regular fa-user"></i> Sign In
                    </Button>
                </div>
            </div>
        </div>
    );
}
