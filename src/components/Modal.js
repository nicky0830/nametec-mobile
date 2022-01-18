import React from "react"; 
import x_btn from '../image/x_menuicon@3x.png';
import { useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';









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
              <img src={x_btn} class="" id="xbtn" onClick={modalHandler} style={{cursor:'pointer', width : '18px', float : 'right',  marginRight : '20px', marginTop: '20px' }}/>
             </div>
            {login ?  
            <div className="menuicon1" style={{height : '50px'}}>

            {/* 마이페이지로 이동하면 이 메뉴모달이 닫아져야  */}
            <Link to='/mypage'>
            < span style={{cursor: 'pointer', marginLeft: '20px', marginTop: '15px', display:'inline-block', color: "black"}} onClick={() => modalHandler()}>마이페이지</span>
            </Link>
            </div>  : 
            <div class="menuicon1" style={{height : '50px'}}>
            <span 
            style={{cursor: 'pointer', marginTop : '15px', marginLeft: '20px', display:'inline-block'}}
            onClick={loginHandler}>로그인</span>
            </div>}
 
            <div className="menuicon1" onClick="anne()" style={{marginTop : '25px', marginLeft: '20px'}}>
                <Link to='/costprocess'>
                <span style={{cursor: 'pointer', color: 'black', block : 'inline-block'}}>비용 및 절차 안내</span>
                </Link>
             </div>
          <div className ="menuicon1" onClick="center()" style={{marginTop : '25px', marginLeft: '20px'}}>
              <Link to ='/center'>
                 <span style={{cursor: 'pointer', color: 'black', block : 'inline-block'}}> 고객센터</span>
                 </Link>
             </div>
            <Link to ='/'>
            <div className="menuicon1" id="logoutBtn" style={{marginTop : '25px', marginLeft: '20px'}} >
                 <span style={{cursor: 'pointer', display: login ? 'inline-block' : 'none', color: 'black'}} onClick={() => {return loginHandler(), modalHandler()}}> 로그아웃</span>
                 {/* 로그아웃하면 메인화면으로 가고 숨긴다 : 함수 두개가 실행되어야 하니까 실행 시 두 함수가 실행되는 함수 전달*/}
                 {/* Link는 a태그로 변환된다 : 이때 보라색 밑줄 제거하기 위해 1) display: inline-block, color: black 으로 한다  */}
           </div>
           </Link>
    
            <div style={{height: '33px'}}></div> 
         </div> 
     </div>
    )

}



export default Modal;

