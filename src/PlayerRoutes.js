import React from "react"
import { Route } from "react-router-dom"
import { PlayerList } from "./components/players/PlayerList"
import { PlayerPositionList } from "./components/players/PlayerPositionList"
import { Player } from "./components/players/Players"

export default () => { // routes to the player list and to the players from the position hyperlinks and also to a individual player card
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