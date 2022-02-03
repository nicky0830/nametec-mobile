import React, {useState, useEffect} from 'react';
import '../style.css';
import '../text.css';
import TopbarComponentWithoutPage from '../components/Topbarwithoutpage'
import high from '../image/high.png'
import checkgray from '../image/check_gray.jpg'
import checkblue from '../image/check_blue.jpg'
import bluearr from '../image/bluearr.jpg'
import {Link} from "react-router-dom";
import Nextbutton from '../components/Nextbutton';

function Success(){
    return(
    <div style={{margin : 'auto',maxWidth : '520px', fontFamily: "'Noto Sans KR', sans-serif"}}>
                <TopbarComponentWithoutPage path={'/brandcategoryregister'}/>
                <div className="headLine2 Bold">
                    입력해주신 상표명을<br/>검토해본 결과..
                </div>
                <div className="midbox1">
                        <div style={{paddingTop : '13px', paddingBottom : '11px', borderBottom : '1px solid #e0e0e0', marginRight : '20px', marginLeft : '20px', marginBottom : '20px'}}>
                <img src={high} style={{width : '49px', float : 'left'}}/>
                <a className="Bold" style={{fontSize : '26px',marginLeft : '15px',marginTop : '15px'}}>네임텍상표</a>
                <br/>
                <a className="Medium" style={{fontSize : '16px',color : "#898989",marginLeft : '15px'}}>등록 확률 70% 이상</a>


                </div>
                <div style={{marginLeft : "15px"}}>
                    <a className="Bold" style={{fontSize : '16px'}}>상표등록 가능성이 <a style={{color:"#4a64f5"}}>매우 높습니다!</a></a>
                    <div style={{paddingTop : '7px', paddingBottom : '15px'}}>
                        <a className="Regular" style={{fontSize : '12px', color : '#515151'}}>유사한 상표가 없네요!<br/>바로 상표등록 하시고 이름의 주인이 되세요 :)</a>
                        <br/>
                        <a className="Regular" style={{fontSize : '12px', color : '#4a64f5'}}>*상표 보호를 위해 빨리 등록하실 것을 추천해요!</a>

                    </div>
                </div>
                </div>
                <div className="midbox12" style={{paddingBottom : '45px'}}>
                                        <div style={{paddingTop : '13px', paddingBottom : '11px', borderBottom : '1px solid #e0e0e0', marginRight : '20px', marginLeft : '20px', marginBottom : '20px'}}>
                                <div style={{paddingBottom : "10px"}}>
                                <div>
                                <img src={checkgray} style={{width : '20px', float : 'left',marginTop : '3px'}}/>
                                <a className="Bold" style={{fontSize : '16px',marginLeft : '5px',marginTop : '15px'}}>화장품, 세면용품, 향수 등</a>
                                <div className="smallChoiceBoxBlue Regular">선택하기</div>
                                <br/>
                                </div>

                                <div style={{marginTop :'10px'}}>
                                <img src={checkblue} style={{width : '20px', float : 'left',marginTop : '3px'}}/>
                                    <a className="Bold" style={{fontSize : '16px',marginLeft : '5px',marginTop : '15px'}}>온라인쇼핑몰,스마트스토어</a>
                                        <div className="smallChoiceBoxWhite Regular">선택해제</div>
                                                                </div>

                                </div>
                                </div>
                                <div style={{marginLeft : "15px"}}>
                                    <a className="Bold" style={{fontSize : '16px'}}>총계</a>
                                    <div style={{paddingTop : '7px', paddingBottom : '15px'}}>
                                        <a className="Medium" style={{fontSize : '16px', color : '#4a64f5'}}>106,000원 <a style={{fontSize : '12px', color : '#898989'}}>(106,000원 X 1개)</a></a>
                                    </div>
{/*                                     <img src={bluearr} style={{width : '24px',marginTop : '5px'}}/> */}
                                        <div className="Regular" style={{fontSize : '16px', color : '#4a64f5',float :"right",borderBottom : "1px solid #4a64f5",marginRight : "13px"}}>

                                        다시알아보기</div>
                                </div>
                </div>
                <Link to="/infomcheck">
                            <Nextbutton text={'선택 완료'}/>
                            </Link>
    </div>
    )
}

export default Success;