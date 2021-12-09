import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const PlayerList = () => {
    const [players, changePlayers] = useState([])
    const [playerPositions, changePlayerPositions] = useState([]) 
   

    useEffect(
        () => {
            fetch("http://localhost:8088/players")
                .then(res => res.json())
                .then((playerArray) => {
                    changePlayers(playerArray)
                })
        },
        []
    )
    useEffect(
        () => {
            fetch("http://localhost:8088/playerPositions")
                .then(res => res.json())
                .then((positionArray) => {
                    changePlayerPositions(positionArray)
                })
        },
        []
    )

    return (
        <>
            {
                playerPositions.map(
                    (positionObj) => {
                        return <h6 key={`playerPosition--${positionObj.id}`}>
                            <Link to= {`/playerPositions/${positionObj.id}`}>{positionObj.positionName}</Link> </h6>
                            
                    }
                )
            }
            { 
                players.map(
                    (playerObj) => {
                        return <h3 key={`player--${playerObj.id}`}>
                            <Link to= {`/players/${playerObj.id}`}>{playerObj.name}</Link></h3>
                    }
                )
            }
        </>
    )
}