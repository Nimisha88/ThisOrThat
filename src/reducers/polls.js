import { RECEIVE_POLLS, REGISTER_VOTE_IN_POLLS, ADD_POLL_IN_POLLS } from "../actions/polls"

const polls = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.polls
            }
        case REGISTER_VOTE_IN_POLLS:
            const { authedUser, qid, answer } = action.vote;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    optionOne: {
                        ...state[qid].optionOne,
                        votes: answer==="optionOne"? state[qid].optionOne.votes.concat(authedUser)
                        : state[qid].optionOne.votes
                    },
                    optionTwo: {
                        ...state[qid].optionTwo,
                        votes: answer==="optionTwo"? state[qid].optionTwo.votes.concat(authedUser)
                        : state[qid].optionTwo.votes
                    }
                }
            }
        case ADD_POLL_IN_POLLS:
            return {
                ...state,
                [action.poll.id]: action.poll
            }
        default:
            return state;
    }
}

export default polls;