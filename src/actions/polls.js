export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const REGISTER_VOTE_IN_POLLS = "REGISTER_VOTE_IN_POLLS";
export const ADD_POLL_IN_POLLS = "ADD_POLL_IN_POLLS"

export const receivePolls = (polls) => {
    return {
        type: RECEIVE_POLLS,
        polls
    }
}

export const registerVoteInPolls = (vote) => {
    return {
        type: REGISTER_VOTE_IN_POLLS,
        vote
    }
}

export const addPollInPolls = (poll) => {
    return {
        type: ADD_POLL_IN_POLLS,
        poll
    }
}

// Action Creators