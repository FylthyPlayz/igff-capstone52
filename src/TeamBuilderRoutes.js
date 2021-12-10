import React from "react"
import { Route } from "react-router-dom"
import { TeamBuilderForm } from "./components/teambuilder/TeamBuilder"


export default () => {
    return (
        <>
            <Route exact path="/teamBuilder">
                <TeamBuilderForm />
            </Route>

        </>
    )
}