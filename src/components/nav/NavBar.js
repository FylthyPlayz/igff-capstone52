import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/kandies">Kandy List</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/purchases">My Orders</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="#" onClick={
                    () => {
                        localStorage.removeItem("IGFF_customer")
                    }
                }>Logout</Link>
            </li>
        </ul>
    )
}