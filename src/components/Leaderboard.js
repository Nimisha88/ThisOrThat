import { connect } from "react-redux";
import { useEffect } from "react";
import LeaderboardCard from "./LeaderboardCard";
import { getLeaderboardScore } from "../utils/helper";
import "../styles/leaderboard.css"

const Leaderboard = ({ users }) => {
    const uIds = Object.keys(users).sort(
        (a, b) => getLeaderboardScore(users[b]) - getLeaderboardScore(users[a])
    );

    useEffect(() => {
        const leaderboardLink = document.getElementById("nav-link-leaderboard");
        leaderboardLink.classList.add("selected");
        return () => {
            if (leaderboardLink) {
                leaderboardLink.classList.remove("selected");
            }
        };
    }, []);

    return (
        <div className="leaderboard">
            <h2 className="subtitle">Leaderboard</h2>
            <h3>Winner: <span className="winner">{users[uIds[0]].name}</span></h3>
            <div className="lbcards-container">
                {uIds.length !== 0 &&
                    uIds.map((uId) => (
                        <LeaderboardCard key={uId} id={uId}/>
                    ))}
            </div>
        </div>
    );
};

const mapStatesToProps = ({ polls, users, authedUser }) => {
    return {
        users,
    };
};

export default connect(mapStatesToProps)(Leaderboard);
