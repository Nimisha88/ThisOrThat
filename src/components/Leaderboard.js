import { connect } from "react-redux";
import { useEffect } from "react";

const Leaderboard = ({ dispatch }) => {
    useEffect(() => {
        document.getElementById("nav-link-leaderboard").classList.add('selected');
        return () => {
            document.getElementById("nav-link-leaderboard").classList.remove('selected');
        };
    }, []);
    return (
        <div>
            Leaderboard
        </div>
    );
}

const mapStatesToProps = ({ polls, users, authedUser }) => {
    return {

    }
}

export default connect(mapStatesToProps)(Leaderboard);