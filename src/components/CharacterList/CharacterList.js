import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar.js'
import CharView from '../CharacterView/CharacterView.js';

const charList = [{charName: 'Valinor'}, {charName: 'Dorian'}, {charName: 'Ilgor'}, {charName: 'Sonna'}]

class CharList extends Component {
    
    renderList = () => {
        const list = [];
        charList.forEach(item => list.push(
            <CharView name={item.charName}/>
        ))
        return list;
    }
    
    render = () => {
        return(
            <>
                <Navbar />
                {this.renderList()}
            </>
        )
    }
}

export default CharList