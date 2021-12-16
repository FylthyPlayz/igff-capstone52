import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export const MyFavorites = () => {
    const [fav, set] = useState([])  // State variable for current fav team array
    const currentUser = parseInt(localStorage.getItem("IGFF_user")) // this will grab the current user and store them in a variable of currentUser

    useEffect(
        () => {
            fetch(`http://localhost:8088/userFavorites?_expand=team&userId=${currentUser}`) // this fetch will grab the current user's favorites
                .then(res => res.json())
                .then(set)
        },
        []
    )

    return (
        <>
            {
                fav.map( // this map will return the users favorite teams that will be hyperlinked to the players of that team
                    (favObj) => {
                        return <h3 key={`fav--${favObj.id}`}>
                            <Link to={`/teams/${parseInt(favObj.teamId)}`}>{favObj.team.name}</Link></h3>
                    }
                )
            }


        </>
    )
}