import React, { Component } from 'react';
import { BackgroundImage,
        FullCard,
        CardName} from './CardStyled'

class Card extends Component {

    render = () => {
        
        return(
            <FullCard>
                <BackgroundImage raceId={this.props.raceId} jobId={this.props.jobId}
                id={this.props.raceId === undefined ? this.props.jobId : this.props.raceId}/>
                <CardName>
                    <h1>{this.props.cardName}</h1>
                </CardName>
            </FullCard>
        )
    }

}

export default Card;