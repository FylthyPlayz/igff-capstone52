import React, { useRef, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./Login.css"


export const Register = (props) => {
    const [user, setUser] = useState({})
    const conflictDialog = useRef()

    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${user.email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }
    const handleRegister = (e) => {
        e.preventDefault()
        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("IGFF_user", createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
    }

    const updateUser = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }
    const [teams, changeTeams] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/teams")
                .then(res => res.json())
                .then((teamArray) => {
                    changeTeams(teamArray)
                })
        },
        []
    )

    return (
        <main style={{ textAlign: "center" }}>
            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for The Intellectual's Guide to Fantasy Football</h1>
                <fieldset>
                    <label htmlFor="name"> Full Name </label>
                    <input onChange={updateUser}
                           type="text" id="name" className="form-control"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="favorite team" type="select" id="favTeam" className="form-control"> Favorite Team </label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...user }
                                copy.locationId = parseInt(evt.target.value)
                                updateUser(copy)
                            }}
                        className="form-control"
                    >
                        <option value="0">Select a Team </option>
                        {
                            teams.map(
                                (teamObj) => {
                                    return <option value={teamObj.id}>
                                        {teamObj.name}
                                    </option>
                                })
                        }
                    </select>

                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateUser} type="email" id="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}