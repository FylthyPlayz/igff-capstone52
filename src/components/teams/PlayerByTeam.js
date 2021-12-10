import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"

export const PlayerByTeam = () => {
    const [team, set] = useState([])  // State variable for current team object
    const { teamId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            fetch(`http://localhost:8088/teams/${teamId}`)
                .then(res => res.json())
                .then(set)
        },
        [ teamId ]  // Above function runs when the value of teamId
    )

    return (
        <>
            <section className="playerbyteam">
                <h3 className="player__name">{team.player?.name}</h3>
                <div className="player__position">is a {team.player?.playerPositiong}</div>
            </section>
        </>
    )
}