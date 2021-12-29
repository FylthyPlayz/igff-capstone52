import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import "./PlayersPage.css"

export const PlayerPositionList = () => {
    const [playerPositions, changePlayerPositions] = useState([])
    const [showPositions, showPlayerPositions] = useState([])
    const { playerPositionId } = useParams() // a useParams to be able to route to the correct players who are assigned that position

    useEffect(
        () => { // a fetch to get all of the specific players at a specific position
            fetch(`http://localhost:8088/players?playerPositionId=${playerPositionId}&_expand=playerPosition`)
                .then(res => res.json())
                .then((positionArray) => {
                    changePlayerPositions(positionArray)
                })
        },
        [playerPositionId]
    )
    useEffect(
        () => { // fetch for grabbing all of the player positions
            fetch("http://localhost:8088/playerPositions")
                .then(res => res.json())
                .then((positionArray) => {
                    showPlayerPositions(positionArray)
                })
        },
        []
    )
    return (
        <>
        <div className="playerPositions">
            {
                showPositions.map( // a map to display the available positions with a link to all players who hold that position in the api 
                    (positionObj) => {
                        return <h6 className="individualPositions" key={`playerPosition--${positionObj.id}`}>
                            <Link to={`/playerPositions/${positionObj.id}`}>{positionObj.positionName}</Link> </h6>

                    }
                )
            } 
            </div>
            <div className="playerList">
            {
                playerPositions.map( // a map function that will display all of the players who are the position that was clicked on.
                    (playerPositionObj) => {
                        return <h3 key={`player--${playerPositionObj.id}`} className="player-positionList">
                            <Link to={`/players/${parseInt(playerPositionObj.id)}`}>{playerPositionObj.name}</Link></h3>
                    }
                )
            }
            </div>
        </>
    )

}

