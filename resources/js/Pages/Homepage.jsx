import React from "react";
import HeroSection from "../components/HeroSection";
import PopularBookSection from "../components/PopularBookSection";

export default function Homepage({ books }) {
    return (
        <div>
            <HeroSection />
            <PopularBookSection books={books} />
        </div>
    );
}
