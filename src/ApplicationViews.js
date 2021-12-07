import React from "react"
import { Route } from "react-router-dom"
import PlayerRoutes from "./PlayerRoutes"
import SearchResults from "./search/SearchResults"


export const ApplicationViews = () => {
    return (
        <>
            <PlayerRoutes />
            
            <Route path="/search">
                <SearchResults />
            </Route>
        </>
    )
}