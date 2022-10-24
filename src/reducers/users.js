import {
    RECEIVE_USERS,
    REGISTER_VOTE_IN_USERS,
    ADD_POLL_IN_USERS,
} from "../actions/users";

const users = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            };
        case REGISTER_VOTE_IN_USERS:
            const { authedUser, qid, answer } = action.vote;
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer,
                    },
                },
            };
        case ADD_POLL_IN_USERS:
            const poll = action.poll;
            return {
                ...state,
                [poll.author]: {
                    ...state[poll.author],
                    questions: state[poll.author].questions.concat(poll.id),
                },
            };
        default:
            return state;
    }
};

export default users;
