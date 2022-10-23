import { RECEIVE_POLLS, REGISTER_VOTE } from "../actions/polls"

const polls = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.polls
            }
        case REGISTER_VOTE:
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
        default:
            return state;
    }
}

export default polls;