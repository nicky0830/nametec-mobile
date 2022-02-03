import React from 'react'
import styled from 'styled-components';
import backarrow from '../data/backarrow@3x.png'
import {Link} from 'react-router-dom';
import '../text.css'
import Topbar from './Topbar';


const BarCircle = styled.div`
margin-top: 16px;
width: 14px;
height: 23px;
margin: 16px 0 0 20px;
object-fit: contain;

>.menu2{ 
>a img{ 
cursor:pointer;
margin-top : 16px;
width: 14px;
height: 23px;
margin: 16px 0 0 20px;
object-fit: contain;
}
}

>.i{ 
    margin-right: 25px;
    margin-top: 5%;
    display: inline-block;
    background-color: red;
    width: 100%;

  >.circle1{ 
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #efefef;
    border-radius: 25px;

  }

  >.bar1{ 
    display: inline-block;
    width: 16px;
    height: 2px;
    background-color: #efefef;
    transform: translateY(-4px);
  }
}
`

export default function InfoBar({path}){


    return (
      <>
  <BarCircle>
    <div className="menu2" style={{marginTop : '16px'}}>
       <Link path={path}>
        <img src={backarrow} style={{width : '15px', marginTop : '40px'}}/>
       </Link>
    </div>

    <div className = 'i' style={{display: 'inline-block', float: 'right', marginRight: '25px', marginTop: '5%'}}>
        <div className="circle1" style="background-color: #4a64f5;"></div>
        <div className="bar1"></div>
        <div className="circle1"></div>
        <div className="bar1"></div>
        <div className="circle1"></div>
        <div className="bar1"></div>
        <div className="circle1"></div>
        <div className="bar1"></div>
        <div className="circle1"></div>
    </div>
</BarCircle>
</>

      

        )
}
