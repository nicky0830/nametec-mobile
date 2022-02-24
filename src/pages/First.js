import React, {useState, useEffect, useRef} from 'react';
import '../style.css';
import styled from 'styled-components';
import arrowdown from '../data/arrowdown@3x.png';
import arrowup from '../data/arrowup@3x.png';
import MainHeader from '../components/MainHeader';
import BrowserHeader from '../components/BrowserHeader';
import '../text.css'
import remockup from "../image/remockup.png";
import icon_min from "../image/icon_min@2x.png";
import icon_kakao from "../image/icon_kakao@2x.png";
import xz21sd from "../image/xz21sd.png";
import button1 from '../image/button1.png';
import button2 from '../image/button2.png';
import button3 from '../image/button3.png';
import button4 from '../image/button4.png';
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
import mainimg from '../image/mainimg.png'
import kim4 from '../image/kim4.png';
import comparison from '../image/comparison.png';
import process from '../image/process.png';
import mfb from '../image/mfb.png';
import price1 from '../image/price.png';
import unni from '../image/unni.png';
import hana from '../image/hana.png'
import price from '../image/price.png'
import pagearrow from '../image/pagearrow.png'
import { BrowserRouter, Route , Switch as Routes , Link , NavLink, useParams} from 'react-router-dom';
import{
BrowserView,
MobileView,
isBrowser,
IsMobile
} from "react-device-detect";
import $ from 'jquery';
import {useLocation} from 'react-router-dom';





function Intro(){



   


const Dropdown = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  height: 60px;
  margin: 20px auto 20px auto;
  padding: 11px 15.5px 11px 15px;
  border: solid 1px  #e0e0e0;
  background-color:  '#fafafa';
  box-shadow: rgba(0,0,0,0.5);
  border-radius: 5px;
 

  >.dropdowntxt-container{
    display: flex; 
    justify-content: flex-start;
    align-items: center;

  >.dropdown-txt{ 
  padding: 0 10px 0 0;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #000;

}

>.dropdown-help{ 
  font-size: 16px;
  font-stretch: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #000;

}
  }
  



>.dropdown-arrow{ 
  justify-self: flex-end;
  margin: 22px 0;
  width: 20px;
  height: 10px;
}
`

const DropdownContent = styled.div`
  width: 335px;
  height: 283px;
  padding: 20px 15.5px 20px 15px;
  margin: 0px 20px 0px 20px;
  border: solid 1px #e0e0e0;
  background-color: #fafafa;
  display: ${(props) => props.click? 'block' : 'none' };
  
  >.dropdowncontent{ 
    width: 335px;
  height: 54px;
  margin: 0 0 6px;
  font-family: NotoSansCJKKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #515151;
  }
`



const [click1, setClick1] = useState(false)
const [click2, setClick2] = useState(false)

const bottom = useRef(null); 
console.log(bottom.current)

const clickHandler1 = () => { 
    setClick1(!click1);
}

const clickHandler2 = () => { 
    setClick2(!click2);
}


const { pathname } = useLocation();

useEffect(()=> { 
    window.scrollTo(0,0);
}, [pathname]);







    return(
    <div>
{/*     <MobileView> */}

        <div style={{margin : "0 auto", maxWidth: '100vw'}}>

            <MainHeader/>
            <div>
            <div >
                <div className="Bold1" style={{fontSize : "28px",textAlign : "center", marginTop : "50px",lineHeight:'1.2'}}>
                    내 상표, 등록 가능할까요? 
                    <br/>
                     AI 무료진단 받아보세요
                     <a style={{color: '#4a64f5'}}>!</a>
                </div>
                <div style={{fontSize : "14px", textAlign : "center", marginTop : "30px", lineHeight:'1.6'}}>
                    <a className="Light1">AI 진단 후에는 10년 경력의 변리사가
                <br/>
                    추가 검토와 등록을 도와드립니다!
                    </a>
                </div>
            </div>
            <div style={{position:"relative", marginBottom : '20px', width: '100vw'}}>
                <img src={mainimg} style={{position: 'relative',objectFit: 'cover', width : '70%', padding : '0px',margin: '30px 15% 20px 15%', zIndex: '-9999'}}/>
                <div style={{display:'inline-block'}}>
                    <Link to="/brandregister">
                    <button className='Bold1 btn' type="button" id="start_btn" style={{ width: '70%', position : 'absolute', margin:'-110px 15% 0px 15%', cursor:'pointer', padding: '0px'}}>AI 무료 진단 시작하기
                    </button>
                    </Link>
                    <img id="channel-chat-button" src={icon_kakao}
                         style={{cursor: 'pointer', position: 'absolute', objectFit: 'cover', width: '12%', marginTop: '130%', right: '20px', zIndex: '10000', top: '7px'}}/>
                    <a href="#bottom">
                    <img src='https://m.nametec.kr/static/image/zxczxc.png' style={{width: '30px', marginLeft: 'calc(50vw - 10px)'}}/>
                    </a>
                </div>
            </div>
         </div>
            <div style={{paddingTop: '50px',paddingBottom : '50px', backgroundColor: '#fafafa', textAlign : 'center',
             position: 'relative', zIndex: '1', display: 'block'}}>
                <div>
                    <a className="Bold1" style={{fontSize : '28px'}}>
                        가격은 낮춰도
                    <br/>
                        기준은 낮추지 않습니다
                        </a>

                        <a style={{color: '#4a64f5'}}>.</a>
                </div>

                    <div className="Light1" style={{fontSize : "14px", textAlign : "center", marginTop : "30px", lineHeight:'1.6', marginBottom : '30px'}}>

                        비용 부담은 최대한 줄이고,
                    <br/>
                    더욱 꼼꼼하고 정확한 서비스를 제공합니다.
                    </div>
                    <div style={{backgroundColor: '#ffffff', width: '90%', borderRadius: '12px', margin: '0 auto'}}>
                    <img src={comparison} style={{width: '95%', margin: '0px auto', backgroundColor: '#ffffff', padding: '10px 0px 12px 0px', borderRadius: '20px'}}></img>
                     </div>


                <img style={{width: '90%', marginTop: '50px'}} onClick={clickHandler1} src ={click1 ? button3 : button1}/>
                <img src ={process} style={{objectFit: 'contain', width: '90%',height: '500px',margin: '0px auto', padding: '20px 0px',backgroundColor: '#FFFFFF', display: click1 ? 'block' : 'none'}}/>
                    <img style={{width: '90%', marginTop: '15px'}} 
                     onClick={clickHandler2} src={click2 ? button4 : button2 }/>
                    <div style={{textAlign: 'center', paddingTop : '30px', paddingBottom: '30px',
                    margin:'0px auto', backgroundColor: '#ffffff', width: '90%', 
                    display: click2 ? 'block' : 'none' }}>
                 <img src ={price1} style={{ objectFit: 'cover', width: '93%', backgroundColor: '#fffff', margin: '0px auto'}}/>
        {/* <div className="midbox"
        style = {{width: '263px',
        marginLeft: '35px',
        height:'260px',
        padding: '21px',
        borderRadius: '10px',
        boxShadow: '1px 1px 4px 0 rgb(0 0 0 / 10%)',
        backgroundColor: '#fafafa'
        }}>
            <div style={{paddingTop : '11px', paddingBottom : '11px',  marginRight : '20px', marginLeft : '20px', marginBottom : '20px'}}>
            <a className="Medium1" style={{fontSize : '14px'}}>상표 출원 비용</a>
            <br/>
            <br/>
            <a className="Light1" style={{fontSize : '14px'}}>네임텍 수수료</a>
            <a className="Medium1" style={{fontSize : '24px', color : '#4a64f5'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;44,000</a>
            <a className="Light1" style={{fontSize : '14px'}}>원</a>
            <br/>
            <a className="Light1" style={{fontSize : '14px'}}>특허청 관납료</a>
            <a className="Medium1" style={{fontSize : '24px', color : '#b7b7b7'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;62,000</a>
            <a className="Light1" style={{fontSize : '14px'}}>원</a>

            <br/>
            <br/>
            <br/>


            <a className="Medium1" style={{fontSize : '14px'}}>상표 등록 비용</a>
            <br/>
            <br/>
            <a className="Light1" style={{fontSize : '14px'}}>네임텍 수수료</a>
            <a className="Medium1" style={{fontSize : '24px', color : '#4a64f5'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;44,000</a>
            <a className="Light1" style={{fontSize : '14px'}}>원</a>
            <br/>
            <a className="Light1" style={{fontSize : '14px'}}> 특허청 관납료</a>
            <a className="Medium1" style={{fontSize : '24px', color : '#b7b7b7'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;220,140</a>
            <a className="Light1" style={{fontSize : '14px'}}>원</a>
            <a className="Light1" style={{fontSize : '14px', float: 'right', color : '#898989'}}>(10년 기준)</a>


            </div>
       
   
        </div> */}
        <br/>
        <div style={{marginTop: '21px'}}>
        <a className="Medium1" style={{fontSize : '10px', textAlign : 'center', marginTop : '10px', marginBottom: '20px', color: '#515151'}}>
        * 상표 출원비와 등록비를 합친 금액 
        </a>
        <a className="Light1" style={{fontSize : '10px', textAlign : 'center', marginTop : '10px', marginBottom: '20px', color: '#515151'}}>
                    이 상표등록 총 비용입니다
        </a>
        </div>
                <a className="Light1" style={{fontSize : '10px', textAlign : 'center', marginTop : '10px', marginBottom: '20px', color: '#515151'}}>
                *저희보다 더 저렴한 서비스가 있다면, 차액을 보상 해드립니다.
                </a>
                <br/>
                <br/>
                <a href='/costprocess' style={{color: 'black', fontSize: '14px'}}>+더 자세히 알아보기</a>
    </div> 
                </div>

            
            </div>

            <div style={{paddingTop: '50px',paddingBottom :'50px',backgroundColor: '#ffffff', textAlign : 'center',  position: 'relative', zIndex: '1'}}>
            <a className="Bold1" style={{fontSize : '28px'}}>
                        네임텍상표를 이용한
                    </a>
                    <br/>
                    <a className="Bold1" style={{fontSize : '28px'}}>
                        사장님들의 리얼 후기
                        <a style={{color: '#4a64f5'}}>.</a>
                    </a>

                    <img src={hana} style={{objectFit:'cover', width : '86%', marginTop : '45px', marginLeft: '20px'}}/>
                    <img src={mfb} style={{objectFit:'cover', width : '86%', marginTop : '25px', marginLeft: '20px'}}/>
                        <img src={unni}
                             style={{width : '86%',marginTop : '25px',  marginLeft: '10px'}}/>

            </div>

            <div style={{paddingTop: '50px',paddingBottom: '30px',backgroundColor: '#fafafa', textAlign : 'center' }}>
            <a className="Bold1" style={{fontSize : '28px'}}>
                네임텍의 약속
                <a className='Bold1' style={{fontSize:'28px', color: '#4a64f5'}}>.</a>

            </a>
            <img src={kim4} style={{width: '86%', marginTop: '30px', marginBottom: '30px'}}/>

            <div>
               

                <a className="Medium1" style
                ={{fontSize : '16px', boxShadow: 'inset 0 -11px #edeffe', lineHeight: '21px'}}>
                신뢰할 수 있는 네임텍상표</a>
                <div style={{marginTop: '10px'}}>
                <a className="Light1" style={{fontSize : "14px", textAlign : "center", lineHeight: '1.8'}}>
                    상표등록의 모든 과정이 완벽하게 끝날 때 까지
                        <br/>
                        반드시 끝까지 책임지겠습니다.
                        </a>
                </div>
        
                <div style={{marginTop: '10px'}}/>
                <a className="Medium1" style={{fontSize : '16px', boxShadow:'inset 0 -11px #edeffe', lineHeight: '21px'}}>
                       상표 무단 도용 근절
                    </a>
                <div style={{marginTop: '10px'}}>
                <a className="Light1" style={{fontSize : "14px", textAlign : "center", marginTop : "24px", lineHeight: '1.8'}}>
                        고객님의 소중한 상표를 무단 도용,
                        <br/>
                        악의적 선출원 등에서 지켜낼 수 있도록
                         <br/>
                         쉽고 빠르고 정확한 서비스를 제공하겠습니다.
                        </a>
                    </div>
                </div>
            
                <div ref = {bottom} style={{textAlign : 'center', marginTop: '50px', marginBottom: '50px'}}>
                {/* <Link to="/brandregister">
                <button type="button" className="btn" id="start_btn2"
                        style={{position : 'absolute', marginTop : '4%', cursor:'pointer',height:'50px', paddingBottom:'30px', paddingTop: '0px'}}>AI 무료 진단 시작하기
                </button>
                </Link> */}
                {/* <Link to="/brandregister">
                    <button  type="button" className="Bold1 btn" id="start_btn2"
                     style={{position : 'absolute', height:'50px', paddingBottom:'30px', 
                     paddingTop: '0px',  marginTop : '4%', cursor:'pointer', fontSize: '17px', 
                     width: '60%', marginLeft: '-30%'}}>AI 무료 진단 시작하기
                    </button>
                    </Link> */}
                    <Link to="/brandregister">
                    <button className='Regular1 btn' type="button" id="start_btn" 
                    style={{
                    margin: 'auto', marginTop: '30px', marginBottom : '50px',cursor:'pointer', 
                    fontSize: '17px', width: '60%', height: '55px'}}>AI 무료 진단 시작하기
                    </button>
                    </Link>
            </div>
            </div>
           
            <div style={{paddingLeft : '19px', paddingTop : '55px', paddingBottom :'85px'}}>
                <a className="Medium1" style={{fontSize : '14px', color : '#000000'}}>네임텍 사업자 정보</a>
                <div style={{marginTop : '10px', lineHeight : '14px'}}>
                    <a className="Light1" style={{fontSize :' 11px', color : '#898989'}}>대표자 : </a>
                    <a className="Light1" style={{fontSize : '11px', color :'#000000'}}>&nbsp;&nbsp;김현호</a>
                    <br/>
                        <a className="Light1" style={{fontSize : '11px', color : '#898989'}}>주소 : </a>
                    <a className="Light1" style={{fontSize : '11px', color : '#000000'}}>&nbsp;&nbsp;서울특별시
                        동대문구 약령시로 9길 39 1층 2호</a>
                        <br/>
                            <a className="Light1" style={{fontSize : '11px', color : '#898989'}}>사업자등록번호 : </a>
                    <a className="Light1" style={{fontSize : '11px', color : '#000000'}}>&nbsp;&nbsp;439-30-01015</a>
                            <br/>
                                <a className="Light1" style={{fontSize : '11px', color : '#898989'}}>통신판매업 신고번호 : </a>
                    <a className="Light1" style={{fontSize : '11px', color : '#000000'}}>&nbsp;&nbsp;2021-서울동대문-1369</a>
                                <br/>
                                    <a className="Light1" style={{fontSize : '11px', color : '#898989'}}>전화번호 : </a>
                    <a className="Light1" style={{fontSize : '11px', color : '#000000'}}>&nbsp;&nbsp;02-922-5710</a>
                </div>
                <div style={{marginTop : '6px'}}>
                    <a className="Light1" style={{fontSize : "11px" ,color : "#898989"}}
                       href="https://m.nametec.kr/termsofservice">서비스 이용약관 </a>
                    <a className="Light1" style={{fontSize : '11px', color : '#898989' }}>&nbsp;|&nbsp;</a><a
                    className="Light1" style={{fontSize : '11px', color : '#898989'}}
                    href="https://m.nametec.kr/privacypolicy">개인정보처리방침</a>
                </div>
                <div style={{marginTop : '6px'}}>
                    <a className="Light1" style={{fontSize : '11px' ,color : '#000000'}}>Copyright©2021 티타티티. All rights
                        reserved.</a>
                </div>
                <div style={{marginTop : '6px', marginBottom: '20px'}}>
                    <a href="tel:02-922-5710">
                        <img src={icon_phone}
                             style={{cursor:'pointer',width : '36px', float : 'left'}}/>
                    </a>
                    <img src={icon_insta} onClick={()=>{window.location ="https://www.instagram.com/name.tec/"}}
                         style={{cursor:'pointer',width : '36px' ,float : 'left', marginLeft : '7px'}}/>
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
     var bannerTop = document.body.clientHeight-1270+ "px";
    }else{
     var bannerTop = currentTop + floatPosition-10 + "px";
     }
    //이동 애니메이션
    $("#channel-chat-button").stop().animate({
      "top" : bannerTop
    }, 500);

}).scroll();
});

