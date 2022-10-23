export const RECEIVE_USERS = "RECEIVE_USERS";
export const REGISTER_VOTE = "REGISTER_VOTE";

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const registerVoteInUsers = (vote) => {
    return {
        type: REGISTER_VOTE,
        vote
    }
}

// Action Creators