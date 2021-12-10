import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"


export const PlayerPositionList = () => {
    const [playerPositions, changePlayerPositions] = useState([])
    const { playerPositionId } = useParams()

    useEffect(
        () => {
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
                playerPositions.map(
                    (playerPositionObj) => {
                        return <h3 key={`player--${playerPositionObj.id}`}>
                            <Link >{playerPositionObj.name}</Link></h3>
                    }
                )
            }
        </>
    )

}

