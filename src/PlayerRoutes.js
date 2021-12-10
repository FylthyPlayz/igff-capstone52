import React from "react"
import { Route } from "react-router-dom"
import { PlayerList } from "./components/players/PlayerList"
import { PlayerPositionList } from "./components/players/PlayerPositionList"
import { Player } from "./components/players/Players"

export default () => {
    return (
        <>
            <Route exact path="/players">
                <PlayerList />
            </Route>
            <Route exact path="/playerPositions/:playerPositionId(\d+)">
                <PlayerPositionList />
            </Route>
            <Route exact path="/players/:id(\d+)">
                <Player />
            </Route>
        </>
    )
}