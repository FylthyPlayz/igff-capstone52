import React, { useState, useEffect, useImperativeHandle } from "react"
import { Link, useParams, useHistory } from "react-router-dom"
import { TeamList } from "../teams/TeamList"

export const Player = () => {
    const [player, set] = useState({})
    const { playerId } = useParams()
    
    useEffect(
        () => {
            fetch(`http://localhost:8088/players/${playerId}`)
            .then(res => res.json())
            .then((data) => {
                set(data)
            })
        },
        [ playerId ]  // Above function runs when the value of employeeId change
        )
        
        return (
            <article className={classes}>
        <section className="card-body">
            {/* <img alt="Kennel employee icon" src={person} className="icon--person" /> */}
            <h5 className="card-title">
                
            </h5>
            
            {
                playerId //ternary statement and param to be passed through resource to player
                    ? <>
                        <section>
                            He plays for {resource?.animals?.length}
                        </section>
                        <section>
                            Working at {resource?.locations?.map(//mapped through to pull out object in array to access property of 'name'
                               (location) => { 
                                   return  location.location.name  //location is an array and also an object in that array
                                }
                                ).join(", ")}
                        </section>
                    </>
                    : <div>
                    Taking care of {animalCount} animals
                </div>
            }
            </section>
            </article>
)
}