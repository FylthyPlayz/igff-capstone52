import React from "react"
import { Route } from "react-router-dom"
import { TeamBuilderForm } from "./components/teambuilder/TeamBuilder"
import { TeamEvaluation } from "./components/teambuilder/TeamEvaluation"


export default () => {
    return (
        <>
            <Route exact path="/teamBuilder">
                <TeamBuilderForm />
            </Route>
            <Route exact path="/teamBuilder/:teamBuilderId(\d+)">
                <TeamEvaluation/>
            </Route>
        </>
    )
}