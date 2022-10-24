import { connect } from "react-redux";
import { useEffect } from "react";

const Leaderboard = ({ dispatch }) => {
    useEffect(() => {
        const leaderboardLink = document.getElementById("nav-link-leaderboard");
        leaderboardLink.classList.add('selected');
        return () => {
            if(leaderboardLink){
                leaderboardLink.classList.remove('selected');
            }
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