const FETCH_USERS = "FETCH_USERS"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR"


interface UsersState {
    users: any[];
    loading: boolean;
    error: null | string;
}

enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

interface UserAction {
    type: string;
    payload?:any;
}

const initialState : UsersState = {
    users: [],
    loading: false,
    error: null,
}

export const userReducer = (state = initialState, action: UserAction): UsersState => {
    switch (action.type) {
        case FETCH_USERS:
            return { loading: true, error: null, users: [] }
        case FETCH_USERS_SUCCESS:
            return { loading: false, error: null, users: action.payload }
        case FETCH_USERS_ERROR:
            return { loading: false, error: action.payload, users: [] }
        default:
            return state
    }
}