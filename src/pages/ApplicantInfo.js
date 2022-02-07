import React, {  useState } from 'react';
import styled from 'styled-components';
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






 const ApplicantInfo= ({tab, full, page})=>{ 

    const [tab1, setTab1] = useState('boxImform2');
    const [tab2, setTab2] = useState('currentImform');
    const [div1, setDiv1] = useState('hidden');
    const [div2, setDiv2] = useState('hidden');
    const [div3, setDiv3] = useState('hidden');



    const [bordercolor1, setColor1] = useState('#e0e0e0');
    const [bordercolor2, setColor2] = useState('#e0e0e0');
    const [bordercolor3, setColor3] = useState('#e0e0e0');

    const fullHandler = () => { 
        if((bordercolor1==='#4a64f5')
        && (bordercolor2==='#4a64f5')
        && (bordercolor3==='#4a64f5')){ 
            full(true);
        }else{ 
            full(false)
        }
    }

    const pageHandler = () => { 
        if(page === 0){ 
            tab();
        }
    }



    const tabHandler = () => { 
        if( tab1 === 'boxImform2') {
            setTab1('currentImform'); 
            setTab2('boxImform2');

        }else if(tab2 === 'boxImform2'){ 
            setTab1('boxImform2');
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
       
        }
    
    var yy, mm, dd,cc;

    function check_1(number){ 
        var num1 = number.substr(0,6);
        yy = num1.substr(0,2);//01
        mm = num1.substr(2,4);//23
        dd = num1.substr(4,6);//45

        var color = '#4164f5';

        if(number==='' || number===null || number.length!==6){ 
            color = 'red'
        }


        if(!isNumeric(num1)){ 
            color = 'red'
        }

        if(yy <'00' || yy>'99' ||
           mm < '01' || mm > '12' ||
           dd < '01' || dd > '31'){ 
            color = 'red'
        }


        if(getNumberOfDate(yy, mm) < mm){ 
            color = 'red'
        }
        
        setColor3(color);


    }




    function check_resident2(number){ 
        var num2 = number.substr(6,7);
        var gender = num2.substr(0,1);
         cc = (gender=== '1' || gender === '2') ? '19' : '20'; 
        var color = '#4a64f5'

    
        if(number==='' || number===null || number.length!==7){ 
            color = 'red'
        }
   
     

        else if(!isNumeric(num2)){ 
            color = 'red'
        }

    
        else if(gender < '1' || gender > '4'){ 
            color = 'red'
        }
    
        //  연도계산
        //날짜 형식 검사 
        else if(isYYYYMMDD(parseInt(cc+yy), parseInt(mm), parseInt(dd))===false){ 
            color = 'red'
        }

       

    //     if (!isSSN(num1, num2)) { 
    //         return false; 
    // } 
        setColor3(color)
    
    
    }

    function isYYYYMMDD(y,m,d){ 
        switch(m){ 
            case 2: 
            if(d>29)return false; 
            if(d === 29){ //윤년인지 확인 : 윤년일 때만 29 가능  - 4의 배수 또는 100의 배수지만 400의 배수가 아니도록
                if((y%4 !==0)|| ((y%100===0) && (y%400 !==0))){ 
                    return false;
                }
            }
            break;
            //31이 없는 달들
            case 4: if(d >= 31)return false;
            break;
            case 6: if(d >= 31)return false;
            break;
            case 9: if(d >= 31)return false;
            break;
            case 11: if(d >= 31)return false;
            break;

            default: return true;
    
        }
        return true;
    }
    

    function isNumeric(s) { 
        for (let i=0; i<s.length; i++) { 
                let c = s.substr(i, 1); 
                //하나씩 확인하면서
                if (c < "0" || c > "9") return false; 
        } 
        return true; 
    } 

    function isLeapYear(y) { 
        if (y < 100) {
            y = y + 1900; 
        }
        if ( ((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0) ) { 
                return true; 
        } else { 
                return false; 
        }
    }


function getNumberOfDate(yy, mm) { 
    let month = [29,31,28,31,30,31,30,31,31,30,31,30,31];
     if (mm === 2 && isLeapYear(yy)) {
         mm = 0; 
     }
     return month[mm]; 
 } 





//  function isSSN(s1, s2) { 
//     let n = 2; 
//     let sum = 0; 
//     for (let i=0; i<s1.length; i++) 
//             sum += parseInt(s1.substr(i, 1)) * n++; 
//     for (let i=0; i<s2.length-1; i++) { 
//             sum += parseInt(s2.substr(i, 1)) * n++; 
//             if (n === 10) n = 2; 
//     } 
//     let c = 11 - sum % 11; 
//     if (c === 11) c = 1; 
//     if (c === 10) c = 0; 
//     if (c !== parseInt(s2.substr(6, 1))) return false; 
//     else return true; 
// } 




    
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
            <li className={`tab-link ${tab2} Medium`} data-tab="tab-1" style={{cursor :  'pointer'}}>
                <span style={{display: 'inline-block', marginTop : '8px'}}>개인/개인 사업자</span></li>
            <li className = {`tab-link ${tab1} Medium`} style={{float: 'right',marginRight:'10px', marginLeft : '12px', cursor :  'pointer'}}  data-tab="tab-2" onClick={() => {tabHandler();
                 pageHandler()}}>
                <span style={{display: 'inline-block', marginTop : '8px'}}>법인</span>
            </li>
        </ul>
        {/* 법인 페이지인데 법인을 눌렀으면 변화 없게 :  */}

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
               color: 'internal light dark'}}/>
            
        </div>
        <div className="imformname" id="imformname3" style={{visibility: div3, fontSize: '12px', color:'#898989'}} > 주민등록번호</div>
        <div className="inputdiv" id="inputdiv3" onClick ={showDiv3}  style={{borderBottom: `1px solid ${bordercolor3}`  }}>
        
        
            <input autoFocus="off" type="number"defaultValue =''  name=""  id="text3-1" className="textcont Regular" placeholder="주민등록번호" 
               onChange={(ele)=> check_1(ele.target.value)}
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
                  color: 'internal light dark'}}
            ></input>
            <span className="lineDivider"> - </span>

            <input autoFocus="off" type="password" name="" defaultValue =''  id="text3-2" className="textcont" placeholder="●●●●●●●" 
               onChange={(ele) => {
                   check_resident2(ele.target.value);
                }}
                onKeyUp={fullHandler}
               style={{marginBottom: '5px',
               border:'none',
                  height: '40px',
                  outline: 'none',
                  padding: '0px',
                  fontSize: '20px',
                  lineHeight: '1.1',
                  letterSpacing: 'normal',
                  textAlign: 'left',
                  color: 'internal light dark'}}
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


</div>





 )}

export default ApplicantInfo;
