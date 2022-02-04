import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import ApplicantAddress from "./ApplicantAddress";
import ApplicantInfo from "./ApplicantInfo";
import ApplicantNumber from './ApplicantNumber';
import CorporateInfo from './CorporateInfo';
import CorporateHead from './CorporateHead';
import CoroporateDetails from './CorporateDetails';
import ApplicantAgree from './ApplicantAgree';
import ApplicantAssign from './ApplicantAssign';
import ApplyFinish from './ApplyFinish';
import arrow from "../image/arrow@3x.png";
import styled from 'styled-components';

export const DotCircleBar = styled.div`
float: right;
margin-right: 25px;
margin-top: 30px;

>.circle1{ 
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #efefef;
    border-radius: 25px;
    margin-right: 3.5px;
    margin-left: 3.5px;

  }

  >.bar1{ 
    display: inline-block;
    width: 16px;
    height: 2px;
    background-color: #efefef;
    transform: translateY(-4px);
  }
`



function All() {

    // state를 위에서 관리하면 되지 않을까
    // 각 컴포넌트 const[0,1,2,3]
    // function(){if(state === 0) }
    // 경신함수를 통해 페이지 번호로 바꾸고 해당 페이지 visibility를 visible로 

    const [page, setPage] = useState(0);
    const [full, setFull] = useState(0); 
    const [post, setPost] = useState(false)
    

    const pageHandler = () => {
        console.log('click')
        if(page === 2.5){ 
            setPage(3);
        }else{
        setPage(page+1);
        }
    };

    const arrowHandler = () => { 
        setPage(page-1);
        if(page === 3){ 
            setPage(2) 
            //setPage(2.5)
        }

    }

    const tabHandler = () => { 
        if((page*10)%10 === 0){
            setPage(page + 0.5);
        }else{ 
            setPage(page-0.5)
        }
        console.log(page)

    }

 
    //최상위에서만 hook이용

    // visiblity를 바꿔야 
    //그럼 if(page === 1) ? visible : hidden 으로 각 페이지마다 컴포넌트로 만들어서 import
    //props로 관리
    //다음 버튼 클릭, 탭 클릭할 때 page에 1 or 0.5 더하기
    const pageRender = () => { 
        console.log('render')
        switch (page){
        case 0:  
            return <ApplicantInfo tab={tabHandler}/>
        case 1:
            return <ApplicantNumber />
        case 2: 
            return <ApplicantAddress  post={postHandler}/>
        
        case 0.5: 
            return <CorporateInfo tab={tabHandler}/>
        case 1.5: 
            return <CoroporateDetails post={postHandler} />
        case 2.5: 
            return <CorporateHead />

        case 3: 
            return <ApplicantAgree/>
        case 4: 
            return <ApplicantAssign />
        case 5: 
            return <ApplyFinish />
        
        break;
        default: 
            return <ApplyFinish/>
      
        }
    }
    
    const postHandler = (el) => { 
        setPost(el)
    }

    return (

        // rendering 
        <>
        <div className='test' style={{width: '520px',margin:'auto', height: '100%', marginBottom: page>=5 ? '0px' : '100px'}}>
        <div style={{display: page>=5 || post ? 'none' : 'block'}}>
        <div className="menu2" style={{marginTop : '42px', marginBottom:'70px', height: '20px', display: 'flex', justifyContent: 'space-between'}}> 
        <div>
        <img src={arrow} style={{width : '15px', marginTop :'25px', marginLeft: '18px',display: page<1? 'none': 'block'}} onClick={arrowHandler}/>
        </div>
        <DotCircleBar>
        <div className="circle1" style={{backgroundColor: page >-1 ? '#4a64f5' : '#efefef'}}></div>
        <div className="bar1" style={{backgroundColor: page >= 1 ? '#4a64f5' : '#efefef'}}></div>
        <div className="circle1" style={{backgroundColor: page >= 1 ? '#4a64f5' : '#efefef'}}></div>
        <div className="bar1" style={{backgroundColor: page >= 2 ? '#4a64f5' : '#efefef'}}></div>
        <div className="circle1" style={{backgroundColor: page >=2 ? '#4a64f5' : '#efefef'}}></div>
        <div className="bar1" style={{backgroundColor: page >=3 ? '#4a64f5' : '#efefef'}}></div>
        <div className="circle1" style={{backgroundColor: page >=3 ? '#4a64f5' : '#efefef'}}></div>
        <div className="bar1" style={{backgroundColor: page >=4 ? '#4a64f5' : '#efefef'}}></div>
        <div className="circle1" style={{backgroundColor: page >=4 ? '#4a64f5' : '#efefef'}}></div>
    </DotCircleBar>
    </div>
    </div>
            <div > 
                {pageRender()}
            </div>
            { page>=5 || post ? null :
            <button type="button" id="next_button6" className='Medium'
                onClick={()=>pageHandler()}
                style={{
                    visibility: page>=5 ? 'hidden':'visible',
                    textAlign:'center', margin: 'auto',
                    height: '60px', position: 'fixed',
                    bottom: '0px', width: '520px', border: 'none',
                    padding: '0px',
                    backgroundColor: full ? '#4a64f5': '#efefef', color: '#b7b7b7', fontSize: '17px'
                }}>다음
            </button>}
        </div>
            
            </>
    );
}

export default All;