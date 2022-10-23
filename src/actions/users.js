export const RECEIVE_USERS = "RECEIVE_USERS";
export const REGISTER_VOTE_IN_USERS = "REGISTER_VOTE_IN_USERS";
export const ADD_POLL_IN_USERS = "ADD_POLL_IN_USERS"

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const registerVoteInUsers = (vote) => {
    return {
        type: REGISTER_VOTE_IN_USERS,
        vote
    }
}

export const addPollInUsers = (poll) => {
    return {
        type: ADD_POLL_IN_USERS,
        poll
    }
}

// Action Creators