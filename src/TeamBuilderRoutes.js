import React from "react"
import { Route } from "react-router-dom"
import { TeamBuilderForm } from "./components/teambuilder/TeamBuilder"
import { TeamEvaluation } from "./components/teambuilder/TeamEvaluation"


export default () => { // routes specifically to the teamBuilder and then to the evaluation after a team is created
    return (
        <>
            <Route exact path="/teamBuilder">
                <TeamBuilderForm />
            </Route>
            <Route exact path="/teamBuilder/:teamBuilderId(\d+)">
                <TeamEvaluation />
            </Route>
        </>
    )
}