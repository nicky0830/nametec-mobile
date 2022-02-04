import arrow from "../image/arrow@3x.png";
import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom'; 
import { DotCircleBar } from './ApplicantInfo';
import question from '../image/question_mark.png';
import file_btn from '../image/file_button.png';
import upyen from '../image/upyen.png';
import CorporateInfo from "./CorporateInfo";

const CorporateHead = () => {
    const [div1, setDiv1] = useState('hidden');
    const [div2, setDiv2] = useState('hidden');
    const [div3, setDiv3] = useState('hidden');
    const [div4, setDiv4] = useState('hidden');


   

 
    const [bordercolor1, setColor1] = useState('#e0e0e0')
    const [bordercolor2, setColor2] = useState('#e0e0e0')
    const [bordercolor3, setColor3] = useState('#e0e0e0')
    const [bordercolor4, setColor4] = useState('#e0e0e0')





    const checkKorean = (str) => { 
        const regExp = /[ㄱ-ㅎ|ㅏ-ㅣ가-힣]/;
        return regExp.test(str); 
    }

    const checkEnglish = (str) => { 
        const regExp = /[a-z|A-Z|@|.]/;
        return regExp.test(str); 
    }
    

    const checkNumber = (str) => { 
        const regExp = /[0-9]/;
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
            setColor3('#4a64f5')

    if(!checkEnglish(ele.nativeEvent.data)){ 
        setColor3('red')
    }
       }
    }

    
       const Number1 = (ele) => { 

        if(ele.nativeEvent.data){
            setColor2('#4a64f5')
        
        if(!checkNumber(ele.nativeEvent.data)){ 
            setColor2('red')
        }
        if(ele.nativeEvent.data.length >6){
            setColor2('red')
        }
       }

    }

    const Number2 = (ele) => { 

        if(ele.nativeEvent.data){
            setColor4('#4a64f5')
        
        if(!checkNumber(ele.nativeEvent.data)){ 
            setColor4('red')
        }
        if(ele.nativeEvent.data.length >6){
            setColor4('red')
        }
       }

    }

   

       const showDiv1 = (ele) => { 
           setDiv1('visible')
           ele.target.placeholder ='';
           setColor1('#4a64f5')

       }

       const showDiv2 = (ele) => { 
        setDiv2('visible')
        ele.target.placeholder ='';
        setColor2('#4a64f5')


        }
    

    const showDiv3 = (ele) => { 
        setDiv3('visible')
        ele.target.placeholder ='';
        setColor3('#4a64f5')


        }
    
    const showDiv4 = (ele) => { 
        setDiv4('visible')
        ele.target.placeholder ='';
        setColor4('#4a64f5')


        }

    return (

<div className='test' style={{maxWidth: '520px', margin:'auto', marginBottom: '100px'}}>

 <div>

 </div>

<div id="page2-3" >
<div className="headLine"    
 style={{ 
        marginTop: '40px',
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
    대표자 정보 <br/>
</div>



<div class="" id="textcon3-1" style={{width:'90%',margin:'20px'}}>


    <div className="imformname" id="imformname7" style={{visibility: div1, fontSize: '12px', color:'#898989'}} >성명</div>
    <div className="inputdiv" id="inputdiv7" style={{borderBottom: `1px solid ${bordercolor1}`,  marginBottom: '10px'}}>
        <input autocomplete="off" type="text" name="" defaultValue="" id="text7" className="textcont" 
       onClick={showDiv1}
       onChange={Korean}
       style={{marginBottom: '5px',
       caretColor: bordercolor1,
        border:'none',
        padding: '0px',
        margin: '0px',
           height: '40px',
           outline:'none',
           fontSize: '20px',
           lineHeight: '1.1',
           letterSpacing: 'normal',
           textAlign: 'left',
           color: '#b7b7b7'}}
        placeholder="성명"  maxlength="13" oninput="maxLengthCheck(this)"/>
    </div>



       <div className="imformname" id="imformname8" style={{visibility: div2, fontSize: '12px', color:'#898989'}}> 주민등록번호</div>
    <div className="inputdiv" id="inputdiv8" style={{borderBottom: `1px solid ${bordercolor2}`,  marginBottom: '10px'}}>
        <input autocomplete="off" type="number" name="" defaultValue="" id="text8-1" class="textcont" placeholder="주민등록번호" maxlength="6"
              onClick={showDiv2}
              onChange={Number1}
       style={{marginBottom: '5px',
       outline:'none',
        border:'none',
        caretColor: bordercolor2,
        padding: '0px',
        margin: '0px',
           height: '40px',
           fontSize: '20px',
           lineHeight: '1.1',
           letterSpacing: 'normal',
           textAlign: 'left',
           color: '#b7b7b7'}} oninput="maxLengthCheck(this)"/>
        <span class="lineDivider"> - </span>

        <input autocomplete="off" type="password" name="" value="" id="text8-2" class="textcont" placeholder="●●●●●●●" 
         style={{marginBottom: '5px',
         border:'none',
         caretColor: bordercolor3,
            height: '40px',
            fontSize: '20px',
            outline:'none',
            padding: '0px',
            margin: '0px',
            lineHeight: '1.1',
            letterSpacing: 'normal',
            textAlign: 'left',
            color: '#b7b7b7'}}
         maxlength="7" oninput="maxLengthCheck(this)"/>


        {/* <!--        <img onClick="eraseInput('text3')" class="x_button" src="../static/image/x_round.png"-->
        <!--             srcset="../static/image/x_round@2x.png 2x,-->
        <!--             ../static/image/x_round@3x.png 3x" style="width: 16px; height: 16px; float:right;">--> */}
    </div>

    <div className="imformname" id="imformname9" style={{visibility: div3, fontSize: '12px', color:'#898989'}}> 이메일</div>
    <div className="inputdiv" id="inputdiv9"style={{borderBottom: `1px solid ${bordercolor3}`,  marginBottom: '10px'}}>
  
        <input autocomplete="off" type="email" name="" defaultValue="" id="text9" class="textcont" placeholder="이메일" 
       onClick={showDiv3}
       onChange={English}
       style={{marginBottom: '5px',
        border:'none',
           height: '40px',
           caretColor: bordercolor4,
           fontSize: '20px',
           lineHeight: '1.1',
           padding: '0px',
           outline:'none',
           margin: '0px',
           letterSpacing: 'normal',
           textAlign: 'left',
           color: '#b7b7b7'}}/>
    </div>


    <div className="imformname" id="imformname10" style={{visibility: div4, fontSize: '12px', color:'#898989'}}> 휴대전화</div>
    <div className="inputdiv" id="inputdiv10" style={{borderBottom: `1px solid ${bordercolor4}`,  marginBottom: '10px'}}
    >
        <input autocomplete="off" type="number" name="" defaultValue="" id="text10" class="textcont" placeholder="휴대전화"
        onClick={showDiv4}
        onChange={Number2}
        style={{marginBottom: '5px',
        border:'none',
        caretColor: bordercolor4,
           height: '40px',
           fontSize: '20px',
           lineHeight: '1.1',
           outline:'none',
           letterSpacing: 'normal',
           textAlign: 'left',
           color: '#b7b7b7'}} 
        />
    </div>

</div>





</div>
</div>


    )} 

export default CorporateHead;