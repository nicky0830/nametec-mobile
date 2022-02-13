import React from "react";
import character_profile from "../image/character_profile@3x.png";
import '../text.css'
import {useState} from 'react';
function Loading(){
    return(
    <div id="loadingBar" style={{display: 'block',marginTop:'20%',textAlign: 'center'}}>
    <img src={character_profile} style={{width:'72px', height:'72px'}} />
    <div style={{position : 'absolute',left:'49.5%',marginTop : '25px',marginLeft:'1px'}}>
    <div className="dot-pulse"/>
    </div>
    <div id="loadingcomment" className="Bold" style={{marginTop : '50px',fontSize : '30px', textAlign : 'center'}}>
    상표 등록 가능성을<br/>검토중입니다.<br/>
    <div id="loadingcomment2" className="Regular" style={{marginTop : '10px',fontSize : '14px', color : '#4a64f5'}}>
    등록가능성이 70% 미만이더라도<br/>변리사 상담으로 출원을 도와드려요.
    </div>
    </div>
    </div>
    )
    }


export default Loading;