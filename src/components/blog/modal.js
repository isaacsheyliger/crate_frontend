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
                    <form id="sib-form" method="POST" action="https://2f4cda99.sibforms.com/serve/MUIFAE1MaN4mngNJurf6dxloVApYr4sR_L6oRcTwk5mWschVg1S27-peBQEiOmFEAuWwnQM0pc1fyCjSbIFCF8-_07yBP1ysxFI75H67JRIz62GUJ3gktlN7u1bqASJm6Vww3ACN4nh2vaumDBCrJsLO53BptZ1YG7L0_CF4YMwrTTDJGmeKP-dq95YSYiFg3hrrxxrsBOMbL8_7" data-type="subscription">
                        <div style={{padding: "8px 0"}}>
                            <div className="sib-form-block" style={{fontSize: "32px", textAlign: "left", fontWeight: "700", textAlign: "center"}}>
                                <p>Subscribe to our crate!</p>
                            </div>
                        </div>
                        <div style={{padding: "8px 0"}}>
                            <div className="sib-form-block" style={{fontSize: "16px", textAlign: "left", fontFamily: "'Helvetica', sans-serif", color: "#3C4858", backgroundColor: "transparent", textAlign: "left"}}>
                                <div className="sib-text-form-block">
                                    <p>Stay updated to our monthly newsletter and keep up with all the latest hits.&nbsp;</p>
                                </div>
                            </div>
                        </div>
                        <div style={{padding: "8px 0"}}>
                            <div className="sib-input sib-form-block">
                                <div className="form__entry entry_block">
                                    <div className="form__label-row ">
                                        <label className="entry__label" style={{fontWeight:  "700", textAlign: "left", fontSize: "16px", textAlign: "left", fontWeight: "700", fontFamily: "'Helvetica', sans-serif", color: "#3C4858"}} for="EMAIL" data-required="*">Enter your email address</label>

                                        <div className="entry__field">
                                        <input className="input " type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="EMAIL" data-required="true" required />
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
                                        <div className="entry__choice" style={{}}>
                                            <label>
                                                <input type="checkbox" className="input_replaced" value="1" id="OPT_IN" name="OPT_IN" />
                                                <span className="checkbox checkbox_tick_positive" style={{marginLeft:""}}></span>
                                                <span style={{fontSize: "14px", textAlign: "left", fontFamily: "'Helvetica', sans-serif", color: "#3C4858", backgroundColor: "transparent"}}><p>I agree to receive your newsletters and accept the data privacy statement.</p></span> 
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
                                <div className="declaration-block-icon">
                                    <svg className="icon__SVG" width="63" height="63" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <path className="path1" d="M31.54 0l1.05 3.06 3.385-.01-2.735 1.897 1.05 3.042-2.748-1.886-2.738 1.886 1.044-3.05-2.745-1.897h3.393zm13.97 3.019L46.555 6.4l3.384.01-2.743 2.101 1.048 3.387-2.752-2.1-2.752 2.1 1.054-3.382-2.745-2.105h3.385zm9.998 10.056l1.039 3.382h3.38l-2.751 2.1 1.05 3.382-2.744-2.091-2.743 2.091 1.054-3.381-2.754-2.1h3.385zM58.58 27.1l1.04 3.372h3.379l-2.752 2.096 1.05 3.387-2.744-2.091-2.75 2.092 1.054-3.387-2.747-2.097h3.376zm-3.076 14.02l1.044 3.364h3.385l-2.743 2.09 1.05 3.392-2.744-2.097-2.743 2.097 1.052-3.377-2.752-2.117 3.385-.01zm-9.985 9.91l1.045 3.364h3.393l-2.752 2.09 1.05 3.393-2.745-2.097-2.743 2.097 1.05-3.383-2.751-2.1 3.384-.01zM31.45 55.01l1.044 3.043 3.393-.008-2.752 1.9L34.19 63l-2.744-1.895-2.748 1.891 1.054-3.05-2.743-1.9h3.384zm-13.934-3.98l1.036 3.364h3.402l-2.752 2.09 1.053 3.393-2.747-2.097-2.752 2.097 1.053-3.382-2.743-2.1 3.384-.01zm-9.981-9.91l1.045 3.364h3.398l-2.748 2.09 1.05 3.392-2.753-2.1-2.752 2.096 1.053-3.382-2.743-2.102 3.384-.009zM4.466 27.1l1.038 3.372H8.88l-2.752 2.097 1.053 3.387-2.743-2.09-2.748 2.09 1.053-3.387L0 30.472h3.385zm3.069-14.025l1.045 3.382h3.395L9.23 18.56l1.05 3.381-2.752-2.09-2.752 2.09 1.053-3.381-2.744-2.1h3.384zm9.99-10.056L18.57 6.4l3.393.01-2.743 2.1 1.05 3.373-2.754-2.092-2.751 2.092 1.053-3.382-2.744-2.1h3.384zm24.938 19.394l-10-4.22a2.48 2.48 0 00-1.921 0l-10 4.22A2.529 2.529 0 0019 24.75c0 10.47 5.964 17.705 11.537 20.057a2.48 2.48 0 001.921 0C36.921 42.924 44 36.421 44 24.75a2.532 2.532 0 00-1.537-2.336zm-2.46 6.023l-9.583 9.705a.83.83 0 01-1.177 0l-5.416-5.485a.855.855 0 010-1.192l1.177-1.192a.83.83 0 011.177 0l3.65 3.697 7.819-7.916a.83.83 0 011.177 0l1.177 1.191a.843.843 0 010 1.192z" fill="#0092FF"></path>
                                    </svg>
                                </div>
                                <div style={{fontSize: "14px", textAlign: "left", fontFamily: "'Helvetica', sans-serif", color: "#687484", backgroundColor: "transparent"}}>
                                    <p>
                                        We use Brevo as our marketing platform. By submitting this form you agree that the personal data you provided will be transferred to Brevo for processing in accordance with <a href="https://www.brevo.com/en/legal/privacypolicy/" target="_blank">Brevo's Privacy Policy.</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{padding: "8px 0"}}>
                            <div className="sib-form-block" style={{textAlign:  "left"}}>
                                <button className="sib-form-block__button sib-form-block__button-with-loader" style={{fontSize: "16px", textAlign: "left", fontWeight: "700", fontFamily: "'Helvetica', sans-serif", color: "#FFFFFF", backgroundColor: "#3E4857", borderRadius: "3px", borderWidth: "0px"}} form="sib-form" type="submit">
                                    <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                                        <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                                    </svg>
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>

                        <input type="text" name="email_address_check" value="" className="input--hidden" />
                        <input type="hidden" name="locale" value="en" />
                    </form>
                </div>
            </div>
            <button id="close-modal" className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
        </dialog>
    )
}

export default Modal;
{/* <iframe className="modal-form" width="540" height="600" src="https://2f4cda99.sibforms.com/serve/MUIFAEJjpoNQFUaw0mfb097qatnkK3LmqwO45yqz0m82YiMjXrDnA4BOrC1WuJRLdom46i2QJOb-Fn0nXDN1AL3V3yA2PD2_f_fVzLXpwg1rK8wVx0A-WU7BBP00CSVCqZom_FjnFg7ajx80rDPxvJUGcP7diBlMYgpbEHbqdkhfIwv6sQ2W_EeWr41H7kKOofdeE8ZrHAmnmQ03" allowFullScreen allowTransparency="true" style={{display: "block", background: "#FFFFFF", maxWidth: "100%"}}></iframe> */}

