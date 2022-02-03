import React, { useEffect, useRef, useState } from 'react';
import finish from "../image/finishText.png";

const ApplyFinish = () => {

return (
    <>
<div className="test1" style={{maxWidth: '520px', margin: 'auto', backgroundColor: '#4a64f5', height : '110vw', display: 'block'}}>

    <img src={finish} style={{width:'232px',position: 'absolute', left : '50%', marginLeft  : '-116px', top : '40%', marginTop : '-41px'}}/>
    <div className="Light" style={{position: 'absolute',left : '50%',marginLeft  : '-67.5px', fontSize : '14px', color : '#ffffff', top : '50%', textAlign : 'center'}}>
        <a href="https://m.nametec.kr/" style={{color: 'white', fontWeight: 'bold'}}>네임텍 사이트 바로가기</a>
    </div>
</div>
</>
)}

export default ApplyFinish;