import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.js'
import './style.css';

class Home extends Component{

    render() {
        return (
            <div className="all">
                <Navbar/>
                <div className="welcome-message"><h1>GREETINGS, ADVENTURERS!</h1></div>
                <div className="intro-text">
                    <p>
                        This is a tool to help you create and/or embark in grand adventures!
                    </p>
                    <p>
                        Here, you'll be able to create and manage characters, send them in 
                        adventures created by other players and even create your own for you to play in or share with others.
                    </p>
                    <p>
                        Choose the path forward and godspeed, friends!
                    </p>
                </div>
                <h1 className="row-title">Character</h1>
                <div className="row-div">
                    <div className="row top-row">
                        <button className="left-button">Create Character</button>
                        <button>Manage Characters</button>
                    </div>
                    <div className="row">
                        <button className="left-button">Create NPC</button>
                        <button>Manage NPCs</button>
                    </div>
                    <div className="row bottom-row">
                        <button className="left-button">Create Enemy</button>
                        <button>Manage Enemies</button>
                    </div>
                </div>
                <h1 className="row-title">Adventure</h1>
                <div className="row-div">
                    <div className="row top-row">
                        <button className="left-button">Create World</button>
                        <button>Manage World</button>
                    </div>
                    <div className="row">
                        <button className="left-button">Create Map</button>
                        <button>Manage Maps</button>
                    </div>
                    <div className="row">
                        <button className="left-button">Create Item</button>
                        <button>Manage Items</button>
                    </div>
                    <div className="row bottom-row">
                        <button className="left-button">Create Questline</button>
                        <button>Manage Questlines</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;