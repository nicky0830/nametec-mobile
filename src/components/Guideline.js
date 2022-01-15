import React from 'react'; 
import CharacterLogo from './CharacterLogo';
import styled from 'styled-components';
import '../text.css'


const Guideline = styled.div`
display: flex;
justify-content: space-between;
margin: auto;
width : 100%;
height: 200px;
>.guideline-container{ 
    
>.guideline-title{ 
    width:250px;
    float:right;
    font-size : 30px;
    text-align : left;
    margin-top: 30px; 
    white-space : nowrap;
    line-height : 1.3
}
>.guideline-help{
  margin-top: 8px;
    font-size: 14px;
    color: #4a64f5;
}
}
`

export default function GuidelineComponent({title1,title2, help}){
    return (
        <Guideline>
        <CharacterLogo/>
        <div className='guideline-container'>
        <div className='guideline-title Bold'>{title1}<br/>{title2}</div>
        <div className='guideline-help Regular'>{help}</div>
        </div>
        </Guideline>    
        )
}

