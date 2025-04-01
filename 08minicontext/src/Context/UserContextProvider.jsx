import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user , setUser] = React.useState(null)
    //yeha v hum variable or method dono de rhe the like user is the variable andsetUser is method
return (
    <UserContext.Provider value={{user,setUser}}>
    {children}
    </UserContext.Provider>
)
}

export default UserContextProvider