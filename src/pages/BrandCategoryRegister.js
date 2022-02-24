import  React, {useState, useEffect} from 'react';
import TopbarComponent from '../components/Topbar';
import GuidelineComponent from '../components/Guideline';
import Nextbutton from '../components/Nextbutton';
import {Link} from 'react-router-dom'
import DropdownComponent from '../components/Dropdown';
import '../text.css';
import icon1 from '../image/icon1.png'
import icon2 from '../image/icon2.png'
import icon3 from '../image/icon3.png'
import icon4 from '../image/icon4.png'
import icon5 from '../image/icon5.png'
import icon6 from '../image/icon6.png'
import icon7 from '../image/icon7.png'
import icon8 from '../image/icon8.png'
import icon9 from '../image/icon9.png'
import icon10 from '../image/icon10.png'
import icon11 from '../image/icon11.png'
import blu1 from '../image/blu1.png'
import blu2 from '../image/blu2.png'
import blu3 from '../image/blu3.png'
import blu4 from '../image/blu4.png'
import blu5 from '../image/blu5.png'
import blu6 from '../image/blu6.png'
import blu7 from '../image/blu7.png'
import blu8 from '../image/blu8.png'
import blu9 from '../image/blu9.png'
import blu10 from '../image/blu10.png'
import blu11 from '../image/blu11.png'
import $ from "jquery";

function BrandCategoryRegister(){
const [count, setCount] = useState(0);
const [eventcss, setEventcss] = useState('disabled-link');
const [btntext, setBtntext] = useState('다음');
const [img1, setText1] = useState([icon1,'categorybox']);
const [img2, setText2] = useState([icon2,'categorybox']);
const [img3, setText3] = useState([icon3,'categorybox']);
const [img4, setText4] = useState([icon4,'categorybox']);
const [img5, setText5] = useState([icon5,'categorybox']);
const [img6, setText6] = useState([icon6,'categorybox']);
const [img7, setText7] = useState([icon7,'categorybox']);
const [img8, setText8] = useState([icon8,'categorybox']);
const [img9, setText9] = useState([icon9,'categorybox']);
const [img10, setText10] = useState([icon10,'categorybox']);
const [img11, setText11] = useState([icon11,'categorybox']);
 useEffect(()=> {
 onKeyUP()
     })
const onClick1 = (i) => {
if (img1[0]==icon1){
setText1([blu1,'categorybox2'])
setCount(count+1)
}else{
setText1([icon1,'categorybox'])
setCount(count-1)
}
      };
const onClick2 = (i) => {
if (img2[0]==icon2){
setText2([blu2,'categorybox2'])
setCount(count+1)
}else{
setText2([icon2,'categorybox'])
setCount(count-1)
}
      };
const onClick3 = (i) => {
if (img3[0]==icon3){
setText3([blu3,'categorybox2'])
setCount(count+1)
}else{
setText3([icon3,'categorybox'])
setCount(count-1)
}
      };
const onClick4 = (i) => {
if (img4[0]==icon4){
setText4([blu4,'categorybox2'])
setCount(count+1)
}else{
setText4([icon4,'categorybox'])
setCount(count-1)
}
      };
const onClick5 = (i) => {
if (img5[0]==icon5){
setText5([blu5,'categorybox2'])
setCount(count+1)
}else{
setText5([icon5,'categorybox'])
setCount(count-1)
}
      };
const onClick6 = (i) => {
if (img6[0]==icon6){
setText6([blu6,'categorybox2'])
setCount(count+1)
}else{
setText6([icon6,'categorybox'])
setCount(count-1)
}
      };
const onClick7 = (i) => {
if (img7[0]==icon7){
setText7([blu7,'categorybox2'])
setCount(count+1)
}else{
setText7([icon7,'categorybox'])
setCount(count-1)
}
      };
const onClick8 = (i) => {
if (img8[0]==icon8){
setText8([blu8,'categorybox2'])
setCount(count+1)
}else{
setText8([icon8,'categorybox'])
setCount(count-1)
}
      };
const onClick9 = (i) => {
if (img9[0]==icon9){
setText9([blu9,'categorybox2'])
setCount(count+1)
}else{
setText9([icon9,'categorybox'])
setCount(count-1)
}
      };
const onClick10 = (i) => {
if (img10[0]==icon10){
setText10([blu10,'categorybox2'])
setCount(count+1)
}else{
setText10([icon10,'categorybox'])
setCount(count-1)
}
      };
const onClick11 = (i) => {
if (img11[0]==icon11){
setText11([blu11,'categorybox2'])
setCount(count+1)
}else{
setText11([icon11,'categorybox'])
setCount(count-1)
}
      };
const onKeyUP = () => {
            if(count>0){
                          $('#next_button').css('background-color', '#4a64f5');
                           $('#dam').css('color', '#ffffff');
                           setEventcss('')
                           let textas = count + '개 선택 완료'
                           setBtntext(textas)
            }
            else {
                    $('#next_button').css('background-color', '#efefef');
                        $('#dam').css('color', '#b7b7b7');
                        setEventcss('disabled-link')
                        setBtntext('다음')
            }
    }
        return (
            <div style={{margin : 'auto',maxWidth : '520px'}}>
                <TopbarComponent page={'03'} path={'/brandlogoregister'}/>
                <div style={{width : '342px',margin : 'auto'}}>
                <GuidelineComponent title1={"어떤 제품, 서비스에"} title2={"상표를 사용하세요?"} help={'복수 선택도 가능합니다'}/>
                </div>

                <div id="1" onClick={() => onClick1()} style={{fontSize : '16px',lineHeight : '1',marginLeft:'20px'}} className={img1[1]}>
                <img src={img1[0]} style={{display: "inline-block",
                                width: "35px",marginLeft : '12px',marginBottom : '-3px'}}/>
                                <div style={{display :'inline-block',marginLeft : '10px' }}>
                <a className="Bold1">의류 및 패션 제품</a><a className="Light1">의 브랜드 이름</a><br/><a style={{fontSize : '12px'}} className="Light1">미용실, 관리샵 등 뷰티와 관련된 샵의 이름</a>
                </div>
                </div>
                <div id="2" onClick={() =>  onClick2()} style={{fontSize : '16px',lineHeight : '1',marginTop :'10px',marginLeft:'20px' }} className={img2[1]}>
                <img src={img2[0]} style={{display: "inline-block",
                                width: "35px",marginLeft : '12px',marginBottom : '-3px'}}/>
                                <div style={{display :'inline-block',marginLeft : '10px' }}>
                <a className="Bold1">화장품, 세면용품, 향수 등</a><a className="Light1"> 뷰티 제품명</a><br/><a style={{fontSize : '12px'}} className="Light1">직접 브랜딩, 제조하는 뷰티 제품의 이름</a>
                </div>
                </div>
                <div id="3" onClick={() =>  onClick3()} style={{fontSize : '16px',lineHeight : '1',marginTop :'10px',marginLeft:'20px' }} className={img3[1]}>
                <img src={img3[0]} style={{display: "inline-block",
                                width: "35px",marginLeft : '12px',marginBottom : '-3px'}}/>
                                <div style={{display :'inline-block',marginLeft : '10px' }}>
                <a className="Bold1">온라인쇼핑몰/스마트스토어</a><a className="Light1">의 상호명</a><br/><a style={{fontSize : '12px'}} className="Light1">다양한 상품을 온라인으로 판매하는 몰(스토어)의 이름</a>
                </div>
                </div>
                <div id="4" onClick={() =>  onClick4()} style={{fontSize : '16px',lineHeight : '1',marginTop :'10px',marginLeft:'20px' }} className={img4[1]}>
                <img src={img4[0]} style={{display: "inline-block",
                                width: "35px",marginLeft : '12px',marginBottom : '-3px'}}/>
                                <div style={{display :'inline-block',marginLeft : '10px' }}>
                <a className="Bold1">공방, 학원 등 교육 </a><a className="Light1">관련 서비스 이름</a><br/><a style={{fontSize : '12px'}} className="Light1">00공방, 00학원 등 교육과 관련된 서비스의 이름</a>
                </div>
                </div>
                <div id="5" onClick={() => onClick5()} style={{fontSize : '16px',lineHeight : '1',marginTop :'10px',marginLeft:'20px' }} className={img5[1]}>
                <img src={img5[0]} style={{display: "inline-block",
                                width: "35px",marginLeft : '12px',marginBottom : '-3px'}}/>
                                <div style={{display :'inline-block',marginLeft : '10px' }}>
                <a className="Bold1">인플루언서, 크리에이터</a><a className="Light1">의 채널 이름</a><br/><a style={{fontSize : '12px'}} className="Light1">유튜브, 인스타그램 등 SNS 계정 및 채널의 이름</a>
                </div>
                </div>
                <div id="6" onClick={() => onClick6()} style={{fontSize : '16px',lineHeight : '1',marginTop :'10px',marginLeft:'20px' }} className={img6[1]}>
                <img src={img6[0]} style={{display: "inline-block",
                                width: "35px",marginLeft : '12px',marginBottom : '-3px'}}/>
                                <div style={{display :'inline-block',marginLeft : '10px' }}>
                <a className="Bold1">건축, 인테리어 업체</a><a className="Light1">의 상호명</a><br/><a style={{fontSize : '12px'}} className="Light1">건축 사무소, 인테리어 업체의 이름</a>
                </div>
                </div>
                <div id="7" onClick={() => onClick7()} style={{fontSize : '16px',lineHeight : '1',marginTop :'10px',marginLeft:'20px' }} className={img7[1]}>
                <img src={img7[0]} style={{display: "inline-block",
                                width: "35px",marginLeft : '12px',marginBottom : '-3px'}}/>
                                <div style={{display :'inline-block',marginLeft : '10px' }}>
                <a className="Bold1">음식점, 카페, 주점</a><a className="Light1">의 가게 이름</a><br/><a style={{fontSize : '12px'}} className="Light1">식당, 커피숍, 베이커리 등 다양한 요식업 매장의 이름</a>
                </div>
                </div>
                <div id="8" onClick={() => onClick8()} style={{fontSize : '16px',lineHeight : '1',marginTop :'10px',marginLeft:'20px' }} className={img8[1]}>
                <img src={img8[0]} style={{display: "inline-block",
                                width: "35px",marginLeft : '12px',marginBottom : '-3px'}}/>
                                <div style={{display :'inline-block',marginLeft : '10px' }}>
                <a className="Bold1">병원, 약국 등 </a><a className="Light1">건강진료 서비스 상호명</a><br/><a style={{fontSize : '12px'}} className="Light1">병원, 약국, 상담 치료소 등의 이름</a>
                </div>
                </div>
                <div id="9" onClick={() => onClick9()} style={{fontSize : '16px',lineHeight : '1',marginTop :'10px',marginLeft:'20px' }} className={img9[1]}>
                <img src={img9[0]} style={{display: "inline-block",
                                width: "35px",marginLeft : '12px',marginBottom : '-3px'}}/>
                                <div style={{display :'inline-block',marginLeft : '10px' }}>
                <a className="Bold1">앱, 웹 서비스</a><a className="Light1">의 이름</a><br/><a style={{fontSize : '12px'}} className="Light1">앱 서비스, 온라인 웹 서비스의 이름</a>
                </div>
                </div>
                <div id="10" onClick={() => onClick10()} style={{fontSize : '16px',lineHeight : '1',marginTop :'10px',marginLeft:'20px' }} className={img10[1]}>
                <img src={img10[0]} style={{display: "inline-block",
                                width: "35px",marginLeft : '12px',marginBottom : '-3px'}}/>
                                <div style={{display :'inline-block',marginLeft : '10px' }}>
                <a className="Bold1">헤어, 메이크업, 네일 등 </a><a className="Light1">뷰티샵의 상호명</a><br/><a style={{fontSize : '12px'}} className="Light1">미용실, 관리샵 등 뷰티와 관련된 샵의 이름</a>
                </div>
                </div>
                <div id="11" onClick={() => onClick11()} style={{fontSize : '16px',lineHeight : '1',marginTop :'10px',marginLeft:'20px' }} className={img11[1]}>
                <img src={img11[0]} style={{display: "inline-block",
                                width: "35px",marginLeft : '12px',marginBottom : '-3px'}}/>
                                <div style={{display :'inline-block',marginLeft : '10px' }}>
                <a className="Bold1">여기에 없는 특별한 분야</a><br/><a style={{fontSize : '12px'}} className="Light1">보기에 없는 분야는 변리사 상담을 통해 진행하세요!</a>
                </div>
                </div>
                <div style={{height:'150px'}}>
                </div>
                <Link to="/success" className={eventcss}>
                <div id="next_button" className="noto"
                                     style={{cursor:'pointer', position: 'fixed',bottom:'0px',display: 'flex', alignItems: 'center',justifyContent: 'center', backgroundColor: '#efefef'}}>
                                    <div id="dam" style={{color:'#b7b7b7'}}> {btntext}</div>
                                </div>
                </Link>
            </div>
            
    )
}

export default BrandCategoryRegister;