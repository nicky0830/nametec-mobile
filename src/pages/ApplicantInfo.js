import React, { useRef, useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import arrow from "../image/arrow@3x.png";
import '../components/inputstyles.css';
//폰트 다른 걸로!! noto sans kr로 바꾸기



const Page1 = styled.div`
>.headLine{ 
    margin-top: 80px;
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

    >.tabs{
        padding: 0px;
        margin-top: 10px;
    }

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

    >.current{ 
        height: 206px;
    }

    >.imformname{ 
        margin-bottom: 3px;
        height: 17px;
    }

    >.inputdiv{ 
    border-bottom-width: 1px;
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






 const ApplicantInfo= ({tab})=>{ 

    const [tab1, setTab1] = useState('boxImform2');
    const [tab2, setTab2] = useState('currentImform');
    const [div1, setDiv1] = useState('hidden');
    const [div2, setDiv2] = useState('hidden');
    const [div3, setDiv3] = useState('hidden');

   

 
    const [bordercolor1, setColor1] = useState('#e0e0e0')
    const [bordercolor2, setColor2] = useState('#e0e0e0')
    const [bordercolor3, setColor3] = useState('#e0e0e0')



    const tabHandler = () => { 
        if( tab1 === 'boxImform2') {
            setTab1('currentImform'); 
            setTab2('boxImform2');


        }else{ 
            setTab1('boxImform2')
            setTab2('currentImform'); 

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
    

    const checkNumber = (str) => { 
        const regExp = /[0-9]/;
        return regExp.test(str); 
    }

    const Korean = (ele) => { 

     if(ele.target.value){ 
        setColor1('blue')
        if(!checkKorean(ele.target.value)){
        setColor1('red')
        }

    }
    }

    const English = (ele) => { 
        if(ele.nativeEvent.data){
            setColor2('blue')

    if(!checkEnglish(ele.nativeEvent.data)){ 
        setColor2('red')
    }
       }
    }

    
       const Number = (ele) => { 

        if(ele.nativeEvent.data){
            setColor3('blue')
        
        if(!checkNumber(ele.nativeEvent.data)){ 
            setColor3('red')
        }
        if(ele.nativeEvent.data.length >6){
            setColor3('red')
        }
       }
       console.log(bordercolor3)

    }

    

   

       const showDiv1 = (ele) => { 
           setDiv1('visible')
           ele.target.placeholder ='';

            
       }

       const showDiv2 = (ele) => { 
        setDiv2('visible')
        ele.target.placeholder ='';

       
        }
    

    const showDiv3 = (ele) => { 
        setDiv3('visible')
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

<div className='test' style={{maxWidth: '520px', margin:'auto', marginBottom: '100px',  display : 'block' }}>
   

    <div id="page1" style={{display: 'block'}}>
    <Page1>
    <div className="Bold headLine" style={{
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

    


    <div style={{marginLeft:'20px', color: '#515151', fontSize: '14px', marginTop: '41px'}} className='Medium'>출원 유형
    </div>
    <div className = 'tabs-container' style={{margin: '11px 20px 0px 20px' }}>
        <ul className="tabs">
            <li className={`tab-link ${tab2} Medium`} data-tab="tab-1" style={{cursor :  'pointer'}} onClick={()=> {tabHandler(); tab()}}>
                <span style={{display: 'inline-block', marginTop : '8px'}}>개인/개인 사업자</span></li>
            <li className = {`tab-link ${tab1} Medium`} style={{float: 'right',marginRight:'10px', marginLeft : '12px', cursor :  'pointer'}}  data-tab="tab-2" onClick={() => {tabHandler(); tab()}}>
                <span style={{display: 'inline-block', marginTop : '8px'}}>법인</span>
            </li>
        </ul>

        <div className="c-checkbox c-checkbox--normal" style={{marginTop: '8.5px', height:'26.7px'}}>

        </div>
    </div>

    <div className="tabclass current" id="tab-1" style={{width:'90%', margin:'20px', marginTop: '41px'}}>
        <div className="imformname" id="imformname1" style={{visibility: div1,   fontSize: '12px', color:'#898989' }}> 출원인 성명 
        <span style={{color:'#898989',fontSize: '12px',}}>(한글)</span>
        </div>

        <div className="inputdiv" id="inputdiv1"  style={{borderBottom: `1px solid ${bordercolor1}` }}>
        <input autoComplete='off'  type="text" id="text1" className="textcont Regular" placeholder="출원인 성명(한글)" 
        name='one' defaultValue=''
        onClick={showDiv1}
        onChange={Korean}
         style={{marginBottom: '5px',
         caretColor: bordercolor1,
         autoFocus: 'off',
         outline: 'none',
         border:'none',
         padding: '0px',
            width: '80%',
            height: '29px',
            fontSize: '20px',
            lineHeight: '1.1',
            letterSpacing: 'normal',
            textAlign: 'left',
            color: 'internal light dark'}}/>
        </div>


        <div className="imformname"id="imformname2" style={{visibility: div2, fontSize: '12px', color:'#898989'}}> 출원인 성명 
        <span style={{color:'#898989'}}>(영문)</span>
        </div>
        <div className="inputdiv" id="inputdiv2"  onClick ={showDiv2} onKeyDown={English} style={{borderBottom: `1px solid ${bordercolor2}`}} >
            <input type="text" name="" id="text2"defaultValue =''  className="textcont Regular" placeholder="출원인 성명(영문)" 
            onChange= {English}
            style={{marginBottom: '5px',
            caretColor: bordercolor2,
            imeMode: 'inactive',
            autoFocus: 'off',
            border:'none',
            outline: 'none',
            padding: '0px',
               width: '80%',
               height: '40px',
               fontSize: '20px',
               lineHeight: '1.1',
               letterSpacing: 'normal',
               textAlign: 'left',
               color: '#b7b7b7'}}/>
        </div>
        <div className="imformname" id="imformname3" style={{visibility: div3, fontSize: '12px', color:'#898989'}} > 주민등록번호</div>
        <div className="inputdiv" id="inputdiv3" onClick ={showDiv3}  style={{borderBottom: `1px solid ${bordercolor3}`  }}>
        
        
            <input autoFocus="off" type="number"defaultValue =''  name=""  id="text3-1" className="textcont Regular" placeholder="주민등록번호" 
                onChange={Number}
               style={{marginBottom: '5px',
               border:'none',
               caretColor: bordercolor3,
               outline: 'none',
                  height: '40px',
                  padding: '0px',
                  autoFocus: 'off',
                  fontSize: '20px',
                  lineHeight: '1.1',
                  letterSpacing: 'normal',
                  textAlign: 'left',
                  color: '#b7b7b7'}}
            ></input>
            <span className="lineDivider"> - </span>

            <input autoFocus="off" type="password" name="" defaultValue =''  id="text3-2" className="textcont" placeholder="●●●●●●●" 
               onChange={Number}
               style={{marginBottom: '5px',
               border:'none',
                  height: '40px',
                  outline: 'none',
                  padding: '0px',
                  fontSize: '20px',
                  lineHeight: '1.1',
                  letterSpacing: 'normal',
                  textAlign: 'left',
                  color: '#b7b7b7'}}
         />

            <input type="hidden" defaultValue ='' id="a" style={{width: '16px', height: '16px', float:'right'}} />
        </div>

    </div>
{/* 
    <div className="tabclass" id="tab-2">
        <div className="" id="textcon" style={{width:'90%', margin:'20px'}}>
            <div className="imformname" id="imformname11" style={{visibility: 'hidden'}}> 법인 명칭 <span style={{color:'#b7b7b7'}}>(한글)</span></div>
            <div className="inputdiv" id="inputdiv11" style={{borderBottom: '1px solid rgb(224 224 224)'}}>
                <input autoComplete="off" type="text" name="" value="" id="text11" className="textcont Medium" placeholder="법인 명칭(한글)" style={{border:'none', color : '#000000', fontSize: '20px', height: '16px'}}
                style={{marginBottom: '5px',
                border:'none',
                   width: '80%',
                   height: '40px',
                   fontSize: '20px',
                   lineHeight: '1.1',
                   letterSpacing: 'normal',
                   textAlign: 'left',
                   color: '#b7b7b7'}}
    
                />
            </div>
            <div className="imformname" id="imformname22" style={{visibility: 'hidden'}}> 법인 명칭 <span style={{color:'#b7b7b7'}}>(영문)</span></div>
            <div className="inputdiv" id="inputdiv22" style={{borderBottom: '1px solid rgb(224 224 224)'}}>
                <input autoComplete="off" type="text" name="" value="" id="text22" className="textcont Medium" placeholder="법인 명칭(영문)" style={{border:'none', color : '#000000', fontSize: '20px', height: '16px'}}
                
                style={{marginBottom: '5px',
         border:'none',
            width: '80%',
            height: '40px',
            fontSize: '20px',
            lineHeight: '1.1',
            letterSpacing: 'normal',
            textAlign: 'left',
            color: '#b7b7b7'}}/>
                
                
            </div>
        </div>
    </div> */}

    

    </Page1>
</div>

<Link to ='/applicant2'>
    {/* visible한 div의 id를 state배열에 저장해두고 다음걸로 넘긴다 */}
<button type="button" id="next_button6" className='Medium'
style={{height:'60px', marginTop:'4%', position: 'fixed', 
bottom: '0px', width : '520px', border: 'none', 
backgroundColor:'#efefef', color: '#b7b7b7', fontSize: '17px'
}} disabled="disabled">다음
</button>
</Link>

</div>





 )}

export default ApplicantInfo;
