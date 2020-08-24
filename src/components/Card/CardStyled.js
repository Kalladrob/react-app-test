import styled from 'styled-components';
import Image1 from '../../images/1.jpg';
import Image1_1 from '../../images/1.1.jpg';
import Image1_2 from '../../images/1.2.jpg';
import Image1_3 from '../../images/1.3.jpg';
import Image1_4 from '../../images/1.4.jpg';
import Image1_5 from '../../images/1.5.jpg';
import Image1_6 from '../../images/1.6.jpg';
import Image1_7 from '../../images/1.7.jpg';
import Image1_8 from '../../images/1.8.jpg';
import Image1_9 from '../../images/1.9.jpg';
import Image1_10 from '../../images/1.10.jpg';
import Image2 from '../../images/2.jpg';
import Image2_1 from '../../images/2.1.jpg';
import Image2_2 from '../../images/2.2.jpg';
import Image3 from '../../images/3.jpg';
import Image3_1 from '../../images/3.1.jpg';
import Image3_2 from '../../images/3.2.jpg';
import Image4 from '../../images/4.jpg';
import Image4_1 from '../../images/4.1.jpg';
import Image4_2 from '../../images/4.2.jpg';
import Image5 from '../../images/5.jpg';
import Image5_1 from '../../images/5.1.jpg';
import Image5_2 from '../../images/5.2.jpg';
import Image6 from '../../images/6.jpg';
import Image6_1 from '../../images/6.1.jpg';
import Image6_2 from '../../images/6.2.jpg';
import Image7 from '../../images/7.jpg';
import Image8 from '../../images/8.jpg';
import Image9 from '../../images/9.jpg';
import Image10 from '../../images/10.jpg';
import Image11 from '../../images/11.jpg';
import Image12 from '../../images/12.jpg';
import NotFound from '../../images/notfound.jpg'

const switchImage = imageId => {
    switch (imageId) {
        case '0':
            return Image1;
        case '0.1':
            return Image1_1;
        case '0.2':
            return Image1_2;
        case '0.3':
            return Image1_3;
        case '0.4':
            return Image1_4;
        case '0.5':
            return Image1_5;
        case '0.6':
            return Image1_6;
        case '0.7':
            return Image1_7;
        case '0.8':
            return Image1_8;
        case '0.9':
            return Image1_9;
        case '0.10':
            return Image1_10;
        case '1':
            return Image2;
        case '1.1':
            return Image2_1;
        case '1.2':
            return Image2_2;
        case '2':
            return Image3;
        case '2.1':
            return Image3_1;
        case '2.2':
            return Image3_2;
        case '3':
            return Image4;
        case '3.1':
            return Image4_1;
        case '3.2':
            return Image4_2;
        case '4':
            return Image5;
        case '4.1':
            return Image5_1;
        case '4.2':
            return Image5_2;
        case '5':
            return Image6;
        case '5.1':
            return Image6_1;
        case '5.2':
            return Image6_2;
        case '6':
            return Image7;
        case '7':
            return Image8;
        case '8':
            return Image9;
        case '9':
            return Image10;
        case '10':
            return Image11;
        case '11':
            return Image12;
        default:
            return NotFound;
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
    margin-right: 25px;
    margin-left: 25px;
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