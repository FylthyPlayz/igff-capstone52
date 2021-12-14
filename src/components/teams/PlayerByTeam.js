import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"

export const PlayerByTeam = () => {
    const [team, set] = useState([])  // State variable for current team object
    const { teamId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            fetch(`http://localhost:8088/players?teamId=${teamId}`)
                .then(res => res.json())
                .then(set)
        },
        [teamId]  // Above function runs when the value of teamId changes
    )



    return (
        <>
            {
                team.map(
                    (teamObj) => {
                        return <h3 key={`team--${teamObj.id}`}>
                            <Link to={`/players/${parseInt(teamObj.id)}`}>{teamObj.name}</Link></h3>
                    }
                )
            }
        </>
    )
}
