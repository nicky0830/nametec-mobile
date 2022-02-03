import React from 'react';
import TopbarComponentWithoutPage from '../components/Topbarwithoutpage'
import GuidelineComponent from '../components/Guideline';
import Nextbutton from '../components/Nextbutton';
import {Link} from "react-router-dom";
import '../style.css';
import x_round from '../image/x_round.png'
import couponbtn3 from '../image/couponbtn3.png'


function Success3(){
    return (
        <div style={{margin : 'auto',maxWidth : '520px', fontFamily: "'Noto Sans KR', sans-serif"}}>
            <TopbarComponentWithoutPage path={'/infomcheck'}/>
            <div className="headLine2 Bold">
                출원 진행 전, <br/> 마지막으로 확인해주세요.
            </div>
            <div>
                <div style={{marginRight: 'calc(5% + 102px)', float : 'right',color:'#4a64f5', fontSize:'12px'}}>로고</div>
                <div style={{marginLeft:'5%', color:'#4a64f5', fontSize:'12px',marginTop:'25px'}}>상표명</div>
                <div style={{textAlign: 'center', marginTop: '10px', border: '1px solid rgb(204, 204, 204)', width: '122px', height: '74px', marginRight: '5%', float: 'right', color: 'rgb(137, 137, 137)'}}>로고 없음</div>
                <div id="brandNamea" style={{marginLeft:'5%', color:'#000000', fontSize:'16px',marginBottom:'10px', fontWeight:'700'}}>qwe</div>

                <div style={{marginLeft:'5%', color:'#4a64f5', fontSize:'12px'}}>전화번호</div>
                <div id="lastCheckPhonenumber" style={{marginLeft:'5%', color:'#000000', fontSize:'16px',marginBottom:'10px', fontWeight:'700'}}>01042035721</div>
                <div style={{marginLeft:'5%', color:'#4a64f5', fontSize:'12px'}}>이메일</div>
                <div id="lastCheckEmail" style={{marginBottom : '10px',marginLeft:'5%', color:'#000000', fontSize:'16px',fontWeight:'700',borderBottom : '2px dashed #8989894a',marginRight : '5%',paddingBottom :'18px'}}>vkju96@naver.com</div>



              <div id="" style={{fontSize: '12px',color: '#4a64f5',marginLeft: '20px'}}> 제품/서비스 </div>
                <div className="Regular" style={{fontSize: '16px',color: '#000000',marginLeft: '20px',display: 'inline-block'}}>
                 인플루언서/크리에이터</div>
                 <div style={{float: 'right',marginRight: '5%'}}>
                 <label className="switch">
                 <input type="checkbox" className="chchch"/>
                 <span className="slider round"/>
                 </label>
                 </div>
                 <div id="" style={{fontSize: '12px',color: '#4a64f5',marginRight : '5%',textAlign : 'right',marginTop : '10px'}}> 심사기간 8개월 단축</div>

                  <div style={{marginLeft:'20px',marginRight:'5%',marginTop:'5%',fontSize : "14px"}}>

                   <div style={{display:'block'}}>

                     <div style={{color: '#898989',opacity: '0.7', display:'inline-block',float:'left'}}>특허청 관납료</div>

                     <div className="1st" style={{color:'#515151',display:'inline-block',float:'right'}}>62,000원</div>
                     </div>
                     <br/>


                     <div>
                     <div className="l2">네임텍 수수료</div>
                      <div className="2nd" style={{opacity: '1',color: '#515151',display:'inline-block',float:'right'}}>44,000원</div>
                      </div>

                      <div className="in2" style={{margin:'3px 17px 10px 0px',color:'#898989', display:'inline-block',width:'100%',paddingBottom:'10px',fontSize : "14px"}}>

                       <div className="sucin2" style={{color: '#898989'}}>
                       <p style={{display: 'inline',opacity:' 0.7'}}>상표 출원 예상일</p>
                        <span className="sucin2s">2022-01-19</span></div>

                        <div className="sucin2" style={{color: '#898989'}}>
                        <p style={{display: 'inline',opacity: '0.7'}}>최종 결과 예상일 </p>
                        <span className="sucin2s" style={{color:'#4a64f5'}}>2023-01월 예상</span></div>
                    </div>
                    </div>


<div className="" id="textconcheck" style={{width: 'calc(100% - 40px)', paddingLeft:'3px',margin: '24px 0 0 20px',  borderTop :  '2px dashed #8989894a'}}>
    <div style={{color:'#4a64f5', fontSize:'12px',marginTop : '20px',marginBottom : '10px'}}>할인 내역</div>
    <div style={{height : '30px'}}>
        <div style={{color: '#898989',opacity: '0.7', display:'inline-block',float:'left'}}>쿠폰 할인금액</div>
        <div id="discountAmount1" style={{color: '#515151',display:'inline-block',float:'right',marginRight : '13px'}}>-0원</div>
    </div>
    <div style={{display : 'block'}}>
        <input autoComplete="off" type="text" name="" id="discountAmount" className="informchecktext Medium" placeholder="할인쿠폰 코드입력" style={{border: 'none', color : '#000000',borderBottom: 'solid 2px #e0e0e0',marginTop:'30px',opacity: '0.7'}}/>

    <img id="couponBtn" src={couponbtn3} style={{height:'40px',position :'absolute',marginTop : '30px'}} />
        </div>
    <div id="couponComment" style={{fontSize : '12px', color : '#4a64f5',marginBottom : '20px'}}>

    </div>
    </div>
    <div className="res" style={{maxWidth: '520px'}} id="2222">
        <div style={{paddingBottom: '30px',borderBottom: 'solid 2px #efefef',paddingTop: '24px'}}>
            <div id="mas" style={{display:'inline',float:'left',fontSize:'20px',  fontWeight: '500',marginLeft:'5%',transform: 'translateY(-15px)'}}>총계</div>
            <div id="res" style={{display:'inline',fontWeight: '500',float:'right',fontSize:'20px',marginRight:'5%',transform: 'translateY(-15px)'}}>106,000원</div>
        </div>

    </div>
    <div style={{backgroundColor:'#ffffff',textAlign:'center', width:'100%',boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.14)',position: 'fixed',bottom:' 0px', maxWidth: '520px'}} id="1111">
{/*         <button type="button" id="next_button6" onclick="login3()" style="">출원하기</button> */}
    </div>
            </div>

            <Link to="/payment">
            <Nextbutton text={'출원하기'}/>
            </Link>
        </div>

    )

}

export default Success3;