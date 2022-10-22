import { connect } from "react-redux";

const Leaderboard = ({ dispatch }) => {
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