import * as React from "react";
import Hero from "../containers/Home/Hero";
import Features from "../containers/Home/Features";
import Testimonials from "../containers/Home/Testimonials";
import GotQuestions from "../containers/Home/Got questions";
import './style.scss';

function Home() {
    return (
        <div className="Home">
            <Hero />
            <Features />
            <Testimonials />
            <GotQuestions />
        </div>
    );
}

export default Home;
