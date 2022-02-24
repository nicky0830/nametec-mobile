import React, {useState, useEffect} from 'react';
import '../style.css';
import '../text.css';
import TopbarComponentWithoutPage from '../components/Topbarwithoutpage'
import high from '../image/high.png'
import checkgray from '../image/1.png'
import checkblue from '../image/2.png'
import bluearr from '../image/bluearr.jpg'
import rechoice from '../image/re.png'
import {Link} from "react-router-dom";
import Nextbutton from '../components/Nextbutton';
import $ from "jquery";
import af389 from '../image/1f389.png'
function Success(){
const [count, setCount] = useState(2);
const [eventcss, setEventcss] = useState('disabled-link');
useEffect(()=> {
onKeyUP()
    })
const [text, setText] = useState(['선택해제',checkblue,'smallChoiceBoxWhite']);
const [price, setPrice] = useState(212000);
const onClick1 = () => {
        if(text[0]==='선택하기'){
        setText(['선택해제',checkblue,'smallChoiceBoxWhite'])
        setCount(count+1)
        setPrice((count+1)*106000)
        }else{
        setText(['선택하기',checkgray,'smallChoiceBoxBlue'])
        setCount(count-1)
        setPrice((count-1)*106000)
        }
      };
const [text1, setText1] = useState(['선택해제',checkblue,'smallChoiceBoxWhite']);
const onClick2 = () => {
        if(text1[0]==='선택하기'){
        setText1(['선택해제',checkblue,'smallChoiceBoxWhite'])
        setCount(count+1)
        setPrice((count+1)*106000)
        }else{
        setText1(['선택하기',checkgray,'smallChoiceBoxBlue'])
        setCount(count-1)
        setPrice((count-1)*106000)
        }
      };

const onKeyUP = () => {
            if(count>0){
                          $('#next_button').css('background-color', '#4a64f5');
                           $('#dam').css('color', '#ffffff');
                           setEventcss('')
            }
            else {
                    $('#next_button').css('background-color', '#efefef');
                        $('#dam').css('color', '#b7b7b7');
                        setEventcss('disabled-link')
            }
    }
    return(
    <div id="bodydiv" style={{margin : 'auto',maxWidth : '520px', fontFamily: "'Noto Sans KR', sans-serif"}}>
                <TopbarComponentWithoutPage path={'/brandcategoryregister'}/>
                <div className="headLine2 Bold">
                    입력해주신 상표명을<br/>검토해본 결과..
                </div>
                <div className="midbox1">
                        <div style={{paddingTop : '13px', paddingBottom : '11px', borderBottom : '1px solid #e0e0e0', marginRight : '20px', marginLeft : '16px', marginBottom : '20px'}}>
                        <div className="Medium1" style={{marginBottom:'7px'}}><a style={{color:'#4A64F5'}}>지금 바로 상표등록</a><a>을 진행하세요!</a><img src={af389} style={{width : '16px',marginLeft:'3px'}}/></div>
                <img src={high} style={{width : '49px', float : 'left'}}/>
                <a className="Bold" style={{fontSize : '26px',marginLeft : '15px',marginTop : '15px'}}>네임텍상표</a>
                <br/>
                <a className="Medium" style={{fontSize : '16px',color : "#898989",marginLeft : '15px'}}>등록 확률 70%</a>


                </div>
                <div style={{marginLeft : "15px"}}>
                    <a className="Bold" style={{fontSize : '16px'}}>상표등록 가능성이 <a style={{color:"#4a64f5"}}>매우 높습니다!</a></a>
                    <div style={{paddingTop : '7px', paddingBottom : '15px',lineHeight:'1.3'}}>
                        <a className="Regular" style={{fontSize : '12px', color : '#515151'}}>유사한 상표가 없네요!<br/>바로 상표등록 하시고 이름의 주인이 되세요 :)</a>
                        <br/>
                        <a className="Regular" style={{fontSize : '12px', color : '#4a64f5'}}>*상표 보호를 위해 빨리 등록하실 것을 추천해요!</a>

                    </div>
                </div>
                </div>
                <div className="midbox12" style={{paddingBottom : '45px'}}>
                                        <div style={{paddingTop : '13px', paddingBottom : '11px', borderBottom : '1px solid #e0e0e0', marginRight : '20px', marginLeft : '13px', marginBottom : '20px'}}>
                                <div style={{paddingBottom : "10px"}}>
                                <div className='Regular'>
                                <img onClick={onClick1} src={text[1]} style={{width : '20px', float : 'left',marginTop : '3px'}}/>
                                <a className="Bold" style={{fontSize : '16px',marginLeft : '5px',marginTop : '15px'}}>화장품, 세면용품, 향수 등</a>
                                <div style={{cursor:'pointer'}}onClick={onClick1} className={text[2]}>{text[0]}</div>
                                <br/>
                                </div>

                                <div className='Regular' style={{marginTop :'10px'}}>
                                <img onClick={onClick2}src={text1[1]} style={{width : '20px', float : 'left',marginTop : '3px'}}/>
                                    <a className="Bold" style={{fontSize : '16px',marginLeft : '5px',marginTop : '15px'}}>온라인쇼핑몰,스마트스토어</a>
                                       <div style={{cursor:'pointer'}} onClick={onClick2} className={text1[2]}>{text1[0]}</div>
                                                                </div>

                                </div>
                                </div>
                                <div style={{marginLeft : "15px"}}>
                                    <a className="Bold" style={{fontSize : '16px'}}>총계</a>
                                    <div style={{paddingTop : '7px', paddingBottom : '15px'}}>
                                        <a className="Medium" style={{fontSize : '16px', color : '#4a64f5'}}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 <a style={{fontSize : '12px', color : '#898989'}}>(106,000원 X {count}개)</a></a>
                                    </div>
{/*                                     <img src={bluearr} style={{width : '24px',marginTop : '5px'}}/> */}
                                    <Link to="/brandregister">
                                         <img src={rechoice} style={{width : '100px', float : 'right',marginTop : '3px',marginRight:'20px'}}/>
                                        </Link>
                                </div>

                </div>
                <div style={{height : '150px'}}>
                                                </div>
                <Link to="/infomcheck" className={eventcss}>
                            <div id="next_button" className="noto"
                                                 style={{cursor:'pointer', position: 'fixed',bottom:'0px',display: 'flex', alignItems: 'center',justifyContent: 'center', backgroundColor: '#efefef'}}>
                                                <div id="dam" style={{color:'#b7b7b7'}}> 선택완료</div>
                                            </div>
                            </Link>
    </div>
    )
}

export default Success;

