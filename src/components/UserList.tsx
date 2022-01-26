import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

export const UserList: FC = () => {
    // const state = useTypedSelector(state => state.user)
    const {users, error, loading} = useTypedSelector(state => state.user)

    return (
        <div>

        </div>
    );
};

export default UserList;