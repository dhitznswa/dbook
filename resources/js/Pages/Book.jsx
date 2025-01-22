import React from "react";
import PopularBookSection from "../components/PopularBookSection";

export default function Book({ books }) {
    return (
        <>
            <PopularBookSection books={books} />
        </>
    );
}
