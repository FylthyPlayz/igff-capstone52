import React from "react"
import { Route } from "react-router-dom"
import {Players} from "./Players"


export default () => {
    return (
        <>
            <Route exact path="/players">
                <Players />
            </Route>
            {/* <Route path="/animals/:animalId(\d+)">
                <Animal />
            </Route> */}
            
        </>
    )
}