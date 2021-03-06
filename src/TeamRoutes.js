import React from "react"
import { Route } from "react-router-dom"
import { TeamList } from "./components/teams/TeamList"
import { PlayerByTeam } from "./components/teams/PlayerByTeam"
import { MyFavorites } from "./components/Favorites/MyFavorites"


export default () => { // routes specifically for routing to the teamlist, each player on those teams, and the favorites of the user
    return (
        <>
            <Route exact path="/teams">
                <TeamList />
            </Route>
            <Route exact path="/teams/:teamId(\d+)">
                <PlayerByTeam />
            </Route>
            <Route exact path="/userFavorites">
                <MyFavorites />
            </Route>
        </>
    )
}