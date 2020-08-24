import React, { Component } from 'react';
import Card from '../Card/Card.js';
import Navbar from '../Navbar/Navbar.js'
import CharView from '../CharacterView/CharacterView.js';
import { GenderButton,
    CardContainer,
    NameContainer,
    NameInput,
    EntryTitle,
    Section,
    CreationContainer,
    GenderButtonContainer } from './CharacterCreationStyled'

    //() => console.log(this.setState({selectedGenderAndRace: 1 + this.state.genderAppearId}))

class CharCreation extends Component {
    
    state = {
        charName: '',
        placeholder: "Enter the Character's Name...",
        genderId: 0,
        genderAppearId: 0,
        isOther: false,
        otherName: '',
        selectedGenderAndRace: 1
    }

    createJobId = (job) => {
        return String.toString(this.state.selectedGenderAndRace + job);
    }
    
    selectGender = (choice) => {
        this.setState({ genderId: choice , genderAppearId: choice, isOther: false });
        return String.toString(choice);
    }

    selectRace = () => {
        return this.selectedGenderAndRace + this.state.genderAppearId;
    }

    render = () => {
        return(
            <>
                <Navbar/>
                <CreationContainer>
                    <Section>
                        <EntryTitle>NAME</EntryTitle>
                        <NameContainer>
                            <NameInput placeholder={this.state.placeholder} 
                            onChange={event => this.setState({charName: event.target.value})}
                            onClick={() => this.setState({placeholder: ''})}
                            onBlur={() => this.state.charName === '' ? 
                            this.setState({placeholder: "Enter the Character's Name..."}) : console.log('Ok')}/>
                        </NameContainer>
                    </Section>
                    <Section>
                        <EntryTitle>GENDER</EntryTitle>
                        <GenderButtonContainer>
                            <GenderButton onClick={() => 
                            this.setState({ genderId: 0 , genderAppearId: 0, isOther: false })}
                            disabled={this.state.genderId === 0}>Male</GenderButton>
                            <GenderButton onClick={() => 
                            this.setState({ genderId: 1 , genderAppearId: 1, isOther: false })}
                            center disabled={this.state.genderId === 1}>Female</GenderButton>
                            <GenderButton onClick={() => 
                            this.setState({ genderId: 2, isOther: true })}
                            disabled={this.state.genderId === 2}>Other</GenderButton>
                        </GenderButtonContainer>
                    </Section>
                    <Section>
                        <EntryTitle>RACE</EntryTitle>
                        <CardContainer>
                            <Card className="card" cardName="Human" raceId={this.state.genderAppearId} 
                            onClick={() => this.setState({selectedGenderAndRace: this.state.genderAppearId})}/>
                            <Card className="card" cardName="Elf" raceId={this.state.genderAppearId + 2} 
                            onClick={() => this.setState({selectedGenderAndRace: 2 + this.state.genderAppearId})}/>
                            <Card className="card" cardName="Dwarf" raceId={this.state.genderAppearId + 4}
                            onClick={() => this.setState({selectedGenderAndRace: 3 + this.state.genderAppearId})}/>
                            <Card className="card" cardName="Dark Elf" raceId={this.state.genderAppearId + 6}
                            onClick={() => this.setState({selectedGenderAndRace: 4 + this.state.genderAppearId})}/>
                            <Card className="card" cardName="Halfling" raceId={this.state.genderAppearId + 8}
                            onClick={() => this.setState({selectedGenderAndRace: 5 + this.state.genderAppearId})}/>
                            <Card className="card" cardName="Orc" raceId={this.state.genderAppearId + 10}
                            onClick={() => this.setState({selectedGenderAndRace: 6 + this.state.genderAppearId})}/>
                        </CardContainer>
                    </Section>
                    <Section>
                        <EntryTitle>CLASS</EntryTitle>
                        <CardContainer>
                            <Card cardName="Warrior" jobId={'0.1'}/>
                            <Card cardName="Archer" jobId={() => this.createJobId(0.2)}/>
                            <Card cardName="Mage" jobId={() => this.createJobId(0.3)}/>
                            <Card cardName="Rogue" jobId={() => this.createJobId(0.4)}/>
                            <Card cardName="Ranger" jobId={() => this.createJobId(0.5)}/>
                            <Card cardName="Berserker" jobId={() => this.createJobId(0.6)}/>
                            <Card cardName="Warlock" jobId={() => this.createJobId(0.7)}/>
                            <Card cardName="Paladin" jobId={() => this.createJobId(0.8)}/>
                            <Card cardName="Necromancer" jobId={() => this.createJobId(0.9)}/>
                            <Card cardName="Cleric" jobId={() => this.createJobId(0.10)}/>
                        </CardContainer>
                    </Section>
                </CreationContainer>
                <div className="charPreview">
                    <CharView  />
                </div>
            </>
        )
    }

}

export default CharCreation;