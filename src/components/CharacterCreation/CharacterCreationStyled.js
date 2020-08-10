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