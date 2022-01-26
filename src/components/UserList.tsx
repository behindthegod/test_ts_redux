import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

export const UserList: FC = () => {

    const {users, error, loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])
    //чтобы получить пользователей при первом рендере компоненты. нам поноадобится dispatch.
    //получим его с помощью хука useDispatch.
    if (loading) {
        return <h2>Идет загрузка...</h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }

    return(
        <div>
            {users.map(user => <div>{user.name}</div>)}
        </div>
    );
};

export default UserList;