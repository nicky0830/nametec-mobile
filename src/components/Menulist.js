import React from "react"; 
import x_btn from '../image/x_menuicon@3x.png';
import { useState } from "react";



const Modal = function({state, modalHandler}){ 
    const [login, setLogin] = useState(false); 
    const loginHandler = ()=> { 
        setLogin(!login);
        console.log(login);
    }

    
    return (
    <div id="menuContainer" 
    style={{display: state, 
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
            <span style={{cursor: 'pointer', marginLeft: '20px', marginTop: '15px', display:'inline-block'}}>마이페이지</span>
            </div>  : 
            <div class="menuicon1" style={{height : '50px'}}>
            <span 
            style={{cursor: 'pointer', marginTop : '15px', marginLeft: '20px', display:'inline-block'}}
            onClick={loginHandler}>로그인</span>
            </div>}
            
 
            <div className="menuicon1" onClick="anne()" style={{marginTop : '25px', marginLeft: '20px'}}>
                <span style={{cursor: 'pointer'}}>비용 및 절차 안내</span>
             </div>
          <div className ="menuicon1" onClick="center()" style={{marginTop : '25px', marginLeft: '20px'}}>
                 <span style={{cursor: 'pointer'}}> 고객센터</span>
             </div>
            <div className="menuicon1" id="logoutBtn" onClick="logout()" style={{marginTop : '25px', marginLeft: '20px'}}>
                 <span style={{cursor: 'pointer', display: login ? 'block' : 'none' }} onClick={loginHandler}> 로그아웃</span>

           </div>
    
            <div style={{height: '33px'}}></div> 
         </div> 
     </div>
    )

}



export default Modal;

