import { SET_AUTHED_USER, LOGOUT_AUTHED_USER } from "../actions/authedUser"

export const authedUser = (state = null, action) => {
    switch(action.type) {
        case SET_AUTHED_USER:
            return action.id;
        case LOGOUT_AUTHED_USER:
            return null;
        default:
            return state;
    }
}

export default authedUser;