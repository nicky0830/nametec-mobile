import React, {useRef, useState, useEffect} from 'react';
import TopbarComponentWithoutPage from '../components/Topbarwithoutpage'
import GuidelineComponent from '../components/Guideline';
import NextbuttonComponent from '../components/Nextbutton';
import {Link} from "react-router-dom";
import '../style.css';


function Infomcheck2(){ 

    const [bordercolor1, setColor1] = useState('rgb(183, 183, 183)');
    const [bordercolor2, setColor2] = useState('rgb(183, 183, 183)');
    const [button, setButton] = useState('#b7b7b7')

    const [full, setFull] = useState('null');

    const input1 = useRef(null)
    const input2 = useRef(null)


    const fullHandler = () => { 
        if(bordercolor1 === '#4a64f5' && bordercolor2 === '#4a64f5' ){ 
            setButton('#4a64f5');
        }
    }
    // const fullHandler = () => { 
    //     if((bordercolor1==='#4a64f5')
    //     && (bordercolor2==='#4a64f5'))
    //     {
    //         full(true);
    //     }else{ 
    //         full(false);
    //     }
    // }

    

    function telValidator(args) {
        // IE 브라우저에서는 당연히 var msg로 변경
   
        var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
      

        if(regExp.test(args.target.value)) {
            setColor1('#4a64f5');
        }
        else{
             setColor1('red');
        }
    
    }

   
    
    


    function validateEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if(re.test(email.target.value)===false){ 
            setColor2('red')

        }else{ 
            setColor2('#4a64f5')
        }
    }


    return (
        <div style={{margin : 'auto',maxWidth : '520px'}}>
        <TopbarComponentWithoutPage path={'/success'}/>
        <div className="headLine2 Bold">
            연락처를 기재해주세요
        </div>
        <div className="Regular" style={{marginLeft : '20px', fontSize : '14px', textAlign : 'left', color : '#4a64f5'}}>
                결제 후, 상표 출원 진행사항을 알려드리기 위해<br/>정확한 전화번호 및 이메일이 꼭 필요합니다.
            </div>
        <div id="textcoco" className=""  style={{width: 'calc(100% - 40px)', paddingLeft:'3px',margin: '24px 0 0 20px',  borderBottom: `solid 2px ${bordercolor1}` }}>
                <input id="tela" onChange={ fullHandler}
                onClick ={() => setColor1('#4a64f5')}
                onKeyUp = {(ele) => telValidator(ele)}
                ref = {input1}
                type="tel" 
                maxLength="11" name="" 
                className="informchecktext Medium" 
                placeholder="전화번호" 
                style={{border: 'none', color : '#000000',opacity : "0.4" , 
                caretColor: bordercolor1, caretWidth: '1px;'
                }}/>
            </div>
        <div id="textcoco2" className=""  style={{width: 'calc(100% - 40px)', paddingLeft:'3px',margin: '24px 0 0 20px',  borderBottom: `solid 2px ${bordercolor2}`}}>
            <input onChange={(ele) => {validateEmail(ele); fullHandler()}}
                    onClick ={() => setColor2('#4a64f5')}
            ref = {input2}
            id="tela2" type="text"  
            name="" className="informchecktext Medium" 
            placeholder="이메일" 
            style={{border: 'none', color : '#000000',opacity : "0.4", 
            caretColor: bordercolor2}}/>
        </div>
        <Link to={button==='#4a64f5' ? "/Success3" : null} >
        <NextbuttonComponent color={button} text={'다음'}/>
        </Link>
    </div>

        
    )

}

export default Infomcheck2;