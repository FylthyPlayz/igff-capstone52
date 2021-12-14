import React, { useEffect, useState } from "react"
import {useParams, Link} from "react-router-dom"

export const MyFavorites = () => {
    const [fav, set] = useState([])  // State variable for current fav team array
    const { userFavoriteId } = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/userFavorites?${userFavoriteId}_expand=team&_expand=user`)
                .then(res => res.json())
                .then(set)
        },
        []  
    )



    return (
        <>
        <div className="footer"> 
            {
                fav.map(
                    (favObj) => {
                        return <h3 key={`fav--${favObj.id}`}>
                            {favObj.name}</h3>
                    }
                )
            }

        </div>
        </>
    )
}