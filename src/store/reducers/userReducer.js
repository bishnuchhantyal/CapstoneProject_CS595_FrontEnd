import { userConstants } from '../../_constants/userConstants';
const initialState = {
    users: []
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return state;
        case userConstants.DETALL_REQUEST:
            return {
                ...state,
                users: action.users.params.users
            };

        case userConstants.DELETE_REQUEST:
            return state;
        default:
            return state;
    }
};

export default userReducer;