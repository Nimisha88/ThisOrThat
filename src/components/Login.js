import "../styles/login.css";
import { useRef } from "react";
import { connect } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { verifyCredentials } from "../utils/helper";
import { setAuthedUser } from "../actions/authedUser";

const loginImgSrc = "https://cdn.pixabay.com/photo/2021/07/04/18/46/question-6387294_1280.jpg"

// const DummyLogin = ({ dispatch }) => {
//     let navigate = useNavigate();
//     dispatch(setAuthedUser("sarahedo"));
//     navigate(`/`);
// }

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };

    return ComponentWithRouterProp;
};

const Login = ({ users, navigateTo, dispatch }) => {
    let navigate = useNavigate();

    const unameRef = useRef();
    const pwdRef = useRef();

    const handleLogin = (event) => {
        event.preventDefault();

        let uname = unameRef.current.value;
        unameRef.current.value = "";
        let pwd = pwdRef.current.value;
        pwdRef.current.value = "";

        console.log("Login User: ", users);

        const isLoginSuccessful = users[uname]? verifyCredentials({
            user: users[uname],
            uname,
            pwd,
        }): false;

        if (isLoginSuccessful) {
            dispatch(setAuthedUser(uname));
            // navigate(`/`);
            navigate(navigateTo);
        } else {
            alert("Login unsuccessful, please try again later.");
        }
    };

    return (
        <main className="login">
            <div className="img-wrapper">
                <img src={loginImgSrc} alt="This or that App Login" />
            </div>
            <div className="form-wrapper">
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

const mapStatesToProps = ({ users }, props) => {
    console.log(props.router.location);
    return {
        users,
        navigateTo: props.router.location
    }
}

export default withRouter(connect(mapStatesToProps)(Login));
// export default connect()(DummyLogin);
