import React from "react";
// import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "./blog/modal";

function Footer(props) {
    const [isActive, setIsActive] = React.useState(false);

    const toggleModal = () => {
        setIsActive(!isActive);
    }

    return(
        <footer className="footer mt-auto">
                <Modal closeModal={toggleModal} modalState={isActive} title="Join our mailing list!" />
            <div className="content has-text-centered" style={{alignItems: 'center'}}>
                {/*
                <NavLink to={"/"} id="ft-link" className="ft-link nav-link">
                  <img src="static/img/crate_logo_grn.png" width="150"></img>
                </NavLink>
                */}
                <p className='footer-text' style={{ whiteSpace: 'pre-wrap' }}>
                    &copy; 2023 Crate Digital, LLC.
                    <br />
                    All rights reserved.
                </p>
                <button 
                onClick={toggleModal} 
                className="button" 
                style={{
                    fontSize: "18px", 
                    fontWeight: "700", 
                    backgroundColor: "inherit",
                    borderRadius: ".5rem", 
                    borderWidth: "0px",  
                    padding: "0.5rem"
                    }}
                >
                    Join our mailing list!
                </button>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    username: PropTypes.string
}

export default Footer;
