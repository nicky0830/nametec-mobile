import React from "react";
import menu from "../image/menu@3x.png";
import '../text.css'
import {useState} from 'react';
import x_btn from '../image/x_menuicon@3x.png';
import { Link } from 'react-router-dom';
import backarrow from '../data/backarrow@3x.png'; 
import nametecLogo from "../image/nametecLogo.png";

const MemberInfoItem = ({title, content, button}) => { 
  
    return(
        <div style={{textAlign: 'left', marginBottom: '24px'}} >
                <div className="noto" style={{display: 'inline-block', width: '35%', float: 'left', fontSize:'16px', color: '#898989'}}>{title}</div>
                <div className="noto" id="cusname" style={{display: 'inline-block', fontSize: '16px', color: '#515151'}}>{content}</div>
                <div className="noto" style={{display: typeof button === null ?  null : "inline-block" , float: 'right', fontSize:'16px', color: '#4a64f5', cursor : 'pointer'}} >수정</div>
            </div>

    )
}

const MemberInfoItemWithOutCorrection = ({title, content, button}) => {

    return(
        <div style={{textAlign: 'left', marginBottom: '24px'}} >
                <div className="noto" style={{display: 'inline-block', width: '35%', float: 'left', fontSize:'16px', color: '#898989'}}>{title}</div>
                <div className="noto" id="cusname" style={{display: 'inline-block', fontSize: '16px', color: '#515151'}}>{content}</div>
            </div>

    )
}
const MemberTopbar = () => { 
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
        // 마이페이지 헤더
    <>
        <div style={{margin:'auto', maxWidth:'520px'}}>

             {/* topbar*/}
            <div style={{ top : "0px",
            Width: "100%",
            backgroundColor : "#FFFFFF",
            zIndex :"100",
            maxWidth: "520px",
            margin: "auto",
            display: 'flex', 
            justifyContent: 'space-between',
            height : "55px" }}>
            
            <Link to='/'>
            <img className="topbar-backbutton" src={backarrow} 
            style={{objectFit: 'contain', 
            width: '14px', 
            height: '23px', 
            margin: '16px 0 0 20px'}} 
            alt='<'/>
            </Link>

            <div className='noto' style={{display: 'inline-block', marginTop : '18px', fontSize: '20px' ,fontWeight : '500'}}>회원정보</div>

            <img src={menu} style={{cursor:"pointer",
                display: 'inline-block',
                float : "right",
                width: '22px',
                height: '17px',
                marginTop : "20px",
                marginRight : "20px"}}
                onClick = {modalHandler}/>              
            </div>

            {/* menulist */}
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
    

      <div style={{ backgroundColor: '#ffffff', width: '100%' }}>

                                                         <div className="menuicon1">
                                                         <img src={nametecLogo} class="" style={{display: "inline-block",
                                                                                                                                     width: "105px",
                                                                                                                                     transform: "translate(28px)",
                                                                                                                                     marginTop: "12px"}}/>
                                                             <img src={x_btn} id="xbtn" onClick={modalHandler} style={{ cursor: 'pointer', width: '18px', float: 'right', marginRight: '20px', marginTop: '20px' }} />
                                                         </div>
                                                         <div style={{backgroundColor:'#4a64f5', float:"right",width:"60%",height :"20000px"}}>
                                                         <div className="menuicon1" style={{height : '50px'}}>
                                                                     <Link to='/'>
                                                                     <span style={{cursor: 'pointer', marginRight: '20px', marginTop: '40px',float : "right", display:'inline-block', color: "#fff"}}>메인화면</span>
                                                                     </Link>
                                                                     </div>


                                                                         <Link style={{display:'block',marginTop :"40px",marginRight: '20px'}} to='/costprocess'>
                                                                         <span style={{cursor: 'pointer', color: '#fff', display: 'inline-block',float : "right"}}>비용 및 절차 안내</span>
                                                                         </Link>
                                                                             <Link style={{display:'block',marginTop :"90px",marginRight: '20px'}} to='/center'>
                                                                          <span style={{cursor: 'pointer',color :"#fff",display: 'inline-block',float : "right"}}> 고객센터</span>
                                                                          </Link>


                                                                         <Link style={{display:'block',marginTop :"140px",marginRight: '20px'}} to='/'>
                                                                          <span style={{cursor: 'pointer', color: '#fff', display: 'inline-block',float:"right"}}>로그아웃</span>
                                                                          </Link>

                                                         <div className="Medium" style={{marginLeft :"30px",fontSize:"15px",marginTop: "100px",marginRight: '20px',float:"right",color :"#ffffff"}}>Copyright©2021 티타티티</div>


                                                                     <div style={{height: '33px'}}></div>
                                                     </div>
                                                     </div>
                                                 </div>

            {/* 기본회원정보 */}
            <div style={{fontSize: '18px', color: '#000000', marginLeft: '5%', marginTop: '50px'}} className="Medium">기본 회원 정보</div>
            <div style={{marginLeft: '5%', marginRight: '5%', paddingTop: '30px', fontSize: '16px'}}>
                <MemberInfoItem title='이름' content='곽나경' button/> 
                <MemberInfoItemWithOutCorrection title='이메일' content='kwaknicky@naver.com' button={null}/>
                <MemberInfoItem title='수신 이메일' content='kwaknicky@naver.com' button/> 
                <MemberInfoItem title='휴대폰 번호' content='01099737057' button/> 
                <MemberInfoItemWithOutCorrection title='SNS 연결' content='카카오 연결' button={null}/>
                <div style={{cursor : 'pointer', textAlign: 'center', marginBottom: '24px', fontSize:'16px', color:'#faedef', border:'1px solid #4a64f5', borderRadius: '10px', background: '#4a64f5', paddingTop : '10px', paddingBottom : '10px'}}>
                회원 탈퇴
                </div>
            </div>



        </div>

     </>
     )
     }



export default MemberTopbar;