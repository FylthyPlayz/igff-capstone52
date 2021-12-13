import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"


export const UserFavorites = () => {
    // const [favorite, setFavorites]= useState([])
    const [favTeams, setTeams] = useState([])
    const history = useHistory()

    const [favBuilder, updateFavBuilder] = useState({
        userId: parseInt(localStorage.getItem(`IGFF_user`)),
        teamId: 0
    })

    // useEffect(
    //     () => {
    //         fetch("http://localhost:8088/userFavorites?_expand=team")
    //         .then(res => res.json())
    //         .then((favoriteArray) => {
    //             setFavorites(favoriteArray)
    //         })
    //     },
    //     []
    //     )
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
            const copy = { ...favBuilder }
            copy.teamId = parseInt(event.target.value)
            updateFavBuilder(copy)
        }
    const submitFavorites = (event) => {
        event.preventDefault()
        const newFavBuilder = {
            userId: favBuilder.userId,
            teamId: favBuilder.teamId
        }
        const fetchOption = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFavBuilder)
        }
        return fetch("http://localhost:8088/userFavorites?_expand=team", fetchOption)
            .then(response => response.json())
            .then(() => {
                history.push("/userFavorites")
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

