import { getInitialData, savePollAnswer } from "../utils/api"
import { receivePolls, registerVoteInPolls } from "./polls"
import { receiveUsers, registerVoteInUsers } from "./users";
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