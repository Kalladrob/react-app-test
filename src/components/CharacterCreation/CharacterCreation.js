import React, { Component } from 'react';
import Card from '../Card/Card.js';
import Navbar from '../Navbar/Navbar.js'
import CharView from '../CharacterView/CharacterView.js';
import './CharacterCreation.css';

class CharCreation extends Component {
    
    state = {
        charName: '',
        placeholder: "Enter the Character's Name..."
    }
    
    render = () => {
        return(
            <div>
                <Navbar/>
                <div className="charCreation">
                    <div className="section">
                        <h1 className="entry-title">NAME</h1>
                        <div className="name-container">  
                            <input className="character-name-entry" placeholder={this.state.placeholder} 
                            onChange={event => this.setState({charName: event.target.value})}
                            onClick={() => this.setState({placeholder: ''})} 
                            onBlur={() => this.state.charName === '' ? this.setState({placeholder: "Enter the Character's Name..."}) : console.log('Ok')}/>
                        </div>
                    </div>
                    <div className="section">
                        <h1 className="entry-title">GENDER</h1>
                        <div className="gender-container">
                            <button className="gender-button">Male</button>
                            <button className="gender-button center-button">Female</button>
                            <button className="gender-button">Other</button>
                        </div>
                    </div>
                    <div className="section">
                        <h1 className="entry-title">RACE</h1>
                        <div className="card-container">
                            <Card className="card" cardName="Human"/>
                            <Card className="card" cardName="Elf"/>
                            <Card className="card" cardName="Dwarf"/>
                            <Card className="card" cardName="Dark Elf"/>
                            <Card className="card" cardName="Halfling"/>
                            <Card className="card" cardName="Orc"/>
                            <Card className="card" cardName="Undead"/>
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
                <div className="charPreview">
                    <CharView />
                </div>
            </div>
        )
    }

}

export default CharCreation;