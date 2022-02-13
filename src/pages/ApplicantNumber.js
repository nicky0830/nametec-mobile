import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom'
import ApplicantInfo from './ApplicantInfo';
import arrow from "../image/arrow@3x.png";
import { DotCircleBar } from './ApplicantInfo';


const  ApplicantNumber = ({full}) => { 
    const [div1, setDiv1] = useState('hidden');
    const [div2, setDiv2] = useState('hidden');

    const [bordercolor1, setColor1] = useState('#e0e0e0')
    const [bordercolor2, setColor2] = useState('#e0e0e0')

    const fullHandler = () => { 
        if((bordercolor1==='#4a64f5')
        && (bordercolor2==='#4a64f5'))
        {
            full(true);
        }else{ 
            full(false);
        }
    }

    const showDiv1 = (ele) => { 
        setDiv1('visible')
        ele.target.placeholder ='';
    }

    const showDiv2 = (ele) => { 
     setDiv2('visible')
     ele.target.placeholder ='';
     }
 
 



    function telValidator(args) {
        // IE 브라우저에서는 당연히 var msg로 변경
   
        var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;

        if( regExp.test(args)) {
            setColor1('#4a64f5')
        }
        else{ 
            setColor1('red')
        }
    
    
    }

    
    


    function validateEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if(re.test(email)===true){ 
            setColor2('#4a64f5')
        }else{ 
            setColor2('red')
        }
        }

  
return (

    <div className='test' style={{width: '520px', margin:'auto', marginBottom: '100px'}}>
    


<div id="page2" style={{display: 'block', height: '28px'}}>
    <div className="headLine Bold" style={{ 
    marginLeft: '20px',
    marginTop: '8px',
    height: '30px',
    fontSize: '30px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.27',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#000000'
}}>
        출원인 연락처 <br/>
    </div>

    <div className="" id="textcon2" style={{width: '90%', margin: '20px', marginTop: '45px'}}>
        <div className="imformname" id="imformname5" style={{height: '17px', marginBottom: '3px', visibility: div1, fontSize: '12px', color:'#898989'}}> 출원인 전화번호</div>

        <div className="inputdiv" id="inputdiv5" style={{height: '33px', borderBottom: `1px solid ${bordercolor1}`, marginBottom: '16px'}}>
            <input autoComplete="off" type="tel" name="" defaultValue="" id="text5" className="textcont Regular" placeholder="출원인 전화번호" 
                    onClick={showDiv1}
                    onKeyUp={fullHandler}
                    onChange={(ele)=> telValidator(ele.target.value)}
                     style={{
                        marginBottom: '5px',
                     border:'none',
                     outline: 'none',
                     caretColor: bordercolor1,
                        width: '80%',
                        height: '29px',
                        fontSize: '20px',
                        lineHeight: '1.1',
                        letterSpacing: 'normal',
                        textAlign: 'left',
                        color: 'internal light dark'}}
            maxLength="11" oninput="maxLengthCheck(this)"/>
        </div>

        <div className="imformname" id="imformname4" style={{height: '17px', marginBottom: '3px', visibility: div2, fontSize: '12px', color:'#898989'}}> 출원인 이메일
        </div>
      <div className="inputdiv" id="inputdiv4" style={{height: '33px',borderBottom: `1px solid ${bordercolor2}`}}>
            <input autoComplete="off" type="email" name="email" defaultValue="" id="text4" 
            className="textcont" placeholder="출원인 이메일" style={{border:'none', color : '#000000'}}
            onClick={showDiv2}
            onChange={(ele)=>validateEmail(ele.target.value)}
            onKeyUp={fullHandler}
            style={{marginBottom: '5px',
            border:'none',
               width: '80%',
               outline: 'none',
               caretColor: bordercolor2,
                 height: '29px',
               fontSize: '20px',
               lineHeight: '1.1',
               letterSpacing: 'normal',
               textAlign: 'left',
               color: 'internal light dark'}}
            />
        </div>

    </div>
</div>


</div>
)
}

export default ApplicantNumber ;

