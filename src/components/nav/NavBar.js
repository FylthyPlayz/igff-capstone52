import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
// this page is responsible for rendering the nav bar links at the top of the webpage.
export const NavBar = (props) => { // the exported variable of NavBar has props passed as a parameter which is not used. We then return a hyperlinked word that directs the user to another page.
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/players">Players</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/teams">Teams</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/teamBuilder">TeamBuilder</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/userFavorites">My Favorites</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/editProfile">Edit Profile</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="#" onClick={
                    () => {
                        localStorage.removeItem("IGFF_user")
                    }
                }>Logout</Link>
            </li>
        </ul>
    )
}

