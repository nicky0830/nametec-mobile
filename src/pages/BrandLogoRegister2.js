import React, { useState, useRef } from 'react';
import TopbarComponent  from '../components/Topbar';
import Nextbutton from '../components/Nextbutton';
import {Link} from 'react-router-dom';
import GuidelineComponent from '../components/Guideline';
import '../style.css';
import plusbox from '../data/plus_box@3x.png';
import Plus_button from '../image/Plus_button@3x.png'

function BrandLogoRegister(){ 
    const input = useRef(null); 
    const img = useRef(null);
    const [src, setSrc] = useState('')

    function fileUpload(){ 
        console.log(input); 
        console.log(img)
        let file = input.current.files[0]; 
        console.log(file);

        const reader = new FileReader()
        console.log(reader)
        reader.onload = e => { 
            setSrc(e.target.result)
        }
        console.log(img)

        reader.readAsDataURL(file)

        
    }

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
                   { src ? <img ref = {img} src={src}
                    style={{marginTop : '0px', height:'253px', width:'auto'}}
                   /> :
                    <>
                    <input type="file" accept="image/*,.pdf,.png" name="file-1[]" id="file-1"
                            onChange={fileUpload}
                            ref={input}
                            className="inputfile inputfile-1" 
                            style={{ display: 'none', textAlign: 'center' }} />
                            <label htmlFor='file-1'>
                             <img className="thumb"
                                src={Plus_button} id="top"
                                  style={{display: 'inline-block', marginTop: '100px', cursor: 'pointer',
                                            border: 'none', height: '39px', width: '38px' }} />
                            </label>
                    </> }
                </div>
            </div>
        </div>
        {/*<img className="brandlogoregister-plusbox" src={plusbox}/>*/}
        <Link to="/brandcategoryregister">
        <div id="next_button" className="noto"
                                     style={{cursor:'pointer', position: 'fixed',bottom:'0px',display: 'flex', alignItems: 'center',justifyContent: 'center', backgroundColor: '#4a64f5'}}>
                                    <div id="dam" style={{color:'#ffffff'}}> 다음</div>
                                </div>
        </Link>
    </div>
    )
}

export default BrandLogoRegister;