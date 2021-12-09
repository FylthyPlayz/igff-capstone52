import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const PlayerPositionList = () => {
    const [playerPositions, changePlayerPositions] = useState([]) 
   
    useEffect(
        () => {
            fetch("http://localhost:8088/players?_expand=playerPosition")
                .then(res => res.json())
                .then((positionArray) => {
                    changePlayerPositions(positionArray)
                })
        },
        []
    )

   
}

