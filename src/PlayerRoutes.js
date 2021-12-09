import React from "react"
import { Route } from "react-router-dom"
import { PlayerList } from "./components/players/PlayerList"
import { PlayerPositionList } from "./components/players/PlayerPositionList"

export default () => {
    return (
        <>
            <Route exact path="/players">
                <PlayerList />
            </Route>
            <Route exact path="/playerPositions">
                <PlayerPositionList />
            </Route>
        </>
    )
}