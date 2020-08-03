import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

class Menu extends Component{

    render() {
        return (
            <div className="navbar">
                <div className="nav-link-container">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/CharacterCreation">Create Character</Link>
                    <Link className="nav-link" to="/CharacterList">Character List</Link>
                </div>
            </div>
        )
    }

}

export default Menu;