import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"


export const PlayerPositionList = () => {
    const [playerPositions, changePlayerPositions] = useState([])
    const { playerPositionId } = useParams() // a useParams to be able to route to the correct players who are assigned that position

    useEffect(
        () => { // a fetch to get all of the specific players at a specific position
            fetch(`http://localhost:8088/players?playerPositionId=${playerPositionId}`)
                .then(res => res.json())
                .then((positionArray) => {
                    changePlayerPositions(positionArray)
                })
        },
        [playerPositionId]
    )
    return (
        <>
            {
                playerPositions.map( // a map function that will display all of the players who are the position that was clicked on.
                    (playerPositionObj) => {
                        return <h3 key={`player--${playerPositionObj.id}`}>
                            <Link to={`/players/${parseInt(playerPositionObj.id)}`}>{playerPositionObj.name}</Link></h3>
                    }
                )
            }
        </>
    )

}

