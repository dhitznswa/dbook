import { Link } from "@inertiajs/react";
import React from "react";

export default function FooterSection() {
    return (
        <>
            <div className="w-full px-5 py-8 md:px-8 md:py-12  rounded-lg bg-slate-800 text-white">
                <div className="w-full flex flex-wrap gap-5 md:gap-0 items-start justify-between">
                    <div className="w-full md:w-1/3">
                        <h3 className="font-bold text-3xl mb-3">DBOOK</h3>
                        <p className="text-slate-400 mb-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsum, praesentium!
                        </p>
                        <div className="flex gap-3 items-center text-sm">
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-location-dot"></i>{" "}
                                <span>Subang, Indonesia</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fa-duotone fa-solid fa-phone"></i>{" "}
                                <span>+62 838 6604 9708</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <div className="w-full grid grid-cols-3 gap-5">
                            <div className="mx-auto">
                                <h2 className="font-semibold mb-5">Program</h2>
                                <ul className="flex flex-col gap-2 text-slate-400">
                                    <li>Affiliate</li>
                                    <li>Publisher</li>
                                    <li>Contributor</li>
                                    <li>Dropshiper</li>
                                </ul>
                            </div>
                            <div className="mx-auto">
                                <h2 className="font-semibold mb-5">Company</h2>
                                <ul className="flex flex-col gap-2 text-slate-400">
                                    <li>About Us</li>
                                    <li>Forums</li>
                                    <li>Career</li>
                                </ul>
                            </div>
                            <div className="mx-auto">
                                <h2 className="font-semibold mb-5">Support</h2>
                                <ul className="flex flex-col gap-2 text-slate-400">
                                    <li>Contact us</li>
                                    <li>Terms & Services</li>
                                    <li>Kebijakan</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-2 border-slate-600 my-4" />
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/2 text-slate-400">
                        <p className="text-center md:text-left">
                            &copy; 2025{" "}
                            <a
                                href="https://instagram.com/dhitznswaa"
                                className="font-semibold text-slate-200"
                            >
                                dhitznswa
                            </a>
                            . All Rights Reserved.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 text-slate-400">
                        <div className="flex gap-3 justify-center lg:justify-end">
                            <Link
                                className="hover:text-slate-200 transition-colors duration-300"
                                href=""
                            >
                                About us
                            </Link>
                            <Link
                                className="hover:text-slate-200 transition-colors duration-300"
                                href=""
                            >
                                Term of services
                            </Link>
                            <Link
                                className="hover:text-slate-200 transition-colors duration-300"
                                href=""
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
