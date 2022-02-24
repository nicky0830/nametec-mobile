import React, {useState, useEffect} from 'react';
import TopbarComponentWithoutPage from '../components/Topbarwithoutpage'
import GuidelineComponent from '../components/Guideline';
import Nextbutton from '../components/Nextbutton';
import {Link} from "react-router-dom";
import '../style.css';
import x_round from '../image/x_round.png'
import $ from 'jquery';

function Infomcheck(){
const [phone, setPhone] = useState(0);
const [email, setEmail] = useState(0);
const [eventcss, setEventcss] = useState('disabled-link');
useEffect(()=> {
btnCheck()
    })
const numberCheckFun = (e) => {
 var text1 = e.target.value;

var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
if (regPhone.test(text1) === true) {
setPhone(1)
$('#textcoco').css("border-bottom", "solid 2px #4a64f5");
}else{
$('#textcoco').css("border-bottom", "solid 2px red");
setPhone(0)
}
}
const emailCheckFun = (e) => {
var emailVal = e.target.value;
var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
if (re.test(emailVal)===false) {
setEmail(0)
$('#textcoco2').css("border-bottom", "solid 2px red");
}else {
setEmail(1)
$('#textcoco2').css("border-bottom", "solid 2px #4a64f5");
 }
}
const btnCheck = () => {
            if(phone===1 && email===1){
                          $('#next_button').css('background-color', '#4a64f5');
                          setEventcss("")
                           $('#dam').css('color', '#ffffff');
            }
            else {
                    $('#next_button').css('background-color', '#efefef');
                        $('#dam').css('color', '#b7b7b7');
                        setEventcss("disabled-link")

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
            <div id="textcoco" className=""  style={{width: 'calc(100% - 40px)', paddingLeft:'3px',margin: '24px 0 0 20px',  borderBottom: 'solid 2px #b7b7b7' }}>
                    <input id="tela" onChange={numberCheckFun} type="tel" maxLength="11" name="" className="informchecktext Medium" placeholder="전화번호" style={{border: 'none', color : '#000000',opacity : "0.4" }}/>
                </div>
            <div id="textcoco2" className=""  style={{width: 'calc(100% - 40px)', paddingLeft:'3px',margin: '24px 0 0 20px',  borderBottom: 'solid 2px #b7b7b7' }}>
                                <input onChange={emailCheckFun} id="tela2" type="text"  name="" className="informchecktext Medium" placeholder="이메일" style={{border: 'none', color : '#000000',opacity : "0.4"}}/>
                            </div>
            <Link to="/Success3" className={eventcss}>
            <div id="next_button" className="noto"
                                 style={{cursor:'pointer', position: 'fixed',bottom:'0px',display: 'flex', alignItems: 'center',justifyContent: 'center', backgroundColor: '#efefef'}}>
                                <div id="dam" style={{color:'#b7b7b7'}}> 다음</div>
                            </div>
            </Link>
        </div>

    )

}

export default Infomcheck;


$(document).ready(function () {

    $('#tela').focus(function () {
        $('#textcoco').css("border-bottom", "solid 2px #4a64f5");
        $('#tela').css("color", "#000000");
        $('#tela').css("opacity", "1");
          $('html,body').animate({
        scrollTop: 0
   });
    });
    $('#tela').blur(function () {
        $('#inputdiv1').css("border-bottom", "solid 2px #b7b7b7");
        $('#tela').css("color", "#000000");
        $('#tela').css("opacity", "1");
    });
        $('#tela').blur(function () {
            var flag = true;
            flag = $(this).val().length > 0 ? false : true;
            if (flag) {
                $('#textcoco').css("border-bottom", "solid 2px #b7b7b7");
                $('#tela').css("opacity", "0.4");
            } else {
            }
        });



    $('#tela2').focus(function () {
            $('#textcoco2').css("border-bottom", "solid 2px #4a64f5");
            $('#tela2').css("color", "#000000");
            $('#tela2').css("opacity", "1");
              $('html,body').animate({
            scrollTop: 0
       });
        });
        $('#tela2').blur(function () {
            $('#inputdiv1').css("border-bottom", "solid 2px #b7b7b7");
            $('#tela2').css("color", "#000000");
            $('#tela2').css("opacity", "1");
        });
            $('#tela2').blur(function () {
                var flag = true;
                flag = $(this).val().length > 0 ? false : true;
                if (flag) {
                    $('#textcoco2').css("border-bottom", "solid 2px #b7b7b7");
                    $('#tela2').css("opacity", "0.4");
                } else {
                }
            });

    });