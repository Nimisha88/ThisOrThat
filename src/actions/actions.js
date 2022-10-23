import { getInitialData, savePollAnswer, savePoll } from "../utils/api"
import { receivePolls, registerVoteInPolls, addPollInPolls } from "./polls"
import { receiveUsers, registerVoteInUsers, addPollInUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";


export const initializeAppData = () => {
    return (
        (dispatch) => {
            dispatch(showLoading());
           return getInitialData()
            .then(({ polls, users }) => {
                dispatch(receivePolls(polls));
                dispatch(receiveUsers(users));
                dispatch(setAuthedUser(null));
                dispatch(hideLoading());
            });
        }
    )
}

export const handleVote = (qid, answer) => {
    return (
        (dispatch, getState) => {
            dispatch(showLoading());
            const { authedUser } = getState();
            const vote = {
                authedUser,
                qid,
                answer
            }
            return savePollAnswer(vote)
            .then((isResolved) => {
                if(isResolved) {
                    dispatch(registerVoteInPolls(vote));
                    dispatch(registerVoteInUsers(vote));
                    dispatch(hideLoading());
                }
            }).catch((error) => {
                alert("Oops! There was an error to save your vote, please try again later!");
                console.log(error);
            }); 
        }
    )
}

export const handleCreatePoll = (poll) => {
    return (
        (dispatch) => {
            dispatch(showLoading());
            return savePoll(poll)
            .then((formattedPoll) => {
                alert("Awesome! Your poll was saved!");
                dispatch(addPollInPolls(formattedPoll));
                dispatch(addPollInUsers(formattedPoll));
                dispatch(hideLoading());
            }).catch((error) => {
                alert("Oops! There was an error to save your poll, please try again later!");
                console.log(error);
            });
        }
    )
}