import nametecLogo from "../image/nametecLogo.png";
import menu from "../image/menu.png";
import React ,{Component} from "react";
import { useState } from "react";
import Modal from './Modal';
import '../text.css'







export default function MainHeader(){
    const [display, setDisplay] = useState('none');

    const modalHandler = () => { 
        if(display === 'none'){
            setDisplay('inline-block');
        }else{ 
            setDisplay('none');
        }
        return;
    }

    return(
        <>
        <div style={{ top : "0px",
            Width: "100%",
            backgroundColor : "#FFFFFF",
            zIndex :"10010",
            maxWidth: "520px",
            margin: "auto",
            borderBottom : "1px solid #e0e0e0",
            height : "55px" }}>
            <img src={nametecLogo} style={{display: "inline-block",
                width: "105px",
                transform: "translate(28px)",
                marginTop: "12px"}}/>
            <img src={menu} style={{cursor:"pointer",
                display: 'inline-block',
                float : "right",
                marginTop : "20px",
                marginRight : "20px"}} 
                onClick = {modalHandler}/>              
        </div>
        <Modal display={display} modalHandler={modalHandler}/>
  
        </>

    );
}