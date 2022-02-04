import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom'
import arrow from "../image/arrow@3x.png";
import { DotCircleBar } from './ApplicantInfo';
import button from '../image/upyen.png';
import DaumPostcode from 'react-daum-postcode';


const ApplicantAddress = ({post}) => {
    const [div1, setDiv1] = useState('hidden');
    const [div2, setDiv2] = useState('hidden');

    const [bordercolor1, setColor1] = useState('#e0e0e0')


    const checkKorean = (str) => { 
        const regExp = /[ㄱ-ㅎ|ㅏ-ㅣ가-힣]/;
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
   const showDiv1 = (ele) => { 
           setDiv1('visible')
            
       }

       const showDiv2 = (ele) => { 
        setDiv2('visible')
        ele.target.placeholder ='';
        setColor1('#4a64f5')
       
        }

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
    post(false)
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

return (
    <>
        <div className='test' style={{width: '520px', margin:'auto', height: '100%'}}>

        {isOpenPost ? (
    <DaumPostcode style={postCodeStyle} autoClose onComplete={onCompleteOpenPost}/>
) :(
<>
  
    <div id="page3">
            <div className="headLine"
            style={{ 
                marginTop: '10px',
                marginLeft: '20px',
                fontSize: '30px',
                fontWeight: 'bold',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: '1.27',
                letterSpacing: 'normal',
                textAlign: 'left',
                color: '#000000'
            }}
            
            >
                출원인 등본상 주소<br />
            </div>

            <div class="" id="textcon3" style={{width:'90%', margin:'auto',marginTop: '20px'}}>

                <div className="imformname Regular" id="imformnamepost" style={{visibility: div1, fontSize:'12px', color: 'rgb(183,183,183)'}}>우편 번호</div>
                
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div className="inputdiv" style={{borderBottom: '1px solid rgb(224 224 224)', width: '280px', height: '42px', paddingTop: '20px',flex: '3', marginBottom: '10px'}}>
                
                <input type="text" id="textpost" class="textcont" 
                defaultValue=''
                onChange={showDiv1}
                value={address}
                style={{
                     border:'none',
                     outline: 'none',
                        height: '40px',
                        fontSize: '20px',
                        letterSpacing: 'normal',
                        textAlign: 'left',
                        color: 'internal light dark'}}
                        placeholder="우편 번호" readonly=""/>
                        </div>
                <img src={button} onClick={onChangeOpenPost}
                style={{width: 'calc(40% - 15px)', height: '57px',marginLeft: '10px'}}/>
                </div>

                <div class="inputdiv" id="inputdiv_textpostdet"
                 style={{borderBottom: '1px solid rgb(224 224 224)'}}
                 >
                    <div>
                <input type="text" id="textpostdet" class="textcont1" style={{border:'none', marginBottom: '10px'}} readonly=""
                  value={addressDetail}
                   style={{marginBottom: '5px',
                   border:'none',
                      width: '80%',
                      outline: 'none',
                      height: '40px',
                      fontSize: '20px',
                      lineHeight: '1.1',
                      letterSpacing: 'normal',
                      textAlign: 'left',
                      color: 'internal light dark'}}/>
                    </div>
                </div>

                <div class="imformname" id="imformname6" style={{visibility: div2, fontSize: '12px', color: 'rgb(183,183,183)', marginTop: '10px'}}> 상세주소</div>
                <div class="inputdiv" id="inputdiv6" style={{borderBottom: `1px solid ${bordercolor1}`}}>
                    <input autocomplete="off" type="text" name="" id="text6" class="textcont" placeholder="상세주소를 입력해주세요" 
                   defaultValue=''
                   onClick={showDiv2}
                   onChange={Korean}
                   style={{marginBottom: '5px',
                    border:'none',
                    caretColor: bordercolor1,
                       width: '80%',
                       height: '40px',
                       outline: 'none',
                       fontSize: '20px',
                       lineHeight: '1.1',
                       letterSpacing: 'normal',
                       textAlign: 'left',
                       color: 'internal light dark'}}/>
                </div>

            </div>

           
</div>
</>)}
</div>
</>
)}

export default ApplicantAddress;
