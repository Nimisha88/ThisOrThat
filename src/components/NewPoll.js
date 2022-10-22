import { connect } from "react-redux";

const NewPoll = ({ dispatch }) => {
    return (
        <div>
            New Poll
        </div>
    );
}

const mapStatesToProps = ({ polls, users, authedUser}) => {
    return {

    }
}

export default connect(mapStatesToProps)(NewPoll);