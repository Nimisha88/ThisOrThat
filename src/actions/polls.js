export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const REGISTER_VOTE = "REGISTER_VOTE";
export const ADD_POLL = "ADD_POLL"

export const receivePolls = (polls) => {
    return {
        type: RECEIVE_POLLS,
        polls
    }
}

export const registerVoteInPolls = (vote) => {
    return {
        type: REGISTER_VOTE,
        vote
    }
}

export const addPollInPolls = (poll) => {
    return {
        type: ADD_POLL,
        poll
    }
}

// Action Creators