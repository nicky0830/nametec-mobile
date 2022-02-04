import React, { useState } from 'react';
import TopbarComponent  from '../components/Topbar';
import Nextbutton from '../components/Nextbutton';
import {Link} from 'react-router-dom';
import GuidelineComponent from '../components/Guideline';
import '../style.css';
import plusbox from '../data/plus_box@3x.png';
import Plus_button from '../image/Plus_button@3x.png'

function BrandLogoRegister(){ 
    return(
    <div style={{margin : 'auto',maxWidth : '520px'}}>
        <TopbarComponent page={'02'} path={'/brandregister'}/>
        <div style={{width : '342px',margin : 'auto'}}>
        <GuidelineComponent title1="상표 로고도 함께" title2={"등록하시나요?"} help={'꼭 필요한 것은 아닙니다'}>
        </GuidelineComponent>
        </div>
        <div style={{marginTop : '-45px'}}>
            <div style={{width : '100%',maxWidth : '520px', textAlign : 'center', margin : '0 auto'}}>
                <div className="box" style={{marginTop : '-141px',height:'253px', width: 'calc(100% - 64px)', border : '2px dashed lightgrey', margin:'30px',borderRadius: '5px'}}>
                    <input type="file" accept="image/*,.pdf,.png" name="file-1[]" id="file-1"
                           className="inputfile inputfile-1" style={{display:'none',textAlign:'center'}}/>
                            <div id="image_container">
                                <img className="thumb" src={Plus_button} id="top" style={{marginTop : '100px',cursor:'pointer',border:'none',height: '39px',width: '38px'}}/>
                            </div>
                </div>
            </div>
        </div>
        {/*<img className="brandlogoregister-plusbox" src={plusbox}/>*/}
        <Link to="/brandcategoryregister">
        <Nextbutton text={"다음"}/>
        </Link>
    </div>
    )
}

export default BrandLogoRegister;