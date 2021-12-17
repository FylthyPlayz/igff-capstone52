import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
// this page is responsible for letting the user delete their profile.
export const DeleteProfile = () => {
    const [user, updateUser] = useState({})
    const history = useHistory()

    useEffect( // this useEffect grabs the user from local storage.
        () => {
            fetch(`http://localhost:8088/users/${localStorage.getItem(`IGFF_user`)}`)
                .then(res => res.json())
                .then((userObj) => {
                    updateUser(userObj)
                })
        },
        []
    )


    const deleteClick = () => { // this function is responsible for the onclick event below that will delete the user from localStorage and push them back to the login page.
        fetch(`http://localhost:8088/users/${localStorage.getItem(`IGFF_user`)}`, { method: "DELETE" })
            .then(() => {
                localStorage.clear()
                history.push("/login")
            })

    }

    //below is the return for what will be on the page that the user will see. A quick message with a button click to invoke the above function.
    return (
        <>

            Hello {user?.name} . If you are not satisfied with this product and would like to delete your profile then hit this fat "delete profile" button below. We are sorry to see you go...

            <div>
                <button className="user__delete"
                    onClick={deleteClick}>Delete Profile</button>
            </div>

        </>
    )


}