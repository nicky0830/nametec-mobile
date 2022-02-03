import React from 'react';
import TopbarComponent from '../components/Topbar';
import GuidelineComponent from '../components/Guideline';
import Nextbutton from '../components/Nextbutton';
import {Link} from "react-router-dom";
import '../style.css';
import x_round from '../image/x_round.png';
import character_profile from '../image/character_profile@3x.png';
function Payment2(){
    return (
        <div id="lastPayPage" style={{maxWidth: '520px', margin: 'auto', backgroundColor: 'rgb(74, 100, 245)'}}>
        <div className="" style={{width: '14px', height: '23px', objectFit: 'contain'}}>
        </div>
        <div id="headLine2" className="headLine2" style={{color:'#ffffff'}}>
            결제 완료
        </div>
              <div id="headLine3" className="Light" style={{fontSize : '16px', color :'#edeffe', marginLeft : '20px',marginBottom : '8px'}}>
                  결과는 이메일로 발송되었습니다.
              </div>

        <div id="sum" style={{paddingBottom:'200px',backgroundColor:'#ffffff', paddingLeft: '5%', paddingRight: '5%', borderTopLeftRadius:'15px',borderTopRightRadius:'15px'}}>
            <div>
          <img src={character_profile} style={{marginTop:'24px',width: '72px',position:'absolute'}}/>
            <div id="namep" className="Medium" style={{paddingTop : '35px' , marginLeft : '100px',  fontSize: '18px', fontWeight: '500',marginBottom: '30px', display: 'inlineBlock'}}>강남규님의 <br/> 상표 출원이 신청되었습니다.</div>
                </div>

            <div style={{paddingBottom:'10px', borderBottom:'1px solid #e8e8e8'}}>
            <div>
                <div className="Regular" style={{fontSize:'12px', color: '#4a64f5'}}>상표명</div>
                <div className="Medium" id="brandname" style={{fontSize:'16px', color: '#000000',fontWeight: '500',marginBottom : '10px'}}>qwe</div>
            </div>
            <div>
                <div className="Regular" style={{fontSize:'12px', color:'#4a64f5'}}>전화번호</div>
                <div className="Medium" id="phonenumber" style={{fontSize:'16px', color: '#000000',fontWeight: '500',marginBottom : '10px'}}>010-4203-5721</div>
            </div>
                <div>
                <div className="Regular" style={{fontSize:'12px', color: '#4a64f5'}}>이메일</div>
                <div className="Medium" id="email" style={{fontSize:'16px', color: '#000000',fontWeight: '500',marginBottom : '10px'}}>vkju96@naver.com</div>
            </div>
            </div>

            <div style={{paddingBottom:'20px', paddingTop:'20px', borderBottom:'1px solid #e8e8e8'}}>

            <div className="Regular" style={{fontSize:'12px', color: '#4a64f5'}}>
                제품/서비스
            </div>
            <div style={{display: 'inlineBlock',float:'right'}} id="insertryu">
            </div>
                <div id="btn_value" className="Regular" style={{fontSize:'16px', color: '#898989'}}>인플루언서,크리에이터</div>
            </div>

             <div className="in2" style={{padding:'20px 0 20px 0', margin:'0px',color:'#898989', display:'inlineBlock',width:'100%',borderBottom:'2px solid #898989'}}>
                        <div className="sucin2">상표 출원 예상일 <span className="sucin2s">2022-01월 예상</span></div>
                        <div className="sucin2">최종 결과 예상일 <span className="sucin2s" style={{color:'#4a64f5'}}>2023-01월 예상</span></div>
                        <div className="sucin2">출원 유형 <span id="moremoney" className="sucin2s" style={{color:'#000000'}}>일반출원</span></div>

            </div>

                <div className="noto"style={{width:'100%', marginTop:'20px',  fontWeight: '500',display:'inline',float:'left',fontSize:'25px'}}>결제금액<div id="price" style={{display:'inline',float:'right',fontSize:'25px'}}>150원</div></div>

        </div>


        <div style={{textAlign : 'center', position: 'fixed',maxWidth : '520px',  bottom : '0px',width : '100%'}}>
        <Link to="/">
        <div style={{maxWidth : '520px',justifyContent : 'center', paddingTop:'20px',cursor : 'pointer',alignItems : 'center', width: '100%',marginTop:'10px',textSlign:'center',backgroundColor:'#4a64f5',color:'#ffffff', fontSize:'17px', height:'38px',bottom:'0px',left :'0px',paddingBottom: '5px'}}>
                완료
            </div>
           </Link>
            </div>

        </div>

    )

}

export default Payment2;