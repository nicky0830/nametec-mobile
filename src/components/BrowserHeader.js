import React from 'react'
import styled from 'styled-components';
import nametecLogo from "../image/nametecLogo.png";
import '../text.css'

export default function BrowserHeader(){
return (
        <div style={{marginLeft : '15%',marginRight:'15%'}}>
        <img src={nametecLogo} style={{display: "inline-block",
                        width: "105px",
                        marginTop: "12px"}}/>
        <div className="Bold" style={{display:'inline-block',float:'right',marginTop:'2px',fontSize:'16px'}}>
        <div  style={{display:'inline-block',marginRight : '50px'}}>
        마이페이지
        </div>
        <div style={{display:'inline-block',marginRight : '50px'}}>
        비용 및 절차 안내
        </div>
        <div style={{display:'inline-block',marginRight : '50px'}}>
        고객센터
        </div>
        <div style={{display:'inline-block'}}>
        로그인
        </div>
        </div>

        </div>
)

}

