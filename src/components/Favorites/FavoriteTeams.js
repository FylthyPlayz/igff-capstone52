import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"


export const UserFavorites = () => { // a function to select and submit favorite teams after registration.
    const [favTeams, setTeams] = useState([])
    const history = useHistory()

    const [favBuilder, updateFavBuilder] = useState([])
    useEffect(
        () => {
            fetch("http://localhost:8088/teams") // useEffect to grab the teams and store them in an array.
                .then(res => res.json())
                .then((favTeamArray) => {
                    setTeams(favTeamArray)
                })
        },
        []
    )
    const clickFavorites = (event) => { // click event to create a new array of newTeamObjects in application state
        const newTeamObject = {
            userId: parseInt(localStorage.getItem(`IGFF_user`)), // this will grab the current user's ID
            teamId: parseInt(event.target.value) // this will take the checkbox click and turn it into an integer for the teamId rather than a string.
        }
        const copy = [...favBuilder]
        if (event.target.checked === true) { // creates a copy of the fav builder and if the target team checkbox is true it will push the newTeamObject into the array.
            copy.push(newTeamObject)
            updateFavBuilder(copy) // after the object is put in the array, we update the copy state.
        } else {
            const indexPosition = copy.findIndex((favObject) => {
                return parseInt(event.target.value) === favObject.teamId
            })
            copy.splice(indexPosition, 1) // this else statement will remove selections of the checked box by splicing the array at the last index position and if it is a teamId, it will remove it.
            updateFavBuilder(copy)// then we update the copy state.
        }
    }

    const submitFavorites = (event) => { // click event for submitting our favorite teams.
        event.preventDefault()
        const fetchArray = []
        favBuilder.forEach((chosenFav) => { // verify chosenFavs value
            fetchArray.push(
                fetch(`http://localhost:8088/userFavorites`,
                    {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(chosenFav)
                    }
                )
            )
        })
        Promise.all(fetchArray) // this promise.all will force all promises from the fetch array to run and complete before going to the next action which will push us to the players page.
            .then(() => {
                history.push("/players")
            })
    }
    return (
        <>
            <form className="userFavoritesForm">
                <h1 className="userFavoriteForm__title"> Welcome! Choose your favorite teams...</h1>

                <div className="userFavorite-group">
                    <label htmlFor="userFavorites"> Select your teams</label>
                    {
                        favTeams.map( // mapping through the teams and adding a checkbox next to the name for the user
                            (favObj) => {
                                return <div><input onClick={clickFavorites} type="checkbox" key={`fav--${favObj.id}`} value={favObj.id}></input>
                                    {favObj.name}</div>
                            }
                        )
                    }

                </div>

                <button onClick={submitFavorites} className="btn btn-primary">
                    Submit your Favorites!
                </button>
            </form>
        </>
    )
}

