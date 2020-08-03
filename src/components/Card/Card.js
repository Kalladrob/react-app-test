import React, { Component } from 'react';
import './style.css';

class Card extends Component {

    render = () => {
        return(
            <div className="card">
                <div className="image"/>
                <div className="name">
                    <h1>{this.props.cardName}</h1>
                </div>
            </div>
        )
    }

}

export default Card;