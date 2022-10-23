import { connect } from "react-redux";
import { useEffect, Fragment } from "react";
import { initializeAppData } from "../actions/actions";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";
import Dashboard from "./Dashboard";
import PollPage from "./PollPage";
import NewPoll from "./NewPoll";
import Navbar from "./Navbar";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import "../styles/app.css"

const App = ({ loading, loggedIn, dispatch }) => {
    useEffect(() => {
        dispatch(initializeAppData());
    }, []);

    return (
        !loggedIn? <Login />
        : (
            <Fragment>
                <LoadingBar />
                {
                    loading? null
                    : (
                    <div className="app">
                        <h1>This or that!</h1>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/poll/:id" element={<PollPage />} />
                            <Route path="/leaderboard" element={<Leaderboard />} />
                            <Route path="/new" element={<NewPoll />} />
                        </Routes>
                        <h4 className="footer">© Designed and developed by <span>Nimisha Viraj</span></h4>
                    </div>)
                }
            </Fragment>
        )
    );
};

const mapStatesToProps = ({ users, authedUser }) => {
    return {
        loading: users[authedUser] === undefined,
        loggedIn: !(authedUser === null),
    };
};

export default connect(mapStatesToProps)(App);
