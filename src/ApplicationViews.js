import React from "react"
import { Route } from "react-router-dom"
import { DeleteProfile } from "./components/auth/EditProfile"
import { UserFavorites } from "./components/Favorites/FavoriteTeams"
import PlayerRoutes from "./PlayerRoutes"
import TeamBuilderRoutes from "./TeamBuilderRoutes"
import TeamRoutes from "./TeamRoutes"

export const ApplicationViews = () => { // this stores all of the routing from page to page to make sure the user can jump to and from each page and hyperlink
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
        </>
    )
}