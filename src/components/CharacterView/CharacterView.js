import React, { Component } from 'react';
import './style.css'

class CharView extends Component {
    
    state = {
        name: 'Character Name',
        race: '',
        charClass: '',
        equipField: 'Starting Equipment',
        weapon: '',
        offHand: '',
        armor: ''
    }
    
    render = () => {
        return(
            <div className="full-view">
                <div className="row-view full-row">
                    <h1>{this.state.name}</h1>
                </div>
                <div className="row-view">
                    <div className="field-name"><h1>Race:</h1></div>
                    <div className="small-field small-field-center"><text>{this.state.race}</text></div>
                    <div className="field-name"><h1>Class:</h1></div>
                    <div className="small-field"><text>{this.state.charClass}</text></div>
                </div>
                <div className="row-view full-row">
                    <h1>{this.state.equipField}</h1>
                </div>
                <div className="row-view">
                    <div className="field-name"><h1>Weapon:</h1></div>
                    <div className="large-field"><text>{this.state.weapon}</text></div>
                </div>
                <div className="row-view">
                    <div className="field-name"><h1>Off-Hand:</h1></div>
                    <div className="large-field"><text>{this.state.offHand}</text></div>
                </div>
                <div className="row-view">
                    <div className="field-name"><h1>Armor:</h1></div>
                    <div className="large-field"><text>{this.state.armor}</text></div>
                </div>
            </div>
        )
    }
}

export default CharView;