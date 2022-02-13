import React, { useEffect, useRef, useState } from 'react';

import grc from '../image/grc@2x.png';
import blc from '../image/blc@2x.png';



const ApplicantAssign = ({full}) => {
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    console.log(check1)
    console.log(check2)



const clickHandler1= () => { 
    if(check1===true){ 
        setCheck1(false);
    }else{ 
        setCheck1(true)
    }
    console.log(check1)
}

const clickHandler2= () => { 
    if(check2===true){ 
        setCheck2(false);
    }else{ 
        setCheck2(true)
    }        


}

const fullHandler = () => { 
    console.log(check1)
    console.log(check2)
    full(true)

}

 return (

    <div className='test' style={{width: '520px', margin:'auto', marginBottom: '100px'}}>
   

    <div id="page5">
    <div className="headLine"
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
        color: '#000000'}}
    
    >
        위임 및 정보 동의 <br/>
    </div>

    

        <div id="checkagree1" className="Regular" 
        onClick={clickHandler1}
        style={{fontSize : '12px',
        width: '72%',
        marginLeft:'39px',
        marginRight : '53px', 
         backgroundColor:  check1  ?  'rgb(237, 239, 254)' : '#efefef',        
        borderRadius: '21px', 
         marginTop : '30px', 
         padding : '18px 10.9px 20px 60.9px'}}>
        <img id="chmark1" src={check1 ? blc : grc}
        style={{position: 'absolute', width : '30px', marginLeft : '-40px', marginTop : '-4px'}}/>
            (필수)
            <a id="agreeA"> 개인정보수집에 동의합니다 </a>
        </div>

        <div className="termbox Regular" 
        style={{fontSize : '12px', overflow : 'scroll', paddingLeft : '2px'
        ,width: '85%',
    height: '145px',
    margin: '20px 40px 20px',
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

        <div id="checkagree2" className="Regular" onClick={() => { 
            clickHandler2(); 
            fullHandler();

        }}
        style={{fontSize : '12px',         
        marginRight : '53px',
        width: '72%',
        marginLeft:'39px',
        backgroundColor:  check2  ?  'rgb(237, 239, 254)': '#efefef',
        borderRadius: '21px', marginTop : '30px', 
        padding : '12px 10.9px 12px 60.9px'}}>
    <img id="chmark2" src={check2 ? blc : grc}
    style={{position: 'absolute',width : '30px', marginLeft : '-40px', marginTop : '5px'}}/>
    (필수)
    <a id="agreeB"> 
    상표등록과 관련된 일체의 업무에 대해
    <br/>
    네임텍에 위임할 것을 의합니다.
     </a>
    </div>

    <div className="termbox Regular" 
    style={{
    fontSize : '12px', 
    overflow : 'scroll',
     paddingLeft : '2px',
     marginLeft:'5%',
    width: '85%',
    height: '145px',
    margin: '20px 40px 20px',
    paddingTop: '3.5px',
    paddingBottom: '3.5px',
    border: 'solid 1px #b7b7b7',
    backgroundColor: '#ffffff'}}>

1. 상표권 출원 및 등록에 관한 모든 절차<br/>
2. 상표권의 존속기간 갱신등록에 관한 모든 절차<br/>
3. 상표권 지정상품 추가등록에 출원에 관한 모든 절차<br/>
4. 상표권 상품분류전화등록에 관한 모든 절차<br/>
5. 상표권의 포기에 관한 모든 절차<br/>
6. 상표권 등록출원에 관한 신청의 취하<br/>
7. 상표권 등록출원에 관한 청구의 취하<br/>
8. 상표등록출원에 관한 거절결정불복심판청구관련 모든 절차<br/>
9. 상표등록출원에 관한 보정각하결정불복심판청구관련 모든 절차<br/>
10. 복대리인의 선임

<br/>
<br/>
상표법 제8조의 규정에 의하여 위와 같이 위임합니다.
</div>


</div>





</div>
)}

export default ApplicantAssign;



{/* <div style={{marginTop:'47px', marginLeft: '5%', fontSize:'16px'}}>
<div>


     <div style={{marginBottom: '20px'}}></div>
         <img src={box} style={{width: '20px', height: '20px'}} onClick="checkboxClickk()" id="boxBox-1"/>
         <span style={{fontSize: '17px', marginLeft: '7px',transform: 'translateY(-2px)', fontWeight: 'bold'}}>위임 동의</span>
     
     
     <div className="chmark" style={{display:'inline-block', width:'12px', color:'#b7b7b7'}} onClick="checkmarkClick1()">
         <img id="chmark1" style={{width:'12px'}} src={check}/>
    </div>

     <div style={{fontSize:'14px',color:'#898989',display:'inline-block'}}>
         <span style={{color:'#000000',display:'inline'}}>(필수)</span>
         개인정보수집에 동의합니다.
     </div>

     <img src={question}/>


 <div style={{marginTop:'17px', marginLeft:'5%', fontSize:'16px'}}>
     <div className="chmark" style={{display:'inline-block', width:'12px', color: '#b7b7b7', transform: 'translateY(-17px)'}}
          onclick="checkmarkClick2()">
              <img id="chmark2" style={{width:'12px'}} src={check}/>
     </div>
     <div style={{fontSize:'14px', color:'#898989', display:'inline-block', width:'85%'}}>
         <span
             style={{color:'#000000', display:'inline'}}>(필수)</span> 
             상표등록과 관련된 일체의 업무에 대해<br/>네임텍에 위임할 것을 의합니다.
     </div>
 </div>
</div>
</div> */}