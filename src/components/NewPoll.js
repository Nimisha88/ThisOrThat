import { connect } from "react-redux";
import { useRef, useEffect } from "react";
import { handleCreatePoll } from "../actions/actions";
import "../styles/newPoll.css"

const NewPoll = ({ authedUser, dispatch }) => {
    useEffect(() => {
        const newPollLink = document.getElementById("nav-link-new-poll");
        newPollLink.classList.add('selected');
        return () => {
            if(newPollLink) {
                newPollLink.classList.remove('selected');
            }
        };
    }, []);

    const optOne = useRef();
    const optTwo = useRef();

    const handleNewPoll = async (event) => {
        event.preventDefault();
        const poll = {
            author: authedUser,
            optionOneText: optOne.current.value,
            optionTwoText: optTwo.current.value
        }
        await dispatch(handleCreatePoll(poll));
        optOne.current.value = "";
        optTwo.current.value = "";
    }

    return (
        <div className="new-poll">
            <h2 className="subtitle">Would you rather?</h2>
            <form onSubmit={handleNewPoll}>
                <textarea id="opt1" placeholder="Do this ... (option 1)" ref={optOne} required />
                <textarea id="opt2" placeholder="Do that ... (option 2)" ref={optTwo} required />
                <button className="submit-btn">Create Poll</button>
            </form>
        </div>
    );
}

const mapStatesToProps = ({ authedUser}) => {
    return {
        authedUser
    }
}

export default connect(mapStatesToProps)(NewPoll);