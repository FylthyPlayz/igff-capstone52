import React from "react"
import { Route } from "react-router-dom"
import { DeleteProfile } from "./components/auth/EditProfile"
import { UserFavorites } from "./components/landingpage/LandingPage"
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
            <Route exact path="/editProfile">
            <DeleteProfile />
            </Route>
            <Route exact path="/landingPage">
            <UserFavorites />
            </Route>
            {/* <Route path="/search">
                <SearchResults />
            </Route> */}
        </>
    )
}