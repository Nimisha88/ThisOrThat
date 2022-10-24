import { connect } from "react-redux";
import { useEffect } from "react";
import Poll from "./Poll";
import "../styles/dashboard.css";

const Dashboard = ({
    answeredPolls,
    unansweredPolls
}) => {
    useEffect(() => {
        const homeLink = document.getElementById("nav-link-home")
        homeLink.classList.add('selected');
        return () => {
            if(homeLink){
                homeLink.classList.remove('selected')
            };
        };
    }, []);

    return (
        <div className="dashboard">
            <h2 className="poll-category">Care to share your opinion?</h2>
            <div className="poll-list">
                {unansweredPolls &&
                    unansweredPolls.map((pollId) => {
                        return <Poll key={pollId} id={pollId} />;
                    })}
                {unansweredPolls && unansweredPolls.length===0 &&
                    <p>No new polls!</p>}
            </div>
            <h2 className="poll-category">Do others think alike?</h2>
            <div className="poll-list">
                {answeredPolls &&
                    answeredPolls.map((pollId) => {
                        return <Poll key={pollId} id={pollId} />;
                    })}
                {answeredPolls && answeredPolls.length===0 &&
                    <p>No voted polls!</p>}
            </div>
        </div>
    );
};

const mapStatesToProps = ({ polls, authedUser }) => {
    const pollIds = Object.keys(polls).sort(
        (a, b) => polls[b].timestamp - polls[a].timestamp
    );
    const answeredPolls = pollIds.filter(
        (id) =>
            polls[id].optionOne.votes.includes(authedUser) ||
            polls[id].optionTwo.votes.includes(authedUser)
    );
    const unansweredPolls = pollIds.filter(
        (id) =>
            !(
                polls[id].optionOne.votes.includes(authedUser) ||
                polls[id].optionTwo.votes.includes(authedUser)
            )
    );

    return {
        answeredPolls,
        unansweredPolls,
        authedUser,
    };
};

export default connect(mapStatesToProps)(Dashboard);
