import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom'
import ApplicantInfo from './ApplicantInfo';
import arrow from "../image/arrow@3x.png";
import { DotCircleBar } from './ApplicantInfo';


const  ApplicantNumber = () => { 
    const [div1, setDiv1] = useState('hidden');
    const [div2, setDiv2] = useState('hidden');

    const [bordercolor1, setColor1] = useState('#e0e0e0')
    const [bordercolor2, setColor2] = useState('#e0e0e0')

    const showDiv1 = (ele) => { 
        setDiv1('visible')
        ele.target.placeholder ='';
        setColor1('#4a64f5')
         
    }

    const showDiv2 = (ele) => { 
     setDiv2('visible')
     setColor2('#4a64f5')
     ele.target.placeholder ='';



     }
 
     const checkNumber = (str) => { 
        const regExp = /[0-9]/;
        return regExp.test(str); 
    }


    const checkEnglish = (str) => { 
        const regExp = /[a-z|A-Z|.|@]/;
        return regExp.test(str); 
    }
    

    const Number = (ele) => { 

        if(ele.nativeEvent.data){
            setColor1('blue')
        
        if(!checkNumber(ele.nativeEvent.data)){ 
            setColor1('red')
        }
        if(ele.nativeEvent.data.length >6){
            setColor1('red')
        }
       }
       console.log(bordercolor1)

    }

  
    const Email = (ele) => { 
    if(ele.nativeEvent.data){
            setColor2('blue')

    if(!checkEnglish(ele.nativeEvent.data)){ 
        setColor2('red')
    }

    if(ele.nativeEvent.data.includes('@')){ 
        setColor2('blue')
    }
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

    <div className="" id="textcon2" style={{width: '90%', margin: '20px', marginTop: '20px'}}>
        <div className="imformname" id="imformname5" style={{visibility: div1, fontSize: '12px', color:'#898989'}}> 출원인 전화번호</div>

        <div className="inputdiv" id="inputdiv5" style={{borderBottom: `1px solid ${bordercolor1}`, marginBottom: '10px'}}>
            <input autoComplete="off" type="tel" name="" defaultValue="" id="text5" className="textcont Regular" placeholder="출원인 전화번호" 
                    onClick={showDiv1}
                    onChange={Number}
                     style={{marginBottom: '5px',
                     border:'none',
                     outline: 'none',
                     caretColor: bordercolor1,
                        width: '80%',
                        height: '40px',
                        fontSize: '20px',
                        lineHeight: '1.1',
                        letterSpacing: 'normal',
                        textAlign: 'left',
                        color: '#e0e0e0'}}
            maxlength="11" oninput="maxLengthCheck(this)"/>
        </div>

        <div className="imformname" id="imformname4" style={{visibility: div2, fontSize: '12px', color:'#898989'}}> 출원인 이메일
        </div>
      <div className="inputdiv" id="inputdiv4" style={{borderBottom: `1px solid ${bordercolor2}`}}>
            <input autocomplete="off" type="email" name="cus_email" defaultValue="" id="text4" 
            className="textcont" placeholder="출원인 이메일" style={{border:'none', color : '#000000'}}
            onClick={showDiv2}
            onChange={Email}
            style={{marginBottom: '5px',
            border:'none',
               width: '80%',
               outline: 'none',
               caretColor: bordercolor2,

               height: '40px',
               fontSize: '20px',
               lineHeight: '1.1',
               letterSpacing: 'normal',
               textAlign: 'left',
               color: '#e0e0e0'}}
            />
        </div>

    </div>
</div>


</div>
)
}

export default ApplicantNumber ;

