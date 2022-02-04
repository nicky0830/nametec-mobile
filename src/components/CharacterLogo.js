import React from 'react'
import styled from 'styled-components';
import characterimg from '../data/character_profile@3x.png';

const CharacterLogo = styled.div`
flex: 1;


>.characterlogo{ 
float:left;
width : 72px;
margin-top: 30px;
}
`


export default function CharacterLogoComponent(){ 
return (
    <CharacterLogo>
    <img className='characterlogo' src={characterimg} alt='logo'/>
    </CharacterLogo>
)

}

