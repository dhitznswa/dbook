import { Link } from "@inertiajs/react";
import React from "react";

export default function BookItem({ cover, book }) {
    return (
        <div>
            <Link href={`/book/${book.code}`}>
                <div className="w-full flex flex-col gap-3 items-center group">
                    <div className="w-full">
                        <img
                            src={book.cover ?? "/image/nocover.png"}
                            alt=""
                            className=" aspect-[2/3] object-cover w-full rounded-lg shadow-lg shadow-slate-700 border border-slate-400 transition-shadow duration-300"
                        />
                    </div>
                    <div className="w-full">
                        <h3 className="font-semibold line-clamp-1">
                            {book.title}
                        </h3>
                        <div className="mt-2 w-full flex justify-between items-center">
                            <div className="text-xs w-2/3 tracking-wide line-clamp-1">
                                {book.publisher.name}
                            </div>
                            <div className="w-1/3 text-end text-xs font-bold">
                                <i className="fa-solid fa-messages "></i>{" "}
                                <span>{Object.keys(book.comment).length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
