<body style="width : 100%; margin: 0;">
    {/* 전체에 대한  */}
<div class="test" style=" max-width : 520px; margin:auto;margin-bottom : 100px;">
    {/* 전체에 대한 */}
<div class="">
    {/* top에 대한 */}
    <div class="menu2" style="margin-top : 16px;" onclick="backinform1_1()">
        <img src="../static/image/arrow@3x.png" onclick="" style="width : 15px;margin-top :40px;">
    </div>

    <div style="display: inline-block;float: right;margin-right: 25px;margin-top: 5%;">
        <div class="circle1" style="background-color: #4a64f5;"></div>
        <div class="bar1" style="background-color: rgb(74, 100, 245);"></div>
        <div class="circle1" style="background-color: rgb(74, 100, 245);"></div>
        <div class="bar1"></div>
        <div class="circle1"></div>
        <div class="bar1"></div>
        <div class="circle1"></div>
        <div class="bar1"></div>
        <div class="circle1"></div>
    </div>
</div>


<div id="page1" style="display: none;">
    <div class="headLine">
        출원인 정보입력 <br>
    </div>
    <div style="margin-left:20px; color:#515151; font-size:14px;margin-top:41px;">출원 유형</div>
        {/* 제목 */}
    <div style="margin:11px 20px 0px 20px;">
        <ul class="tabs">
            <li class="tab-link currentImform" data-tab="tab-1" style="cursor :  pointer;"><span style="margin-top : 7px;">개인/개인 사업자</span></li>
            <li style="float: right;margin-right:10px;margin-left : 12px;cursor :  pointer;" class="tab-link boximform2" data-tab="tab-2"><span style="margin-top : 7px;">법인</span>
            </li>
        </ul>

        <div class="c-checkbox c-checkbox--normal" style="margin-top: 8.5px; height:26.7px;">

        </div>
    </div>
    {/* tabs */}

    <div class="tabclass current" id="tab-1" style="  width:90%; margin:20px;margin-top: 41px;"> 

    {/* ul 안의 li */}
        <div class="imformname" id="imformname1" style="visibility: visible;"> 출원인 성명 
        <span style="color:#898989">(한글)</span>
        </div>
        <div class="inputdiv" id="inputdiv1" style="border-bottom: 1px solid rgb(224, 224, 224);">
            <input autocomplete="off" type="text" name="" value="" id="text1" class="textcont" placeholder="출원인 성명(한글)" style="border:none; color : #000000;color ; rgb(0, 0, 0);">
        </div>
        
        <div class="imformname" id="imformname2" style="visibility: visible;"> 출원인 성명 <span style="color:#898989">(영문)</span></div>
        <div class="inputdiv" id="inputdiv2" style="border-bottom: 1px solid rgb(224, 224, 224);">
            <input autocomplete="off" type="text" name="" value="" id="text2" class="textcont" placeholder="출원인 성명(영문)" style="border: none; color: rgb(0, 0, 0);">
        </div>

        <div class="imformname" id="imformname3" style="visibility: visible;"> 주민등록번호</div>
        <div class="inputdiv" id="inputdiv3" style="border-bottom: 1px solid rgb(224, 224, 224);">
            <input autocomplete="off" type="number" name="" value="" id="text3-1" class="textcont" placeholder="주민등록번호" style="border: none; color: rgb(0, 0, 0);" maxlength="6" oninput="maxLengthCheck(this)">
            <span class="lineDivider"> - </span>

            <input autocomplete="off" type="password" name="" value="" id="text3-2" class="textcont" placeholder="●●●●●●●" style="border: none; color: rgb(0, 0, 0);" maxlength="7" oninput="maxLengthCheck(this)" onkeyup="firstnum()">

            <input type="hidden" id="a">
        </div>

    </div>

    <div class="tabclass" id="tab-2">
        <div class="" id="textcon" style="  width:90%; margin:20px;">
            <div class="imformname" id="imformname11"> 법인 명칭 <span style="color:#b7b7b7">(한글)</span></div>
            <div class="inputdiv" id="inputdiv11">
                <input autocomplete="off" type="text" name="" value="" id="text11" class="textcont" placeholder="법인 명칭(한글)" style="border:none;">
            </div>
            <div class="imformname" id="imformname22"> 법인 명칭 <span style="color:#b7b7b7">(영문)</span></div>
            <div class="inputdiv" id="inputdiv22">
                <input autocomplete="off" type="text" name="" value="" id="text22" class="textcont" placeholder="법인 명칭(영문)" style="border:none;">
            </div>
        </div>
    </div>


</div>




<script>
  function firstnum() {

      var ssn = document.getElementById("text3-2");
      var current = document.getElementById("a");
      current.textContent = ssn.value;

      if(ssn.value.length>1){

      }

  }





</script>

<div id="page2" style={{display: block}}>
    <div class="headLine">
        출원인 연락처 <br/>
    </div>

    <div className="" id="textcon2" style={{width: '90%', margin: '20px', marginTop: '20px'}}>
        <div className="imformname" id="imformname5" style={{visibility: 'visible'}}> 출원인 전화번호</div>

        <div className="inputdiv" id="inputdiv5">
            <input autocomplete="off" type="tel" name="" value="" id="text5" class="textcont" placeholder="출원인 전화번호" style={{border:'none' , width: '95%',  color : '#000000'}} maxlength="11" oninput="maxLengthCheck(this)"/>
        </div>

        <div className="imformname" id="imformname4" style={{visibility: 'visible'}}> 출원인 이메일
        </div>
+        <div className="inputdiv" id="inputdiv4">
            <input autocomplete="off" type="email" name="cus_email" value="" id="text4" class="textcont" placeholder="출원인 이메일" style={{border:'none', color : '#000000'}}/>
        </div>

    </div>
</div>


<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>

<script>
    function sample6_execDaumPostcode1() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
<!--                    document.getElementById("sample6_extraAddress").value = extraAddr;-->

                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('textpost').value =  data.zonecode;
                let postcode = data.zonecode;
                document.getElementById("textpostdet").value = addr;
                sessionStorage.setItem('addr', addr);
                sessionStorage.setItem('postcode', postcode);
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("text6").focus();
            }
        }).open();
        judgein4();
    }




</script>

<div id="page3" style="display: none;">
    <div className="headLine">
        출원인 등본상 주소<br/>
    </div>

    <div class="" id="textcon3" style="  width:90%; margin:20px;margin-top: 20px;  ">

        <div class="imformname" id="imformnamepost" style="visibility: visible;"> 우편 번호</div>
        <div class="inputdiv" style="width:60%;display:inline-block;">
            <input type="text" id="textpost" class="textcont" style="border:none;width:80%;display:inline;color : rgb(0,0,0) " placeholder="출원인 등본상 주소" readonly=""></div>
        <div style="display:inline;">
            <img src="../static/image/upyen.png" onclick="sample6_execDaumPostcode1()" style="width: calc(40% - 15px);transform: translateY(7px);margin-left: 10px;">
        </div>

        <div class="inputdiv" id="inputdiv_textpostdet">
            <div><input type="text" id="textpostdet" class="textcont1" style="border:none;" readonly=""></div>
        </div>

        <div class="imformname" id="imformname6"> 상세주소</div>
        <div class="inputdiv" id="inputdiv6">
            <input autocomplete="off" type="text" name="" value="" id="text6" class="textcont" placeholder="상세주소를 입력해주세요" style="border:none;">

        </div>

    </div>


<!--    <div style="margin-top:47px; margin-left:5%; font-size:16px;">-->
<!--        <div style="margin-bottom: 20px;"><img src="../static/image/box@3x.png" style="width: 20px; height: 20px;"-->
<!--                                               onclick="checkboxClickk()" id="boxBox-1"><span-->
<!--                style="font-size: 17px;margin-left: 7px;transform: translateY(-2px);font-weight: bold;">위임 동의</span>-->
<!--        </div>-->
<!--        <div class="chmark" style="display:inline-block;width:12px;color: #b7b7b7;" onclick="checkmarkClick1()"><img-->
<!--                id="chmark1" style="width:12px;" src="../static/image/check_gray@3x.png"></div>-->
<!--        <div style="font-size:14px;color:#898989;display:inline-block; "><span style="color:#000000;display:inline;">(필수)</span>-->
<!--            개인정보수집에 동의합니다.-->
<!--        </div>-->
<!--        <img src="../static/image/question_mark.png"-->
<!--             srcset="../static/image/question_mark@2x.png 2x,-->
<!--             ../static/image/question_mark@3x.png 3x" onclick="questionmark1()">-->
<!--    </div>-->

<!--    <div style="margin-top:17px; margin-left:5%; font-size:16px;">-->
<!--        <div class="chmark" style="display:inline-block;width:12px;color: #b7b7b7;transform: translateY(-17px);"-->
<!--             onclick="checkmarkClick2()"><img id="chmark2" style="width:12px;" src="../static/image/check_gray@3x.png">-->
<!--        </div>-->
<!--        <div style="font-size:14px;color:#898989;display:inline-block; width:85%;"><span-->
<!--                style="color:#000000;display:inline;">(필수)</span> 상표등록과 관련된 일체의 업무에 대해<br>네임텍에 위임할 것을 의합니다.-->
<!--        </div>-->
 </div>
</div>


<!--<div style="height: 100px;"></div>-->
<button type="button" id="next_button6" style="height:60px;margin-top:4%; position: fixed; bottom: 0px; max-width : 520px;" onclick="inform1_3()">다음
</button>
<style>
    #text3-1 {
        width: 43%;
    }

    #text3-2 {
        width: 43%;
    }
    .circle1{
        display: inline-block;
        width:10px;
        height:10px;
        background-color: #efefef;
        border-radius: 25px;
    }
    .bar1{
        display: inline-block;
        width: 16px;
        height: 2px;
        background-color: #efefef;
        transform: translateY(-4px);
    }




</style>
<div id="page2-2" style="display: none;">
<div class="headLine">
    법인 상세정보 <br>
</div>


<div class="" id="textcon24" style="  width:90%; margin:20px;">













    <div class="imformname" style="visibility: visible;"> 법인 인감<span style="color:#b7b7b7">(사용인감)</span>
        <img src="../static/image/question_mark.png" srcset="../static/image/question_mark@2x.png 2x,
                 ../static/image/question_mark@3x.png 3x" style="margin-left:5px; ">
    </div>

    <div class="filebox">
              <label for="ex_file">  
                <img src="../static/image/file_button.png" srcset="../static/image/file_button@2x.png 2x,
                ../static/image/file_button@3x.png 3x" style="display:inline; margin-top:5px; transform: translateY(10px);">
                    
                </label>
              <input type="file" onchange="fileUpload()" id="ex_file">
    </div>

    <div class="inputdiv" id="inputdivin" style="width:calc(100% - 111px);display:inline-block;margin-top:10px; ">
        <div style="display:inline;" id="inputdivingam">
            <input type="text" id="ingam" class="textcont" style="border:none;" readonly=""></div>
    </div>






<style>
.where {
  display: block;
  margin: 25px 15px;
  font-size: 11px;
  color: #000;
  text-decoration: none;
  font-family: verdana;
  font-style: italic;
}
.filebox {display:inline-block; margin-right: 10px;}


.filebox label {
  display: inline-block;
  cursor: pointer;
}

.filebox input[type="file"] {  /* 파일 필드 숨기기 */
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip:rect(0,0,0,0);
  border: 0;
}

</style>












    <div class="imformname" id="imformname44"> 법인 등록번호</div>
    <div class="inputdiv" id="inputdiv44">
        <input autocomplete="off" type="number" name="" value="" id="text44" class="textcont" placeholder="법인 등록번호" style="border:none;width:95%;" maxlength="13" oninput="maxLengthCheck(this)">
    </div>

    <div class="imformname" id="imformname55"> 사업자 등록번호</div>
    <div class="inputdiv" id="inputdiv55">
        <input autocomplete="off" type="number" name="" value="" id="text55" class="textcont" placeholder="사업자 등록번호" style="border:none;width:95%;" maxlength="10" oninput="maxLengthCheck(this)">
    </div>


<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>

<script>
    function sample6_execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
<!--                    document.getElementById("sample6_extraAddress").value = extraAddr;-->

                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('textpost-1').value = data.zonecode;
                document.getElementById("textpost-23").value = addr;
                document.getElementById("textpost-1").style.color = "rgb(0,0,0)";
                document.getElementById("textpost-23").style.color = "rgb(0,0,0)";
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("text6").focus();
                let postcode = data.zonecode;
                sessionStorage.setItem('postcode', postcode);
                sessionStorage.setItem('addr', addr);
            }
        }).open();

        $('#next_button6').attr("disabled", false);
    }
</script>

    <div class="imformname" id="imformnamepost-1" style="visibility: visible;"> 법인 등본상 주소</div>
    <div class="inputdiv" style="width:60%;display:inline-block;">
        <input type="text" id="textpost-1" class="textcont" style="border:none;display:inline;" placeholder="법인 등본상 주소" readonly=""></div>
    <div style="display:inline;">

        <img src="../static/image/upyen.png" style="width: calc(40% - 15px);transform: translateY(7px);margin-left: 10px;" onclick="sample6_execDaumPostcode()">
    </div>

    <div class="inputdiv" id="inputdiv111">
        <input type="text" id="textpost-23" class="textcont" style="border:none;display:inline;" readonly=""></div>

    <div class="inputdiv" id="inputdiv112">
        <input autocomplete="off" type="text" name="" value="" id="text61" class="textcont" placeholder="상세주소를 입력해주세요" style="border:none; color : rgb(0,0,0) ;">
    </div>
        </div>

</div>



<div id="page2-3" style="display: none;">
<div class="headLine">
    대표자 정보 <br>
</div>


<div class="" id="textcon3-1" style="  width:90%;margin:20px;  ">

    <div class="imformname" id="imformname7" style="visibility: visible;"> 성명</div>
    <div class="inputdiv" id="inputdiv7">
        <input autocomplete="off" ;="" type="text" name="" value="" id="text7" class="textcont" placeholder="성명" style="border:none; color : rgb(0,0,0) ;">
    </div>



       <div class="imformname" id="imformname8"> 주민등록번호</div>
    <div class="inputdiv" id="inputdiv8">
        <input autocomplete="off" ;="" type="number" name="" value="" id="text8-1" class="textcont" placeholder="주민등록번호" style="border:none;" maxlength="6" oninput="maxLengthCheck(this)">
        <span class="lineDivider"> - </span>

        <input autocomplete="off" ;="" type="password" name="" value="" id="text8-2" class="textcont" placeholder="●●●●●●●" style="border:none;" maxlength="7" oninput="maxLengthCheck(this)">


        <!--        <img onClick="eraseInput('text3')" class="x_button" src="../static/image/x_round.png"-->
        <!--             srcset="../static/image/x_round@2x.png 2x,-->
        <!--             ../static/image/x_round@3x.png 3x" style="width: 16px; height: 16px; float:right;">-->
    </div>

    <div class="imformname" id="imformname9" style="visibility: visible;"> 이메일</div>
    <div class="inputdiv" id="inputdiv9">
        <input autocomplete="off" type="email" name="" value="" id="text9" class="textcont" placeholder="이메일" style="border:none; color : rgb(0,0,0) ;">
    </div>


    <div class="imformname" id="imformname10" style="visibility: visible;"> 휴대전화</div>
    <div class="inputdiv" id="inputdiv10">
        <input autocomplete="off" ;="" type="number" name="" value="" id="text10" class="textcont" placeholder="휴대전화" style="border:none; color : rgb(0,0,0) ;">
    </div>

</div>





</div>

<div id="page4" style="display: none;">
    <div class="headLine Bold">
        출원 내용 최종 동의 <br/>
    </div>

    <div class="Regular" style="margin-top:47px; margin-left:5%; font-size:12px;color : #4a64f5;">
        상표명
    </div>
    <div id="real_logo_id" class="Medium" style="margin-top : 4px;margin-left:5%; font-size:16px;">
        네임텍상표
    </div>
    <div class="Regular" style="margin-top:20px; margin-left:5%; font-size:12px;color : #4a64f5;">
        로고
    </div>
    <div id="logoinsert" style="text-align : center;margin-top : 10px;border: solid 1px #ccc;width: 122px;height: 74px; margin-left:5%;">

    </div>
    <div id="imformtable" style="margin-left : 5%;margin-top : 20px;border-top : 2px dashed #8989894a;">

    </div>
    <div id="checkagree" class="Regular" onclick="checkagree1();" style="font-size : 12px;margin-left : 20px; margin-right : 20px;background-color: #efefef;border-radius: 21px;margin-top : 20px;padding : 18px 10.9px 20px 60.9px;">
<img id="imgcheck" src="../static/image/grc@2x.png" style="position: absolute;width : 30px;margin-left : -40px;margin-top : 6px;"/>위 내용을 모두 확인하였으며,
<br/>해당 내용으로 상표를 출원하는 것에 동의합니다.
    </div>
    <div class="Regular" style="margin-top : 22px;font-size : 12px;margin-left : 5%;">
*내용수정이 필요할 경우, 유선 또는 이메일로 연락해주시기 바랍니다.

    </div>
    <div class="Regular" style="margin-top : 5px;font-size : 12px;margin-left : 5%;">
Tel : 02-922-5710
    </div>
    <div class="Regular" style="margin-top : 5px;margin-bottom : 100px;font-size : 12px;margin-left : 5%;">
Mail : admin@nametec.kr

    </div>
</div>
    {/* <div id="page5" style="display : none;">
    <div class="headLine">
        위임 및 정보 동의 <br>
    </div>


        <div id="checkagree1" class="Regular" onclick="checkmarkClick1();" style="font-size : 12px;margin-left : 20px; margin-right : 53px;background-color: #efefef;border-radius: 21px;margin-top : 30px;padding : 18px 10.9px 20px 60.9px;">
<img id="chmark1" src="../static/image/grc@2x.png" style="position: absolute;width : 30px;margin-left : -40px;margin-top : -4px;">(필수)<a id="agreeA"> 개인정보수집에 동의합니다 </a>
    </div>
    <div class="termbox Regular" style="font-size : 12px ;overflow : scroll;padding-left : 2px; ">
        1. 개인정보 수집 이용 목적 : 상표출원<br>
2. 개인정보 수집 항목 : 담당자 성명, 담당자 이메일, 담당자 휴대전화, 담당자 유선전화, 출원인 성명(한글, 영문), 법인명(한글, 영문), 인감(법인임감), 주민등록번호, 법인등록번호, 출원인 이메일, 출원인 휴대전화, 출원인 유선전화, 사업자등록번호(출원용, 세금계산서용), 휴대전화번호(출원용, 세금계산서용), 주소, 상호명(세금계산서용), 대표자명(세금계산서용), 이메일(세금계산서용)
<br>3. 제3자에게 정보제공 : 특허청, KG이니시스, 국세청, 금용결제원, 각 카드사, 각 은행, 각 통신사, 등<br>
4. 개인정보 보유 이용기간 : 상표출원일부터 10년<br>
5. 위와 같은 개인정보 수집 이용에 동의 하지 않으실 수 있습니다. (동의 거부시 출원진행 불가)
    </div>
        <div id="checkagree2" class="Regular" onclick="checkmarkClick2();" style="font-size : 12px;margin-left : 20px; margin-right : 53px;background-color: #efefef;border-radius: 21px;margin-top : 30px;padding : 12px 10.9px 12px 60.9px;">
<img id="chmark2" src="../static/image/grc@2x.png" style="position: absolute;width : 30px;margin-left : -40px;margin-top : 5px;">(필수)<a id="agreeB"> 상표등록과 관련된 일체의 업무에 대해<br>네임텍에 위임할 것을 의합니다. </a>
    </div>
    <div class="termbox Regular" style="font-size : 12px ;overflow : scroll; padding-left : 2px; ">

        1. 상표권 출원 및 등록에 관한 모든 절차<br>
2. 상표권의 존속기간 갱신등록에 관한 모든 절차<br>
3. 상표권 지정상품 추가등록에 출원에 관한 모든 절차<br>
4. 상표권 상품분류전화등록에 관한 모든 절차<br>
5. 상표권의 포기에 관한 모든 절차<br>
6. 상표권 등록출원에 관한 신청의 취하<br>
7. 상표권 등록출원에 관한 청구의 취하<br>
8. 상표등록출원에 관한 거절결정불복심판청구관련 모든 절차<br>
9. 상표등록출원에 관한 보정각하결정불복심판청구관련 모든 절차<br>
10. 복대리인의 선임<br><br>


상표법 제8조의 규정에 의하여 위와 같이 위임합니다.
    </div>
</div>
</div> */}

<script>
    let ee = ;
    let eee = ee[0] + "@" + ee[1];
    console.log(eee);

    if (typeof eee == 'undefined') {
    } else {
        $('#text4').val(eee);
        $('#inputdiv4').css("border-bottom", "solid 1px #e0e0e0");
        $('#text4').css("color", "#000000");
        $('#text').css("opacity", "1");
    }






    var qus = "";
    qus += '위임 동의\n'
    qus += '1. 상표권 등록 및 출원에 관한 모든 절차\n'
    qus += '3. 상표권 지정상품 추가등록 출원에 관한 모든 절차\n'
    qus += '4. 상표권 상품분류전환등록에 관한 모든 절차\n'
    qus += '5.상표권의 포기에 관한 모든 절차\n'
    qus += '6. 상표권 등록출원에 관한 신청의 취하\n'
    qus += '7. 상표권 등록출원에 관한 청구의 취하\n'
    qus += '8. 상표등록출원에 관한 거절결정불복심판청구관련 모든 절차\n'
    qus += '9. 상표등록출원에 관한 보정각하결정불복심판청구관련 모든 절차\n'
    qus += '10. 복대리인의 선임\n'
    qus += ' * 2~10번 항목은 출원인의 요청이 있는 경우에 한하여 당소 대리인(변리사) 업무를 할 수 있음을 의미할 뿐, 고객의 요청이 없는 한 변리사 임의로 절차를 대리하지 않으니 안심하시기 바랍니다.\n'

    var qus2 = "";
     qus2 += '개인정보수집에 동의\n'
    qus2 += '1. 개인정보 수집 이용 목적 : 상표출원 \n'
    qus2 += '2. 개인정보 수집 항목 : 담당자 성명, 담당자 이메일, 담당자 휴대전화, 담당자 유선전화, 출원인 성명(한글, 영문), 법인명(한글, 영문), 인감(법인인감), 주민등록번호, 법인등록번호, 출원인 이메일, 출원인 휴대전화, 출원인 유선전화, 사업자등록번호(출원용, 세금계산서용), 휴대전화번호(출원용, 세금계산서용), 주소, 상호명(세10금계산서용), 대표자명(세금계산서용), 이메일(세금계산서용)\n'
    qus2 += '3. 제3자에게 정보제공 : 특허청, KCP, 국세청, 금융결제원, 각 카드사, 각 은행, 각 통신사, 나이스신용평가정보 외\n'
    qus2 += '4. 개인정보 보유 이용기간 : 상표출원일 부터 10년\n'
    qus2 += '5. 위와 같은 개인 정보 수집 이용에 동의 하지 않으실수 있습니다.\n'
    qus2 += '(동의 거부시 출원진행 불가)\n'




    function questionmark1(){
        alert(qus2);
    }
    function questionmark2(){
        alert(qus);
    }




</script>
<style>
        #text8-1 {
        width: 43%;
    }

    #text8-2 {
        width: 43%;
    }
</style>
<script>
var nowtab = 'tab-1';
    $(document).ready(function(){
     //로딩이 끝나면 뒤의 ㅎ일들일 실행
	$('ul.tabs li').click(function(){
        //버튼을 클릭하면 파란색을 입히는 클래스 add, 아닌 거를 remove
        //tabclass가 있는 것에 current를 remove 해서 현재 페이지가 아니도록 
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('currentImform'); 
        //클릭한 버튼에 removeClass, addClass
		$('.tabclass').removeClass('current');
        //tabclass에서 removeClass current : 개인과 법인 바꾸는 용도 
		$('ul.tabs li').addClass('boximform2');
        //클릭한 버튼에 add 

		$(this).addClass('currentImform');
       //클릭한 버튼에 addClass currentImform??

		$("#"+tab_id).addClass('current');
		$(this).removeClass('boximform2');
        //this.attr(data-tab)

		nowtab = tab_id;
		if (nowtab == 'tab-1') {
            //첫페이지면 
		var button = document.getElementById("next_button6");
		button.onclick = function() {
		inform1_2()
		}
		}


	})

})




function fileUpload(){
let inputimage = getid('ex_file');
    let file = inputimage.files[0];
    ingam = getid('ingam');
    ingam.value = file.name;
}

function getParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
    var product = getimformdata(getParameter("merchant_uid"));
    var product2 = getimformdata2(getParameter("merchant_uid"));
    setimformdata(product);
</script>

</body>






<div id="page4" style="display: none;">
    <div class="headLine Bold">
        출원 내용 최종 동의 <br/>
    </div>

    <div class="Regular" style="margin-top:47px; margin-left:5%; font-size:12px;color : #4a64f5;">
        상표명
    </div>
    <div id="real_logo_id" class="Medium" style="margin-top : 4px;margin-left:5%; font-size:16px;">
        네임텍상표
    </div>
    <div class="Regular" style="margin-top:20px; margin-left:5%; font-size:12px;color : #4a64f5;">
        로고
    </div>
    <div id="logoinsert" style="text-align : center;margin-top : 10px;border: solid 1px #ccc;width: 122px;height: 74px; margin-left:5%;">

    </div>
    <div id="imformtable" style="margin-left : 5%;margin-top : 20px;border-top : 2px dashed #8989894a;">

    </div>
    <div id="checkagree" class="Regular" onclick="checkagree1();" style="font-size : 12px;margin-left : 20px; margin-right : 20px;background-color: #efefef;border-radius: 21px;margin-top : 20px;padding : 18px 10.9px 20px 60.9px;">
<img id="imgcheck" src="../static/image/grc@2x.png" style="position: absolute;width : 30px;margin-left : -40px;margin-top : 6px;"/>위 내용을 모두 확인하였으며,
<br/>해당 내용으로 상표를 출원하는 것에 동의합니다.
    </div>
    <div class="Regular" style="margin-top : 22px;font-size : 12px;margin-left : 5%;">
*내용수정이 필요할 경우, 유선 또는 이메일로 연락해주시기 바랍니다.

    </div>
    <div class="Regular" style="margin-top : 5px;font-size : 12px;margin-left : 5%;">
Tel : 02-922-5710
    </div>
    <div class="Regular" style="margin-top : 5px;margin-bottom : 100px;font-size : 12px;margin-left : 5%;">
Mail : admin@nametec.kr

    </div>
</div>