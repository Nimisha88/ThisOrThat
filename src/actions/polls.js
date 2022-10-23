export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const REGISTER_VOTE = "REGISTER_VOTE";

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

// Action Creators