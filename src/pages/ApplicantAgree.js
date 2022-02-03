import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom'
import { DotCircleBar } from './ApplicantInfo';
import box from '../image/box@3x.png';
import question from '../image/question_mark.png';
import check from '../image/check_gray@3x.png';
import arrow from "../image/arrow@3x.png";
import grc from '../image/grc@2x.png';
import blc from '../image/blc@2x.png';



const ApplicantAgree = () => {
const [check, setCheck] = useState(true)
const clickHandler = () => { 
        setCheck(!check);
}
return (
<div className='test' style={{width: '520px', margin:'auto', marginBottom: '100px'}}>
<div>


</div>


<div id="page4" >
    <div className="headLine Bold" 
    
    style={{ 
        marginTop: '8px',
        marginLeft: '20px',
        fontSize: '30px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.27',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#000000'}}>
        출원 내용 최종 동의 <br/>
    </div>

    <div className="Regular" style={{marginTop:'47px', marginLeft:'5%', fontSize:'12px', color : '#4a64f5'}}>
        상표명
    </div>
    <div id="real_logo_id" className="Medium" style={{marginTop : '4px', marginLeft:'5%', fontSize:'16px'}}>
        네임텍상표
    </div>
    <div className="Regular" style={{marginTop:'20px', marginLeft:'5%', fontSize:'12px', color : '#4a64f5'}}>
        로고
    </div>
    <div id="logoinsert" style={{textAlign : 'center', marginTop: '10px', border: 'solid 1px #ccc', width: '122px', height: '74px', marginLeft:'5%', textAlign: 'center', lineHeight: '1.5'}}>
        <br/>
        이미지 없음
    </div>


      
    <div id="imformtable" style={{marginLeft : '5%', marginTop: '20px', borderTop : '2px dashed #8989894a'}}>

    </div>

    <div className="Regular" style={{marginTop:'20px', marginLeft:'5%', fontSize:'12px', color : '#4a64f5'}}>
        카테고리
    </div>

    <div id="real_logo_id" className="Medium" style={{marginTop : '4px', marginLeft:'5%', fontSize:'16px'}}>
       헤어, 메이크업, 네일 등 뷰티샵의 상호명
    </div>

    <div className="Regular" style={{marginTop:'20px', marginLeft:'5%', fontSize:'12px', color : '#4a64f5'}}>
        류
    </div>
    
    <div id="real_logo_id" className="Medium" style={{marginTop : '4px', marginLeft:'5%', fontSize:'16px'}}>
        45류
    </div>

    <div className="Regular" style={{marginTop:'20px', marginLeft:'5%', fontSize:'12px', color : '#4a64f5'}}>
        지정상품
    </div>

    <div className="termbox Regular" 
        style={{fontSize : '12px', overflow : 'scroll', paddingLeft : '2px'
        ,width: '90%',
    height: '145px',
    margin: '20px 20px 20px',
    paddingTop: '3.5px',
    paddingBottom: '3.5px',
    border: 'solid 1px #b7b7b7',
    backgroundColor: '#ffffff'
         
        }}>
        1. 개인정보 수집 이용 목적 : 상표출원
        <br/>
        2. 개인정보 수집 항목 : 담당자 성명, 담당자 이메일, 담당자 휴대전화, 담당자 유선전화, 출원인 성명(한글, 영문), 법인명(한글, 영문), 인감(법인임감), 주민등록번호, 법인등록번호, 출원인 이메일, 출원인 휴대전화, 출원인 유선전화, 사업자등록번호(출원용, 세금계산서용), 휴대전화번호(출원용, 세금계산서용), 주소, 상호명(세금계산서용), 대표자명(세금계산서용), 이메일(세금계산서용)

        <br/>
        3. 제3자에게 정보제공 : 특허청, KG이니시스, 국세청, 금용결제원, 각 카드사, 각 은행, 각 통신사, 등
        <br/>
        4. 개인정보 보유 이용기간 : 상표출원일부터 10년
        <br/>
        5. 위와 같은 개인정보 수집 이용에 동의 하지 않으실 수 있습니다. (동의 거부시 출원진행 불가)
    </div>


    <div id="checkagree" className="Regular" onClick={clickHandler}
    style={{fontSize : '12px', marginLeft : '20px', marginRight : '20px', backgroundColor:  check  ? '#efefef': 'rgb(237, 239, 254)', borderRadius: '21px',
    marginTop : '20px', padding : '18px 10.9px 20px 60.9px'}}>
<img id="imgcheck" src={check ? grc : blc} 
style={{position: 'absolute',width : '30px', marginLeft : '-40px',marginTop:'6px'}}/>위 내용을 모두 확인하였으며,
<br/>해당 내용으로 상표를 출원하는 것에 동의합니다.
    </div>
    <div className="Regular" style={{marginTop: '22px',fontSize : '12px', marginLeft : '5%'}}>
*내용수정이 필요할 경우, 유선 또는 이메일로 연락해주시기 바랍니다.

    </div>
    <div className="Regular" style={{marginTop: '5px', fontSize : '12px', marginLeft : '5%'}}>
Tel : 02-922-5710
    </div>
    <div className="Regular" style={{marginTop: '5px', marginBottom : '100px', fontSize : '12px', marginLeft : '5%'}}>
Mail : admin@nametec.kr

    </div>
</div>


<Link to ='/applicant2'>
<button type="button" id="next_button6" className='Medium'
style={{height:'60px', marginTop:'4%', position: 'fixed', 
bottom: '0px', width : '520px', border: 'none', 
backgroundColor:'#efefef', color: '#b7b7b7', fontSize: '17px'
}} disabled="disabled">다음
</button>
</Link>
</div>


)}

export default ApplicantAgree; 
