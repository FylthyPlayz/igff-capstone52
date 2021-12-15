import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const TeamEvaluation = () => {
    const [teamEval, setTeamEval] = useState([])
    const [player, setPlayer] = useState([])
    const currentUser = parseInt(localStorage.getItem("IGFF_user"))
    useEffect(
        () => {
            fetch(`http://localhost:8088/teamBuilder?_expand=userId=${currentUser}`)
                .then(res => res.json())
                .then(setTeamEval)
        },
        []
    )

    return (
        <>
            {
                <div>
                    Your team evaluation is!
                </div>

            }
            {
                <div>
                    About your selections...
                </div>
            }
        </>
    )
}