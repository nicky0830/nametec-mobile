import React from 'react'
import menu from "../image/menu@3x.png";
import '../text.css'
import {useState} from 'react';
import x_btn from '../image/x_menuicon@3x.png';
import { Link } from 'react-router-dom';
import backarrow from '../data/backarrow@3x.png'
import user_profile from "../image/user_profile.png"; 
import modify_profile from '../image/modify_profile@2x.png';
import arrowdown from '../image/mypagearrow@3x.png'
import arrowup from '../image/uparrow@3x.png'






const MyInfoItem = ({name, email}) => { 
    return(
        <div class="conList" 
        style={{width: '90%', marginLeft: '5%', marginTop: '39px', 
        paddingBottom: '20px', paddingTop:'20px', 
        border: 'solid 1px #e0e0e0', borderRadius: '10px', 
        margin: '15px 20px 0x 20px',
        textAlign: 'left',
        display: 'grid',
        gridTemplateColumns: '0.3fr 0.8fr 0.2fr',
        boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.14)'}}>
        <img src={user_profile} 
                style={{marginLeft: '18px', marginRight: '10px',display:'inline-block'}}/>
      <div style={{display:'inline-block', width: '90%'}}>
        <div style={{display:'inline-block', marginTop: '2px'}}>
            <div id="customername" className = 'Medium' style={{fontSize: '16px'}}>{name}</div>
            <div id="customeremail" style={{fontSize: '10px',color: '#b7b7b7'}}>{email}</div>
        </div>
      </div>     
      <div style={{display:'inline-block',float:'right'}}>
        <Link to='/member'>
        <img src={modify_profile} 
             style={{cursor:'pointer', marginTop: '15px', marginRight: '20px', width: '68px'}}/>
        </Link>
      </div>
  </div>


    )
}

const ItemContent  = ({title, subtitle, current}) => { 
    return( 
        <div  style={{borderBottom: '1px solid rgb(224, 224, 224)', marginLeft: '5%', marginRight: '5%'}}>
            {/* font 상속이 되나 싶어서 부모에 className을 넣었는데 상속 X */}
    <div className = 'Medium' style={{paddingTop: '10px', color: 'rgb(137, 137, 137)', fontSize: '16px'}}>{title}</div>
    <div  className = 'Medium' style={{color: 'rgb(81, 81, 81)', paddingBottom: '8px', fontSize: '16px'}}>{subtitle}</div>
   { typeof current === 'string'  ? 
    <div 
    className ='Medium'
    style={{
    fontSize: '12px', 
    position: 'absolute', 
    borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 4px 0px', 
    textAlign: 'center', 
    height: '36px', width: '130px', 
    left: '50%',
    marginLeft: '30px', marginTop: '18px', 
    lineHeight: '3', 
    backgroundColor: 'rgb(239, 239, 239)', color: 'rgb(137, 137, 137)'}}>
       {current}
    </div> : null}
    {/* current값이 있으면 넣고 없으면 null */}
</div>
    )
}

// const MypageItem = () => { 
//     return (
// <div id="application_show" style="width: 90%; margin-left: 5%;border-radius: 10px;
//   border: solid 1px #e0e0e0;box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.14);margin-top : 23px;">

// <div style="margin-left: 5%; margin-right: 5%; margin-top: 22px;">
// <div id="maindiv0" style="cursor: pointer;">
// <div style="font-size: 16px; color: rgb(74, 100, 245); text-align: center; display: inline-block; width: 70px; transform: translateY(-5px); position: absolute; margin-top: 15px;">입금대기</div>
// <div style="display: inline-block; margin-left: 110px;">
//     <div style="display: inline-block;">상표명</div>
//     <div style="font-size: 12px; color: rgb(183, 183, 183); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 140px;">의류 및 패션 제품</div>
// </div>
// <img id="imgdiv0" src="../static/image/mypagearrow@3x.png" style="float: right; display: inline-block; margin-top: 16px; width: 10px;"/>
//     </div>


//     <div style="width: 111%; height: 1px; margin-left: -5.5%; background-color: rgb(224, 224, 224); margin-top: 20px;">
// </div>


// <div style="border-bottom: 1px solid rgb(224, 224, 224); margin-left: 5%; margin-right: 5%;">
//     <div style="padding-top: 10px; color: rgb(137, 137, 137);">결제일</div>
//     <div style="color: rgb(81, 81, 81); padding-bottom: 8px;">2022-01-15</div>
//     <div style="font-size: 12px; position: absolute; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 4px 0px; text-align: center; height: 36px; width: 130px; left: 50%; margin-left: 30px; margin-top: 18px; line-height: 3; background-color: rgb(239, 239, 239); color: rgb(137, 137, 137);">
//         출원인 정보 입력완료
//     </div>
// </div>

// <div style="border-bottom: 1px solid rgb(224, 224, 224); margin-left: 5%; margin-right: 5%;">
//     <div style="padding-top: 10px; color: rgb(137, 137, 137);">출원인 정보</div>
//     <div style="color: rgb(81, 81, 81); padding-bottom: 8px;">내용 없음</div>
//     <div style="font-size: 12px; position: absolute; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 4px 0px; text-align: center; height: 36px; width: 130px; left: 50%; margin-left: 30px; margin-top: 18px; line-height: 3; background-color: rgb(239, 239, 239); color: rgb(137, 137, 137);">
//         출원 내역 상세보기
//     </div>   
//  </div>
 
//  <div style="border-bottom: 1px solid rgb(224, 224, 224); margin-left: 5%; margin-right: 5%;">
//      <div style="padding-top: 10px; color: rgb(137, 137, 137);">
//          출원일
//     </div>

// <div style="color: rgb(81, 81, 81); padding-bottom: 8px;">
//     날짜 미정
// </div>
// <div style="font-size: 12px; position: absolute; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 4px 0px; text-align: center; height: 36px; width: 130px; left: 50%; margin-left: 30px; margin-top: 18px; line-height: 3; background-color: rgb(239, 239, 239); color: rgb(137, 137, 137);">
//     등록료 결제하기
// </div>
// </div>

// <div style="border-bottom: 1px solid rgb(224, 224, 224); margin-left: 5%; margin-right: 5%;">
//     <div style="padding-top: 10px; color: rgb(137, 137, 137);">등록료 납부상태</div>
//     <div style="color: rgb(81, 81, 81); padding-bottom: 8px;">납부일 미정</div>
//     </div>

// <div style="padding-left: 5%; padding-right: 5%; border-bottom: 1px solid rgb(224, 224, 224);">
//         <div style="padding-top: 10px; color: rgb(137, 137, 137);">
//             등록일
//         </div>
//         <div style="color: rgb(81, 81, 81); padding-bottom: 8px;">
//                 날짜 미정
//         </div>
//     </div>
//                 </div>
//                 </div>
// </div>


//     )
// }




const MypageTopbar = () => { 
    const [display, setDisplay] = useState('none');
    const [open, setOpen] = useState(false)
    

    const modalHandler = () => { 
        if(display === 'none'){
            setDisplay('inline-block');
        }else{ 
            setDisplay('none');
        }
        return;
    }

    const itemHandler = () => { 
        setOpen(!open);
    }


    return (
        // 마이페이지 헤더
        <div style={{margin:'auto', maxWidth:'520px'}}>
            <div style={{ top : "0px",
            Width: "100%",
            backgroundColor : "#FFFFFF",
            zIndex :"10010",
            maxWidth: "520px",
            margin: "auto",
            display: 'flex', 
            justifyContent: 'space-between',
            borderBottom : "1px solid #e0e0e0",
            height : "55px" }}>
            
            <Link to='/'>
            <img className="topbar-backbutton" src={backarrow} 
            style={{objectFit: 'contain', 
            width: '14px', 
            height: '23px', 
            margin: '16px 0 0 20px'}} 
            alt='<'/>
            </Link>

            <div className='Bold' style={{display: 'inline-block', marginTop : '12px', fontWeight: '500', fontSize: '20px' }}>마이페이지</div>

            <img src={menu} style={{cursor:"pointer",
                display: 'inline-block',
                float : "right",
                width: '22px',
                height: '17px',
                marginTop : "20px",
                marginRight : "20px"}} 
                onClick = {modalHandler}/>              
        </div>

{/* state를 정하고 export하는 컴포넌트에서 state를 받아서 사용 */}
{/* 상위, 하위의 개념이 아니라 둘다 동시에 받으면 된다 그러니까  */}

{/* 마이 페이지 메뉴모달 */}



        <div id="menuContainer" 
    style={{display: display, 
     position: 'fixed', 
     top: '0px', 
     width: '100%', 
     height: '100%', 
     backgroundColor: 'rgba(0, 0, 0, 0.7)', 
     fontFamily: 'Bold', 
     fontSize: '24px',
     maxWidth: '520px', 
     margin: 'auto',
     zIndex : '20000'}}>
    

     <div style={{backgroundColor:'#ffffff', width: '100%'}}>

              <div className = "menuicon1">
              <img src={x_btn} class="" id="xbtn" onClick={modalHandler} style={{cursor:'pointer', width : '18px', float : 'right',  marginRight : '20px', marginTop: '20px' }}/>
             </div>

            <div className="menuicon1" style={{height : '50px'}}>
            <Link to='/'>
            <span style={{cursor: 'pointer', marginLeft: '20px', marginTop: '15px', display:'inline-block', color: "black"}}>메인화면</span>
            </Link>
            </div>  
            
 
            <div className="menuicon1"  style={{marginTop : '25px', marginLeft: '20px'}}>
                <Link to='/costprocess'>
                <span style={{cursor: 'pointer', color: 'black', display: 'inline-block'}}>비용 및 절차 안내</span>
                </Link>
             </div>
          <div className ="menuicon1"  style={{marginTop : '25px', marginLeft: '20px'}}>
                 <span style={{cursor: 'pointer'}}> 고객센터</span>
             </div>
            <div className="menuicon1" id="logoutBtn" style={{marginTop : '25px', marginLeft: '20px'}} >
                <Link to='/'>
                 <span style={{cursor: 'pointer', color: 'black', display: 'inline-block'}}>로그아웃</span>
                 </Link>

           </div>
    
            <div style={{height: '33px'}}></div> 
         </div> 




     </div>

        {/* 마이페이지 리스트 */}
       <div>
            <MyInfoItem name='곽나경' email='kwaknicky@naver.com'/>

            <div id="application_show" style={{width: '90%', marginLeft: '5%', borderRadius: '10px',
            border: 'solid 1px #e0e0e0', boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.14)', marginTop : '23px'}}>
            {/* 리스트 전체 컨테이너 */}

            <div style={{margin : '22px 5% 0px 5%'}}>
            <div id="maindiv0" style={{cursor: 'pointer'}}  onClick ={itemHandler}>
            <div className='Regular'
            style={{fontSize: '16px', 
            color: 'rgb(74, 100, 245)', 
            textAlign: 'center', 
            display: 'inline-block', 
            width: '70px', 
            height: '24px',
            transform: 'translateY(-5px)', 
            position: 'absolute', 
            marginTop: '15px'}}>입금대기</div>
            <div style={{display: 'inline-block', marginLeft: '110px'}}>
                <div style={{display: 'inline-block'}}>상표명</div>
                <div style={{fontSize: '12px', color: 'rgb(183, 183, 183)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '140px'}}>의류 및 패션 제품</div>
            </div>
            <img id="imgdiv0" src={open? arrowup : arrowdown} 
            style={{float: 'right', 
            display: 'inline-block', 
            marginTop: '16px', 
            width: '10px'}}
           />
            </div>
            <div style={{width: '111%',
             height: '1px', 
             marginLeft: '-5.5%',
             backgroundColor: 'rgb(224, 224, 224)', 
             marginTop: '20px'}}>
             </div>

            <div id="div50" class="backGR" 
            style={{backgroundColor: 'rgb(250, 250, 250)', 
            height: '335px', width: '111%', 
            marginLeft: '-5.5%', 
            display: open ? 'block' : 'none' }}>

            <ItemContent title='결제일' subtitle='2022-01-10' current='출원인 정보 입력완료'/>
            <ItemContent title='출원인 정보' subtitle='내용없음' current='출원 내역 상세보기'/>
            <ItemContent title='출원일' subtitle='날짜 미정' current='등록료 결제하기'/>
            <ItemContent title='등록료 납부 상태' subtitle='납부일 미정' current= {null}/>
            <ItemContent title='등록일' subtitle='날짜 미정'/>



            </div>
       </div>

                        
        </div>
        </div>
        </div>
    )

}

export default MypageTopbar;

