import React, { Component } from 'react';
import Card from '../Card/Card.js';
import Navbar from '../Navbar/Navbar.js'
import CharView from '../CharacterView/CharacterView.js';
import './CharacterCreation.css';
import { GenderButton } from './CharacterCreationStyled'


class CharCreation extends Component {
    
    state = {
        charName: '',
        placeholder: "Enter the Character's Name...",
        gender: 0,
    }

    render = () => {
        return(
            <>
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
                            <GenderButton onClick={() => this.setState({ gender: 1 })} disabled={this.state.gender === 1}>Male</GenderButton>
                            <GenderButton onClick={() => this.setState({ gender: 2 })} center disabled={this.state.gender === 2}>Female</GenderButton>
                            <GenderButton onClick={() => this.setState({ gender: 3 })} disabled={this.state.gender === 3}>Other</GenderButton>
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
                        </div>
                    </div>
                    <div className="section">
                        <h1 className="entry-title">CLASS</h1>
                        <div className="card-container">
                            <Card cardName="Warrior" imgId='1'/>
                            <Card cardName="Mage" imgId='3'/>
                            <Card cardName="Archer" imgId='2'/>
                            <Card cardName="Rogue" imgId='4'/>
                            <Card cardName="Ranger" imgId='10'/>
                            <Card cardName="Berserker" imgId='12'/>
                            <Card cardName="Warlock" imgId='7'/>
                            <Card cardName="Paladin" imgId='5'/>
                            <Card cardName="Blood Knight" imgId='11'/>
                            <Card cardName="Necromancer" imgId='8'/>
                            <Card cardName="Cleric" imgId='9'/>
                        </div>
                    </div>
                </div>
                <div className="charPreview">
                    <CharView  />
                </div>
            </>
        )
    }

}

export default CharCreation;