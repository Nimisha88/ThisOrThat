import { savePollAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const REGISTER_VOTE = "REGISTER_VOTE";

export function receivePolls(polls) {
    return {
        type: RECEIVE_POLLS,
        polls
    }
}

const registerVote = (vote) => {
    return {
        type: REGISTER_VOTE,
        vote
    }
}

// Action Creators
export function handleVote(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        const vote = {
            authedUser,
            qid,
            answer
        }
        dispatch(showLoading());
        return savePollAnswer(vote)
        .then((isResolved) => {
            if(isResolved) {
                // alert("You vote is successfully registered!");
                dispatch(registerVote(vote));
                dispatch(hideLoading());
            }
        }).catch((error) => {
            alert("Oops! There was an error to save your vote, please try again later!");
            console.log(error);
        });
    }
}