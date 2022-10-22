import "../styles/login.css";
import { useRef } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyCredentials } from "../utils/api";
import { setAuthedUser } from "../actions/authedUser";

// const loginImgSrc = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
// const loginImgSrc = "https://cdn.pixabay.com/photo/2012/12/20/08/48/system-71228_1280.jpg";
const loginImgSrc = "https://cdn.pixabay.com/photo/2021/07/04/18/46/question-6387294_1280.jpg"

const Login = ({ dispatch }) => {
    let navigate = useNavigate();

    const unameRef = useRef();
    const pwdRef = useRef();

    const handleLogin = (event) => {
        event.preventDefault();

        let uname = unameRef.current.value;
        unameRef.current.value = "";
        let pwd = pwdRef.current.value;
        pwdRef.current.value = "";

        console.log(uname + " " + pwd);

        const isLoginSuccessful = verifyCredentials({
            uname,
            pwd,
        });

        if (isLoginSuccessful) {
            dispatch(setAuthedUser(uname));
            navigate(`/`);
        } else {
            alert("Login unsuccessful, please try again later.");
        }
    };

    return (
        <main className="login">
            <div class="img-wrapper">
                <img src={loginImgSrc} alt="This or that App Login" />
            </div>
            <div class="form-wrapper">
                <h1 className="app-name">This or that?</h1>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Username" ref={unameRef} />
                    <input type="text" placeholder="Password" ref={pwdRef} />
                    <button className="submit-btn">Login</button>
                </form>
            </div>
        </main>
    );
};

const mapStatesToProps = ({ polls, users, authedUser }) => {
    return {};
};

export default connect(mapStatesToProps)(Login);