import React from "react";
import { Link } from 'react-router-dom';
import HeroCard from "./helpers/HeroCard";
import AboutBlock from "./helpers/AboutBlock";
import LearningBlock from "./helpers/LearningBlock";
import PartnersBlock from "./helpers/PartnersBlock";

function Home({ pageRefs }) {
    return (<>
        <div className="grid grid-cols-1 px-6 md:grid-cols-3">
            <HeroCard img="solider-1.webp" title="Help Ukraine" />
            <Link to='/challenges'>
                <HeroCard
                    img="solider-1.webp"
                    title="Take Challenges"
                />
            </Link>

            <HeroCard img="solider-1.webp" title="Get Job Offers" />\
        </div>
        <AboutBlock pageRefs={pageRefs} />
        <LearningBlock pageRefs={pageRefs} />
        <PartnersBlock pageRefs={pageRefs} />
    </>)
}
export default Home;