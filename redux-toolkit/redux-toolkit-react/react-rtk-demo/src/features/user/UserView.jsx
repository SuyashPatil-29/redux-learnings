import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './userSlice';


const UserView = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(fetchUsers())
    },[])
    const user = useSelector((state)=>state.user)
    return (
        <div>
            <h2>List Of Users</h2>
            {user.loading && <div>Loading...</div>}
            {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
            {!user.loading && user.users.length ? (
                <ul>
                    {
                        user.users.map(user=>(
                            <li key={user.id}>{user.name}</li>
                        ))
                    }
                </ul>
            ):null}
        </div>
    );
}

export default UserView;
