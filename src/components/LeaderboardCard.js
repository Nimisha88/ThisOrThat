import Avatar from "react-avatar";
import { connect } from "react-redux";
import { getLeaderboardScore } from "../utils/helper";
import "../styles/leaderboard.css"

const LeaderboardCard = ({ user }) => {
    console.log("LBcard of: ", user);

    return (
        <div className="lb-card">
            <div className="lbcard-avatar">
                <Avatar className="avatar" name={user.name} size="70" round="50%" />
            </div>
            <div className="do-nothing"></div>
            <div className="lbcard-user">
                <h3>{user.name}</h3>
                <h5>{user.id}</h5>
            </div>
            <div className="do-nothing"></div>
            <div className="lbcard-score">
                <h4>Asked: {user.questions.length}</h4>
                <h4>Answered: {Object.keys(user.answers).length}</h4>
                <h4 className="score">Total: {getLeaderboardScore(user)}</h4>
            </div>
        </div>
    )
}

const mapStatesToProps = ({ users }, { id }) => {
    return {
        user: users[id]
    }
}

export default connect(mapStatesToProps)(LeaderboardCard);