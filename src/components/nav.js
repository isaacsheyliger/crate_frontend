import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useWindowSize } from "../util/util";

function Nav(props) {
    const size = useWindowSize();
    const [showNav, setShowNav] = useState(false);

    const toggleNav = useCallback(() => {
	    setShowNav(!showNav)
    }, [showNav])

    if (size[0] > 768) {
        return(
            <nav className="navbar is-fixed-top is-black" role="navigation" aria-label="main navigation">
                <div className="navbar-brand is-align-items-center">
                    <NavLink to={"/"} id="tl-link" className="nav-link" style={{height: 'fit-content'}}>
                        <img id='tl-img' alt="crate logo" src="/static/img/crate_logo_alt128.webp" width="52"></img>
                        &lt;crate.digital&gt;
                    </NavLink>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start is-align-items-start">
                        {/* <div className="navbar-item is-black">
                            <NavLink to={"/dig"} id="tl-link" className="nav-link">
                                &lt;dig&gt;
                            </NavLink>
                        </div> */ }
                        <div className="navbar-item pl-4">
                            <NavLink to={"/archive"} id="tl-link" className="nav-link">
                                &lt;archive&gt;
                            </NavLink>
                        </div>
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
    else {
	return (
	    <nav className={ showNav ? "navbar is-fixed-top is-black is-flex is-flex-direction-column is-align-items-center" : "navbar is-fixed-top is-black is-flex" } role="navigation" aria-label="main navigation">
	        <div className="navbar-brand" style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
		    <button 
		    className={ showNav ? "navbar-burger is-active mr-auto ml-0" : "navbar-burger mr-auto ml-0" } 
		    onClick={toggleNav} 
		    aria-label="menu" 
		    aria-expanded="false" 
		    data-target="nav"
            style={{ color: '#E1E1E1' }}
		    >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
            <NavLink to={"/"} id="tl-link" className="nav-link mr-auto" style={{height: 'fit-content'}}>
                <img 
                id='tl-img' 
                alt="crate logo" 
                className="is-hidden-touch" 
                src="/static/img/crate_logo_grn.png" 
                width="52" />
                &lt;crate.digital&gt;
            </NavLink>
		    <button
		    href=""
		    className={ showNav ? "navbar-burger is-invisible mr-0 ml-auto" : "navbar-burger is-invisible mr-0 ml-auto" }
		    aria-expanded="false"
		    >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
        </div>
        <div 
		id="nav" 
		className={ showNav ? "navbar-menu is-active has-background-black ml-auto" : "navbar-menu" }
 		style={{width: '100%'}}
		>
		    <div className="navbar-start is-flex is-flex-direction-column is-align-items-center">
			{/*<div className="navbar-item is-black">
                            <NavLink to={"/dig"} id="tl-link" className="nav-link">
                                &lt;dig&gt;
                            </NavLink>
                        </div> */}
                        <div className="navbar-item is-black">
                            <NavLink to={"/archive"} id="tl-link" className="nav-link">
                                &lt;archive&gt;
                            </NavLink>
                        </div>
                        {/* <div className="navbar-item has-dropdown is-active">
                            [Month]'s Upcoming Releases
                            <div className="navbar-dropdown is-boxed">
                                release calendar
                            </div>
                        </div> */}
                    </div>
                </div>
            </nav>
	)
    }
}

Nav.propTypes = {
    username: PropTypes.string
}

export default Nav;
