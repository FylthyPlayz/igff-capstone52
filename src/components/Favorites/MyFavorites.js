import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export const MyFavorites = () => {
    const [fav, set] = useState([])  // State variable for current fav team array
    const currentUser = parseInt(localStorage.getItem("IGFF_user"))

    useEffect(
        () => {
            fetch(`http://localhost:8088/userFavorites?_expand=team&userId=${currentUser}`)
                .then(res => res.json())
                .then(set)
        },
        []
    )

    return (
        <>
            {
                fav.map(
                    (favObj) => {
                        return <h3 key={`fav--${favObj.id}`}>
                            <Link to={`/teams/${parseInt(favObj.teamId)}`}>{favObj.team.name}</Link></h3>
                    }
                )
            }


        </>
    )
}