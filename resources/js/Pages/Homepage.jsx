import React from "react";
import Button from "../components/utils/Button";

export default function Homepage() {
    return (
        <div>
            <div className="relative w-full h-dvh flex justify-center items-center bg-square-lists ">
                <div className="absolute w-full h-full bg-white bg-opacity-90"></div>
                <div className="md:w-2/3 mx-auto relative text-center px-8 flex flex-col gap-4">
                    <div className="e">
                        <div className="w-fit mx-auto px-3 py-2 bg-white border border-slate-300 rounded-md bg-gradient-to-br from-blue-500 to-pink-500 hover:bg-opacity-50">
                            <h2 className="text-xs md:text-sm font-bold tracking-wide text-white">
                                #1 Most Popular Books Library
                            </h2>
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize">
                        Find and read books <br /> according{" "}
                        <span className="text-blue-600">to your mood</span>
                    </h1>
                    <p className="text-base lg:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum, ea!, Lorem ipsum dolor sit amet consectetur
                        adipisicing.
                    </p>
                    <div className="">
                        <Button>Browse now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
