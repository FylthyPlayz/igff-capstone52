import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TeamList.css"

export const TeamList = () => {
    const [teams, changeTeams] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/teams")
                .then(res => res.json())
                .then((teamArray) => {
                    changeTeams(teamArray)
                })
        },
        []
    )

    return (
        <>

            {
                teams.map(
                    (teamObj) => {
                        return <h3 key={`team--${teamObj.id}`} className="teamList">
                            <Link to={`/teams/${parseInt(teamObj.id)}`}>{teamObj.name}</Link></h3>
                    }
                )
            }
        </>
    )
}
