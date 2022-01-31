import {PhotoAction, PhotoActionTypes, PhotoState} from "../../types/pfoto";


const initialState: PhotoState = {
    photos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
}

export const photoReducer = (state = initialState, action: PhotoAction): PhotoState => {
    switch (action.type) {
        case PhotoActionTypes.SET_PHOTOS_PAGE:
            return {...state, loading: true}
        case PhotoActionTypes.FETCH_PHOTOS_SUCCESS:
            return {...state, loading: false, photos: action.payload }
        case PhotoActionTypes.FETCH_PHOTOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case PhotoActionTypes.SET_PHOTOS_PAGE:
            return {...state, page: action.payload}
            default:
                return state;
    }
}