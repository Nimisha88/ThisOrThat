import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { handleVote } from "../actions/actions";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getNumberOfVotes } from "../utils/helper";
import NotFound from "./NotFound"
import Avatar from "react-avatar";
import "../styles/pollPage.css";

const optionOne = "optionOne";
const optionTwo = "optionTwo";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };

    return ComponentWithRouterProp;
};

const PollPage = ({ poll, author, authedUser, dispatch }) => {
    const [votedOption, setVotedOption] = useState(null);

    useEffect(() => {
        if (poll !== null) {
            if (poll.optionOne.votes.includes(authedUser)) {
                setVotedOption(optionOne);
            }
            if (poll.optionTwo.votes.includes(authedUser)) {
                setVotedOption(optionTwo);
            }
        }
    }, []);

    const handleOptionClick = (event) => {
        event.preventDefault();
        if (event.target.id === `${optionOne}Container` || event.target.parentNode.id === `${optionOne}Container`) {
            dispatch(handleVote(poll.id, optionOne));
            setVotedOption(optionOne);
        }
        if (event.target.id === `${optionTwo}Container` || event.target.parentNode.id === `${optionTwo}Container`) {
            dispatch(handleVote(poll.id, optionTwo));
            setVotedOption(optionTwo);
        }
    };

    return (
        poll===null? <NotFound />
        :(<div className="poll-page">
            <h2 className="subtitle">Poll by <span className="author">{author.name}</span></h2>
            <Avatar className="avatar" name={author.name} size="100" round="50%" />
            <div className="poll">
                <h2 className="subtitle">Would you rather?</h2>

                {votedOption === null ? (
                    <form className="poll-options">
                        <div id={`${optionOne}Container`} className={["option", "radio"].join(" ")} onClick={handleOptionClick}>
                            <input
                                type="radio"
                                id={optionOne}
                                name="poll"
                                value={poll.optionOne.text}
                            />
                            <label htmlFor={optionOne}>{poll.optionOne.text}</label>
                        </div>
                        <div id={`${optionTwo}Container`} className={["option", "radio"].join(" ")} onClick={handleOptionClick}>
                            <input
                                type="radio"
                                id={optionTwo}
                                name="poll"
                                value={poll.optionTwo.text}
                            />
                            <label htmlFor={optionTwo}>{poll.optionTwo.text}</label>
                        </div>
                    </form>
                ) : (
                    <div className="poll-options">
                        {votedOption === optionOne ? (
                            <div className={["option", "selected"].join(" ")}>
                                <label>{poll.optionOne.text}</label>
                            </div>
                        ) : (
                            <div className="option">
                                <label>{poll.optionOne.text}</label>
                            </div>
                        )}
                        {votedOption === optionTwo ? (
                            <div className={["option", "selected"].join(" ")}>
                                <label>{poll.optionTwo.text}</label>
                            </div>
                        ) : (
                            <div className="option">
                                <label>{poll.optionTwo.text}</label>
                            </div>
                        )}
                    </div>
                )}
                {votedOption === null? null: <div className="vote-result">
                    <div className="vote-info">
                        <div>{`${poll.optionOne.votes.length} votes`}</div>
                        <div>{`${
                            Math.floor(poll.optionOne.votes.length * 100 / getNumberOfVotes(poll))
                        }%`}</div>
                    </div>
                    <div className="vote-info">
                        <div>{`${poll.optionTwo.votes.length} votes`}</div>
                        <div>{`${
                            Math.floor(poll.optionTwo.votes.length * 100 /
                            getNumberOfVotes(poll))
                        }%`}</div>
                    </div>
                </div>}
            </div>
        </div>)
    );
};

const mapStatesToProps = ({ polls, users, authedUser }, props) => {
    const { question_id } = props.router.params;
    const poll = polls[question_id] ? polls[question_id] : null;

    return {
        poll,
        author: polls[question_id]? users[poll.author] : null,
        authedUser,
    };
};

export default withRouter(connect(mapStatesToProps)(PollPage));
