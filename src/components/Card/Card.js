import React, { Component } from 'react';
import { BackgroundImage,
        FullCard,
        CardName} from './CardStyled'

class Card extends Component {

    render = () => {
        
        return(
            <FullCard>
                <BackgroundImage id={this.props.imgId} />
                <CardName>
                    <h1>{this.props.cardName}</h1>
                </CardName>
            </FullCard>
        )
    }

}

export default Card;