import React from 'react'; 
import styled from 'styled-components';
import {useState} from 'react';
import arrowdown from '../data/arrowdown@3x.png';
import arrowup from '../data/arrowup@3x.png';
import '../style.css'

const Dropdown = styled.div`
  display: flex;
  justify-content: space-between;
  width: 335px;
  height: 60px;
  margin: 0px 20px 0px 20px;
  padding: 11px 15.5px 11px 15px;
  border: solid 1px ${(props) => props.click ? '#4f63ec' : '#e0e0e0' };
  background-color: ${(props) => props.click ? '#edeffe' : '#fff' };
  box-shadow: rgba(0,0,0,0.5);
  border-radius: 5px;
 

  >.dropdowntxt-container{
    display: flex; 
    justify-content: flex-start;
    align-items: center;

  >.dropdown-txt{ 
  padding: 0 10px 0 0;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #000;

}

>.dropdown-help{ 
  font-size: 16px;
  font-stretch: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #000;

}
  }
  



>.dropdown-arrow{ 
  justify-self: flex-end;
  margin: 22px 0;
  width: 20px;
  height: 10px;
}
`

const DropdownContent = styled.div`
  width: 335px;
  height: 283px;
  padding: 20px 15.5px 20px 15px;
  margin: 0px 20px 0px 20px;
  border: solid 1px #e0e0e0;
  background-color: #fafafa;
  display: ${(props) => props.click? 'block' : 'none' };
  
  >.dropdowncontent{ 
    width: 225px;
  height: 54px;
  margin: 0 0 6px;
  font-family: NotoSansCJKKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #515151;
  }

  >.dropdowncontent-btn{ 
    width: 295px;
  height: 44px;
  margin: 175px 20px 20px 20px;
  padding: 10px 118px;
  border-radius: 5px;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.button ? '#4a64f5' : '#fff' };
  /* 자식 셀렉터 안에서는 props 불가능? */
  border-style: none;

   >span{ 
    width: 59px;
  height: 24px;
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color:  ${(props) => props.button ? '#fff' : '#4a64f5'};

   }
  }
  

  
`

 function DropdownComponent({text,help, content}){ 
     const [click, setClick] = useState(false);
     const [button, setButton] = useState(false);

     const clickHandler = () => { 
         setClick(!click);
       
     }

     const buttonHandler = () => { 
        setButton(!button);
     }


    return ( 
        <>
    <Dropdown onClick={clickHandler} click={click}> 
       <div className='dropdowntxt-container'>
       <span className='dropdown-txt Bold'>{text}</span> 
       <span className='dropdown-help Regular'>{help}</span> 
       </div>
       <img className='dropdown-arrow' src={click ? arrowup : arrowdown} onClick={clickHandler}/>
       
    </Dropdown>
    <DropdownContent click={click}>
        <div className='dropdowncontent'>{content}</div>
        <button className='dropdowncontent-btn' onClick={buttonHandler} button={button}>
            <span className='dropdowncontent-btntxt Regular'>{ button ? '선택해제' : '선택하기' }</span>
            </button>
    </DropdownContent>
    </>
    )
}

export default DropdownComponent;