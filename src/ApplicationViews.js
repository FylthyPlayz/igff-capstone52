import React from "react"
import { Route } from "react-router-dom"
import { DeleteProfile } from "./components/auth/EditProfile"
import { UserFavorites } from "./components/Favorites/FavoriteTeams"
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
        </>
    )
}