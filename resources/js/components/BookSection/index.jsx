import { Link } from "@inertiajs/react";
import React from "react";
import BookItem from "../utils/BookItem";

export default function BookSection({ books, title, link }) {
    return (
        <>
            <section className="w-full min-h-[500px] py-8">
                <h2 className="text-xl font-bold w-fit group">
                    <Link className="flex items-center gap-2 " href={link}>
                        {title}{" "}
                        <span className="group-hover:ml-2 transition-all duration-300">
                            <i className="fa-regular fa-arrow-right"></i>
                        </span>
                    </Link>
                </h2>
                <div className="mt-8">
                    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5">
                        {books.map((book, i) => (
                            <BookItem
                                cover="/image/cover-1.jpg"
                                key={book.code}
                                book={book}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
