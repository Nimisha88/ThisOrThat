import { RECEIVE_USERS, REGISTER_VOTE } from "../actions/users"

const users = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case REGISTER_VOTE:
            const { authedUser, qid, answer } = action.vote;
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        default:
            return state;
    }
}

export default users;