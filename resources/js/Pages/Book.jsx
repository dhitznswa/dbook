import React from "react";
import BookSection from "../components/BookSection";
import { usePage } from "@inertiajs/react";

export default function Book({ books }) {
    const { poppularBook } = usePage().props;

    console.log(poppularBook);

    return (
        <>
            <BookSection books={poppularBook} title="Poppular Books" link="/" />
            <BookSection books={books} title="All Books" link="/" />
        </>
    );
}
