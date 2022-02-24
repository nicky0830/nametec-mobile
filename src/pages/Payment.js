import React , {useState, useEffect}from 'react';
import TopbarComponentWithoutPage from '../components/Topbarwithoutpage';
import GuidelineComponent from '../components/Guideline';
import Nextbutton from '../components/Nextbutton';
import {Link} from "react-router-dom";
import '../style.css';
import x_round from '../image/x_round.png'
import arrow from '../image/arrow@3x.png'
import icon_card from '../image/icon_card@2x.png'
import icon_card_blue from '../image/icon_cardblue@2x.png'
import icon_won from '../image/icon_won@2x.png'
import icon_won_blue from '../image/icon_wonblue@2x.png'
import $ from 'jquery';

function Payment(){
useEffect(()=> {
btnCheck()
    })
const [cardCount, setCardCount] = useState(0);
const [cashCount, setCashCount] = useState(0);
const [cardImg, setCardImg] = useState([icon_card]);
const [cashImg, setCashImg] = useState([icon_won]);
const [eventcss, setEventcss] = useState('disabled-link');
const cardCheck = () => {
            if(cardCount===0){
            setCardCount(1)
            if(cashCount===1){
            cashCheck()

            }
                          $('#card_text').css('color', 'rgb(74, 100, 245)');
                           $('#card').css('border', 'solid 1px #4f63ec');
                           $('#card').css('background-color', '#edefff');
                           setCardImg([icon_card_blue])
            }
            else {
           setCardCount(0)
                    $('#card_text').css('color', 'rgb(81, 81, 81)');
                    $('#card').css('border', '');
                $('#card').css('background-color', '#ffffff');
                setCardImg([icon_card])
            }
    }
const btnCheck = () => {
            if(cardCount===1 || cashCount===1){
                          $('#next_button').css('background-color', '#4a64f5');
                          setEventcss('')
                           $('#dam').css('color', '#ffffff');
            }
            else {
                    $('#next_button').css('background-color', '#efefef');
                        $('#dam').css('color', '#b7b7b7');
                        setEventcss('disabled-link')
            }
    }
const cashCheck = () => {
            if(cashCount===0){
            setCashCount(1)
            if(cardCount===1){
                        cardCheck()

                        }
                          $('#cashtext').css('color', 'rgb(74, 100, 245)');
                           $('#cash').css('border', 'solid 1px #4f63ec');
                           $('#cash').css('background-color', '#edefff');
                           setCashImg([icon_won_blue])
            }
            else {
           setCashCount(0)
                    $('#cashtext').css('color', 'rgb(81, 81, 81)');
                    $('#cash').css('border', '');
                $('#cash').css('background-color', '#ffffff');
                setCashImg([icon_won])
            }
    }
    return (
        <div style={{margin : 'auto',maxWidth : '520px'}}>

                <TopbarComponentWithoutPage path={'/Success3'}/>




            <div style={{paddingLeft : '20px'}}>

            <div className="Bold" style={{fontSize : '30px', paddingTop : '43.2px'}}>
                결제하기 <br/>
            </div>
            <div className="Regular" style={{fontSize:'16px',color:'#515151',marginTop: '50px',fontWeight: '500'}}>
                결제 수단을 선택해주세요
            </div>

                <div id="card" onClick={cardCheck} className="midbox3" style={{cursor : 'pointer',paddingLeft :' 16.3px', borderColor : '#4a64f5'}}>
                    <img id="cardimg" src={cardImg[0]} style={{width : '28.9px', marginTop : '13.4px', float : 'left'}}/>
                    <div>
                    <a id="card_text" className="Regular" style={{fontSize : '14px', color : '#515151', position : 'absolute', marginTop : '15.5px', marginLeft : '12.7px'}}>신용 / 체크카드</a>
                        </div>
                </div>

                <div id="cash" onClick={cashCheck} className="midbox23" style={{cursor : 'pointer',paddingLeft : '20.8px'}}>
                    <img id="cashimg" src={cashImg[0]} style={{width : '20px', marginTop : '13.4px', float : 'left'}}/>
                    <div>
                    <a id="cashtext" className="Regular" style={{fontSize : '14px', color : '#515151', position : 'absolute', marginTop : '15.5px', marginLeft : '17.2px'}}>계좌이체</a>
                        </div>
                </div>

            </div>




{/*             <button type="button" id="payment_btn" disabled="disabled" style={{cursor : 'pointer',position:'fixed', bottom:'0px',marginTop: '4%',height: '60px', maxWidth : '520px'}}>106,000원 결제하기</button> */}
            <Link to="/payment2" className={eventcss}>
            <div id="next_button" className="noto"
                                             style={{cursor:'pointer', position: 'fixed',bottom:'0px',display: 'flex', alignItems: 'center',justifyContent: 'center', backgroundColor: '#efefef'}}>
                                            <div id="dam" style={{color:'#b7b7b7'}}> 106,000원 결제하기</div>
                                        </div>
            </Link>
        </div>

    )

}

export default Payment;