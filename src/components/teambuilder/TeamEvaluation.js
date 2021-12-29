import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./TeamEvaluation.css"
export const TeamEvaluation = () => {
    const [team, setTeam] = useState({})
    const [players, setPlayers] = useState([])
    const { teamBuilderId } = useParams()
    const [theTeamScore, setTheTeamScore] = useState(0)
    const [teamDescription, setTeamDescription] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/teamBuilder/${teamBuilderId}`) // fetching the specific team that was built by the user
                .then(res => res.json())
                .then(setTeam)
                .then(
                    () => {
                        return fetch(`http://localhost:8088/players?_expand=playerPosition&_expand=team`) // fetching all of our players
                            .then(res => res.json())
                            .then(setPlayers)
                    })
        },
        [teamBuilderId]
    )

    useEffect( // setting the state of setTheTeamScore to the value of the function of teamScore
        () => {
            setTheTeamScore(teamScore())
        },
        [players])

    useEffect( // grabbing all of the teamEvals for the guidelines on descriptions
        () => {
            fetch(`http://localhost:8088/teamEvals`)
                .then(res => res.json())
                .then(setTeamDescription)
        },
        [])

    const teamScore = () => { // two arrays, one to hold the selected players from teamBuilder and one to hold each players metricEval.
        const selectedPlayerArray = []
        const playerScoreArray = []
        let totalTeamScore = 0 // this is setting the initial added score of each player to 0
        selectedPlayerArray.push(team.qbId) // we are pushing the players into the selected playerArray so we have our team.
        selectedPlayerArray.push(team.rb1Id)
        selectedPlayerArray.push(team.rb2Id)
        selectedPlayerArray.push(team.wr1Id)
        selectedPlayerArray.push(team.wr2Id)
        selectedPlayerArray.push(team.teId)
        selectedPlayerArray.push(team.flexId)
        selectedPlayerArray.push(team.defId)
        selectedPlayerArray.push(team.kId)
        for (const player of selectedPlayerArray) { // this for is iterating over each player in the selectedPlayerArray
            for (const grabbedPlayer of players) { // this for is iterating over each player that is recieved from the players list. So the 9 chosen out of the total players.
                if (player === grabbedPlayer?.id) { // if the player is equal to the grabbed player out of the array, then we are...
                    playerScoreArray.push(grabbedPlayer.metricEval) // pushing that players metricEval into the playerScoreArray so we have an array of all of the players that are chosen metricEvals
                }
            }
        }
        for (const score of playerScoreArray) { // iterating over that array to get each score
            totalTeamScore += score // then we are making the totalTeamScore equal to all of the scores added together
        }
        return totalTeamScore / 9 // then returning the totalTeamScore divided by 9 which is the total amount of players you can select to get the final value.
    }

    const roundNumbers = () => { // a function to be called below for a description on your team
        const roundedScore = Math.round(theTeamScore * 2) / 2 // 
        const foundDescription = teamDescription.find(desc =>
            roundedScore === desc.teamCalculatedEvaluation)
        return foundDescription?.description
    }
    // in the return below for evaluation we are calling theTeamScore with a method of toFixed(1) which will round the decimal places to 1.
    return (
        <>
        <div className="masterDiv">
            {
                <div className="teamEvalText">
                    Your team evaluation is! 
                </div>
            }
            {
                    <div className= "teamEval">
                        {theTeamScore.toFixed(1)}
                    </div>
            }
            {
                <div className="teamDescription">
                    About your team...
                </div>
            }
            {
                <div className="teamDescriptionValue">
                    {roundNumbers()}
                </div>
            }
        </div>
        </>
    )
}