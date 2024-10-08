import React from "react";
import Carousel from "./carousel";

function Home(props) {
    return(
        <div id="home-body" className="body home-body">
            <section className="hero">
                <h1 className="header hero-header">&lt;recent.articles&gt;</h1>
                <Carousel />
            </section>
        </div>
    )
}

export default Home;
