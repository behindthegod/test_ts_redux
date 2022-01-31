import {Dispatch} from "redux";
import {PhotoAction, PhotoActionTypes} from "../../types/pfoto";
import axios from "axios";


export const fetchPhotos = (page= 1, limit = 20) => {
    return async (dispatch: Dispatch<PhotoAction>) => {
        try {
            dispatch({type: PhotoActionTypes.FETCH_PHOTOS})
            const response = await axios.get("https://jsonplaceholder.typicode.com/photos", {
                params: {_pae: page, _limit: limit}
            })
            dispatch({type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: PhotoActionTypes.FETCH_PHOTOS_ERROR, payload: "Фотки не загружены!"})
        }
    }
}

export function setPhotoPages (page: number): PhotoAction {
    return {type: PhotoActionTypes.SET_PHOTOS_PAGE, payload: page}
}