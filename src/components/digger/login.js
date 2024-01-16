import { useState } from "react";
import { config } from "../../const/constants";

const API_URL = config.api_url
const URL = config.url

export default function Login(props) {
    const [auth, setAuth] = useState(false);
	const [showLoad, setShowLoad] = useState(false)

    // TODO: create progress bar element
    const [progressBar, setProgressBar] = useState(0)
    const [progressMessage, setProgressMessage] = useState('')

    const updateProgress = () => {
        const intervalId = setInterval(() => {
            setProgressBar((prev) => {
              if (prev >= 100) {
                clearInterval(intervalId);
                return 100;
              }
              else if (prev >= 50) {
                setProgressMessage('loading crates...')
                return prev + 5;
              }
              else if (prev >= 80) {
                setProgressMessage('logging in...')
                return prev + 5;
              }
              else {
                setProgressMessage('authenticating user...')
                return prev + 5;
              }
            });
          }, 1000);
          return () => clearInterval(intervalId);
    }

	const showLoadOnClick = () => {
		setShowLoad(!showLoad)
        Authenticate()
        updateProgress()
	}

    // TODO: optimize
    const Authenticate = async () => {
        await fetch(`${API_URL}/auth-verify/`) // TODO: replace with backend server urls
        .then((response) => response.json())
        .then((data) => {
            setAuth(data.status);
            if (!auth) {
                fetch(`${API_URL}/get-auth-url/`) // above
                .then((response) => response.json())
                .then((data) => {
                    window.location.replace(data.url);
                });
            }
            else {
                window.location.replace(`${URL}/home/`);
            }
        });
    }

    return(
        <div class="container">
            <h4>&lt;welcome to crate.digital&gt;</h4>
            { !showLoad ? <button id="login" href="" onClick={showLoadOnClick}>
                <pre class="caret-block">log in with Spotify<span> </span></pre>
            </button> : null}
            { showLoad ? <div id="progress-container">
                <div id="messages">
                    <pre id="progress-message">{progressMessage}</pre>
                </div>
                <progress id="progress-bar" value={progressBar} max="100"></progress>
            </div> : null}
        </div>
    )
}