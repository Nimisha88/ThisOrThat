export const RECEIVE_USERS = "RECEIVE_USERS";
export const REGISTER_VOTE = "REGISTER_VOTE";
export const ADD_POLL = "ADD_POLL"

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

export const addPollInUsers = (poll) => {
    return {
        type: ADD_POLL,
        poll
    }
}

// Action Creators