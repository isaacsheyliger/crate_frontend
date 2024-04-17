import React from "react";
// import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Footer(props) {

    return(
        <footer className="footer mt-auto">
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
            </div>
        </footer>
    )
}

Footer.propTypes = {
    username: PropTypes.string
}

export default Footer;
