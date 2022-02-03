import arrow from "../image/arrow@3x.png";
import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom'; 
import { DotCircleBar } from './ApplicantInfo';
import question from '../image/question_mark.png';
import file_btn from '../image/file_button@3x.png';
import upyen from '../image/upyen.png';
import DaumPostcode from 'react-daum-postcode';

const CorporateDetails = () => {

    const [bordercolor1, setColor1] = useState('#e0e0e0')
    const [bordercolor2, setColor2] = useState('#e0e0e0')

    const [div1, setDiv1] = useState('hidden');
    const [div2, setDiv2] = useState('hidden');
    const [div3, setDiv3] = useState('hidden');

    const[address, setAddress] = useState('');//주소
    const[addressDetail, setAddressDetail] = useState('');//상세주소

    const [isOpenPost, setIsOpenPost] = useState(false); 

    const onChangeOpenPost = ()=> { 
        setIsOpenPost(!isOpenPost);
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

    setAddress(data.zonecode);
    setAddressDetail(fullAddr); 
    setIsOpenPost(false);
};

    const postCodeStyle = { 
        display: 'block', 
        position:'relative', 
        zIndex:'1000',
        top: '0%', 
        width: '400px', 
        height: '400px', 
        padding: '7px'
    }

    const checkNumber = (str) => { 
        const regExp = /[0-9]/;
        return regExp.test(str); 
    }

    const Number1 = (ele) => { 

        if(ele.nativeEvent.data){
            setColor1('blue')
        
        if(!checkNumber(ele.nativeEvent.data)){ 
            setColor1('red')
        }
        if(ele.nativeEvent.data.length >6){
            setColor1('red')
        }
       }

    }


    const Number2 = (ele) => { 

        if(ele.nativeEvent.data){
            setColor2('blue')
        
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
         
    }

    const showDiv2 = (ele) => { 
     setDiv2('visible')
    
     }
 

 const showDiv3 = (ele) => { 
     setDiv3('visible')
        
    
     }
 

    




return (

<div className='test' style={{maxWidth: '520px', margin:'auto', marginBottom: '100px', position: 'relative', zIndex: 0}}>
{isOpenPost ? (
    <DaumPostcode style={postCodeStyle} autoClose onComplete={onCompleteOpenPost}/>
) :
    (<>
   

  



<div id="page2-2" style={{display: 'block'}}>
<div className="headLine"     style={{ 
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

<div style={{display: 'flex'}}>
    <div className="filebox" style={{flex: '1'}}>
              <label for="ex_file">    
              <img src={file_btn}  style={{display:'inline', marginTop:'5px', transform: 'translateY(10px)', width: '96px'}}/>
              </label>
              <input type="file" onchange="fileUpload()" id="ex_file" style={{visibility: 'hidden', height: '0px'}}/>
    </div>

    <div className="inputdiv" id="inputdivin" 
    style={{ borderBottom: '1px solid rgb(224 224 224)', width: '190px', flex: '4'}}>
        
    <div style={{display:'inline'}} id="inputdivingam">
    <input type="text" id="ingam" className="textcont" style={{border:'none', width: '190px'}} readonly=""/>
    </div>

    </div>
 </div>




    <div className="imformname" id="imformname44" style={{visibility: div1, fontSize: '12px', color:'#898989'}} > 법인 등록번호</div>
    <div className="inputdiv" id="inputdiv44" style={{borderBottom: `1px solid ${bordercolor1}`}}>
        <input autoComplete="off" type="number" name="" defaultValue="" id="text44" className="textcont" 
      onClick={showDiv1}
      onChange={Number1}
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
           color: '#b7b7b7'}}
        placeholder="법인 등록번호"  maxLength="13" onInput="maxLengthCheck(this)"/>
    </div>

    <div className="imformname" id="imformname55" style={{visibility: div2, fontSize: '12px', color:'#898989'}} > 사업자 등록번호</div>
    <div className="inputdiv" id="inputdiv55" style={{borderBottom: `1px solid ${bordercolor2}`}}>
        <input autocomplete="off" type="number" name="" defaultValue="" id="text55" className="textcont" placeholder="사업자 등록번호" 
        onClick={showDiv2}
        onChange={Number2}
        style={{marginBottom: '5px',
        outline: 'none',
        border:'none',
        caretColor: bordercolor2,
        padding: '0px',
        margin:'0px',
           height: '40px',
           fontSize: '20px',
           lineHeight: '1.1',
           letterSpacing: 'normal',
           textAlign: 'left',
           color: '#b7b7b7'}}
        maxlength="10" oninput="maxLengthCheck(this)"/>
    </div>





    <div className="imformname" id="imformnamepost-1" style={{visibility: div3, fontSize: '12px', color:'#898989'}}> 법인 등본상 주소</div>
    <div style={{display: 'flex'}}>
    <div className="inputdiv" style={{width:'60%',display:'inline-block', flex: '4 1 0'}} style={{borderBottom: '1px solid rgb(224 224 224)'}}>
        <input type="text" id="textpost-1" className="textcont" style={{border:'none',display:'inline'}}
        defaultValue=''
        onClick={showDiv3}
        style={{marginBottom: '5px',
        border:'none',
        padding: '0px',
        margin:'0px',
           height: '40px',
           fontSize: '20px',
           lineHeight: '1.1',
           outline: 'none',
           letterSpacing: 'normal',
           textAlign: 'left',
           color: '#b7b7b7'}}
        placeholder="법인 등본상 주소" readonly=""/></div>
    <div style={{display:"inline", flex: '1 1 0'}}>
<img src={upyen} style={{width: 'calc(40% - 15px)', transform: 'translateY(7px)', marginLeft: '10px', float: 'right'}} onClick={onChangeOpenPost}/>

    </div>
    </div>

    <div className="inputdiv" id="inputdiv111" style={{borderBottom: '1px solid rgb(224 224 224)'}}>
        <input type="text" id="textpost-23" className="textcont" style={{border:'none', display:'inline'}} readonly=""
        style={{marginBottom: '5px',
        outline: 'none',
        border:'none',
        padding: '0px',
        margin:'0px',
           height: '40px',
           fontSize: '20px',
           lineHeight: '1.1',
           letterSpacing: 'normal',
           textAlign: 'left',
           color: '#b7b7b7'}}
        /></div>

    <div className="inputdiv" id="inputdiv112" style={{borderBottom: '1px solid rgb(224 224 224)'}}>
        <input autocomplete="off" type="text" name="" value="" id="text61" className="textcont" placeholder="상세주소를 입력해주세요" 
        style={{border:'none', color : 'rgb(0,0,0)'}}
        style={{marginBottom: '5px',
               border:'none',
               padding: '0px',
               outline: 'none',

               margin:'0px',
                  height: '40px',
                  fontSize: '20px',
                  lineHeight: '1.1',
                  letterSpacing: 'normal',
                  textAlign: 'left',
                  color: '#b7b7b7'}}
                  />
    </div>
    </div> 

<Link to ='/applicant2'>
<button type="button" id="next_button6" className='Medium'
style={{height:'60px', marginTop:'4%', position: 'fixed', 
bottom: '0px', width : '520px', border: 'none', 
backgroundColor:'#efefef', color: '#b7b7b7', fontSize: '17px'
}} disabled="disabled">다음
</button>
</Link>
</div>
</>)}

</div>
)}

export default CorporateDetails;