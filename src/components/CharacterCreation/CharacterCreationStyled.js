import styled from 'styled-components'

export const GenderButton = styled.button`
    font-size: 25px;
    width: ${props => props.center ? '33.4%' : '33.3%'};
    height: 80px;
    border: none;
    background-color: ${props => props.disabled ? 'black' : 'white'};
    color: ${props => props.disabled ? 'white' : 'black'};
    outline: none;
    border-right: ${props => props.center ? '1px solid black' : ''};
    border-left: ${props => props.center ? '1px solid black' : ''};
    &:hover{
        background-color: ${props => props.disabled ? 'black' : 'grey'};
        color: white;
    }
`

export const NameContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 80px;
    background-color: white;  
`

export const GenderButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const CardContainer = styled.div`
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;  
    justify-items: center;
    justify-content: space-around;
    background-color: white;
`

export const NameInput = styled.input`
    font-family: fantasy;
    font-size: 40px;
    width: 600px;
    font-weight: bold;
    border: none;
    outline: none;
    text-align: center;
    width: 100%;
    height: 100%;
    border-bottom: 1px black solid;
    padding: 0px;
`

export const EntryTitle = styled.h1`
    font-family: 'Times New Roman';
    text-align: center;
    border-bottom: 1px solid black;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 0px;
    margin-top: 0px;
`

export const Section = styled.div`
    border: 1px solid black;
    margin: 40px;
    width: 80%;
    height: 100%;
    margin-right: 10%;
    margin-left: 10%;
    background-color: #ebd78d;
`

export const CreationContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`