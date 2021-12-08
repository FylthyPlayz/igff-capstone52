import React, { useEffect, useState } from "react";


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
                        return <h3 key={`team--${teamObj.id}`}>{teamObj.name}</h3>
                    }
                )
            }
        </>
    )
}
{/* <div>
<button onClick={() => history.push("/teams/create")}>Hire team</button>
</div> */} // might be needed to add players to a created TeamBuilder