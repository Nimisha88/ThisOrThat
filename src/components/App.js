import { connect } from "react-redux";
import { useEffect, Fragment } from "react";
import { initializeAppData } from "../actions/actions"
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";
import Dashboard from "./Dashboard";
import PollPage from "./PollPage";
import NewPoll from "./NewPoll";
import Navbar from "./Navbar";
import Leaderboard from "./Leaderboard";
import Login from "./Login";

const App = ({ loading, loggedIn, dispatch }) => {
  useEffect(() => {
    dispatch(initializeAppData());
  }, []);

  return (
    loggedIn?
    <Fragment>
      <LoadingBar />
      <Navbar />
      {
        loading? null: (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/poll/:id" element={<PollPage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/new" element={<NewPoll />} />
          </Routes>
        )
      }
    </Fragment>
    : <Login />
  );
}

const mapStatesToProps = ({ users, authedUser }) => {
  return {
    loading: users==={},
    loggedIn: !(authedUser===null)
  }
}

export default connect(mapStatesToProps)(App);
