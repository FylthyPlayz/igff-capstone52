import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const PlayerList = () => {
    const [players, changePlayers] = useState([])
     
   

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