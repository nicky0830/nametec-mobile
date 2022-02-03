import React from 'react';
import TopbarComponentWithoutPage from '../components/Topbarwithoutpage'
import GuidelineComponent from '../components/Guideline';
import Nextbutton from '../components/Nextbutton';
import {Link} from "react-router-dom";
import '../style.css';
import x_round from '../image/x_round.png'

function Infomcheck(){
    return (
        <div style={{margin : 'auto',maxWidth : '520px'}}>
            <TopbarComponentWithoutPage path={'/success'}/>
            <div className="headLine2 Bold">
                연락처를 기재해주세요
            </div>
            <div className="Regular" style={{marginLeft : '20px', fontSize : '14px', textAlign : 'left', color : '#4a64f5'}}>
                    결제 후, 상표 출원 진행사항을 알려드리기 위해<br/>정확한 전화번호 및 이메일이 꼭 필요합니다.
                </div>
            <div className=""  style={{width: 'calc(100% - 40px)', paddingLeftdd:'3px',margin: '24px 0 0 20px',  borderBottom: 'solid 2px #e0e0e0' }}>
                    <input type="tel" maxLength="11" name="" className="informchecktext Medium" placeholder="전화번호" style={{border: 'none', color : '#000000',opacity : "0.4" }}/>
                </div>
            <div className=""  style={{width: 'calc(100% - 40px)', paddingLeft:'3px',margin: '24px 0 0 20px',  borderBottom: 'solid 2px #e0e0e0' }}>
                                <input type="tel"  name="" className="informchecktext Medium" placeholder="이메일" style={{border: 'none', color : '#000000',opacity : "0.4"}}/>
                            </div>
            <Link to="/Success3">
            <Nextbutton text={'다음'}/>
            </Link>
        </div>

    )

}

export default Infomcheck;