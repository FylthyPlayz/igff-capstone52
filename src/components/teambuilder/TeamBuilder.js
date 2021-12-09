import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";


export const TeamBuilderForm = () => {
    const [players, changePlayers] = useState([])
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
            userId: teamBuilder.userId,
            qbId: teamBuilder.qbId,
            rb1Id: teamBuilder.rb1Id,
            rb2Id: teamBuilder.rb2Id,
            wr1Id: teamBuilder.wr1Id,
            wr2Id: teamBuilder.wr2Id,
            teId: teamBuilder.teId,
            flexId: teamBuilder.flexId,
            defId: teamBuilder.defId,
            kId: teamBuilder.kId,
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
            .then(() => {
                history.push("/teamBuilder")
            })
    }
    return (
        <form className="teamBuilderForm">
            <h2 className="teamBuilderForm__title">Build your Squad!</h2>
            <fieldset>
                <div className="form-group">
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
                <div className="form-group">
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
                                    return <option value={playerObj.id}>
                                        {playerObj.name}
                                    </option>
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
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
                                    return <option value={playerObj.id}>
                                        {playerObj.name}
                                    </option>
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="RB2">Runningback 2</label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...teamBuilder}
                                copy.rb2Id = (evt.target.value)
                                updateTeamBuilder(copy)
                            }}
                        className="form-control"
                    >
                        <option value="0">Select your 2nd Runningback</option>
                        {
                            players.map(
                                (playerObj) => {
                                    return <option value={playerObj.id}>
                                        {playerObj.name}
                                    </option>
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="WR1">Wide Reciever 1</label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...teamBuilder}
                                copy.wr1Id = (evt.target.value)
                                updateTeamBuilder(copy)
                            }}
                        className="form-control"
                    >
                        <option value="0">Select your 1st Wide Reciever</option>
                        {
                            players.map(
                                (playerObj) => {
                                    return <option value={playerObj.id}>
                                        {playerObj.name}
                                    </option>
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="WR2">Wide Reciever 2</label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...teamBuilder}
                                copy.wr2Id = (evt.target.value)
                                updateTeamBuilder(copy)
                            }}
                        className="form-control"
                    >
                        <option value="0">Select your 2nd Wide Reciever</option>
                        {
                            players.map(
                                (playerObj) => {
                                    return <option value={playerObj.id}>
                                        {playerObj.name}
                                    </option>
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="TE">Tight End</label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...teamBuilder}
                                copy.teId = (evt.target.value)
                                updateTeamBuilder(copy)
                            }}
                        className="form-control"
                    >
                        <option value="0">Select a Tight End</option>
                        {
                            players.map(
                                (playerObj) => {
                                    return <option value={playerObj.id}>
                                        {playerObj.name}
                                    </option>
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="flex">Flex</label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...teamBuilder}
                                copy.flexId = (evt.target.value)
                                updateTeamBuilder(copy)
                            }}
                        className="form-control"
                    >
                        <option value="0">Select a flex option</option>
                        {
                            players.map(
                                (playerObj) => {
                                    return <option value={playerObj.id}>
                                        {playerObj.name}
                                    </option>
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Defense">Defense</label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...teamBuilder}
                                copy.defId = (evt.target.value)
                                updateTeamBuilder(copy)
                            }}
                        className="form-control"
                    >
                        <option value="0">Select a Defense</option>
                        {
                            players.map(
                                (playerObj) => {
                                    return <option value={playerObj.id}>
                                        {playerObj.name}
                                    </option>
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Kicker">Kicker</label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...teamBuilder}
                                copy.kId = (evt.target.value)
                                updateTeamBuilder(copy)
                            }}
                        className="form-control"
                    >
                        <option value="0">Select a kicker</option>
                        {
                            players.map(
                                (playerObj) => {
                                    return <option value={playerObj.id}>
                                        {playerObj.name}
                                    </option>
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