import React, { useEffect, useRef, useState } from 'react';


const CorporateHead = ({full}) => {
    const [div1, setDiv1] = useState('hidden');
    const [div2, setDiv2] = useState('hidden');
    const [div3, setDiv3] = useState('hidden');
    const [div4, setDiv4] = useState('hidden');


   

 
    const [bordercolor1, setColor1] = useState('#e0e0e0')
    const [bordercolor2, setColor2] = useState('#e0e0e0')
    const [bordercolor3, setColor3] = useState('#e0e0e0')
    const [bordercolor4, setColor4] = useState('#e0e0e0')




    const fullHandler = () => { 
        console.log('full')
        if((bordercolor1 === '#4a64f5')
        &&(bordercolor2 === '#4a64f5')
        &&(bordercolor3 === '#4a64f5')
        &&(bordercolor4 === '#4a64f5')
        ){
            full(true);
        }else{
            full(false);
        }

    }

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

       }

       const showDiv2 = (ele) => { 
        setDiv2('visible')
        ele.target.placeholder ='';


        }
    

    const showDiv3 = (ele) => { 
        setDiv3('visible')
        ele.target.placeholder ='';


        }
    
    const showDiv4 = (ele) => { 
        setDiv4('visible')
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
            
            setColor2(color);
    
    
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
            setColor2(color)
        
        
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
    

     function telValidator(args) {
        // IE 브라우저에서는 당연히 var msg로 변경
   
        var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;

        if( regExp.test(args)) {
            setColor4('#4a64f5')
        }
        else{ 
            setColor4('red')
        }
    
    }

    
    


    function validateEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if(re.test(email)===true){ 
            setColor3('#4a64f5')
        }else{ 
            setColor3('red')
        }
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


    <div className="imformname" id="imformname7" style={{height:'17px', marginBottom: '3px', visibility: div1, fontSize: '12px', color:'#898989'}} >성명</div>
    <div className="inputdiv" id="inputdiv7" style={{           
        height: '28px',
        marginBottom: '16px',
        borderBottom: `1px solid ${bordercolor1}`,  marginBottom: '10px'}}>
        <input autocomplete="off" type="text" name="" defaultValue="" id="text7" className="textcont" 
       onClick={showDiv1}
       onChange={Korean}
       style={{marginBottom: '5px',
       caretColor: bordercolor1,
        border:'none',
        padding: '0px',
        margin: '0px',
        height: '28px',
        outline:'none',
           fontSize: '20px',
           lineHeight: '1.1',
           letterSpacing: 'normal',
           textAlign: 'left',
           color: 'black'}}
        placeholder="성명"  maxlength="13" oninput="maxLengthCheck(this)"/>
    </div>



       <div className="imformname" id="imformname8" style={{height:'17px', marginBottom: '3px',visibility: div2, fontSize: '12px', color:'#898989'}}> 주민등록번호</div>
    <div className="inputdiv" id="inputdiv8" style={{
         height: '28px',
         marginBottom: '16px',
        borderBottom: `1px solid ${bordercolor2}`}}>
        <input autocomplete="off" type="number" name="" defaultValue="" id="text8-1" class="textcont" placeholder="주민등록번호" maxlength="6"
              onClick={showDiv2}
              onChange={(ele) => check_1(ele.target.value)}
       style={{marginBottom: '5px',
       outline:'none',
        border:'none',
        caretColor: bordercolor2,
        padding: '0px',
        margin: '0px',
        height: '28px',
        fontSize: '20px',
           lineHeight: '1.1',
           letterSpacing: 'normal',
           textAlign: 'left',
           color: 'black'}} oninput="maxLengthCheck(this)"/>
        <span class="lineDivider"> - </span>

        <input autocomplete="off" type="password" name="" defaultValue="" id="text8-2" class="textcont" placeholder="●●●●●●●" 
        onChange={(ele) => check_resident2(ele.target.value)}
        style={{marginBottom: '5px',
         border:'none',
         caretColor: bordercolor3,
         height: '28px',
         fontSize: '20px',
            outline:'none',
            padding: '0px',
            margin: '0px',
            lineHeight: '1.1',
            letterSpacing: 'normal',
            textAlign: 'left',
            color: 'black'}}
         maxlength="7" oninput="maxLengthCheck(this)"/>


        {/* <!--        <img onClick="eraseInput('text3')" class="x_button" src="../static/image/x_round.png"-->
        <!--             srcset="../static/image/x_round@2x.png 2x,-->
        <!--             ../static/image/x_round@3x.png 3x" style="width: 16px; height: 16px; float:right;">--> */}
    </div>

    <div className="imformname" id="imformname9" style={{height:'17px', marginBottom: '3px',visibility: div3, fontSize: '12px', color:'#898989'}}> 이메일</div>
    <div className="inputdiv" id="inputdiv9"style={{
        
        borderBottom: `1px solid ${bordercolor3}`,  
        height: '28px',
        marginBottom: '16px',
       }}>
  
        <input autocomplete="off" type="email" name="" defaultValue="" id="text9" class="textcont" placeholder="이메일" 
       onClick={showDiv3}
       onChange={(ele) => validateEmail(ele.target.value)}
       style={{marginBottom: '5px',
        border:'none',
        height: '28px',
        caretColor: bordercolor4,
           fontSize: '20px',
           lineHeight: '1.1',
           padding: '0px',
           outline:'none',
           margin: '0px',
           letterSpacing: 'normal',
           textAlign: 'left',
           color: 'black'}}/>
    </div>


    <div className="imformname" id="imformname10" style={{height:'17px', marginBottom: '3px',visibility: div4, fontSize: '12px', color:'#898989'}}> 휴대전화</div>
    <div className="inputdiv" id="inputdiv10" style={{
        borderBottom: `1px solid ${bordercolor4}`,  
        height: '30px',
        marginBottom: '16px'}}
    >
        <input autocomplete="off" type="number" name="" defaultValue="" id="text10" class="textcont" placeholder="휴대전화"
        onClick={showDiv4}
        onChange={(ele) => telValidator(ele.target.value)}
        onKeyUp={fullHandler}
        style={{marginBottom: '5px',
        border:'none',
        caretColor: bordercolor4,
           height: '28px',
           fontSize: '20px',
           lineHeight: '1.1',
           outline:'none',
           letterSpacing: 'normal',
           textAlign: 'left',
           color: 'black'}} 
        />
    </div>

</div>





</div>
</div>


    )} 

export default CorporateHead;