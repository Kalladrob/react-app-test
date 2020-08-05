import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.js'
import './style.css';

class Home extends Component{

    render() {
        return (
            <div>
                <Navbar/>
                <div className="welcome-message"><h1>GREETINGS, ADVENTURERS!</h1></div>
                <div className="intro-text">
                    <text>
                        This is a tool to help you create and/or embark in grand adventures!
                    </text>
                    <text>
                        Here, you'll be able to create and manage characters, send them in 
                        adventures created by other players and even create your own for you to play in or share with others.
                    </text>
                    <text>
                        Choose the path forward and godspeed, friends!
                    </text>
                </div>
                <div className="row-div">
                    <h1 className="row-title">Character</h1>
                    <div className="row">
                        <button>Create</button>
                        <button>Manage</button>
                    </div>
                </div>
                <div className="row-div">
                    <h1 className="row-title">Adventure</h1>
                    <div className="row">
                        <button>Create</button>
                        <button>Manage</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;