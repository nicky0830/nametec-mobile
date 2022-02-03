import React from "react";
import menu from "../image/menu@3x.png";
import '../text.css'
import {useState} from 'react';
import x_btn from '../image/x_menuicon@3x.png';
import { Link } from 'react-router-dom';
import backarrow from '../data/backarrow@3x.png';
import nametecLogo from "../image/nametecLogo.png";

const CostProcessContent = () => {
    return (

    <div style={{textAlign: 'center', paddingTop : '49.5px'}}>
        <div className="midbox"
        style = {{width: '88%',
        margin: '24px 0 21.3px',
        marginLeft: '6.3%',
        borderRadius: '10px',
        boxShadow: '1px 1px 4px 0 rgb(0 0 0 / 10%)',
        backgroundColor: '#ffffff'
        }}>
            <div style={{paddingTop : '13px', paddingBottom : '11px', borderBottom : '1px solid #e0e0e0', marginRight : '20px', marginLeft : '20px', marginBottom : '20px'}}>
            <a className="Medium" style={{fontSize : '14px'}}>1단계 : 상표 출원</a>
            <br/>
            <br/>
            <a className="Light" style={{fontSize : '14px'}}>네임텍 수수료</a>
            <a className="Medium" style={{fontSize : '24px', color : '#4a64f5'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;44,000</a>
            <a className="Light" style={{fontSize : '14px'}}>원</a>
            <br/>
            <a className="Light" style={{fontSize : '14px'}}>특허청 관납료</a>
            <a className="Medium" style={{fontSize : '24px', color : '#b7b7b7'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;62,000</a>
            <a className="Light" style={{fontSize : '14px'}}>원</a>
            </div>
            <a className="Medium" style={{fontSize : '14px'}}>“특허청에 상표 등록심사를 요청합니다”</a>
        <div style={{paddingTop : '16px', paddingBottom : '15px'}}>
        <a className="Light" style={{fontSize : '14px', color : '#898989'}}>
            · 충분한 사전 검토 없는 상표 출원은 특허청 허가가
        <br/>
            나지 않을 수 있으므로,
        </a>
        <a className="Medium" style={{fontSize : '14px', color : '#515151'}}>AI 기술을 활용한
        <br/>
        사전 법률 진단을 진행한 후 출원 신청을 진행합니다.</a>
        </div>
    <div style={{paddingBottom : '16px'}}>
        <a className="Light" style={{fontSize : '14px', color : '#898989'}}>· 서비스 수수료에는</a>
        <a className="Medium" style={{fontSize : '14px', color : '#515151'}}>사전 법률 진단과
        <br/>
        특허청 출원 신청 대행료가 모두 포함</a>
        <a className="Light" style={{fontSize : '14px', color : '#898989'}}>되어 있습니다.</a>
    </div>
        </div>
    </div>



    )
    }

const Dots = () => {

return (
    <div style={{lineHeight: '6px', color : '#b7b7b7', position: 'absolute', left : '50%', marginTop : '-22px'}}>
    <a>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/></a>
</div>
)
}


const CostProcessContent2 = () => {

return (
    <>
    <div style={{textAlign: 'center'}}>
        <div className="midbox"
        style = {{width: '88%',
        margin: '52px 0 21.3px',
        marginLeft: '6.3%',
        borderRadius: '10px',
        boxShadow: '1px 1px 4px 0 rgb(0 0 0 / 10%)',
        backgroundColor: '#ffffff'
        }}>

        <div className="" style={{ marginTop: '52px' }}>
            <div style={{ paddingTop: '16px' }}>
                <a className="Medium" style={{ fontSize: '14px' }}>2단계 : 특허청 심사</a>
            </div>
            <div style={{ paddingTop: '11px', paddingBottom: '10px', borderBottom: '1px solid #e0e0e0', marginRight: '20px', marginLeft: '20px', marginBottom: '11px' }}>
                <a className="Medium" style={{ fontSize: '24px', color: '#4a64f5'}}>10</a>
                <a className="Medium" style={{ fontSize: '14px', color: '#4a64f5' }}>개월 소요</a>
            </div>
        <a className="Medium" style={{ fontSize: '14px', color: '#000000' }}>“상표 등록 가능 여부를 결정합니다”</a>

        <div style={{paddingTop : '16px', paddingBottom : '15px'}}>
                <a className="Light" style={{fontSize : '14px', color : '#898989'}}>· 특허청에서 법률 검토를 진행 후,</a>
                <br/>
                <a className="Medium" style={{fontSize : '14px', color : '#515151'}}>상표 등록 가능 여부를 결정하는 단계</a>
                <a className="Light" style={{fontSize : '14px', color : '#898989'}}>입니다.</a>
        </div>

        <div style={{paddingBottom : '16px'}}>
            <a className="Light" style={{fontSize : '14px', color : '#898989'}}>· 추가 설명 및 소명 자료를 요청하는 경우가<br/> 발생할 시,</a>
            <a className="Medium" style={{fontSize : '14px', color : '#515151'}}>저희 네임텍 변리사가 무료로 대응</a>
            <a className="Light" style={{fontSize : '14px', color : '#898989'}}>합니다.</a>
        </div>
        </div>
        </div>

        <div style={{lineHeight: '6px', color : '#b7b7b7', position: 'absolute', left : '50%', marginTop : '-22px'}}>
            <a>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/></a>
            </div>

            <div className="midbox"
        style = {{width: '88%',
        margin: '52px 0 21.3px',
        marginLeft: '6.3%',
        borderRadius: '10px',
        boxShadow: '1px 1px 4px 0 rgb(0 0 0 / 10%)',
        backgroundColor: '#ffffff'
        }}>
                <div className="" style={{marginTop : '52px'}}>
                    <div style= {{paddingTop : '16px', paddingBottom : '10px'}}>
                        <a className="Medium" style={{fontSize : '14px'}}>3단계 : 상표 등록</a>
                    </div>
                    <a className="Light" style={{fontSize : '14px'}}>네임텍 수수료</a>
                    <a className="Medium" style={{fontSize : '24px', color : '#4a64f5'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;44,000</a>
                    <a className="Light" style={{fontSize : '14px'}}>원</a>
                    <br/>
                        <a className="Light" style={{fontSize : '14px'}}>특허청 관납료</a>
                        <a className="Medium" style={{fontSize : '24px', color : '#b7b7b7'}}>&nbsp;&nbsp;&nbsp;&nbsp;220,140</a>
                        <a className="Light" style={{fontSize : '14px'}}>원</a>
                        <div style={{paddingBottom : '15px'}}>
                            <a className="Light" style={{fontSize : '14px', color :  '#898989', marginLeft : '144px', marginTop : '-5px'}}>(10년 기준)</a>
                        </div>
                </div>
                </div>

                <div style={{lineHeight: '6px', color : '#b7b7b7', position: 'absolute', left : '50%', marginLeft : '-6.5px;', marginTop : '-10px'}}>
                    <a className="Regular" style={{fontSize :'24px', color : '#b7b7b7'}}>+</a>
                </div>
                <div className="midbox2" style={{marginTop : '29px', width: '88%',
                      margin: '24px 0 21.3px',
                      marginLeft: '6.3%',
                      borderRadius: '10px',
                      boxShadow: '1px 1px 4px 0 rgb(0 0 0 0.1)',
                      backgroundColor: '#edeffe'}}>
                    <div style={{paddingTop : '16px', paddingBottom : '9px'}}>
                        <a className ="Medium" style={{fontSize : '14px'}}>&lt;선택사항 : 출원 심사 단축&gt;</a>
                    </div>
                    <a className="Light" style={{fontSize : '14px'}}>서비스 수수료</a>
                    <a className="Medium" style={{fontSize : '24px', color : '#4a64f5'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;44,000</a>
                    <a className="Light" style={{fontSize : '14px'}}>원</a>
                    <br/>
                        <a className="Light" style={{fontSize : '14px'}}>특허청 관납료</a>
                        <a className="Medium" style={{fontSize : '24px', color : '#b7b7b7'}}>&nbsp;&nbsp;&nbsp;&nbsp;160,000</a>
                        <a className="Light" style={{fontSize : '14px'}}>원</a>
                        <div style={{paddingBottom : '16px', paddingTop : '16px', marginTop : '16px', marginRight : '20px', marginLeft : '20px', borderTop : '1px solid #e0e0e0'}}>
                            <a className ="Medium" style={{fontSize : '14px'}}>“특허청 심사 기간을 단축합니다”</a>
                        </div>
                        <div style={{paddingBottom : '16px'}}>
                            <a className="Light" style={{fontSize : '14px', color : '#898989'}}>· 기존의 10개월 정도 걸리는 심사 기간을</a>
                            <br/>
                                <a className="Medium" style={{fontSize : '14px', color : '#515151'}}>약 2개월 정도 수준으로 단축</a>
                                <a className="Light" style={{fontSize : '14px', color : '#898989'}}>할 수 있는 옵션입니다.</a>
                            </div>
                </div>
            </div>

            </>
                )
            }




                const CostProcessComponent = () => {
                const [display, setDisplay] = useState('none');


                const modalHandler = () => {
                if(display === 'none'){
                    setDisplay('inline-block')
                }else{
                setDisplay('none')
                }

                }


                return (
                // 마이페이지 헤더
                <>
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

                            <Link to='/costprocess'>
                            <div className='Bold' style={{ display: 'inline-block', marginTop: '12px', fontSize: '20px', color: 'black' }}>비용 및 절차 안내</div>
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

                        {/* 비용 및 절차 내용 */}
                        <CostProcessContent />
                        <Dots />
                        <CostProcessContent2/>


                    </div>
                </>
                )
                }

                export default CostProcessComponent;