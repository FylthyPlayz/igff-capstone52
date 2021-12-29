import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PlayersPage.css"
export const PlayerList = () => {
    const [players, changePlayers] = useState([])
    const [playerPositions, changePlayerPositions] = useState([])


    useEffect(
        () => { // fetch for grabbing all of the players
            fetch("http://localhost:8088/players")
                .then(res => res.json())
                .then((playerArray) => {
                    changePlayers(playerArray)
                })
        },
        []
    )
    useEffect(
        () => { // fetch for grabbing all of the player positions
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
        
        <div className="playerPositions">
            {
                playerPositions.map( // a map to display the available positions with a link to all players who hold that position in the api 
                    (positionObj) => {
                        return <h6 className="individualPositions" key={`playerPosition--${positionObj.id}`}>
                            <Link to={`/playerPositions/${positionObj.id}`}>{positionObj.positionName}</Link> </h6>

                    }
                )
            } 
            </div>
            
            <div className="playerList">
            {
                players.map( // a map to display the individual players in a list format
                    (playerObj) => {
                        return <h3 key={`player--${playerObj.id}`}>
                            <Link to={`/players/${playerObj.id}`}>{playerObj.name}</Link></h3>
                    }
                )
            } </div>
           
        </>
    )
}