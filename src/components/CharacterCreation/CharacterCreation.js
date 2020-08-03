import React, { Component } from 'react'
import Card from '../Card/Card.js'
import Home from '../Home'
import './CharacterCreation.css'

class CharacterCreation extends Component {
    
    state = {
        
    }
    
    render = () => {
        return(
            <div>
                <Home/>
                <div className="all">
                    <div className="section">
                        <h1 className="entry-title">NAME</h1>
                        <div className="name-container">  
                            <input className="character-name" placeholder="Enter the Character's Name..."/>
                        </div>
                    </div>
                    <div className="section">
                        <h1 className="entry-title">GENDER</h1>
                        <div className="gender-container">
                            <button className="gender-button">Male</button>
                            <button className="gender-button">Female</button>
                            <button className="gender-button">Other</button>
                        </div>
                    </div>
                    <div className="section">
                        <h1 className="entry-title">RACE</h1>
                        <div className="card-container">
                            <Card cardName="Human"/>
                            <Card cardName="Elf"/>
                            <Card cardName="Dwarf"/>
                            <Card cardName="Dark Elf"/>
                            <Card cardName="Halfling"/>
                            <Card cardName="Orc"/>
                            <Card cardName="Lich"/>
                        </div>
                    </div>
                    <div className="section">
                        <h1 className="entry-title">CLASS</h1>
                        <div className="card-container">
                            <Card cardName="Warrior"/>
                            <Card cardName="Mage"/>
                            <Card cardName="Archer"/>
                            <Card cardName="Rogue"/>
                            <Card cardName="Ranger"/>
                            <Card cardName="Berserker"/>
                            <Card cardName="Warlock"/>
                            <Card cardName="Paladin"/>
                            <Card cardName="Blood Knight"/>
                            <Card cardName="Necromancer"/>
                            <Card cardName="Cleric"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CharacterCreation;