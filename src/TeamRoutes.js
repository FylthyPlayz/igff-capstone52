import React from "react"
import { Route } from "react-router-dom"
import { TeamList } from "./components/teams/TeamList"
import { PlayerByTeam } from "./components/teams/PlayerByTeam"


export default () => {
    return (
        <>
            <Route exact path="/teams">
                <TeamList />
            </Route>
            <Route exact path="/teams/:teamId(\d+)">
                <PlayerByTeam />
            </Route>
            
        </>
    )
}