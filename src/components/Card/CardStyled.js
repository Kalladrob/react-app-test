import styled from 'styled-components';
import Image1 from '../../images/1.jpg';
import Image2 from '../../images/2.jpg';
import Image3 from '../../images/3.jpg';
import Image4 from '../../images/4.jpg';
import Image5 from '../../images/5.jpg';
import Image6 from '../../images/6.jpg';
import Image7 from '../../images/7.jpg';
import Image8 from '../../images/8.jpg';
import Image9 from '../../images/9.jpg';
import Image10 from '../../images/10.jpg';
import Image11 from '../../images/11.jpg';
import Image12 from '../../images/12.jpg';

const switchImage = imageId => {
    switch (imageId) {
        case '1':
            return Image1;
        case '2':
            return Image2;
        case '3':
            return Image3;
        case '4':
            return Image4;
        case '5':
            return Image5;
        case '6':
            return Image6;
        case '7':
            return Image7;
        case '8':
            return Image8;
        case '9':
            return Image9;
        case '10':
            return Image10;
        case '11':
            return Image11;
        case '12':
            return Image12;
        default:
            break;
    }
}

export const BackgroundImage = styled.div`
    height: 270px;
    width: 220px;
    margin: 15px 15px;
    border: 1px solid black;
    background: ${props => `url(${switchImage(props.id)}) no-repeat center center`};
    background-size: cover;
`

export const FullCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid black;
    height: 400px;
    width: 250px;
    margin-bottom: 30px;
    &:hover{
        -webkit-box-shadow: 0px 0px 20px 9px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 20px 9px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 20px 9px rgba(0,0,0,0.75);
    }
`

export const CardName = styled.div`
    font-family: fantasy;
    display: flex;
    height: 70px;
    width: 220;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 15px 15px;
`