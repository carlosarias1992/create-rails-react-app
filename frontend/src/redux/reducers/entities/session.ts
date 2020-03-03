import { LOGIN, LOGOUT } from "../../actions/session";
import { BaseAction, UserWithStatus } from "../../../types";

interface SessionAction extends BaseAction {
    user?: UserWithStatus;
}

export default (
    state: { currentUser?: UserWithStatus } = {},
    action: SessionAction
): { currentUser?: UserWithStatus } => {
    const oldState = Object.freeze(state);
    let newState;

    switch (action.type) {
        case LOGIN:
            newState = { currentUser: action.user };
            return { ...oldState, ...newState };
        case LOGOUT:
            newState = { ...oldState };
            delete newState.currentUser;
            return newState;
        default:
            return state;
    }
};
