import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"


export const UserFavorites = () => {
    const [favTeams, setTeams] = useState([])
    const history = useHistory()

    const [favBuilder, updateFavBuilder] = useState([])
    useEffect(
        () => {
            fetch("http://localhost:8088/teams")
                .then(res => res.json())
                .then((favTeamArray) => {
                    setTeams(favTeamArray)
                })
        },
        []
    )
    const clickFavorites = (event) => {
        const newTeamObject = {
            userId: parseInt(localStorage.getItem(`IGFF_user`)),
            teamId: parseInt(event.target.value)
        }
        const copy = [...favBuilder]
        if (event.target.checked === true) {
            copy.push(newTeamObject)
            updateFavBuilder(copy)
        } else {
            const indexPosition = copy.findIndex((favObject) => {
                return parseInt(event.target.value) === favObject.teamId
            })
            copy.splice(indexPosition, 1)
            updateFavBuilder(copy)
        }
    }

    const submitFavorites = (chosenFavs) => {
        chosenFavs.preventDefault()
        const fetchArray = []
        favBuilder.forEach((chosenFavs) => {
            fetchArray.push(
                fetch(`http://localhost:8088/userFavorites`),
                   { 
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(chosenFavs)
                })
            Promise.all(fetchArray)
                .then(() => {
                    updateFavBuilder([])
                })
        })
        return fetch(`http://localhost:8088/players`)
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
                        favTeams.map(
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

