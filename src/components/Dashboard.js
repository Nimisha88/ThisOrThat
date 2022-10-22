import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Poll from "./Poll";

const Dashboard = ({
    answeredPolls,
    unansweredPolls,
    authedUser,
    dispatch,
}) => {
    return (
        <div>
            <h3>Dashboard</h3>
            <h4>New Polls</h4>
            {unansweredPolls &&
                unansweredPolls.map((pollId) => {
                    return (
                        <Poll key={pollId} id={pollId} />
                    );
                })}
            <h4>Answered Polls</h4>
            {answeredPolls &&
                answeredPolls.map((pollId) => {
                    return <Poll key={pollId} id={pollId} />;
                })}
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
