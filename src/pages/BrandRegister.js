import React, {useState, useRef}from 'react';
import TopbarComponent from '../components/Topbar';
import GuidelineComponent from '../components/Guideline';
import Nextbutton from '../components/Nextbutton';
import {Link} from "react-router-dom";
import '../style.css';
import x_round from '../image/x_round.png'
import '../text.css';


function BrandRegister(){ 
    const [color, setColor] = useState('#b7b7b7')
    const [button, setButton] = useState('#b7b7b7')
    const Input = useRef(null)
//useRef 사용
    
    const inputHandler = () => { 
        setColor('#4a64f5')
    }

    const inputReset = () => { 
        Input.current.value ='';
    }

    const buttonHandler = () => { 

        if(Input.current.value){ 
            setButton('#4a64f5')
        }
    }


    return (
        <div style={{margin : 'auto',maxWidth : '520px'}}>
            <TopbarComponent page={'01'} path={'/'}/>
            
            <div style={{width : '342px',margin : 'auto'}}>
            <GuidelineComponent title1={"등록하실 상표명이"} title2={"무엇인가요?"}/>
            </div>
            
            <div id="brandregisterInput" style={{width: 'calc(100% - 40px)', paddingLeft: '3px', margin: '-25px 0px 20% 20px', borderBottom: `2px solid ${color}`}}>
            <input className="brandregister-input" ref = {Input} type="text" id="text" placeholder="등록하실 상표명을 입력해주세요" defaultValue =''  onClick ={inputHandler} onKeyUp={buttonHandler}/>
            <img src={x_round} className="x_btn"  style={{width: '16px', height: '16px', float:'right', margin: '15px 3px 0px 0px'}} onClick={inputReset}/>
            </div>

            <Link to="/brandlogoregister">
            <Nextbutton text={'다음'} color={button}/>
            </Link>
        </div>
        
    )

}

export default BrandRegister;