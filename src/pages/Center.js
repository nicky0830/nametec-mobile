import React from "react";
import menu from "../image/menu@3x.png";
import '../text.css'
import {useState, useRef} from 'react';
import x_btn from '../image/x_menuicon@3x.png';
import { Link } from 'react-router-dom';
import backarrow from '../data/backarrow@3x.png'; 
import arrow from "../image/arrow@3x.png";
import customer_service_email from '../image/customer_service_email@3x.png';
import customer_service_kakao from '../image/customer_service_kakao@3x.png';
import customer_service_tel from '../image/telimg.png';
import x_round from '../image/x_round.png';
import pass_arrow from '../image/pass_arrow.png';
import nametecLogo from "../image/nametecLogo.png";
import q1 from '../image/question1.png';
import q2 from '../image/question2.png';
import q3 from '../image/question3.png';



const CenterItems = ({question, answer}) => { 
    const [click, setClick] = useState(false)
    console.log(click)

    const clickHandler = () => { 
        setClick(!click);
    }

    return ( 
    <div onClick={clickHandler}>
        <div style={{position: 'relative', zIndex: '-999'}}>
        <img src={question} style={{width: '90%', marginTop: '10px', marginLeft: '5%', cursor : 'pointer', zIndex: '-999'}}/>
        <div style={{position: 'absolute', top:'40%', right: '10%',float: 'right', zIndex: '999'}}>
        <img src={pass_arrow}/>
        </div>
        </div>
        
        <div style={{backgroundColor:'#fafafa', minHeight: '110px', width: '90%', marginLeft: '5%', display: click ? 'block' : 'none'}}>
            <div style={{marginTop : '-15px', fontSize : '14px', color : '#898989', padding : '22px'}}>{answer}</div>
        </div>
</div>

    )

}




const Center = () => {
    const [display, setDisplay] = useState('none');
    const [color, setColor] = useState('#e0e0e0')
    const input = useRef(null)

    const colorHandler = () => { 
        setColor('rgb(74 100 245)')
    }


    const modalHandler = () => {
        if (display === 'none') {
            setDisplay('inline-block');
        } else {
            setDisplay('none');
        }
    };

    const eraseInput = () => { 
        input.current.value = '';
    }


    return (
    
        // ??????????????? ??????
        <div>
            <div style={{ margin: 'auto', maxWidth: '520px', marginBottom: '50px' }}>

                {/* topbar*/}
                <div style={{
                    top: "0px",
                    Width: "100%",
                    backgroundColor: "#FFFFFF",
                    zIndex: "100",
                    maxWidth: "520px",
                    margin: "auto",
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: "1px solid #e0e0e0",
                    height: "55px"
                }}>

                    <Link to='/'>
                        <img className="topbar-backbutton" src={backarrow}
                            style={{
                                objectFit: 'contain',
                                width: '14px',
                                height: '23px',
                                margin: '16px 0 0 20px'
                            }}
                            alt='<' />
                    </Link>

                    <Link to='/center'>
                        <div className='Bold' style={{ display: 'inline-block', marginTop: '12px', fontSize: '20px', color: "black" }}>????????????</div>
                    </Link>

                    <img src={menu} style={{
                        cursor: "pointer",
                        display: 'inline-block',
                        float: "right",
                        width: '22px',
                        height: '17px',
                        marginTop: "20px",
                        marginRight: "20px"
                    }}
                        onClick={modalHandler} />
                </div>

                {/* modal */}
                <div id="menuContainer"
                    style={{
                        display: display,
                        position: 'fixed',
                        top: '0px',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        fontFamily: 'Bold',
                        fontSize: '24px',
                        maxWidth: '520px',
                        margin: 'auto',
                        zIndex: '20000'
                    }}>


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
                                                                <span style={{cursor: 'pointer', marginRight: '20px', marginTop: '40px',float : "right", display:'inline-block', color: "#fff"}}>????????????</span>
                                                                </Link>
                                                                </div>


                                                                    <Link style={{display:'block',marginTop :"40px",marginRight: '20px'}} to='/costprocess'>
                                                                    <span style={{cursor: 'pointer', color: '#fff', display: 'inline-block',float : "right"}}>?????? ??? ?????? ??????</span>
                                                                    </Link>
                                                                        <Link style={{display:'block',marginTop :"90px",marginRight: '20px'}} to='/center'>
                                                                     <span style={{cursor: 'pointer',color :"#fff",display: 'inline-block',float : "right"}}> ????????????</span>
                                                                     </Link>


                                                                    <Link style={{display:'block',marginTop :"140px",marginRight: '20px'}} to='/'>
                                                                     <span style={{cursor: 'pointer', color: '#fff', display: 'inline-block',float:"right"}}>????????????</span>
                                                                     </Link>

                                                    <div className="Medium" style={{marginLeft :"30px",fontSize:"15px",marginTop: "100px",marginRight: '20px',float:"right",color :"#ffffff"}}>Copyright??2021 ????????????</div>


                                                                <div style={{height: '33px'}}></div>
                                                </div>
                                                </div>
                                            </div>

                {/* center */}

<div className="test" style={{maxWidth : '520px', margin:'auto'}}>



    <div style={{backgroundColor: '#4a64f5', height: '184px', paddingTop: '30px'}}>
    <div style={{textAlign:'center', fontSize:'18px', color: '#ffffff', marginTop: '29px'}}>????????? ???????????????????</div>
    <div style={{textAlign:'center', fontSize:'12px', color:'#ffffff', marginTop: '6px'}}>?????? 09:00 - 18:00</div>

    <div style={{textAlign: 'center', marginTop: '26px'}}>
    
        <div style={{display: 'inline-block'}}><a href={{mailto: 'admin@nametec.kr'}}>
            <img src={customer_service_email} style={{width: '35px', height: 'auto'}}/></a></div>

        <div style={{display: 'inline-block', marginLeft: '71px', marginRight: '71px'}}><a href="#">
            <img src={customer_service_kakao} style={{width: '45px', height: 'auto'}}/></a></div>

        <div style={{display: 'inline-block'}}><a href="tel:02-922-5710">
            <img style={{width:"24px",height :"51px"}}src={customer_service_tel}/></a></div>
    </div>
    </div>

    <div className="inputdiv" style={{marginTop: '41px', width: '90%', marginLeft: '5%', borderBottom: `solid 1px ${color}`, marginBottom: '16px', display: 'block'}}>
    
            <input ref={input} onClick={colorHandler} autoComplete="off" type="text" name="" defaultValue="" id="text1" className="textcont" placeholder="???????????? ???????????? ????????? ??????????????????." style={{ border: 'none', width: '90%', fontSize: '16px',marginTop: '15px',padding: '1px 2px 1px 2px', marginBottom: '25px', caretColor: color }} />
            <img onClick={eraseInput} src={x_round} className="x_button" style={{ width: '16px', height: '16px', float: 'right', marginTop: '15px', cursor: 'pointer' }} />
            </div>

            
            <div style={{ fontSize: '18px', color: '#000000', marginLeft: '5%', marginBottom: '25px' }}> ?????? ?????? ??????</div>
        <div style={{ fontSize: '16px', color: '#898989' }}>

                <CenterItems question={q1} answer='???????????? ?????? ?????? ?????? ?????? ??? ????????? ????????? ???????????? ?????? ?????????, ?????? ?????? ??? ??????????????? 10?????? ?????? 12????????? ????????? ???????????????.' />
                <CenterItems question={q2}
                answer='1??? ?????? ??? 1??? ?????????(??????)??? ????????????, ???????????? 44,000?????? ???????????? ?????? ????????????. 
                ????????? ????????? (62,000???)??? ?????? ???, ??? 106,000?????? ??????????????? ??????????????? ?????????.'/>
                <CenterItems question={q3} answer='??????????????? ???????????? ??????, 10?????? ?????? 12?????? ????????? 1??? ????????? 1~3????????? ?????? ??? ??? ????????????. ??????
        ??? ???????????? ?????? 2????????? ?????? ?????? ????????? ?????? ?????? ??? ??? ????????????. ???, ??????????????? ???????????? ?????? ??????????????? ?????????.' />

               
            </div>
    </div>

    </div>
    </div>
   
                
    )};

    export default Center;
        

   






