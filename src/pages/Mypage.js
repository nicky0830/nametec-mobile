import React from 'react'
import menu from "../image/menu@3x.png";
import '../text.css'
import {useState} from 'react';
import x_btn from '../image/x_menuicon@3x.png';
import { Link } from 'react-router-dom';
import backarrow from '../data/backarrow@3x.png'
import '../text.css';
import Modal from '../components/Modal'







const MypageTopbar = () => { 
    const [display, setDisplay] = useState('none');

    const modalHandler = () => { 
        if(display === 'none'){
            setDisplay('inline-block');
        }else{ 
            setDisplay('none');
        }
        return;
    }


    return (
        <div style={{margin:'auto', maxWidth:'520px'}}>
            <div style={{ top : "0px",
            Width: "100%",
            backgroundColor : "#FFFFFF",
            zIndex :"10010",
            maxWidth: "520px",
            margin: "auto",
            display: 'flex', 
            justifyContent: 'space-between',
            borderBottom : "1px solid #e0e0e0",
            height : "55px" }}>
            
            <Link to='/'>
            <img className="topbar-backbutton" src={backarrow} 
            style={{objectFit: 'contain', 
            width: '14px', 
            height: '23px', 
            margin: '16px 0 0 20px'}} 
            alt='<'/>
            </Link>

            <div className='Bold' style={{display: 'inline-block', marginTop : '12px', fontWeight: '500', fontSize: '20px' }}>마이페이지</div>

            <img src={menu} style={{cursor:"pointer",
                display: 'inline-block',
                float : "right",
                width: '22px',
                height: '17px',
                marginTop : "20px",
                marginRight : "20px"}} 
                onClick = {modalHandler}/>              
        </div>

        <Modal state={display} modalHandler={modalHandler}/>


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

            <div className="menuicon1" style={{height : '50px'}}>
            <Link to='/'>
            <span style={{cursor: 'pointer', marginLeft: '20px', marginTop: '15px', display:'inline-block', color: "black"}}>메인화면</span>
            </Link>
            </div>  
            
 
            <div className="menuicon1"  style={{marginTop : '25px', marginLeft: '20px'}}>
                <span style={{cursor: 'pointer'}}>비용 및 절차 안내</span>
             </div>
          <div className ="menuicon1"  style={{marginTop : '25px', marginLeft: '20px'}}>
                 <span style={{cursor: 'pointer'}}> 고객센터</span>
             </div>
            <div className="menuicon1" id="logoutBtn" style={{marginTop : '25px', marginLeft: '20px'}} >
            <Link to='/'>
                 <span style={{cursor: 'pointer', color: 'black', display: 'inline-block'}}>로그아웃</span>
                 </Link>

           </div>
    
            <div style={{height: '33px'}}></div> 
         </div> 
     </div>

       

                        
        </div>
    )

}

export default MypageTopbar;

