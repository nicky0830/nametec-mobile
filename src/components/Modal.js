import React from "react"; 
import x_btn from '../image/x_menuicon@3x.png';
import { useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import nametecLogo from "../image/nametecLogo.png";








const Modal = function({display, modalHandler}){ 
    console.log(display);
    const [login, setLogin] = useState(false); 
    const loginHandler = ()=> { 
        setLogin(!login);
    }
    
    return (
    <div id="menuContainer" 
    style={{display: display, 
     position: 'fixed', 
     top: '0px', 
     width: '100%',
     height: '100%', 
     backgroundColor: 'rgba(0, 0, 0, 0.7)', 
     fontFamily: 'Bold', 
     fontSize: '24px',
     maxWidth: '520px', 
     margin: 'auto',
     zIndex : '20000'}}>
    

     <div style={{backgroundColor:'#ffffff', width: '100%'}}>
              <div className = "menuicon1">
              <img src={nametecLogo} class="" style={{display: "inline-block",
                                                              width: "105px",
                                                              transform: "translate(28px)",
                                                              marginTop: "12px"}}/>
              <img src={x_btn} class="" id="xbtn" onClick={modalHandler} style={{cursor:'pointer', width : '18px', float : 'right',  marginRight : '20px', marginTop: '20px' }}/>
             </div>
             <div style={{backgroundColor:'#4a64f5', float:"right",width:"60%",height:"4860.31px"}}>
            {login ?
            <div style={{}}>

            {/* 마이페이지로 이동하면 이 메뉴모달이 닫아져야  */}
            <Link to='/mypage'>
            < span style={{cursor: 'pointer', marginRight: '20px', marginTop: '40px', display:'inline-block', color: "#fff",float:"right"}} onClick={() => modalHandler()}>마이페이지</span>
            </Link>
            </div>  :

            <span 
            style={{float:"right",cursor: 'pointer', marginTop : '40px', marginRight: '20px', display:'inline-block',color: "#fff"}}
            onClick={loginHandler}>로그인</span>
            }
            <Link to ='/costprocess'>
            <div style={{marginTop : '90px', marginLeft: '20px',height : '50px',color: "#fff"}}>
                <span style={{cursor: 'pointer',marginRight: '20px',float:"right"}}>비용 및 절차 안내</span>
             </div>
             </Link>
             <Link to ='/center'>
          <div style={{marginLeft: '20px',color: "#fff"}}>
                 <span style={{cursor: 'pointer',marginRight: '20px',float:"right"}}> 고객센터</span>
             </div>
             </Link>
            <Link to ='/'>
            <div  id="logoutBtn" style={{marginTop : '50px', marginLeft: '20px',color: "#fff"}} >
                 <span style={{cursor: 'pointer', display: login ? 'inline-block' : 'none',marginRight: '20px',float:"right"}} onClick={() => {return loginHandler(), modalHandler()}}> 로그아웃</span>
                 {/* 로그아웃하면 메인화면으로 가고 숨긴다 : 함수 두개가 실행되어야 하니까 실행 시 두 함수가 실행되는 함수 전달*/}
                 {/* Link는 a태그로 변환된다 : 이때 보라색 밑줄 제거하기 위해 1) display: inline-block, color: black 으로 한다  */}
           </div>
           </Link>
    
            <div className="Medium" style={{marginLeft :"30px",fontSize:"15px",marginTop: "100px",marginRight: '20px',float:"right",color :"#ffffff"}}>Copyright©2021 티타티티</div>

            </div>
         </div> 
     </div>
    )

}



export default Modal;

