import React from "react";
// import EmbedPlayer from "./embed";
import Carousel from "./carousel";

function Home(props) {
    return(
        <div id="home-body" className="body home-body">
            <section className="hero">
            <h1 className="header hero-header">&lt;recent.articles&gt;</h1>
                <Carousel />
	    {/*    <h1 className="header">&lt;featured.playlist&gt;</h1>
	    <EmbedPlayer className="featured"/> */}
            </section>
        </div>
    )
}

export default Home;
