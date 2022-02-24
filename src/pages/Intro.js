import React from 'react';
import '../style.css';
import MainHeader from '../components/MainHeader';
import BrowserHeader from '../components/BrowserHeader';
import '../text.css'
import remockup from "../image/remockup.png";
import icon_min from "../image/icon_min@2x.png";
import icon_kakao from "../image/icon_kakao@2x.png";
import xz21sd from "../image/xz21sd.png";
import zxcw132 from "../image/zxcw132.png";
import zxcsqe123 from "../image/zxcsqe123.png";
import bl1 from "../image/bl1@.png";
import icon_ai from "../image/icon_ai@2x.png";
import b22x from "../image/b2@2x.png";
import icon_phone from "../image/icon_phone@2x.png";
import icon_insta from "../image/icon_insta@2x.png";
import start_button from "../image/start_button@3x.png";
import start_button2 from "../image/start_button2@3x.png";
import kakaoBtn from "../image/kakaoBtn.png";
import kakaoBtn2 from "../image/kakaoBtn2.png";
import { BrowserRouter, Route , Switch as Routes , Link , NavLink, useParams} from 'react-router-dom';
import{
BrowserView,
MobileView,
isBrowser,
IsMobile
} from "react-device-detect";
import $ from 'jquery';




function Intro(){
    return(
    <div>
{/*     <MobileView> */}
        <div style={{margin : "0 auto",maxWidth : '520px'}}>

            <MainHeader/>
            <div>
                <div className="Regular" style={{fontSize : "30px", textAlign : "center", marginTop : "60px"}}>
                    사장님들 바쁘시죠?
                </div>
                <div className="Bold" style={{fontSize : "30px", textAlign : "center" }}>
                    딱 5분만 투자하세요
                </div>
                <div style={{fontSize : "14px", textAlign : "center", marginTop : "24px"}}>
                    <a className="Light">네임텍의 </a><a className="Medium">AI변리사</a><a className="Light">가 </a>
                </div>
                <div className="Light" style={{fontSize : '14px', textAlign : 'center', marginTop : '5px'}}>
                    간단한 입력만으로 상표 출원을 도와드려요!
                </div>
            </div>
            <div style={{position:"relative"}}>
                <img src={remockup} style={{objectFit: 'cover', width : '100%',padding : '0px', position : 'absolute',marginTop : '20px'}}/>
                <img src={icon_min} style={{position: 'absolute', marginLeft : '65%', objectFit: 'cover', width : '14%', marginTop:'7%'}}/>
                <div style={{paddingLeft: '5%',display:'inline-block'}}>
                    <Link to="/brandregister">
                    <button type="button" id="start_btn" style={{position : 'absolute', marginTop : '70%', cursor:'pointer'}}>AI로 상표등록 시작하기
                    </button>
                    </Link>
                    <img id="channel-chat-button" src={icon_kakao}
                         style={{cursor: 'pointer', position: 'absolute', objectFit: 'cover', width: '12%', marginTop: '76%', right: '20px', zIndex: '1', top: '7px',}}/>

                </div>
            </div>
            <div style={{paddingTop: '60px',paddingBottom :'30px',marginTop: '90%',backgroundColor: '#f5f6ff', textAlign : 'center' }}>
                <div>
                    <a className="Regular" style={{fontSize : '30px'}}>
                        네임텍상표와
                    </a>
                    <br/>
                    <a className="Bold" style={{fontSize : '30px'}}>
                        함께해주신 고객님들
                    </a>
                </div>
                <img src={xz21sd} style={{width: '86%', marginTop: '45px'}}/>
                    <img src={zxcw132} style={{width : '86%',marginTop : '25px'}}/>
                        <img src={zxcsqe123}
                             style={{width : '86%',marginTop : '25px',marginBottom : '50px'}}/>
            </div>
            <div style={{position: 'relative',textAlign: 'center',paddingTop: '130px',paddingBottom: '90px', lineHeight : '1px' }}>
                <a className="Regular" style={{textAlign : 'center', fontSize : '30px'}}>네임텍 서비스,</a>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <a className="Bold" style={{textAlign : 'center', fontSize : '30px'}}>이런 분들에게 추천합니다</a>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <a className="Light" style={{textAlign : 'center', fontSize : '14px', lineHeight: '25px '}}>"상표출원에
                            드는 비용이 너무 비싸요"</a>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <a className="Light" style={{textAlign : 'center', fontSize : '14px', lineHeight: '25px'}}>"전화,
                                대면 상담이 부담스러워요"</a>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                <a className="Light" style={{textAlign : 'center', fontSize : '14px', lineHeight: '25px'}}>"조사비,출원비,등록비,수수료...이해하기
                                    어려워요"</a>
                                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                    <a className="Light"
                                       style={{textAlign : 'center', fontSize : '14px', lineHeight:'25px'}}>"처음 안내받은 비용과 최종
                                        비용이 너무 달라요"</a>
                                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                        <a className="Light"
                                           style={{textAlign : 'center', fontSize : '14px', lineHeight: '25px'}}>"너무 바빠서 상표
                                            출원에 신경 쓸 시간이 없어요"</a>
                                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                            <div style={{lineHeight : '0px'}}></div>
                                            <a className="Light" style={{lineHeight : '0px'}}>.</a>
                                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                                <a className="Light" style={{lineHeight : '0px'}}>.</a>
                                                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                                    <a className="Light" style={{lineHeight : '0px'}}>.</a>
                                                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                                        <a className="Light" style={{fontSize : '18px'}}>네임텍 상표등록은</a>
                                                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                                            <a className="Bold" style={{fontSize : '18px' , color : '#4a64f5'}}>AI 상표 출원
                                                                시스템</a><a className="Light" style={{fontSize : '18px'}}>을
                                                            도입하여,</a>
                                                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                                                <a className="Light" style={{fontSize : '18px'}}>이런 문제를 모두
                                                                    해결했습니다!</a>
            </div>
            <div style={{textAlign : 'center',backgroundColor: '#f5f6ff'}}>
                <br/><br/>
                    <a className="Regular" style={{fontSize : '30px'}}>시간,비용낭비 없는</a>
                    <br/>
                        <a className="Bold" style={{fontSize : '30px'}}>정확한 AI 시스템</a>
                        <br/><br/>
                            <a className="Light" style={{fontSize: '14px'}}>충분한 사전 검토 없는 상표등록은</a>
                            <br/>
                                <a className="Medium" style={{fontSize : '14px'}}>특허청 허가가 나지 않을 수 있습니다!</a>
                                <div>
                                    <img src={bl1} style={{objectFit: 'cover', width : '80%', marginTop : '10%'}}/>
                                </div>
                                <img src={icon_ai} style={{objectFit: 'cover', width : '38%' ,marginTop : '10%'}}/>

                                    <div style={{marginBottom : '20px'}}>
                                        <img src={b22x} style={{objectFit: 'cover', width : '80%', marginTop : '10%'}}/>
                                    </div>
                                    <a className="Light" style={{fontSize : '14px'}}>*상담 후 등록 불가시 100% 환불이 가능합니다.</a>
                                    <br/><br/><br/>
            </div>
            <div style={{textAlign : 'center', lineHeight : '7px', paddingBottom : '77px'}}>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <a className="Regular" style={{fontSize :'30px'}}>가격비교 필요없는</a>
                    <br/><br/><br/><br/>
                        <a className="Bold" style={{fontSize : '30px'}}>최저가 보장제도</a>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <a className="Light" style={{fontSize :'14px'}}>AI로 인건비 비중을 최소화하여</a>
                            <br/><br/><br/>
                                <a className="Medium" style={{fontSize : '14px'}}>업계 최저가 서비스를 제공</a>
                                    <a className="Light" style={{fontSize : '14px'}}>합니다.</a>
                                <br/><br/><br/><br/><br/><br/>
                                    <a className="Regular" style={{fontSize : '14px', color : '#898989',}}>*저희보다 더 저렴한 서비스가
                                        있다면,</a>
                                    <br/><br/><br/>
                                        <a className="Regular" style={{fontSize : '14px',  color : '#898989'}}>차액을
                                            보장해드립니다.</a>

                                        <div id="midbox" style={{backgroundColor: '#f5f6ff',borderRadius: '10px'}}>
                                            <div style={{padding : "16px"}}>
                                                <a className="Medium" style={{fontSize : '14px'}}>상표 출원 비용</a>
                                                <br/><br/><br/><br/><br/><br/>
                                                    <a className="Light" style={{fontSize : '14px'}}>네임텍 수수료</a>
                                                    <a className="Medium"
                                                       style={{fontSize : '24px', color : '#4a64f5'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;44,000</a>
                                                    <a className="Light" style={{fontSize : '14px'}}>원</a>
                                                    <br/><br/><br/><br/>
                                                        <a className="Light" style={{fontSize : '14px'}}>특허청 관납료</a>
                                                        <a className="Medium" style={{fontSize : '24px', color : '#b7b7b7'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;62,000</a>
                                                        <a className="Light" style={{fontSize : '14px'}}>원</a>

                                                        <br/><br/><br/><br/><br/><br/>
                                                            <a className="Medium" style={{fontSize : '14px'}}>상표 등록 비용</a>
                                                            <br/><br/><br/><br/><br/><br/>
                                                                <a className="Light" style={{fontSize : '14px'}}>네임텍
                                                                    수수료</a>
                                                                <a className="Medium"
                                                                   style={{fontSize : '24px', color : '#4a64f5'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;44,000</a>
                                                                <a className="Light" style={{fontSize : '14px'}}>원</a>
                                                                <br/><br/><br/><br/>
                                                                    <a className="Light" style={{fontSize : '14px'}}>특허청
                                                                        관납료</a>
                                                                    <a className="Medium"
                                                                       style={{fontSize : '24px', color : '#b7b7b7'}}>&nbsp;&nbsp;&nbsp;&nbsp;220,140</a>
                                                                    <a className="Light" style={{fontSize : '14px'}}>원</a>
                                                                    <br/><br/><br/>
                                                                        <a className="Light"
                                                                           style={{fontSize : '14px', color : '#898989',marginLeft : '144px'}}>(10년
                                                                            기준)</a>
                                            </div>
                                        </div>

                                        <a className="Light" style={{fontSize : '14px', color :'#898989'}}>*상표 출원비와 상표 등록비를
                                            합친 금액이<br/><br/><br/>상표등록 총 비용입니다</a>
                                        <br/><br/><br/><br/><br/><br/>
                                        <Link to ='/costprocess'>
                                            <a className="Light"
                                               style={{fontSize : '14px',  color: '#000000', textDecoration: 'underline'}}>+
                                                더 자세히 알아보기</a>
                                        </Link>
            </div>
            <div style={{textAlign : 'center', backgroundColor: '#f5f6ff', paddingTop: '50px', paddingBottom : '150px'}}>
                <div>
                    <a className="Bold" style={{fontSize : '30px',  color: '#4a64f5'}}>'상표등록'</a> <br/>
                    <a className="Bold" style={{fontSize : '30px',  color: '#000000'}}>더이상 미루지 마세요</a>
                </div>

                <div style={{marginTop : '24px', marginBottom : '30px'}}>
                    <a className="Light" style={{fontSize : '14px',  color: '#000000'}}>상표등록을 하지 않아 발생하는 피해사례는<br/>지금도 계속
                        발생하고 있습니다.</a>
                </div>
                <div style={{display: 'inline-block', paddingBottom : '24px'}}>
                    <div className="circle" style={{float : 'left'}}>
                        <div style={{paddingTop : '42px'}}>
                            <a className="Medium" style={{fontSize : '14px', color : '#515151'}}>무단 선출원</a>
                        </div>
                    </div>
                    <div className="circle" style={{marginLeft : '126px'}}>
                        <div style={{paddingTop : '42px'}}>
                            <a className="Medium" style={{fontSize : '14px', color : '#515151'}}>악의적 선출원</a>
                        </div>
                    </div>
                    <div className="circle" style={{float : 'left', marginTop : '15px'}}>
                        <div style={{paddingTop : '42px'}}>
                            <a className="Medium" style={{fontSize : '14px', color : '#515151'}}>상표 무단도용</a>
                        </div>
                    </div>
                    <div className="circle" style={{marginLeft : '126px', marginTop : '15px'}}>
                        <div style={{paddingTop : '42px'}}>
                            <a className="Medium" style={{fontSize : '14px', color : '#515151'}}>유사상표</a>
                        </div>
                    </div>
                </div>
                <div>
                    <a className="Regular" style={{fontSize : '20px', color : '#000000'}}>내 브랜드를 지키는 첫 걸음,</a><br/>
                    <a className="Bold" style={{fontSize : '20px', color : '#4a64f5'}}>네임텍과 함께 시작하세요!</a>
                </div>
                <Link to="/brandregister">
                <button type="button" className="btn" id="start_btn2"
                        style={{position : 'absolute', marginTop : '4%', cursor:'pointer',height:'50px'}}>AI로 상표등록 시작하기
                </button>
                </Link>
            </div>
            <div style={{paddingLeft : '19px', paddingTop : '55px', paddingBottom :'85px'}}>
                <a className="Medium" style={{fontSize : '14px', color : '#000000'}}>네임텍 사업자 정보</a>
                <div style={{marginTop : '10px', lineHeight : '14px'}}>
                    <a className="Light" style={{fontSize :' 11px', color : '#898989'}}>대표자 : </a>
                    <a className="Light" style={{fontSize : '11px', color :'#000000'}}>&nbsp;&nbsp;김현호</a>
                    <br/>
                        <a className="Light" style={{fontSize : '11px', color : '#898989'}}>주소 : </a>
                    <a className="Light" style={{fontSize : '11px', color : '#000000'}}>&nbsp;&nbsp;서울특별시
                        동대문구 약령시로 9길 39 1층 2호</a>
                        <br/>
                            <a className="Light" style={{fontSize : '11px', color : '#898989'}}>사업자등록번호 : </a>
                    <a className="Light" style={{fontSize : '11px', color : '#000000'}}>&nbsp;&nbsp;439-30-01015</a>
                            <br/>
                                <a className="Light" style={{fontSize : '11px', color : '#898989'}}>통신판매업 신고번호 : </a>
                    <a className="Light" style={{fontSize : '11px', color : '#000000'}}>&nbsp;&nbsp;2021-서울동대문-1369</a>
                                <br/>
                                    <a className="Light" style={{fontSize : '11px', color : '#898989'}}>전화번호 : </a>
                    <a className="Light" style={{fontSize : '11px', color : '#000000'}}>&nbsp;&nbsp;02-922-5710</a>
                </div>
                <div style={{marginTop : '6px'}}>
                    <a className="Light" style={{fontSize : "11px" ,color : "#898989"}}
                       href="https://m.nametec.kr/termsofservice">서비스 이용약관 </a>
                    <a className="Light" style={{fontSize : '11px', color : '#898989' }}>&nbsp;|&nbsp;</a><a
                    className="Light" style={{fontSize : '11px', color : '#898989'}}
                    href="https://m.nametec.kr/privacypolicy">개인정보처리방침</a>
                </div>
                <div style={{marginTop : '6px'}}>
                    <a className="Light" style={{fontSize : '11px' ,color : '#000000'}}>Copyright©2021 티타티티. All rights
                        reserved.</a>
                </div>
                <div style={{marginTop : '6px'}}>
                    <a href="tel:02-922-5710">
                        <img src={icon_phone}
                             style={{cursor:'pointer',width : '36px', float : 'left'}}/>
                    </a>
                    <img src={icon_insta} onClick={()=>{window.location ="https://www.instagram.com/name.tec/"}}
                         style={{cursor:'pointer',width : '36px' ,float : 'left', marginLeft : '7px'}}/>
                </div>
            </div>
        </div>

    </div>
    );
}

export default Intro;

$(document).ready(function(){
var target = document.getElementById("start_btn2");
var targetTop2 = window.pageYOffset + target.getBoundingClientRect().top;
var floatPosition = parseInt($("#channel-chat-button").css('top'))
// scroll 인식
$(window).scroll(function() {

    // 현재 스크롤 위치
    var currentTop = window.pageYOffset;


    if (currentTop + floatPosition-10 >document.body.clientHeight-1100){
     var bannerTop = document.body.clientHeight-1100+ "px";
    }else{
     var bannerTop = currentTop + floatPosition-10 + "px";
     }
    //이동 애니메이션
    $("#channel-chat-button").stop().animate({
      "top" : bannerTop
    }, 500);

}).scroll();
});

