// import React from "react"
// import { useLocation } from "react-router-dom";
// import { Animal } from "../animals/Animal";
// import { Employee } from "../employees/Employee";
// import "./SearchResults.css"


// export default () => { 
//     const location = useLocation()
//     // const { getCurrentUser } = useSimpleAuth() // imported this so we can get access to only the user that is logged in
    
//     const displayPlayers = () => {
//         if (location.state?.players.length) { // if the animals array that is in the state is not 0 and the current user is an employee then they can return a search for an animal.
//             return (
//                 <React.Fragment>
//                     <h2>Matching Players</h2>
//                     <section className="players">
//                         {location.state.players.map(player =><Player key={`player--${player.id}`} player={player} // this will display the animal card after mapping through the animals array and finding the animal searched
//                         // the Animal key above is a component from the animal list module that grabs a specific animal object
//                         />)} 
//                     </section>
//                 </React.Fragment>
//             )
//         }
//     }

//     const displayTeams = () => {
//         if (location.state?.teams.length) { // the Employee key below is a component from the employee list module that grabs a specific employee object
//             return (
//                 <React.Fragment>
//                     <h2>Matching Teams</h2>
//                     <section className="teams"> 
//                         {location.state.teams.map(team =><Team key={`player--${team.id}`} team={team} />)} 
//                     </section> 
//                 </React.Fragment>
//             )
//         }
//     }

//         // below is where the display functions are invoked for the search results
//     return (
//         <React.Fragment>
//             <article className="searchResults">
//                 {displayPlayers()}
//                 {displayTeams()}
//             </article>
//         </React.Fragment>
//     )
// }