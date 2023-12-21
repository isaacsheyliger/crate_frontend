import React from "react";
import EmbedPlayer from "./embed";
import Carousel from "./carousel";

// likely not needed
//
// function useWindowSize() {
//     const [size, setSize] = useState([0, 0]);
//     useLayoutEffect(() => {
//       function updateSize() {
//         setSize([window.innerWidth, window.innerHeight]);
//       }
//       window.addEventListener('resize', updateSize);
//       updateSize();
//       return () => window.removeEventListener('resize', updateSize);
//     }, []);
//     return size;
// }

function Home(props) {
    return(
        <div id="home-body" className="body home-body">
            <section className="hero">
                <Carousel />
                <h1 className="header">&lt;featured.playlist&gt;</h1>
                <EmbedPlayer className="featured"/>
            </section>
        </div>
    )
}

export default Home;
