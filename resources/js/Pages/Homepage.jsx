import React from "react";
import HeroSection from "../components/HeroSection";
import BookSection from "../components/BookSection";
import FooterSection from "../components/FooterSection";

export default function Homepage({ books }) {
    return (
        <div>
            <HeroSection />
            <BookSection books={books} title="Poppular Books" link="/" />
            <FooterSection />
        </div>
    );
}
