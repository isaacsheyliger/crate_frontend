import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Nav(props) {

    return(
        <nav className="navbar is-fixed-top is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand" style={{alignItems: 'center'}}>
                <NavLink to={"/"} id="tl-link" className="nav-link" style={{height: 'fit-content'}}>
                    <img id='tl-img' alt="crate logo" src="/crate_frontend/static/img/crate_logo_grn.png" width="52"></img>
                    &lt;crate.digital&gt;
                </NavLink>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    {/* <div className="navbar-item is-black">
                        <NavLink to={"/dig"} id="tl-link" className="nav-link">
                            &lt;dig&gt;
                        </NavLink>
                    </div>
                    <div className="navbar-item is-black">
                        <NavLink to={"/archive"} id="tl-link" className="nav-link">
                            &lt;archive&gt;
                        </NavLink>
                    </div> */}
                    {/* <div className="navbar-item has-dropdown is-active">
                        [Month]'s Upcoming Releases
                        <div className="navbar-dropdown is-boxed">
                            release calendar
                        </div>
                    </div> */}
                </div>
            </div>
            <div id="nav-spacer" className="navbar-brand" style={{alignItems: 'center'}}>
            </div>
        </nav>
    )
}

Nav.propTypes = {
    username: PropTypes.string
}

export default Nav;