import React, { useRef, useState } from 'react';
import question from '../image/question_mark.png';
import file_btn from '../image/file_button@3x.png';
import upyen from '../image/upyen.png';
import DaumPostcode from 'react-daum-postcode';

const CorporateDetails = ({post,full}) => {

    const [bordercolor1, setColor1] = useState('#e0e0e0')
    const [bordercolor2, setColor2] = useState('#e0e0e0')
    const [bordercolor3, setColor3] = useState('#e0e0e0')


    const fullHandler = () => { 
        console.log('full')
        if((bordercolor1 === '#4a64f5')
        &&(bordercolor2 === '#4a64f5')
        &&(bordercolor3 === '#4a64f5')){
    
            full(true);
        }else{
            full(false);
        }

    }

    const [div1, setDiv1] = useState('hidden');
    const [div2, setDiv2] = useState('hidden');
    const [div3, setDiv3] = useState('hidden');

    const[address, setAddress] = useState('');//주소
    const[addressDetail, setAddressDetail] = useState('');//상세주소

    const [isOpenPost, setIsOpenPost] = useState(false); 

    const onChangeOpenPost = ()=> { 
        setIsOpenPost(!isOpenPost);
        post(true)
    }

    const onCompleteOpenPost = (data)=> { 
        let fullAddr = data.address; 
        let extraAddr =''

        if(data.addressType === 'R'){ 
            if(data.bname !== ''){ 
                extraAddr += data.bname;
            }
            if(data.buildingName !== ''){ 
                extraAddr += extraAddr !== '' ? `,${data.buildingName}` : data.buildingName;
            }
            fullAddr += extraAddr !== '' ? `(${extraAddr})` : '';
        
    }
    post(false);
    setAddress(data.zonecode);
    setAddressDetail(fullAddr); 
    setIsOpenPost(false);
};

    const postCodeStyle = { 
        display: 'block', 
        position:'relative', 
        zIndex:'1000',
        top: '0%', 
        width: '520px', 
        height: '100vh', 
        padding: '7px'
    }

    const checkNumber = (str) => { 
        const regExp = /[0-9]/;
        return regExp.test(str); 
    }

    const Number1 = (ele) => { 

        
        if(checkNumber(ele.nativeEvent.data)){ 
            setColor1('#4a64f5')
        }else{ 
            setColor1('red')
        }

        if(ele.nativeEvent.data.length > 13){
            setColor1('red')
        }
       

    }


    const Number2 = (ele) => { 

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

    const showDiv1 = (ele) => { 
        setDiv1('visible')
        ele.target.placeholder='';
    }

    const showDiv2 = (ele) => { 
     setDiv2('visible')
     ele.target.placeholder='';


    
     }
 

 const showDiv3 = (ele) => { 
     setDiv3('visible')
     setColor3('#4a64f5')
     ele.target.placeholder='';
     }
 
     const inputImg = useRef(null);
     const ingam = useRef(null)


 function fileUpload(){

        let file = inputImg.current.files[0];
         ingam.current.value = file.name;
        }


        function checkCorporateRegiNumber(number){
            let color ='red'
            var numberMap = number.replace(/-/gi, '').split('').map(function (d){
                return parseInt(d, 10);
            });
            
            if(numberMap.length == 10){
                var keyArr = [1, 3, 7, 1, 3, 7, 1, 3, 5];
                var chk = 0;
                
                keyArr.forEach(function(d, i){
                    chk += d * numberMap[i];
                });
                
                chk += parseInt((keyArr[8] * numberMap[8])/ 10, 10);
                console.log(chk);
                if( Math.floor(numberMap[9]) === ( (10 - (chk % 10) ) % 10)){ 
                    color = 'blue'
                }
            }
            setColor2(color);
            
        }

        function is_bubinno(bubinNum){
            var as_Biz_no = String(bubinNum);
            var isNum = true;
            var I_TEMP_SUM = 0 ;
            var I_TEMP = 0;
            var S_TEMP;
            var I_CHK_DIGIT = 0;
            var color ='red';
            
            if(bubinNum.length != 13) {
                color ='red';
            }
            
            for(let index01 = 1; index01 < 13; index01++) {
            var i = index01 % 2;
            var j = 0;
            
            if(i == 1) j = 1;
            else if( i == 0) j = 2;
            
            I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(index01-1, index01),10) * j;
            }
            
            I_CHK_DIGIT= I_TEMP_SUM%10 ;
            if(I_CHK_DIGIT != 0 ) I_CHK_DIGIT = 10 - I_CHK_DIGIT;
            
            if (as_Biz_no.substring(12,13) != String(I_CHK_DIGIT)){

                color ='red';

            }else{ 
                color = 'blue'
            }

            setColor1(color)
            }



             

            const checkKorean = (str) => { 
                const regExp = /[ㄱ-ㅎ|ㅏ-ㅣ가-힣]/;
                return regExp.test(str); 
            }
  

    const Korean = (ele) => { 

        if(ele.target.value){ 
           setColor3('blue')
           if(!checkKorean(ele.target.value)){
           setColor3('red')
           }
   
       }
       }
   
            
            
           



return (

<div className='test' style={{maxWidth: '520px', margin:'auto', marginBottom: '100px', position: 'relative', zIndex: 0}}>
{isOpenPost ? (
    <DaumPostcode style={postCodeStyle} autoClose onComplete={onCompleteOpenPost}/>
) :
    (<>
   

<div id="page2-2" style={{display: 'block'}}>
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
        color: '#000000'}}>
    법인 상세정보 <br/>
</div>



<div class="" id="textcon24" style={{width: '90%', margin:'20px'}}>


    <div className="imformname Regular" style={{visibility: 'visible', fontSize:'12px', color:'#898989' }}> 법인 인감<span style={{color:"#b7b7b7"}}>(사용인감)</span>
        <img src={question}  style={{marginLeft:'5px'}}/>
    </div>

<div style={{display: 'flex',height: '36px', marginBottom: '30px'}}>
              <label htmlFor="ex_file">    
              <img src={file_btn} 
               style={{display:'inline', marginTop:'5px', transform: 'translateY(10px)', marginBottom:'20px', width: '110px'}}/>
              </label>
              <input type="file" onChange={fileUpload} id="ex_file" ref ={inputImg} style={{visibility: 'hidden', height: '0px'}}/>

    <div className="inputdiv" id="inputdivin" 
    style={{ borderBottom: '1px solid rgb(224 224 224)', height: '30px',width: '330px', marginTop: '22px', display: 'inline-block'}}>
        
    <div style={{display:'inline'}} id="inputdivingam">
    <input type="text" id="ingam" ref={ingam} className="textcont" style={{border:'none', width: '330px', outline:'none', fontSize: '20px'}} readOnly=""/>
    </div>

    </div>
 </div>




    <div className="imformname" id="imformname44" style={{visibility: div1, fontSize: '12px', color:'#898989'}} > 법인 등록번호</div>
    <div className="inputdiv" id="inputdiv44" style={{borderBottom: `1px solid ${bordercolor1}`, marginBottom: '10px'}}>
    <input autoComplete="off" type="number" name="" defaultValue="" id="text44" className="textcont" 
      onClick={showDiv1}
      onChange={(ele) => is_bubinno(ele.target.value)}
        style={{marginBottom: '5px',
        outline: 'none',
        caretColor: bordercolor1,
        padding: '0px',
        margin:'0px',
        border:'none',
           height: '40px',
           fontSize: '20px',
           lineHeight: '1.1',
           letterSpacing: 'normal',
           textAlign: 'left',
           color: 'internal light dark'}}
        placeholder="법인 등록번호" />
    </div>

    <div className="imformname" id="imformname55" style={{visibility: div2, fontSize: '12px', color:'#898989'}} > 사업자 등록번호</div>
    <div className="inputdiv" id="inputdiv55" style={{borderBottom: `1px solid ${bordercolor2}`, marginBottom: '10px'}}>
        <input autoComplete="off" type="number" name="" defaultValue="" id="text55" className="textcont" placeholder="사업자 등록번호" 
        onClick={showDiv2}
        onChange={(ele) => checkCorporateRegiNumber(ele.target.value)}
        style={{marginBottom: '5px',
        border:'none',
        caretColor: bordercolor2,
        padding: '0px',
        margin:'0px',
           height: '40px',
           fontSize: '20px',
           lineHeight: '1.1',
           outline:'none',
           letterSpacing: 'normal',
           textAlign: 'left',
           color: 'internal light dark'}}
        maxLength="10" oninput="maxLengthCheck(this)"/>
    </div>



    <div className="imformname" id="imformnamepost-1" style={{visibility: div3, fontSize: '12px', color:'#898989'}}> 법인 등본상 주소</div>
    <div className="inputdiv" style={{width:'330px',
    borderBottom: '1px solid rgb(224 224 224)',
               height: '40px',
               display:'inline-block'}}>
        <input type="text" id="textpost-1" className="textcont" 
        defaultValue=''
        value={address}
        onClick={showDiv3}
        style={{
        border:'none',
        padding: '0px',
        margin:'0px',
        display: 'inline-block',
        width: '330px',
           height: '40px',
           fontSize: '20px',
           lineHeight: '1.1',
           outline: 'none',
           letterSpacing: 'normal',
           textAlign: 'left',
           color: 'internal light dark'}}
        placeholder="법인 등본상 주소" readonly=""/></div>
<img src={upyen} style={{width: 'calc(30% - 15px)',display:'inline-block', transform: 'translateY(7px)', marginLeft: '10px', marginBottom:'20px', marginTop: '-10px',float: 'right'}} onClick={onChangeOpenPost}/>

    <div className="inputdiv" id="inputdiv111" style={{borderBottom: '1px solid rgb(224 224 224)', marginBottom: '10px'}}>
        <input type="text" id="textpost-23" className="textcont" style={{border:'none', display:'inline'}} readonly=""
        value={addressDetail}
        style={{marginBottom: '5px',
        outline: 'none',
        border:'none',
        width: '100%',
        padding: '0px',
        margin:'0px',
           height: '40px',
           fontSize: '20px',
           lineHeight: '1.1',
           letterSpacing: 'normal',
           textAlign: 'left',
           color: 'internal light dark'}}
        /></div>

    <div className="inputdiv" id="inputdiv112" style={{borderBottom: `1px solid ${bordercolor3}`}}>
        <input autocomplete="off" type="text" name="" defaultValue="" id="text61" className="textcont" placeholder="상세주소를 입력해주세요" 
        onClick={showDiv3}
        onChange={Korean}
        onKeyUp={fullHandler}
        style={{marginBottom: '5px',
               border:'none',
               padding: '0px',
               outline: 'none',
               margin:'0px',
               caretColor: bordercolor3,
                  height: '40px',
                  fontSize: '20px',
                  lineHeight: '1.1',
                  letterSpacing: 'normal',
                  textAlign: 'left',
                  color: 'internal light dark'}}
                  />
    </div>
    </div> 


</div>
</>)}

</div>
)}

export default CorporateDetails;