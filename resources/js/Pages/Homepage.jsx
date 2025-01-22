import React from "react";
import HeroSection from "../components/HeroSection";
import PopularBookSection from "../components/PopularBookSection";
import FooterSection from "../components/FooterSection";

export default function Homepage({ books }) {
    return (
        <div>
            <HeroSection />
            <PopularBookSection books={books} />
            <FooterSection />
        </div>
    );
}
