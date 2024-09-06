import React from "react";

function Modal({ children, closeModal, modalState, title }) {
    if (!modalState) {
        return null;
    }
    
    return (
        <dialog id="modal" className={`is-active modal sib-form`} style={{textAlign: "center"}}>
            <div className="modal-background" onClick={closeModal}></div>
            <div id="sib-form-container" className="modal-content is-flex is-align-items-center is-justify-content-center">
                <div className="modal-image" style={{backgroundImage: "url('https://i.scdn.co/image/ab67616d0000b2739693c6031254b097be80ac55')"}}>
                </div>
                <div id="sib-container" className="modal-form" style={{}}>
                    <form id="sib-form" method="POST" action={"https://2f4cda99.sibforms.com/serve/MUIFAEe3-5BemfMXQzFq7jbcjN78EUsTyQu4mlKVtUk01fzLJqmuxjvJOVv6fTd7KT6sFCz6_Dw1pevE-RI2hql9g9yGJy33B7c8X26FfSo4fVvtLIpcYC_6xKKV3FQqfdkxY6tlVTgQw5vqO3Mjrjb1kp5Q-slG8-6FgYSiEAG1GaNswrsdSAiPpeHmjlN767zWhdOAxAQ80vlL"} data-type="subscription">
                        <div style={{padding: "8px 0"}}>
                            <div className="sib-form-block" style={{fontSize: "32px", fontWeight: "700", textAlign: "center"}}>
                                <p>Subscribe to our crate!</p>
                            </div>
                        </div>
                        <div style={{padding: "8px 0"}}>
                            <div className="sib-form-block" style={{fontSize: "14px", textAlign: "center", fontFamily: "'Helvetica', sans-serif"}}>
                                <div className="sib-text-form-block">
                                    <p>Stay updated to our monthly newsletter and keep up with all the latest hits.&nbsp;</p>
                                </div>
                            </div>
                        </div>
                        <div style={{padding: "8px 0"}}>
                            <div className="sib-input sib-form-block">
                                <div className="form__entry entry_block">
                                    <div className="form__label-row ">
                                        <div className="entry__field">
                                            <input className="input " type="text" id="EMAIL" name="EMAIL" autoComplete="off" placeholder="Enter your Email" data-required="true" required />
                                        </div>
                                    </div>

                                    <label className="entry__error entry__error--primary" style={{fontSize: "16px", textAlign: "left", fontFamily: "'Helvetica', sans-serif", color: "#661d1d", backgroundColor: "#ffeded", borderRadius: "3px", borderColor: "#ff4949"}}>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div style={{padding: "8px 0"}}>
                            <div className="g-recaptcha-v3" data-sitekey="6LecyjcqAAAAAHvLE5JcC3jdq3m7ce9s8yMG88Wx" style={{display: "none"}}></div>
                        </div>
                        <div style={{padding: "8px 0"}}>
                            <div className="sib-optin sib-form-block">
                                <div className="form__entry entry_mcq">
                                    <div className="form__label-row ">
                                        <div className="entry__choice">
                                            <label style={{display: "flex", alignItems: "center"}}>
                                                <input type="checkbox" className="input_replaced" defaultValue="1" id="OPT_IN" name="OPT_IN" />
                                                <span className="checkbox checkbox_tick_positive" style={{marginRight: "16px"}}></span>
                                                <span style={{fontSize: "14px", textAlign: "left", fontFamily: "'Helvetica', sans-serif", color: "#3C4858", backgroundColor: "transparent"}}><p>I agree to receive newsletters and accept the data privacy statement.</p></span> 
                                            </label>
                                        </div>
                                    </div>
                                    <label className="entry__error entry__error--primary" style={{fontSize: "16px", textAlign: "left", fontFamily: "'Helvetica', sans-serif", color: "#661d1d", backgroundColor: "#ffeded", borderRadius: "3px", borderColor: "#ff4949"}}>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div style={{padding: "8px 0"}}>
                            <div className="sib-form__declaration" style={{direction: "ltr"}}>
                                <div style={{fontSize: "14px", textAlign: "left", fontFamily: "'Helvetica', sans-serif", color: "#687484", backgroundColor: "transparent"}}>
                                    <p>
                                        This site uses Brevo as our online marketing platform. By submitting this form you agree that the personal data you provided will be transferred to Brevo for processing in accordance with <a href="https://www.brevo.com/en/legal/privacypolicy/" target="_blank">Brevo's Privacy Policy.</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{padding: "32px 0 0"}}>
                            <div className="sib-form-block" style={{textAlign:  "center"}}>
                                <button className="sib-form-block__button sib-form-block__button-with-loader" style={{fontSize: "18px", fontWeight: "700", borderRadius: ".25rem", borderWidth: "1px", borderColor: "#4AF626", padding: "0.5rem"}} form="sib-form" type="submit">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        <input type="text" name="email_address_check" value="" readOnly className="input--hidden" style={{display: "none"}} />
                        <input type="hidden" name="locale" value="en" readOnly />
                    </form>
                </div>
            </div>
            <button id="close-modal" className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
        </dialog>
    )
}

export default Modal;
{/* <iframe className="modal-form" width="540" height="600" src="https://2f4cda99.sibforms.com/serve/MUIFAEJjpoNQFUaw0mfb097qatnkK3LmqwO45yqz0m82YiMjXrDnA4BOrC1WuJRLdom46i2QJOb-Fn0nXDN1AL3V3yA2PD2_f_fVzLXpwg1rK8wVx0A-WU7BBP00CSVCqZom_FjnFg7ajx80rDPxvJUGcP7diBlMYgpbEHbqdkhfIwv6sQ2W_EeWr41H7kKOofdeE8ZrHAmnmQ03" allowFullScreen allowTransparency="true" style={{display: "block", background: "#FFFFFF", maxWidth: "100%"}}></iframe> */}

