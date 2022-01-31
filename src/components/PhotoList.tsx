import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const PhotoList: FC = () => {
    const {page, photos, limit, loading, error} = useTypedSelector(state => state.photo)
    const {setPhotoPages, fetchPhotos} = useActions()
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    useEffect(() => {
        fetchPhotos(page, limit)
    }, [page])

    if (loading) {
        return <h2>Идет загрузка...</h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }
    return (
        <div>
            <div>
                {photos.map(photo => <div key={photo.id}>{photo.thumbnailUrl}</div>)}
                <div style={{display: 'flex'}}>
                    {pages.map(p => <div
                        onClick={() => setPhotoPages(p)}
                        style={{border: p === page ? '2px solid green' : '1px solid gray', padding: 10}}>{p}</div>)}
                </div>
            </div>
        </div>
    );
};

export default PhotoList;