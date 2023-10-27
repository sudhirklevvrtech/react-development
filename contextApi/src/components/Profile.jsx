import React, {useContext} from 'react'
import userContext from '../context/UserContext'


const Profile = () => {

    const {user} = useContext(userContext);

    if(!user) return <div>Please Login</div>
    return <>
    <h3>Welcom {user.username}</h3>
    </>
 
}

export default Profile