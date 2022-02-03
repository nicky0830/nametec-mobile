import React from 'react';
import TopbarComponentWithoutPage from '../components/Topbarwithoutpage';
import GuidelineComponent from '../components/Guideline';
import Nextbutton from '../components/Nextbutton';
import {Link} from "react-router-dom";
import '../style.css';
import x_round from '../image/x_round.png'
import arrow from '../image/arrow@3x.png'
import icon_card from '../image/icon_card@2x.png'
import icon_won from '../image/icon_won@2x.png'


function Payment(){
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

                <div id="card" className="midbox3" style={{cursor : 'pointer',paddingLeft :' 16.3px', borderColor : '#4a64f5'}}>
                    <img id="cardimg" src={icon_card} style={{width : '28.9px', marginTop : '13.4px', float : 'left'}}/>
                    <div>
                    <a id="card_text" className="Regular" style={{fontSize : '14px', color : '#515151', position : 'absolute', marginTop : '12.5px', marginLeft : '12.7px'}}>신용 / 체크카드</a>
                        </div>
                </div>

                <div id="cash" className="midbox23" style={{cursor : 'pointer',paddingLeft : '20.8px'}}>
                    <img id="cashimg" src={icon_won} style={{width : '20px', marginTop : '13.4px', float : 'left'}}/>
                    <div>
                    <a id="cashtext" className="Regular" style={{fontSize : '14px', color : '#515151', position : 'absolute', marginTop : '13.5px', marginLeft : '17.2px'}}>계좌이체</a>
                        </div>
                </div>

            </div>




{/*             <button type="button" id="payment_btn" disabled="disabled" style={{cursor : 'pointer',position:'fixed', bottom:'0px',marginTop: '4%',height: '60px', maxWidth : '520px'}}>106,000원 결제하기</button> */}
            <Link to="/payment2">
            <Nextbutton text={'106,000원 결제하기'}/>
            </Link>
        </div>

    )

}

export default Payment;