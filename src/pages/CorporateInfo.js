


import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom'
import InfoBar from '../components/InfoBar';
import arrow from "../image/arrow@3x.png";
import x_round from "../image/x_round.png";
import styled from 'styled-components';
import '../App.css';
import $ from 'jquery';

export const DotCircleBar = styled.div`
float: right;
margin-right: 25px;
margin-top: 5%;

>.circle1{ 
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #efefef;
    border-radius: 25px;

  }

  >.bar1{ 
    display: inline-block;
    width: 16px;
    height: 2px;
    background-color: #efefef;
    transform: translateY(-4px);
  }
`

const Page1 = styled.div`
>.headLine{ 
    margin-top: 30px;
    margin-left: 20px;
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
}

>.tabs-container{ 


    >.tabs .currentImform{ 
    width: 45%;
    height: 41px;
    font-size: 16px;
    text-align: center;
    display: inline-block;
    border-radius: 5px;
    box-shadow: 1px 1px 4px 0 rgb(0 0 0 / 14%);
    border: 1.5px solid #4a64f5;
    color: #4a64f5;
    }

    >.tabs .boxImform2{ 
    width: 45%;
    height: 41px;
    font-size: 16px;
    text-align: center;
    display: inline-block;
    border-radius: 5px;
    box-shadow: 1px 1px 4px 0 rgb(0 0 0 / 14%);
}
}

>.tabclass{ 
    >.imformname{ 
        margin-bottom: 3px;
    }

    >.inputdiv{ 
    border-bottom-width: 1px;
    border-bottom-color: ${(props) => props.keypress === true? 'blue' : '#e0e0e0'};
    margin-bottom: 16px;
    z-index: 1000;
    }

    >#textcon{ 
        >.imformname{ 
        margin-bottom: 3px;
    }

    >.inputdiv{ 
    border-bottom-width: 1px;
    margin-bottom: 16px;
    }
    }

    /* >.textcont{ 
        margin-bottom: 5px;
    font-family: "Noto Sans KR", sans-serif;
    width: 80%;
    height: 40px;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.1;
    letter-spacing: normal;
    text-align: left;
    color: #b7b7b7; */
}
`




 function CorporateInfo({tab,page, full}){ 

    const [tab1, setTab1] = useState('currentImform');
    const [tab2, setTab2] = useState('boxImform2');

    const [bordercolor1, setColor1] = useState('#e0e0e0')
    const [bordercolor2, setColor2] = useState('#e0e0e0')

    const [div1, setDiv1] = useState('hidden');
    const [div2, setDiv2] = useState('hidden');



    const tabHandler = () => { 
        if( tab1 === 'boxImform2') {
            setTab1('currentImform'); 
            setTab2('boxImform2');
            //이게 있으면 
        }else if(tab2 === 'boxImform2'){ 
            setTab1('boxImform2')
            setTab2('currentImform'); 
        }
    }

    const pageHandler = () => { 
        if(page === 0.5){ 
            tab();
        }
    }

    const fullHandler = () => { 
        if((bordercolor1 === '#4a64f5')
        &&(bordercolor2 === '#4a64f5')){
            full(true);
        }else{
            full(false)
        }

    }



    const checkKorean = (str) => { 
        const regExp = /[ㄱ-ㅎ|ㅏ-ㅣ가-힣]/;
        return regExp.test(str); 
    }

    const checkEnglish = (str) => { 
        const regExp = /[a-z|A-Z]/;
        return regExp.test(str); 
    }
    

  

    const Korean = (ele) => { 

     if(ele.target.value){ 
        setColor1('#4a64f5')
        if(!checkKorean(ele.target.value)){
        setColor1('red')
        }

    }
    }

    const English = (ele) => { 
        if(ele.nativeEvent.data){
            setColor2('#4a64f5')

    if(!checkEnglish(ele.nativeEvent.data)){ 
        setColor2('red')
    }
       }
    }

    const showDiv1 = (ele) => { 
        setDiv1('visible')
        setColor1('#4a64f5')
        ele.target.placeholder ='';

         
    }

    const showDiv2 = (ele) => { 
     setDiv2('visible')
     setColor2('#4a64f5')
     ele.target.placeholder ='';


    
     }

  




 


    //렌더링을 위해 감싸준다 
    //react는 외부 dom에서 일어나는 변화를 인식 못하며 자체적으로 업데이트한다 
    //클래스가 아니라 함수 컴포넌트라서 useEffect를 쓴다



  

// function fileUpload(){
// let inputimage = getid('ex_file');
//     let file = inputimage.files[0];
//     ingam = getid('ingam');
//     ingam.value = file.name;
// }

// function getParameter(name) {
//     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//         results = regex.exec(location.search);
//     return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
// }
//     var product = getimformdata(getParameter("merchant_uid"));
//     var product2 = getimformdata2(getParameter("merchant_uid"));
//     setimformdata(product);

 return ( 

<div className='test' style={{maxWidth: '520px', margin:'auto', marginTop: '0px', marginBottom: '100px'}}>
   

    <div id="page1" style={{display: 'block'}}>
    <Page1>
    <div className="headLine" style={{
         marginTop: '80px',
         marginLeft: '20px',
         fontSize: '30px',
         fontWeight: 'bold',
         fontStretch: 'normal',
         fontStyle: 'normal',
         lineHeight: '1.27',
         letterSpacing: 'normal',
         textAlign: 'left',
         color: '#000000'
    }}>
        출원인 정보입력 <br/>
    </div>

    


    <div style={{marginLeft:'20px', color: '#515151', fontSize: '14px', marginTop: '41px'}}>출원 유형
    </div>
    <div className = 'tabs-container' style={{margin: '11px 20px 0px 20px' }}>
        <ul className="tabs" style={{padding:'0px', margin: '0px'}}>
            <li className={`tab-link ${tab2}`} data-tab="tab-1" style={{cursor :  'pointer'}} onClick={()=>{tabHandler(); pageHandler()}}>
                <span style={{display: 'inline-block', marginTop : '12px'}}>개인/개인 사업자</span></li>
            <li className = {`tab-link ${tab1}`} style={{float: 'right',marginRight:'10px', marginLeft : '12px', cursor :  'pointer'}}  data-tab="tab-2" >
                <span style={{display: 'inline-block', marginTop : '12px'}}>법인</span>
            </li>
        </ul>

        <div className="c-checkbox c-checkbox--normal" style={{marginTop: '8.5px', height:'26.7px'}}>

        </div>
    </div>


    <div className="tabclass" id="tab-2">
        <div className="" id="textcon" style={{width:'90%', margin:'20px'}}>
            <div className="imformname" id="imformname11" style={{visibility: div1, height: '17px', fontSize: '12px', color:'#898989'}}> 법인 명칭 <span style={{color:'#b7b7b7'}}>(한글)</span></div>
            <div className="inputdiv" id="inputdiv11" style={{borderBottom: `1px solid ${bordercolor1}`}}>
                <input autoComplete="off" type="text" name="" id="text11" className="textcont Regular" placeholder="법인 명칭(한글)" 
                onChange={Korean}
                onClick={showDiv1}
                style={{marginBottom: '5px',
                caretColor: bordercolor1,
                padding: '0px',
                outline: 'none',
                border:'none',
                   width: '80%',
                   height: '29px',
                   fontSize: '20px',
                   lineHeight: '1.1',
                   letterSpacing: 'normal',
                   textAlign: 'left',
                   color: 'black'}}
    
                />
            </div>
            <div className="imformname" id="imformname22" style={{visibility: div2, height: '17px', fontSize: '12px', color:'#898989'}}> 법인 명칭 <span style={{color:'#b7b7b7'}}>(영문)</span></div>
            <div className="inputdiv" id="inputdiv22" style={{borderBottom: `1px solid ${bordercolor2}`}}>
                <input autoComplete="off" type="text" name="" id="text22" className="textcont Regular" placeholder="법인 명칭(영문)" style={{border:'none', color : '#000000', fontSize: '20px', height: '16px'}}
                onClick={showDiv2}
                onChange={English}
                onKeyUp={fullHandler}
                style={{marginBottom: '5px',
         border:'none',
         caretColor: bordercolor2,
            width: '80%',
            padding: '0px',
            outline:'none',
            height: '29px',
            fontSize: '20px',
            lineHeight: '1.1',
            letterSpacing: 'normal',
            textAlign: 'left',
            color:'black'}}/>
                
                
            </div>
        </div>
    </div>

    

    </Page1>
</div>




</div>





 )}

export default CorporateInfo;
