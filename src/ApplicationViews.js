import React from "react"
import { Route } from "react-router-dom"
import SearchResults from "./components/search/SearchResults"
import { PlayerList } from "./components/players/PlayerList"
import { TeamList } from "./components/teams/TeamList"
export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/players">
                <PlayerList />
            </Route>
            <Route exact path="/teams">
                <TeamList />
            </Route>
            <Route path="/search">
                <SearchResults />
            </Route>
        </>
    )
}