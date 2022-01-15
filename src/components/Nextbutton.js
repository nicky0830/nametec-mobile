import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {useState} from 'react';


const Nextbutton = styled.button`

  font-weight: bold;
    font-size: 17px;
    border: none;
    background-color: #4a64f5;
    height: 60px;
    width: 100%;
    max-width: 520px;
        cursor: pointer;
    position: fixed;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #efefef;

`
//click에 따라 props 속성이 생기고 사라져야 : onClick의 이벤트 핸들러 함수가 삼항연산자로 props를 생성하고 삭제 
//props를 생성하고 안 생성하는 것은 상태 왜냐하면 1. 부모에게 받는 props가 아니고 2. 변화가 있고 3. 컴포넌트 안에 다른 state, props와 계산 가능하지 않음
//일단 작동확인 위해 클릭할 때마다 null -> 생성 -> null 
//(조건은 페이지마다 다르게 줘야한다) 
//: onClick의 이벤트 핸들러 함수를 props로 받으면 될듯 : 페이지 컴포넌트의 자식 nextbutton 컴포넌트의 색 변화 조건이 페이지마다 다른 거니까 '조건인 이벤트핸들러 함수'을 props로 받아서 사용

export default function NextButtonComponent({text}){ 
  const [click, setClick ] = useState(null); 

  return(
    <Nextbutton onClick = {() => setClick(!click)} click = {click}>
      {text}
    </Nextbutton>
  )
}
 
