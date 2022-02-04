import React from "react";
import menu from "../image/menu@3x.png";
import '../text.css'
import {useState} from 'react';
import x_btn from '../image/x_menuicon@3x.png';
import { Link } from 'react-router-dom';
import backarrow from '../data/backarrow@3x.png'; 
import arrow from "../image/arrow@3x.png";
import customer_service_email from '../image/customer_service_email.png';
import customer_service_kakao from '../image/customer_service_kakao.png';
import customer_service_tel from '../image/telimg.png';
import x_round from '../image/x_round.png';
import pass_arrow from '../image/pass_arrow.png';
import nametecLogo from "../image/nametecLogo.png";


const CenterItems = ({question, answer}) => { 

    return ( 
        <details className="det">
        <summary className="suma" style={{width: '90%', marginTop: '10px', marginLeft: '5%', marginBottom: '25px', cursor : 'pointer'}}>{question}
        <img src={pass_arrow}  style={{float:'right', marginTop:'5px'}}/></summary>
        <div style={{backgroundColor:'#efefef', minHeight: '110px', width: '90%', marginLeft: '5%'}}>
            <div style={{marginTop : '-15px', fontSize : '14px', color : '#898989', padding : '22px'}}>{answer}</div>
        </div>
    </details>

    )

}




const Center = () => {
    const [display, setDisplay] = useState('none');


    const modalHandler = () => {
        if (display === 'none') {
            setDisplay('inline-block');
        } else {
            setDisplay('none');
        }
    };


    return (
    
        // 마이페이지 헤더
        <div>
            <div style={{ margin: 'auto', maxWidth: '520px' }}>

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
                        <div className='Bold' style={{ display: 'inline-block', marginTop: '12px', fontSize: '20px', color: "black" }}>고객센터</div>
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

                {/* center */}

<div className="test" style={{maxWidth : '520px', margin:'auto', paddingLeft : '25px', paddingRight: '25px'}}>



    <div style={{backgroundColor: '#4a64f5', height: '184px', paddingTop: '30px'}}>
    <div style={{textAlign:'center', fontSize:'18px', color: '#ffffff', marginTop: '29px'}}>도움이 필요하신가요?</div>
    <div style={{textAlign:'center', fontSize:'12px', color:'#ffffff', marginTop: '6px'}}>평일 09:00 - 18:00</div>

    <div style={{textAlign: 'center', marginTop: '26px'}}>
    
        <div style={{display: 'inline-block'}}><a href={{mailto: 'admin@nametec.kr'}}>
            <img src={customer_service_email}/></a></div>

        <div style={{display: 'inline-block', marginLeft: '71px', marginRight: '71px'}}><a href="#">
            <img src={customer_service_kakao}/></a></div>

        <div style={{display: 'inline-block'}}><a href="tel:02-922-5710">
            <img style={{width:"24px",height :"51px"}}src={customer_service_tel}/></a></div>
    </div>
    </div>

    <div className="inputdiv" style={{marginTop: '41px', width: '90%', marginLeft: '5%', borderBottom: 'solid 1px #e0e0e0', marginBottom: '16px', display: 'block'}}>
    
            <input autoComplete="off" type="text" name="" value="" id="text1" className="textcont" placeholder="검색으로 궁금증을 빠르게 해결해보세요." style={{ border: 'none', width: '90%', fontSize: '16px', color: '#b7b7b7',marginTop: '15px',padding: '1px 2px 1px 2px', marginBottom: '25px' }} />
            <img onClick="eraseInput(text1)" src={x_round} className="x_button" style={{ width: '16px', height: '16px', float: 'right', marginTop: '15px', cursor: 'pointer' }} />
            </div>

            
            <div style={{ fontSize: '18px', color: '#000000', marginLeft: '5%', marginBottom: '25px' }}> 자주 묻는 질문</div>
        <div style={{ fontSize: '16px', color: '#898989' }}>

                <CenterItems question='상표 출원 절차가 어떻게 되나요? ' answer='네임텍은 결제 익일 상표 출원 및 특허청 접수를 원칙으로 하고 있으며, 상표 출원 후 특허청에서 10개월 내지 12개월의 심사를 진행합니다.' />
                <CenterItems question='상표 출원 비용은 얼마나 들까요?' 
                answer='1개 상표 및 1개 상품류(분야)를 기준으로, 네임택은 44,000원의 수수료를 받고 있습니다. 
                특허청 관납료 (62,000원)를 포함 시, 총 106,000원을 일반적으로 부담하시게 됩니다.'/>
                <CenterItems question='상표를 빨리 등록 받을 수 있나요? ' answer='우선심사를 신청하는 경우, 10개월 내지 12개월 걸리는 1차 심사를 1~3개월로 단축 할 수 있습니다. 심사
        를 통과하는 경우 2개월의 출원 공고 기간을 거쳐 등록 할 수 있습니다. 단, 추가비용이 발생하는 점을 감안하셔야 합니다.' />
                <CenterItems question='100% 전액 환불의 기준이 무엇인가요? ' answer='특허청 상표등록심사 과정을 통과하지 못할 시, 저희는 "네임텍 수수료" 및 "특허청 관납료" 전액을 환불 드립니다.' />
                <CenterItems question='상표 등록가능성 결과가 낮은 경우에는 어떻게 하나요? ' answer='상표 등록가능성이 낮은 경우, 변리사와 상담 후 상표 출원을 진행하게 됩니다. 상담 후 진행하지 않을 경우, 전액을 환불해드리니 걱정 마시고 결제를 진행해주세요.' />

                <details className="det">
                    <summary className="suma" style={{width: '90%', marginTop: '10px', marginLeft: '5%', marginBottom: '25px', cursor : 'pointer'}}>'내 상표의 진행 상황을 알고 싶어요.' 
                    <img src={pass_arrow}  style={{float:'right', marginTop:'5px'}}/></summary>
                    <div style={{backgroundColor:'#efefef', minHeight: '110px', width: '90%', marginLeft: '5%'}}>
                        <div style={{marginTop : '-15px', fontSize : '14px', color : '#898989', padding : '22px'}}>
                        상표 출원중이시라면, 
                            <br/> 1.특허청 
                            <a href="http://kdtj.kipris.or.kr/kdtj/searchLogina.do?method=loginTM">키프리스</a>에서 조회해보세요
                            <br/> 
                            (상표출원 후 15일 정도 후에 특허청 DB업데이트가 되어 조회됩니다.)
                            <br/>
                            2. 네임텍의 
                            <a href="https://m.nametec.kr/mypage">마이페이지</a>에서 조회해보세요.
                            </div>
                        </div>
                </details>
                <CenterItems question='분야/상품 선택이 어렵습니다.' answer='어떤 업종을 선택하실 지, 어떤 상표 분류를 선택하실지 어려우시다면, 염려하지 마시고 가장 가깝다고
        생각되는 대표 분야나 상품을 선택하여 신청 해주세요. 네임텍의 변리사가 접수된 내용을 한번 더 점검하고,
        고객님의 상황을 최대한 반영하여 최종적으로 출원을 진행합니다.' />


               
            </div>
    </div>

    </div>
    </div>
   
                
    )};

    export default Center;
        

   






