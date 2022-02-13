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

function Pc(){
    return(
    <div>
        <div style={{margin : "0 auto"}}>
        <BrowserHeader/>
        <div style={{paddingLeft:'15%',marginTop:'61px',paddingRight : '15%'}}>
        <div>

        <div style={{textAlign:'left',display:'inline-block'}}>
        <a className="Regular" style={{fontSize:'60px'}}>사장님들 바쁘시죠?</a><br/>
        <a className="Bold" style={{fontSize:'60px',color:'#4a64f5'}}>딱 5분</a><a className="Bold" style={{fontSize:'60px'}}>만 투자하세요</a>
        <div style={{marginTop:'20px',color : '#515151'}}>
        <a className="Regular" style={{fontSize:'20px'}}>네임텍의 </a><a className="Bold" style={{fontSize:'20px'}}>AI변리사</a><a className="Regular" style={{fontSize:'20px'}}>가</a>
        <br/><a className="Regular" style={{fontSize:'20px'}}>간단한 입력만으로 상표 출원을 도와드려요!</a>
        </div>
        <img src={start_button} onClick=""
                                 style={{cursor:'pointer',width : '294px',marginTop : '52px'}}/>
        <img src={kakaoBtn} onClick=""
                                         style={{cursor:'pointer',width : '294px',marginTop : '14px',display:'block'}}/>
        </div>
                <img src={remockup} onClick=""
                                                              style={{cursor:'pointer',width : '648px',height:'592px',position:'absolute',right : '15%',marginTop : '-70px'}}/>
        </div>
        </div>
        <div style={{paddingLeft:'15%',paddingRight : '15%',backgroundColor: '#f5f6ff',marginTop:'60px'}}>
        <div style={{textAlign:'center',paddingTop:'77px',paddingBottom:'96px'}}>
        <a className="Regular" style={{fontSize:'60px'}}>네임텍상표가</a><br/>
        <a className="Bold" style={{fontSize:'60px',color:'#4a64f5'}}>특별한 이유</a>
        <div id="introBox">
        <div id="innerBoxOn">
        <div>
        <a className="Regular" style={{fontSize:'22px'}}>네임텍상표와</a>
        <a className="Bold" style={{fontSize:'22px',color:'#4a64f5'}}> 함께해주신 고객님들</a>
        </div>
        </div>
        <div id="innerBox">
        <a className="Regular" style={{fontSize:'22px',color:'#515151'}}>네임텍 서비스,</a>
        <a className="Bold" style={{fontSize:'22px',color:'#515151'}}> 이런 분들에게 추천합니다</a>
        </div>
        <div id="innerBox">
        <a className="Regular" style={{fontSize:'22px',color:'#515151'}}>시간,비용낭비 없는 </a>
        <a className="Bold" style={{fontSize:'22px',color:'#515151'}}>정확한 AI 시스템</a>
        </div>
        <div id="innerBox">
        <a className="Regular" style={{fontSize:'22px',color:'#515151'}}>가격비교 필요없는 </a>
        <a className="Bold" style={{fontSize:'22px',color:'#515151'}}>최저가 보장제도</a>
        </div>
        <div id="innerBox">
        <a className="Regular" style={{fontSize:'22px',color:'#515151'}}>'상표등록'</a>
        <a className="Bold" style={{fontSize:'22px',color:'#515151'}}> 더이상 미루지 마세요</a>
        </div>
        <img src={xz21sd} onClick="" style={{cursor:'pointer',width : '488px',height:'183px',position:'absolute',marginTop:'-650px'}}/>
        <img src={zxcw132} onClick="" style={{cursor:'pointer',width : '488px',height:'183px',position:'absolute',marginTop:'-450px'}}/>
        <img src={zxcsqe123} onClick="" style={{cursor:'pointer',width : '488px',height:'183px',position:'absolute',marginTop:'-250px'}}/>
        </div>
        </div>
        </div>


        <div style={{paddingLeft:'15%',paddingRight : '15%',paddingBottom:'96px'}}>
                <div style={{textAlign:'center',paddingTop:'77px'}}>
                <a className="Regular" style={{fontSize:'60px'}}>네임텍상표를</a><br/>
                <a className="Bold" style={{fontSize:'60px',color:'#4a64f5'}}>만든 사람들</a>
                </div>
        <div id="introBox" style={{paddingBottom:'97.5px'}}>
        </div>
        </div>
         <div id="introFooter" style={{paddingLeft:'15%',paddingRight : '15%',backgroundColor: '#f5f6ff',height:'116px',lineHeight:'110px'}}>
         <a className="Bold" style={{fontSize:'20px'}}>상표출원은 </a>
         <a className="Bold" style={{fontSize:'20px',color:'#4a64f5'}}>365일,24시간 </a>
         <a className="Bold" style={{fontSize:'20px'}}>아무때나! 카톡 상담은 평일 09:00~18:00</a>
         <img src={kakaoBtn2} onClick="" style={{cursor:'pointer',width : '200px',height:'50px',marginLeft:'60px'}}/>
         <img src={start_button2} onClick="" style={{cursor:'pointer',width : '200px',height:'50px',marginLeft:'44px'}}/>
         </div>
         <div style={{backgroundColor: '#fafafa',height: '489.5px',marginBottom : '116px',paddingLeft:'15%',paddingRight : '15%'}}>
         <div className="Medium" style={{fontSize:'23px',paddingTop:'96px'}}>
         네임텍 사업자 정보
         </div>
         <div className="Light" style={{paddingTop:'17px',fontSize:'18px'}}>
         <a style={{paddingTop:'17px',color:'#898989'}}>대표자 : <a style={{color:'#000000'}}>김현호</a> |</a>
         <a style={{paddingTop:'17px',color:'#898989'}}>주소 : <a style={{color:'#000000'}}>서울특별시 동대문구 약령시로 9길 39 1층 2호</a><br/></a>

         <a style={{paddingTop:'17px',color:'#898989'}}>사업자 등록번호 : <a style={{color:'#000000'}}>439-30-01015</a> |</a>
         <a style={{paddingTop:'17px',color:'#898989'}}>통신판매업 신고번호 : <a style={{color:'#000000'}}>2021-서울동대문-1369</a><br/></a>

          <a style={{paddingTop:'17px',color:'#898989'}}>전화번호 : <a style={{color:'#000000'}}>02-922-5710</a></a>
         </div>
         <div style={{paddingTop:'32px'}}>
         <a className="Medium" style={{fontSize:'18px',color:'#898989'}}>서비스 이용약관 | 개인정보처리방침</a>
         <br/>
         <a className="Light" style={{fontSize:'18px',color:'#000000'}}>Copyright©2021 티타티티. All rights reserved.</a>
         </div>
         <div style={{paddingTop:'28px'}}>
         <img src={icon_phone} onClick="" style={{cursor:'pointer',width : '60px',height:'60px'}}/>
         <img src={icon_insta} onClick="" style={{cursor:'pointer',width : '60px',height:'60px'}}/>
         </div>
         </div>
        </div>
    </div>
    );

}

export default Pc;