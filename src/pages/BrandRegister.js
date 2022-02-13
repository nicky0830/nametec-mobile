import React , { useState }from 'react';
import TopbarComponent from '../components/Topbar';
import GuidelineComponent from '../components/Guideline';
import Nextbutton from '../components/Nextbutton';
import {Link} from "react-router-dom";
import '../style.css';
import x_round from '../image/x_round.png'
import '../text.css';
import $ from 'jquery';

function BrandRegister(){
    const [text, setText] = useState('');
    const [eventcss, setEventcss] = useState('disabled-link');
    const onChange = (e) => {
        setText(e.target.value);
      };
    const onKeyUP = (event) => {
            if(event.target.value.length>0){
                          $('#next_button').css('background-color', '#4a64f5');
                           $('#dam').css('color', '#ffffff');
                           $('#textcon').css("border-bottom", "solid 2px #4a64f5");
                                   $('#text').css("color", "#000000");
                                   $('#text').css("opacity", "1");
                                   setEventcss("")
            }
            else {
                    $('#next_button').css('background-color', '#efefef');
                        $('#dam').css('color', '#b7b7b7');
                        $('#text').css("opacity", "0.4");
                        setEventcss("disabled-link")
            }
    }
      const onReset = () => {
          setText('');
          $('#textcon').css("border-bottom", "solid 2px #b7b7b7");
          $('#text').css("opacity", "0.4");
           $('#next_button').css('background-color', '#efefef');
            $('#dam').css('color', '#b7b7b7');
            setEventcss("disabled-link")
        };

    return (
        <div style={{margin : 'auto',maxWidth : '520px'}}>
            <TopbarComponent page={'01'} path={'/'}/>
            
            <div style={{width : '342px',margin : 'auto'}}>
            <GuidelineComponent title1={"등록하실 상표명이"} title2={"무엇인가요?"}/>
            </div>
            
            <div id="textcon" style={{width: 'calc(100% - 40px)', paddingLeft: '3px', margin: '-25px 0px 20% 20px', borderBottom: '2px solid #b7b7b7'}}>
            <input className='brandregister-input' onChange ={onChange} onKeyUp={onKeyUP} type="text" id="text" value={text} placeholder="등록하실 상표명을 입력해주세요" style={{border: 'none', color: 'transparent',textShadow: '0 0 0 black', opacity: '0.4'}}/>
            <img onClick={onReset}src={x_round} className="x_btn"  style={{cursor : 'pointer',width: '16px', height: '16px', float:'right', margin: '15px 3px 0px 0px'}}/>
            </div>

            <Link to="/brandlogoregister" className={eventcss}>
            <div id="next_button" className="noto"
                     style={{cursor:'pointer', position: 'fixed',bottom:'0px',display: 'flex', alignItems: 'center',justifyContent: 'center', backgroundColor: '#efefef'}}>
                    <div id="dam" style={{color:'#b7b7b7'}}> 다음</div>
                </div>
            </Link>
        </div>
        
    )

}

export default BrandRegister;

$('#textcon').ready(function () {

    $('#text').focus(function () {
        $('#textcon').css("border-bottom", "solid 2px #4a64f5");
        $('#text').css("color", "#000000");
        $('#text').css("opacity", "1");
          $('html,body').animate({
        scrollTop: 0
   });
    });
    $('#text').blur(function () {
        $('#inputdiv1').css("border-bottom", "solid 2px #b7b7b7");
        $('#text').css("color", "#000000");
        $('#text').css("opacity", "1");
    });
        $('#text').blur(function () {
            var flag = true;
            flag = $(this).val().length > 0 ? false : true;
            if (flag) {
                $('#next_button').css('background-color', '#efefef');
                $('#dam').css('color', '#b7b7b7');
                $('#textcon').css("border-bottom", "solid 2px #b7b7b7");
                $('#text').css("opacity", "0.4");
            } else {

                $('#next_button').css('background-color', '#4a64f5');
                $('#dam').css('color', '#ffffff');
            }
        });


    });
