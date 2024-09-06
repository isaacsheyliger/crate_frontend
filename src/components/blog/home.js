import React from "react";
import Carousel from "./carousel";
import Modal from "./modal";

function Home(props) {
    const [isActive, setIsActive] = React.useState(false);

    const toggleModal = () => {
        setIsActive(!isActive);
    }

    return(
        <div id="home-body" className="body home-body">
            <section className="hero">
                <h1 className="header hero-header">&lt;recent.articles&gt;</h1>
                <Carousel />
                <button onClick={toggleModal} className="button is-primary">Join our mailing list!</button>
                <Modal closeModal={toggleModal} modalState={isActive} title="Join our mailing list!" />
            </section>
        </div>
    )
}

export default Home;
