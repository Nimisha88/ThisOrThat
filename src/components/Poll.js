import { connect } from "react-redux";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { formatDate, getNumberOfVotes } from "../utils/helper";
import "../styles/poll.css"

const Poll = ({ poll, author }) => {
    return (
        <Link className="poll-card" to={`/questions/${poll.id}`}>
            <div className="author-info">
                <Avatar className="avatar" name={author.name} size="65" round="50%"/>
            </div>
            <div>
                <h3 className="author">{author.name}</h3>
                <p className="date">{formatDate(poll.timestamp)}</p>
                <p className="votes">{`${getNumberOfVotes(poll)} votes`}</p>
            </div>
        </Link>
    );
};

const mapStatesToProps = ({ polls, users}, { id }) => {
    return {
        poll: polls[id] ? polls[id] : null,
        author: polls[id] ? users[polls[id].author] : null
    };
};

export default connect(mapStatesToProps)(Poll);
