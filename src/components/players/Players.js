import React, { useState, useEffect, useImperativeHandle } from "react"
import { Link, useParams, useHistory } from "react-router-dom"


export const Player = () => {
    const [player, set] = useState([])
    const { id } = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/players?_expand=team&_expand=playerPosition&id=${id}`)
                .then(res => res.json())
                .then(set)
        },
        [id]  // Above function runs when the value of employeeId change
    )

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
                    (playerObj) => {
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

