import React, { useEffect } from "react";
// import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "./blog/modal";
import { useWindowSize } from "../util/util";

function Footer(props) {
    const size = useWindowSize();
    const [isActive, setIsActive] = React.useState(false);

    const toggleModal = () => {
        setIsActive(!isActive);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            toggleModal();
        }, 2500)

        return () => {clearTimeout(timeout)}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <footer className="footer mt-auto">
            { size[0] > 768 ? 
            <Modal closeModal={toggleModal} modalState={isActive} title="Join our mailing list!" />
            : null }
            <div className="content has-text-centered" style={{alignItems: 'center'}}>
                {/*
                <NavLink to={"/"} id="ft-link" className="ft-link nav-link">
                  <img src="static/img/crate_logo_grn.png" width="150"></img>
                </NavLink>
                */}
                { size[0] > 768 ? 
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
                </button> :
                <a 
                href="https://2f4cda99.sibforms.com/serve/MUIFAEe3-5BemfMXQzFq7jbcjN78EUsTyQu4mlKVtUk01fzLJqmuxjvJOVv6fTd7KT6sFCz6_Dw1pevE-RI2hql9g9yGJy33B7c8X26FfSo4fVvtLIpcYC_6xKKV3FQqfdkxY6tlVTgQw5vqO3Mjrjb1kp5Q-slG8-6FgYSiEAG1GaNswrsdSAiPpeHmjlN767zWhdOAxAQ80vlL"
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
                </a>
                }
                <p className='footer-text' style={{ whiteSpace: 'pre-wrap', paddingTop: '1.5rem' }}>
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
