import React, { useState } from 'react';
import TopbarComponent from '../components/Topbar';
import GuidelineComponent from '../components/Guideline';
import Nextbutton from '../components/Nextbutton';
import {Link} from 'react-router-dom'
import DropdownComponent from '../components/Dropdown';

function BrandCategoryRegister(){ 
 

        return (
            <>
            <div style={{margin : 'auto',maxWidth : '520px'}}>
            <TopbarComponent page={'03'} path={'/brandlogoregister'}/>
            <GuidelineComponent title={"어떤 제품, 서비스에 상표를 사용하세요?"} help={'복수 선택도 가능합니다'}/>
            <div className='dropdowncomponent-container' style={{margin : 'auto',maxWidth : '520px'}}>
            {/* {categoryList.map(el => <DropdownComponent text={el.title} help={el.subtitle} content={el.guide} key={el.id}/>)} */}
            {/* 상태 끌어올리기 : dropdowncontent에서 state 관리중: 부모에서 관리해야하는지 고민하기 -> 자식에서 관리 중이라서 그런지 여기서 map을 못 쓰게 한다. 왜??*/}
            <DropdownComponent text={"어플리케이션"} help={"서비스 이름"} content={"content"}/>
            <DropdownComponent text={"헤어, 메이크업, 네일 등"} help={"뷰티샵의 상호명"}/>
            <DropdownComponent text={"화장품, 세면용품, 향수 등"} help={"뷰티 제품명"}/>
            <DropdownComponent text={"공방, 학원 등"} help={"교육 관련 서비스 이름"}/>
            <DropdownComponent text={"건축, 인테리어 업체"} help={"의 상호명"}/>
            <DropdownComponent text={"병원, 약국 등"} help={"건강진료 서비스 상호명"}/>
            <DropdownComponent text={"특별한 분야"} help={"여기에 없는"}/>
            </div>
            <Link to="/">
            <Nextbutton text={'다음'}/>
            </Link>
            </div>
            </>
            
    )
}

export default BrandCategoryRegister;