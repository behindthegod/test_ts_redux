export interface PhotoState  {
    photos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum PhotoActionTypes {
    FETCH_PHOTOS = "FETCH_PHOTOS",
    FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS",
    FETCH_PHOTOS_ERROR = "FETCH_PHOTOS_ERROR",
    SET_PHOTOS_PAGE = "SET_PHOTOS_PAGE"
}

interface FetchPhotosAction {
    type: PhotoActionTypes.FETCH_PHOTOS;
}

interface FetchPhotosSuccessAction {
    type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS;
    payload: any[];
}

interface FetchPhotosErrorAction {
    type: PhotoActionTypes.FETCH_PHOTOS_ERROR;
    payload: string;
}

interface SetPhotosPage {
    type: PhotoActionTypes.SET_PHOTOS_PAGE;
    payload: number;
}


export type PhotoAction = FetchPhotosAction | FetchPhotosSuccessAction | FetchPhotosErrorAction | SetPhotosPage