import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


export const Player = () => {
    const [player, set] = useState([])
    const { id } = useParams()

    useEffect(
        () => { // a fetch to grab the information of all the players with their teams and positions
            fetch(`http://localhost:8088/players?_expand=team&_expand=playerPosition&id=${id}`)
                .then(res => res.json())
                .then(set)
        },
        [id]  // Above function runs when the value of id changes
    )
    // the below is an attempt at creating a "card" for when the hyperlinked player is clicked on, this card will come up.
    return (
        <>
            <div className="card-body">
                <div className="player__header">
                    <h5 className="card-title"></h5>
                    <section>
                        <h3>Player</h3>
                        <span className="small">
                            {
                                player.map(
                                    (playerObj) => { // each part of the card maps through the players to pull out a specific piece of info on the player to display.
                                        return <h5 key={`player--${playerObj.id}`}>
                                            {playerObj.name}</h5>
                                    }
                                )
                            }
                        </span>
                        <h3>Position</h3>
                        <span className="small">
                            {
                                player.map(
                                    (playerObj) => {
                                        return <h5 key={`player--${playerObj.id}`}>
                                            {playerObj.playerPosition.positionName}</h5>
                                    }
                                )
                            }
                        </span>
                        <h3>Team</h3>
                        <span className="small">
                            {
                                player.map(
                                    (playerObj) => {
                                        return <h5 key={`player--${playerObj.id}`}>
                                            {playerObj.team.name}</h5>
                                    }
                                )
                            }
                        </span>
                        <h3>Metric Evaluation</h3>
                        <span className="small">
                            {
                                player.map(
                                    (playerObj) => {
                                        return <h5 key={`player--${playerObj.id}`}>
                                            {playerObj.metricEval}</h5>
                                    }
                                )
                            }
                        </span>
                        <h3>Description</h3>
                        <span className="small">
                            {
                                player.map(
                                    (playerObj) => {
                                        return <h5 key={`player--${playerObj.id}`}>
                                            {playerObj.oneLiner}</h5>
                                    }
                                )
                            }
                        </span>
                    </section>
                </div>
            </div>
        </>
    )
}

