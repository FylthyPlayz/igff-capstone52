import React from "react"
import { Route } from "react-router-dom"
import { TeamList } from "./components/teams/TeamList"

export default () => {
    return (
        <>
            <Route exact path="/teams">
                <TeamList />
            </Route>
        </>
    )
}