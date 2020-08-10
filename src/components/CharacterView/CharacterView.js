import React, { Component } from 'react';
import './style.css'

/* const bag = [{item: 'Gold', quantity: 100}, {item: 'Basic Provisions', quantity: 10}, 
{item: 'Sleeping Bag', quantity: 1}, {item: '', quantity: 1}, {item: 'Gold', quantity: 100}, {item: 'Basic Provisions', quantity: 10}, 
{item: 'Sleeping Bag', quantity: 1}, {item: '', quantity: 1}]; */

class CharView extends Component {
    
    state = {
        name: 'Character Name',
        race: '',
        charClass: '',
        equipField: 'Equipment',
        weapon: '',
        offHand: '',
        armor: '',
        charBag: 'Basic'
    }

    /* renderList(){
        const list = [];
        bag.forEach(item => list.push(
            
        ));
    } */
    
    render = () => {
        return(
            <div className="full-view">
                <div className="row-view full-row">
                    <h1>{this.state.name}</h1>
                </div>
                <div className="row-view">
                    <div className="field-name"><h1>Race:</h1></div>
                    <div className="small-field small-field-center">{this.state.race}</div>
                    <div className="field-name"><h1>Class:</h1></div>
                    <div className="small-field">{this.state.charClass}</div>
                </div>
                <div className="row-view full-row">
                    <h1>{this.state.equipField}</h1>
                </div>
                <div className="row-view">
                    <div className="field-name"><h1>Weapon:</h1></div>
                    <div className="large-field">{this.state.weapon}</div>
                </div>
                <div className="row-view">
                    <div className="field-name"><h1>Off-Hand:</h1></div>
                    <div className="large-field">{this.state.offHand}</div>
                </div>
                <div className="row-view">
                    <div className="field-name"><h1>Armor:</h1></div>
                    <div className="large-field">{this.state.armor}</div>
                </div>
                <div className="row-view full-row">
                    <h1>Bag: {this.state.charBag}</h1>
                    <div className="items-div">

                    </div>
                </div>
            </div>
        )
    }
}

export default CharView;