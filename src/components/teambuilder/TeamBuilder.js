import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";


export const TeamBuilderForm = () => {
    const [players, changePlayers] = useState([])
    // const [flexList, setFlexList] = useState([])
    const history = useHistory()

    const [teamBuilder, updateTeamBuilder] = useState({
        name: "",
        userId: parseInt(localStorage.getItem(`IGFF_user`)),
        qbId: 0,
        rb1Id: 0,
        rb2Id: 0,
        wr1Id: 0,
        wr2Id: 0,
        teId: 0,
        flexId: 0,
        defId: 0,
        kId: 0,
    });

    useEffect(
        () => {
            fetch("http://localhost:8088/players?_expand=playerPosition")
                .then(res => res.json())
                .then((playerArray) => {
                    changePlayers(playerArray)
                })
        },
        []
    )

    

    const submitTeamBuilder = (event) => {
        event.preventDefault()

        const newTeamBuilder = {
            name: teamBuilder.name,
            userId: parseInt(teamBuilder.userId),
            qbId: parseInt(teamBuilder.qbId),
            rb1Id: parseInt(teamBuilder.rb1Id),
            rb2Id: parseInt(teamBuilder.rb2Id),
            wr1Id: parseInt(teamBuilder.wr1Id),
            wr2Id: parseInt(teamBuilder.wr2Id),
            teId: parseInt(teamBuilder.teId),
            flexId: parseInt(teamBuilder.flexId),
            defId: parseInt(teamBuilder.defId),
            kId: parseInt(teamBuilder.kId),
        }
        const fetchOption = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTeamBuilder)
        }
        return fetch("http://localhost:8088/teamBuilder?_expand=user", fetchOption)
            .then(response => response.json())
            .then((response) => {
                history.push(`/teamBuilder/${response.id}`)
            })
    }
    return (
        <form className="teamBuilderForm">
            <h2 className="teamBuilderForm__title">Build your Squad!</h2>
            <fieldset>
                <div className="form-group" key="teamName">
                    <label htmlFor="name">Team Name:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...teamBuilder }
                                copy.name = evt.target.value
                                updateTeamBuilder(copy)
                            }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Team Name..."
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" key="QB">
                    <label htmlFor="QB">Quarterback</label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...teamBuilder }
                                copy.qbId = (evt.target.value)
                                updateTeamBuilder(copy)
                            }}
                        className="form-control"
                    >
                        <option value="0">Select a Quarterback</option>
                        {
                            players.map(
                                (playerObj) => { 
                                    if( playerObj.playerPosition?.positionName === "Quarterback") {
                                    return <option value={playerObj.id}> 
                                        {playerObj.name}
                                    </option> 
                                    } else {
                                       return ""
                                    }
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" key="Runningback1">
                    <label htmlFor="RB1">Runningback 1</label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...teamBuilder }
                                copy.rb1Id = (evt.target.value)
                                updateTeamBuilder(copy)
                            }}
                        className="form-control"
                    >
                        <option value="0">Select your 1st Runningback</option>
                        {
                            players.map(
                                (playerObj) => { 
                                    if( playerObj.playerPosition?.positionName === "RB") {
                                    return <option value={playerObj.id}> 
                                        {playerObj.name}
                                    </option> 
                                    } else {
                                       return ""
                                    }
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" key="Runningback2">
                    <label htmlFor="RB2">Runningback 2</label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...teamBuilder }
                                copy.rb2Id = (evt.target.value)
                                updateTeamBuilder(copy)
                            }}
                        className="form-control"
                    >
                        <option value="0">Select your 2nd Runningback</option>
                        {
                            players.map(
                                (playerObj) => { 
                                    if( playerObj.playerPosition?.positionName === "RB") {
                                    return <option value={playerObj.id}> 
                                        {playerObj.name}
                                    </option> 
                                    } else {
                                       return ""
                                    }
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" key="WideReciever1">
                    <label htmlFor="WR1">Wide Reciever 1</label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...teamBuilder }
                                copy.wr1Id = (evt.target.value)
                                updateTeamBuilder(copy)
                            }}
                        className="form-control"
                    >
                        <option value="0">Select your 1st Wide Reciever</option>
                        {
                            players.map(
                                (playerObj) => { 
                                    if( playerObj.playerPosition?.positionName === "WR") {
                                    return <option value={playerObj.id}> 
                                        {playerObj.name}
                                    </option> 
                                    } else {
                                       return ""
                                    }
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" key="WideReciever2">
                    <label htmlFor="WR2">Wide Reciever 2</label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...teamBuilder }
                                copy.wr2Id = (evt.target.value)
                                updateTeamBuilder(copy)
                            }}
                        className="form-control"
                    >
                        <option value="0">Select your 2nd Wide Reciever</option>
                        {
                            players.map(
                                (playerObj) => { 
                                    if( playerObj.playerPosition?.positionName === "WR") {
                                    return <option value={playerObj.id}> 
                                        {playerObj.name}
                                    </option> 
                                    } else {
                                       return ""
                                    }
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" key="TightEnd">
                    <label htmlFor="TE">Tight End</label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...teamBuilder }
                                copy.teId = (evt.target.value)
                                updateTeamBuilder(copy)
                            }}
                        className="form-control"
                    >
                        <option value="0">Select a Tight End</option>
                        {
                            players.map(
                                (playerObj) => { 
                                    if( playerObj.playerPosition?.positionName === "TE") {
                                    return <option value={playerObj.id}> 
                                        {playerObj.name}
                                    </option> 
                                    } else {
                                       return ""
                                    }
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" key="Flex">
                    <label htmlFor="flex">Flex</label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...teamBuilder }
                                copy.flexId = (evt.target.value)
                                updateTeamBuilder(copy)
                            }}
                        className="form-control"
                    >
                        <option value="0">Select a flex option</option>
                        {
                            players.map(
                                (playerObj) => { 
                                    if( playerObj.playerPosition?.positionName === "RB" ||
                                    playerObj.playerPosition?.positionName === "WR" ||
                                    playerObj.playerPosition?.positionName === "TE") {
                                    return <option value={playerObj.id}> 
                                        {playerObj.name}
                                    </option> 
                                    } else {
                                       return ""
                                    }
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" key="Defense">
                    <label htmlFor="Defense">Defense</label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...teamBuilder }
                                copy.defId = (evt.target.value)
                                updateTeamBuilder(copy)
                            }}
                        className="form-control"
                    >
                        <option value="0">Select a Defense</option>
                        {
                            players.map(
                                (playerObj) => { 
                                    if( playerObj.playerPosition?.positionName === "DEF") {
                                    return <option value={playerObj.id}> 
                                        {playerObj.name}
                                    </option> 
                                    } else {
                                       return ""
                                    }
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" key="Kicker">
                    <label htmlFor="Kicker">Kicker</label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...teamBuilder }
                                copy.kId = (evt.target.value)
                                updateTeamBuilder(copy)
                            }}
                        className="form-control"
                    >
                        <option value="0">Select a kicker</option>
                        {
                            players.map(
                                (playerObj) => { 
                                    if( playerObj.playerPosition?.positionName === "K") {
                                    return <option value={playerObj.id}> 
                                        {playerObj.name}
                                    </option> 
                                    } else {
                                       return ""
                                    }
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <button onClick={submitTeamBuilder} className="btn btn-primary">
                Submit your Team
            </button>
        </form>
    )
}