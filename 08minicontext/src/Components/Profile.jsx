import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    //user for the data

    const {user} = useContext(UserContext)
    //conditional return 
    if(!user)return <div>Please Login</div>
    return <div>Welcome {user.username}</div>
}

export default Profile
