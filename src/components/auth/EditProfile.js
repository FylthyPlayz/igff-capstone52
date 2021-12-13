import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";




export const DeleteProfile = () => {
    const [user, updateUser] = useState({})
    const history = useHistory()

    useEffect(
        () => {
            fetch(`http://localhost:8088/users/${localStorage.getItem(`IGFF_user`)}`)
                .then(res => res.json())
                .then((userObj) => {
                    updateUser(userObj)
                })
        },
        []
    )
   
   
    const deleteClick = () => {
        fetch(`http://localhost:8088/users/${localStorage.getItem(`IGFF_user`)}`, { method: "DELETE"})
                .then(() => {
                    localStorage.clear()
                    history.push("/login")
                })
                
    }


        return (
            <>
            Hello user. If you are not satisfied with this product and would like to delete your profile then hit this fat "delete profile" button below. We are sorry to see you go...
            <li>
                <button className="user__delete"
                    id="user--${userId}" onClick={deleteClick}>Delete Profile</button>
            </li>

            </>
        )


}