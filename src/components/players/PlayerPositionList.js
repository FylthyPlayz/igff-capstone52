import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {PlayerList} from "./PlayerList"


export const PlayerPositionList = () => {
    const players = PlayerList()
    const [playerPositions, changePlayerPositions] = useState([]) 
    
    useEffect(
        () => {
            fetch("http://localhost:8088/players?_expand=playerPosition")
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

