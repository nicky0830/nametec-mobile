import React, { useState } from 'react';
import TopbarComponent from '../components/Topbar';
import GuidelineComponent from '../components/Guideline';
import Nextbutton from '../components/Nextbutton';
import {Link} from "react-router-dom";
import '../style.css';
import x_round from '../image/x_round.png'

function BrandRegister(){ 
    return (
        <div style={{margin : 'auto',maxWidth : '520px'}}>
            <TopbarComponent page={'01'} path={'/'}/>
            
            <div style={{width : '342px',margin : 'auto'}}>
            <GuidelineComponent title1={"등록하실 상표명이"} title2={"무엇인가요?"}/>
            </div>
            
            <div className="skarb" style={{width: 'calc(100% - 40px)', paddingLeft: '3px', margin: '-30px 0px 20% 20px', borderBottom: '2px solid rgb(183, 183, 183)'}}>
            <input className="brandregister-input Regular"  autocomplete="off" type="text" name="" value="" id="text" onkeyup="keypressd()" placeholder="등록하실 상표명을 입력해주세요" style={{border: 'none', color: 'rgb(0, 0, 0)', opacity: '1'}}/>
            <img onclick="eraseInput('text')" src={x_round} className="x_btn" style={{width: '16px', height: '16px', float:'right', margin: '15px 3px 0px 0px;'}}/>
            </div>

            <Link to="/brandlogoregister">
            <Nextbutton text={'다음'}/>
            </Link>
        </div>
        
    )

}

export default BrandRegister;