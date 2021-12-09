import React from "react"
import { Route } from "react-router-dom"
import SearchResults from "./components/search/SearchResults"
import PlayerRoutes from "./PlayerRoutes"
import TeamBuilderRoutes from "./TeamBuilderRoutes"
import TeamRoutes from "./TeamRoutes"

export const ApplicationViews = () => {
    return (
        <>
            <PlayerRoutes />
            <TeamRoutes />
            <TeamBuilderRoutes />
            
            {/* <Route path="/search">
                <SearchResults />
            </Route> */}
        </>
    )
}