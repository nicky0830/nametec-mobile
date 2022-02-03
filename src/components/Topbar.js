import React from 'react'
import styled from 'styled-components';
import backarrow from '../data/backarrow@3x.png'
import {Link} from 'react-router-dom';
import '../text.css'

export const Topbar = styled.div`

>a .topbar-backbutton{ 
cursor:pointer;
margin-top : 16px;
width: 14px;
height: 23px;
margin: 16px 0 0 20px;
object-fit: contain;
}

>.topbar-pagecontainer{
  
  width: 49px;
  height: 24px;
  margin: 0 20px 44px 14px;
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-align: left;
  color: #b7b7b7;
  display: ${(props) => props.display ? 'block' : 'none'}
}


>.topbar-pagenumber{
       float: right;
    margin: 4% 4px 0 0;
    font-size: 16px;
    font-weight: normal;
    text-align: left;
    color: #4a64f5;
}
>.topbar-pageallnumber{
margin: 4% 20px 0 0;
    float: right;
    font-size: 16px;
    color: #b7b7b7;
}

`
// style을 입힌 컴포넌트를 리턴문이 있는 다른 컴포넌트 안에 넣음


 export default function TopbarComponent({page, path}){
    return (
    <Topbar>
      <Link to={path}>
      <img className="topbar-backbutton" src={backarrow} alt='<'/>
      </Link>
      <span className='topbar-pagecontainer' display>
        <span className='topbar-pageallnumber Regular'>/ 03</span>
      <span className="topbar-pagenumber Regular">{page}</span>
      </span>
      </Topbar>
        )
}

