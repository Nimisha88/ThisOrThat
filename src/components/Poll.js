import { connect } from "react-redux";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const Poll = ({ poll, author, authedUser }) => {
    return (
        <Link to={`/poll/${poll.id}`}>
            <Avatar name={author.name} size="50" round="50%"/>
            {`${poll.author} - ${poll.id} - ${poll.optionOne.text} - ${poll.optionTwo.text}`}
        </Link>
    );
};

const mapStatesToProps = ({ polls, users, authedUser }, { id }) => {
    return {
        authedUser,
        poll: polls[id] ? polls[id] : null,
        author: polls[id] ? users[polls[id].author] : null
    };
};

export default connect(mapStatesToProps)(Poll);
