var nametec = "https://m.nametec.kr";
var server_address = "https://nametec.kr/";
var key = "";
var resultmon = 0;
var mon1 = 62000;
var mon2 = 44000;
var flag1 = true;
var flag2 = true;
var indexList = [];
var classList2 = [["29", "30", "35", "43", "44", "05", "09", "21", "31", "32", "33", "39", "40", "41"]
    , ["35", "25", "18", "14", "26", "28", "09", "42", "45", "40", "41", "23", "24"]
    , ["44", "03", "35", "41", "05", "21", "10", "11", "26", "08", "42", "04"]
    , ["05", "44", "43", "35", "10", "09", "45", "03", "29", "42", "40", "36", "25"]
    , ["43", "41", "35", "39", "25", "28", "09", "12", "18", "22", "21", "11", "15", "24", "09"]
    , ["41", "38", "35", "16", "09", "28", "42", "21", "25"]
    , ["35", "41", "44", "45", "37", "36", "38", "39", "43", "09", "42", "40"]
    , ["35", "20", "21", "07", "11", "04", "03", "24", "27", "09", "16", "05", "08"]
    , ["35", "28", "25", "05", "18", "21", "20", "24", "12", "10", "09", "03", "41", "30", "27", "16"]
    , ["35", "31", "18", "44", "28", "41", "43", "16", "21", "20", "06", "05", "03", "12", "09", "45"]
    , ["35", "37", "39", "12", "09", "03", "43", "01", "04", "17", "28", "05", "27"]
    , ["35", "20", "11", "37", "42", "36", "17", "19", "06", "02", "40", "27"]
    , ["45", "35", "44", "42", "12", "07", "09", "01", "02", "04", "37", "11", "40", "39"]
    , ["09", "35", "38", "42", "41", "36", "37", "39", "44", "45", "07", "12"]
    , ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"]];
var selectindex = [];
var selectindex2 = [];
var selectindex3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var selectindex4 = [];
var rlwnstjs = -20;

// 개당 300
var rand = function() {
    return Math.random().toString(36).substr(2); // remove `0.`
};

var token = function() {
    return rand() + rand(); // to make it longer
};
function putQuery(url, key, value) {
    url = url + "&" + key + "=" + value;
    return url;
}



function putQuery2(url, key, value, key1, value1) {
    url = url + key + "=" + value + "&" + key1 + "=" + value1;
    return url;
}


$(document).ready(function () {
    $('#text').focus(function () {
        $('#textcon').css("border-bottom", "solid 2px #4a64f5");
        $('#text').css("color", "#000000");
        $('#text').css("opacity", "1");
    });

    $('#text').blur(function () {
        $('#inputdiv1').css("border-bottom", "solid 1px #e0e0e0");
        //$('#text').css("color", "#4a64f5");
        $('#text').css("opacity", "1");
    });

    $('#text1').focus(function () {
        $('#inputdiv1').css("border-bottom", "solid 2px #4a64f5");
        $('#text1').css("color", "#000000");
        $('#text').css("opacity", "0.5");
        $('.sad1').remove();
        $('#imformname1').css("visibility", "visible");
    });

    $('#text1').blur(function () {
        var str = document.getElementById('text1').value;
        if (str == "") {
            $('#imformname1').css("visibility", "hidden");
        }
        if (chchangle(str)) {
            $('#inputdiv1').css("border-bottom", "solid 2px #f54a4a");
            //$('#text1').css("color", "#4a64f5");
            $('#text').css("opacity", "1");
            var sad = document.createElement("div");
            sad.className = "sad1";
            sad.innerText = "양식에 맞게 입력해주세요.";
            var inin = document.getElementById("inputdiv1");
            inin.appendChild(sad);
        } else {
            $('#inputdiv1').css("border-bottom", "solid 1px #e0e0e0");
            //$('#text1').css("color", "#4a64f5");
            $('#text').css("opacity", "1");
        }
        judgein1();
    });
    $('#text11').focus(function () {
        $('#inputdiv11').css("border-bottom", "solid 2px #4a64f5");
        $('#text11').css("color", "#000000");
        $('#text').css("opacity", "0.5");
        $('.sad1').remove();
        $('#imformname11').css("visibility", "visible");
    });
    $('#text11').blur(function () {
        var str = document.getElementById('text11').value;
        if (str == "") {
            $('#imformname11').css("visibility", "hidden");
        }
        if (chchangle(str)) {
            $('#inputdiv11').css("border-bottom", "solid 2px #f54a4a");
            //$('#text1').css("color", "#4a64f5");
            $('#text').css("opacity", "1");
            var sad = document.createElement("div");
            sad.className = "sad1";
            sad.innerText = "양식에 맞게 입력해주세요.";
            var inin = document.getElementById("inputdiv11");
            inin.appendChild(sad);
        } else {
            $('#inputdiv11').css("border-bottom", "solid 1px #e0e0e0");
            //$('#text1').css("color", "#4a64f5");
            $('#text').css("opacity", "1");
        }
        judgein11();
    });
    $('#text2').focus(function () {
        $('#inputdiv2').css("border-bottom", "solid 2px #4a64f5");
        $('#text2').css("color", "#000000");
        $('#text').css("opacity", "0.5");
        $('.sad2').remove();
        $('#imformname2').css("visibility", "visible");
    });
    $('#text2').blur(function () {
        var str = document.getElementById('text2').value;
        if (str == "") {
            $('#imformname2').css("visibility", "hidden");
        }
        if (chceng(str)) {

            $('#inputdiv2').css("border-bottom", "solid 2px #f54a4a");
            //$('#text1').css("color", "#4a64f5");
            $('#text').css("opacity", "1");
            var sad = document.createElement("div");
            sad.className = "sad2";
            sad.innerText = "양식에 맞게 입력해주세요.";
            var inin = document.getElementById("inputdiv2");
            inin.appendChild(sad);
        } else {
            $('#inputdiv2').css("border-bottom", "solid 1px #e0e0e0");
            $('#text').css("opacity", "1");
        }

        judgein1();
    });
    $('#text22').focus(function () {
        $('#inputdiv22').css("border-bottom", "solid 2px #4a64f5");
        $('#text22').css("color", "#000000");
        $('#text').css("opacity", "0.5");
        $('.sad2').remove();
        $('#imformname22').css("visibility", "visible");
    });
    $('#text22').blur(function () {
        var str = document.getElementById('text22').value;
        if (str == "") {
            $('#imformname22').css("visibility", "hidden");
        }
        if (chceng(str)) {

            $('#inputdiv22').css("border-bottom", "solid 2px #f54a4a");
            //$('#text1').css("color", "#4a64f5");
            $('#text').css("opacity", "1");
            var sad = document.createElement("div");
            sad.className = "sad2";
            sad.innerText = "양식에 맞게 입력해주세요.";
            var inin = document.getElementById("inputdiv22");
            inin.appendChild(sad);
        } else {
            $('#inputdiv22').css("border-bottom", "solid 1px #e0e0e0");
            $('#text').css("opacity", "1");
        }

        judgein11();
    });
    $('#text3').focus(function () {
        $('#inputdiv3').css("border-bottom", "solid 2px #4a64f5");
        $('#text3').css("color", "#000000");
        $('#text').css("opacity", "0.5");
        $('#imformname3').css("visibility", "visible");
    });
    $('#text3').blur(function () {

        var str = document.getElementById('text3').value;
        if (str == "") {
            $('#imformname22').css("visibility", "hidden");
        }

        $('#inputdiv3').css("border-bottom", "solid 1px #e0e0e0");
        $('#text').css("opacity", "1");

    });


    $('#text3-1').focus(function () {
        $('#inputdiv3').css("border-bottom", "solid 2px #4a64f5");
        $('#text3-1').css("color", "#000000");
        $('#text').css("opacity", "0.5");
        $('.sad3').remove();
        $('#imformname3').css("visibility", "visible");

    });
    $('#text3-1').blur(function () {

        var str1 = document.getElementById('text3-1').value;
        var str2 = document.getElementById('text3-2').value;

        if (isKorJumin(str1, str2)) {
            $('#inputdiv3').css("border-bottom", "solid 1px #e0e0e0");
            $('#text').css("opacity", "1");
        } else {
            $('#inputdiv3').css("border-bottom", "solid 2px #f54a4a");
            $('#text').css("opacity", "1");
            var sad = document.createElement("div");
            sad.className = "sad3";
            sad.innerText = "양식에 맞게 입력해주세요.";
            var inin = document.getElementById("inputdiv3");
            inin.appendChild(sad);
        }

        if (str1 == "") {
            $('#imformname3').css("visibility", "hidden");
        }
        judgein1();
    });


    $('#text3-2').focus(function () {
        $('#inputdiv3').css("border-bottom", "solid 2px #4a64f5");
        $('#text3-2').css("color", "#000000");
        $('#text').css("opacity", "0.5");
        $('.sad3').remove();
        $('#imformname3').css("visibility", "visible");
    });
    $('#text3-2').blur(function () {
        var str1 = document.getElementById('text3-1').value;
        var str2 = document.getElementById('text3-2').value;


        if (isKorJumin(str1, str2)) {
            $('#inputdiv3').css("border-bottom", "solid 1px #e0e0e0");
            $('#text').css("opacity", "1");
        } else {
            $('#inputdiv3').css("border-bottom", "solid 2px #f54a4a");
            $('#text').css("opacity", "1");
            var sad = document.createElement("div");
            sad.className = "sad3";
            sad.innerText = "양식에 맞게 입력해주세요.";
            var inin = document.getElementById("inputdiv3");
            inin.appendChild(sad);
        }
        if (str2 = "") {
            $('#imformname3').css("visibility", "hidden");
        }
        judgein1();
    });

    $('#text4').focus(function () {
        $('#inputdiv4').css("border-bottom", "solid 2px #4a64f5");
        $('#text4').css("color", "#000000");
        $('#text').css("opacity", "0.5");
        $('.sad4').remove();
        $('#imformname4').css("visibility", "visible");
    });
    $('#text4').blur(function () {
        var str = document.getElementById('text4').value;
        if (str == "") {
            $('#imformname4').css("visibility", "hidden");
        }
        if (CheckEmail(str)) {
            $('#inputdiv4').css("border-bottom", "solid 2px #f54a4a");
            //$('#text1').css("color", "#4a64f5");
            $('#text').css("opacity", "1");
            var sad = document.createElement("div");
            sad.className = "sad4";
            sad.innerText = "양식에 맞게 입력해주세요.";
            var inin = document.getElementById("inputdiv4");
            inin.appendChild(sad);
        } else {
            $('#inputdiv4').css("border-bottom", "solid 1px #e0e0e0");
            $('#text').css("opacity", "1");
        }
        judgein2();
    });

    $('#text44').focus(function () {
        $('#inputdiv44').css("border-bottom", "solid 2px #4a64f5");
        $('#text44').css("color", "#000000");
        $('#text').css("opacity", "0.5");
        $('.sad44').remove();
        $('#imformname44').css("visibility", "visible");
    });
    $('#text44').blur(function () {
        var str = document.getElementById('text44').value;
        if (str == "") {
            $('#imformname44').css("visibility", "hidden");
        }
        if (test13num(str)) {
            $('#inputdiv44').css("border-bottom", "solid 2px #f54a4a");
            //$('#text1').css("color", "#4a64f5");
            $('#text').css("opacity", "1");
            var sad = document.createElement("div");
            sad.className = "sad44";
            sad.innerText = "양식에 맞게 입력해주세요.";
            var inin = document.getElementById("inputdiv44");
            inin.appendChild(sad);
        } else {
            $('#inputdiv44').css("border-bottom", "solid 1px #e0e0e0");
            $('#text').css("opacity", "1");
        }
        judgein24();
    });

    $('#text5').focus(function () {
        $('#inputdiv5').css("border-bottom", "solid 2px #4a64f5");
        $('#text5').css("color", "#000000");
        $('#text').css("opacity", "0.5");
        $('.sad5').remove();
        $('#imformname5').css("visibility", "visible");
    });
    $('#text5').blur(function () {
        var str = document.getElementById('text5').value;
        if (str == "") {
            $('#imformname5').css("visibility", "hidden");
        }
        if (test11num(str)) {
            $('#inputdiv5').css("border-bottom", "solid 2px #f54a4a");
            //$('#text1').css("color", "#4a64f5");
            $('#text').css("opacity", "1");
            var sad = document.createElement("div");
            sad.className = "sad5";
            sad.innerText = "양식에 맞게 입력해주세요.";
            var inin = document.getElementById("inputdiv5");
            inin.appendChild(sad);
        } else {
            $('#inputdiv5').css("border-bottom", "solid 1px #e0e0e0");
            $('#text').css("opacity", "1");
        }

        judgein2();
    });
    $('#text55').focus(function () {
        $('#inputdiv55').css("border-bottom", "solid 2px #4a64f5");
        $('#text55').css("color", "#000000");
        $('#text').css("opacity", "0.5");
        $('.sad5').remove();
        $('#imformname55').css("visibility", "visible");
    });
    $('#text55').blur(function () {
        var str = document.getElementById('text55').value;
        if (str == "") {
            $('#imformname55').css("visibility", "hidden");
        }
        if (test10num(str)) {
            $('#inputdiv55').css("border-bottom", "solid 2px #f54a4a");
            //$('#text1').css("color", "#4a64f5");
            $('#text').css("opacity", "1");
            var sad = document.createElement("div");
            sad.className = "sad5";
            sad.innerText = "양식에 맞게 입력해주세요.";
            var inin = document.getElementById("inputdiv55");
            inin.appendChild(sad);
        } else {
            $('#inputdiv55').css("border-bottom", "solid 1px #e0e0e0");
            $('#text').css("opacity", "1");
        }
        judgein24();
    });


    $('#text6').focus(function () {
        $('#inputdiv6').css("border-bottom", "solid 2px #4a64f5");
        $('#text6').css("color", "#000000");
        $('#text').css("opacity", "0.5");
        $('#imformname6').css("visibility", "visible");
    });
    $('#text6').blur(function () {
        var str = document.getElementById('text6').value;
        if (str == "") {
            $('#imformname6').css("visibility", "hidden");
        }
        $('#inputdiv6').css("border-bottom", "solid 1px #e0e0e0");
        $('#text').css("opacity", "1");
//        judgein3();
    });

    $('#text7').focus(function () {
        $('#inputdiv7').css("border-bottom", "solid 2px #4a64f5");
        $('#text7').css("color", "#000000");
        $('#text').css("opacity", "0.5");
        $('.sad7').remove();
        $('#imformname7').css("visibility", "visible");
    });
    $('#text7').blur(function () {
        var str = document.getElementById('text7').value;
        if (str == "") {
            $('#imformname7').css("visibility", "hidden");
        }
        if (chchangle(str)) {
            $('#inputdiv7').css("border-bottom", "solid 2px #f54a4a");
            //$('#text1').css("color", "#4a64f5");
            $('#text').css("opacity", "1");
            var sad = document.createElement("div");
            sad.className = "sad7";
            sad.innerText = "양식에 맞게 입력해주세요.";
            var inin = document.getElementById("inputdiv7");
            inin.appendChild(sad);
        } else {
            $('#inputdiv7').css("border-bottom", "solid 1px #e0e0e0");
            $('#text').css("opacity", "1");
        }

        judgein33();
    });


    $('#text8-1').focus(function () {
        $('#inputdiv8-1').css("border-bottom", "solid 2px #4a64f5");
        $('#text8-1').css("color", "#000000");
        $('#text').css("opacity", "0.5");
        $('.sad8').remove();
        $('#imformname8').css("visibility", "visible");

    });
    $('#text8-1').blur(function () {

        var str1 = document.getElementById('text8-1').value;
        var str2 = document.getElementById('text8-2').value;

        if (str1 == "") {
            $('#imformname8').css("visibility", "hidden");
        }
        if (isKorJumin(str1, str2)) {
            $('#inputdiv8').css("border-bottom", "solid 1px #e0e0e0");
            $('#text').css("opacity", "1");
        } else {
            $('#inputdiv8').css("border-bottom", "solid 2px #f54a4a");
            $('#text').css("opacity", "1");
            var sad = document.createElement("div");
            sad.className = "sad8";
            sad.innerText = "양식에 맞게 입력해주세요.";
            var inin = document.getElementById("inputdiv8");
            inin.appendChild(sad);
        }
        judgein33();
    });


    $('#text8-2').focus(function () {
        $('#inputdiv8').css("border-bottom", "solid 2px #4a64f5");
        $('#text8-2').css("color", "#000000");
        $('#text').css("opacity", "0.5");
        $('.sad8').remove();
        $('#imformname8').css("visibility", "visible");
    });
    $('#text8-2').blur(function () {
        var str1 = document.getElementById('text8-1').value;
        var str2 = document.getElementById('text8-2').value;
        if (str2 == "") {
            $('#imformname8').css("visibility", "hidden");
        }
        if (isKorJumin(str1, str2)) {
            $('#inputdiv8').css("border-bottom", "solid 1px #e0e0e0");
            $('#text').css("opacity", "1");
        } else {
            $('#inputdiv8').css("border-bottom", "solid 2px #f54a4a");
            $('#text').css("opacity", "1");
            var sad = document.createElement("div");
            sad.className = "sad8";
            sad.innerText = "양식에 맞게 입력해주세요.";
            var inin = document.getElementById("inputdiv8");
            inin.appendChild(sad);
        }

        judgein33();
    });
    $('#text9').focus(function () {
        $('#inputdiv9').css("border-bottom", "solid 2px #4a64f5");
        $('#text9').css("color", "#000000");
        $('#text').css("opacity", "0.5");
        $('.sad9').remove();
        $('#imformname9').css("visibility", "visible");
    });
    $('#text9').blur(function () {
        var str = document.getElementById('text9').value;
        if (str == "") {
            $('#imformname9').css("visibility", "hidden");
        }
        if (!CheckEmail(str)) {
            $('#inputdiv9').css("border-bottom", "solid 2px #f54a4a");
//            $('#text1').css("color", "#4a64f5");
            $('#text').css("opacity", "1");
            var sad = document.createElement("div");
            sad.className = "sad9";
            sad.innerText = "양식에 맞게 입력해주세요.";
            var inin = document.getElementById("inputdiv9");
            inin.appendChild(sad);
        }
        else {
            $('#inputdiv9').css("border-bottom", "solid 1px #e0e0e0");
            $('#text').css("opacity", "1");
        }

        judgein33();
    });


    $('#text10').focus(function () {
        $('#inputdiv10').css("border-bottom", "solid 2px #4a64f5");
        $('#text10').css("color", "#000000");
        $('#text').css("opacity", "0.5");
        $('.sad10').remove();
        $('#imformname10').css("visibility", "visible");
    });
    $('#text10').blur(function () {
        var str = document.getElementById('text10').value;
        if (str == "") {
            $('#imformname10').css("visibility", "hidden");
        }
        if (test11num(str)) {
            $('#inputdiv10').css("border-bottom", "solid 2px #f54a4a");
            //$('#text1').css("color", "#4a64f5");
            $('#text').css("opacity", "1");
            var sad = document.createElement("div");
            sad.className = "sad10";
            sad.innerText = "양식에 맞게 입력해주세요.";
            var inin = document.getElementById("inputdiv10");
            inin.appendChild(sad);
        } else {
            $('#inputdiv10').css("border-bottom", "solid 1px #e0e0e0");
            $('#text').css("opacity", "1");
        }

        judgein33();
    });


    $('#textpostdet').focus(function () {
        $('#inputdiv_textpostdet').css("border-bottom", "solid 2px #4a64f5");
        $('#textpostdet').css("color", "#000000");
        $('#text').css("opacity", "0.5");
    });
    $('#textpostdet').blur(function () {
        $('#inputdiv_textpostdet').css("border-bottom", "solid 1px #e0e0e0");
        $('#textpostdet').css("color", "#000000");
        $('#textpostdett').css("opacity", "1");
        judgein33();
    });

});


function intro() {
    localurl = nametec + "/intro";
    window.location.href = localurl;
}

function menu1() {
    localurl = nametec + "/menu1";
    window.location.href = localurl;
}

function menu2() {
    getUrlLink = sessionStorage.getItem('getUrlLink')
if (getUrlLink != 'null'){
window.location.href = getUrlLink;
}else{
    localurl = nametec + "";
    window.location.href = localurl;
    }
}

function center() {
    localurl = nametec + "/center";
    window.location.href = localurl;
}

function anne() {
    localurl = nametec + "/anne";
    window.location.href = localurl;
}


function member(seq) {
    localurl = nametec + "/member";
    window.location.href = localurl;
}

function mypage() {
    localurl = nametec + "/mypage";
    window.location.href = localurl;
}

function mypage2(seq) {
    localurl = nametec + "/mypage2?seq=" + seq;
    window.location.href = localurl;
}

function search() {
getUrlLink = sessionStorage.getItem('getUrlLink')
if (getUrlLink != 'null'){
window.location.href = getUrlLink;
}else{
    localurl = nametec + "";
    window.location.href = localurl;
    }
}

function search1() {
    localurl = nametec + "/search1";
    window.location.href = localurl;
}

function backsearch1() {
    brandname = getParam("key2");
    localurl = nametec + "/backsearch1?";
    localurl = putQuery(localurl, 'key2', brandname);
    window.location.href = localurl;

}


function search2() {
var next_button = document.getElementById("next_button");
 next_button.style.backgroundColor = "#ffffff";
    var flag = true;
    flag = $('#text').val().length > 0 ? false : true;
    if (flag) {
        $('#text').focus();
    } else {
    let customeremail = localStorage.getItem("customeremail");
    if (customeremail == null){
alert('잘못된 접근입니다')
window.location.href = "https://m.nametec.kr/";
}else{
let customername = localStorage.getItem("customername");
    let customerClass = localStorage.getItem("customerClass");
    let token1 = token()
        brandname = document.getElementById('text').value;
        sessionStorage.setItem('brandname', brandname);
        localStorage.get
        localurl = nametec + "/search2?";
        localurl = putQuery(localurl, 'key2', brandname);
        $.ajax({
            url: 'https://m.nametec.kr/makeApplication',
            type: "post",
            data: JSON.stringify({
            "brandname" :brandname,
                "token": token1,
                "customerClass" : customerClass,
                "customername" : customername,
                "customeremail" : customeremail
            }) ,
            contentType:"application/json; charset=utf-8",
            dataType: "JSON",
            crossDomain: true,
            success: function (data1) {
                if (data1.status == 200) {
                sessionStorage.setItem('token', token1);
                window.location.href = localurl;
                }
                if (data1.status == 401) {
//                alert('ssd');
                }
            },
            error: function (request, status, error) {
// fail handle

            }


        });
}

    }
    window.sessionStorage.setItem('brandname', brandname)
}

function backsearch2() {

    brandname = getParam("key2");
    localurl = nametec + "/search2?";
    localurl = putQuery(localurl, 'key2', brandname);
    window.location.href = localurl;
}function backsearch12() {

    brandname = getParam("key2");
    localurl = nametec + "/success?";
    window.location.href = localurl;
}


function searchplus() {
    var para = document.location.href.split("?")[1];
    localurl = nametec + "/searchplus?" + para;
    localurl = putQuery(localurl, 'index2', selectindex3);
    window.location.href = localurl;
}

function backplus() {
    brandname = getParam("key2");
    index2 = getParam("index2");
    localurl = nametec + "/searchplus?";
    localurl = putQuery2(localurl, 'key2', brandname, 'index2', index2);
    window.location.href = localurl;
}

function search3() {
    var val_list = [];
    if (selectindex3.includes("1")) {
        var indexList2 = [];
        for (var i = 0; i < selectindex3.length; i++) {
            if (selectindex3[i] == 1) {
                let stst = 'a' + i;
                let brdnam = document.getElementById(stst).innerText;
                val_list.push(brdnam);
                indexList2 = indexList2.concat(classList2[i]);
            }
        }
        localurl = nametec + "/search3?";
        var para = getParam("key2");
        localurl = putQuery(localurl, 'key2', para);
        localurl = putQuery(localurl, 'index', indexList2);
        localurl = putQuery(localurl, 'index2', selectindex3);
        window.location.href = localurl;
        sessionStorage.setItem('btn_value', val_list);
    }
}


function backsearch3() {
    localurl = nametec + "/backsearch3?";
    var para = document.location.href.split("?")[1];
    localurl = localurl + para;
    window.location.href = localurl;
}

function search991(list) {
next_btn = document.getElementById("next_btn");
next_btn.style.backgroundColor = "#ffffff"
selectgoodsList= []
selectclasses = []
aas2 =  document.getElementById('skarb').innerHTML;
for (let i = 0; i < list.length; i++) {
goodstag = document.getElementById(list[i]+"a").innerHTML;
selectgoodsList.push(goodstag)
selectclasses.push(list[i]+'류이이');
}
//        btn_value = document.getElementById('btn_value').value;
//        brandname = document.getElementById('text').value;
//        brandname = document.getElementById('text').value;
        sessionStorage.setItem('btn_value', selectgoodsList);
        sessionStorage.setItem('goodsSearchWord', ".");
        sessionStorage.setItem('selectclasses', selectclasses);
        localurl = nametec + "/success?";
        window.location.href = localurl;

}
function search99() {
    var flag = true;
    flag = $('#text').val().length > 0 ? false : true;
    if (flag) {
        $('#text').focus();
    } else {
        brandname = document.getElementById('text').value;
        sessionStorage.setItem('goodsSearchWord', brandname);
        localurl = nametec + "/search4?";
        brandname1 = getParam("key2");
        brandname2 = getParam("index");
        brandname3 = getParam("index2");
        localurl = putQuery(localurl, 'key2', brandname1);
        localurl = putQuery(localurl, 'index', brandname2);
        localurl = putQuery(localurl, 'index2', brandname3);
        localurl = putQuery(localurl, 'goods', brandname);
        window.location.href = localurl;
    }
}

function getUrlParams() {
    var params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
        params[key] = value;
    });
    return params;
}

// function search4() {
//     var indexkey = [];
//     for(var i = 0; i<$('.active').length;i++){
//         if(i>=1){
//             indexkey += ",";
//         }
//     var index = $('.active')[i];
//     indexkey += classList2[index.id];
//     }
//     alert(indexkey);
//
// }


function search5() {
    localurl = nametec + "/search5";
    window.location.href = localurl;
}

function reSuccess() {
    var reSuccessUrl = sessionStorage.getItem("successUrl");
    sessionStorage.removeItem("successUrl");
    window.location.href = reSuccessUrl;
}

function backintro5() {
    var intro5Url = sessionStorage.getItem("intro5Url");
    sessionStorage.removeItem("intro5Url");
    window.location.href = intro5Url;
}

function success() {
    localurl = nametec + "/success";
    window.location.href = localurl;
}
function success123() {
    localurl = nametec + "/searchplus";
    window.location.href = localurl;
}
function success2() {
    localurl = nametec + "/success2";
    window.location.href = localurl;
}

function success22() {
    localurl = nametec + "/success22";
    window.location.href = localurl;
}

function returnFirstPage() {
    localurl = nametec + "/search1";
    window.location.href = localurl;
    sessionStorage.clear()
}

function success2_1() {
    localurl = nametec + "/success2_1";
    window.location.href = localurl;
}
function success3_4() {
    localurl = nametec + "/success2_1";
    window.location.href = localurl;
}
function success3_3() {
    if (document.getElementById("res").innerHTML.replaceAll(" ","").replaceAll("\n","") != "0원") {
        var maskHeight = $(document).height();
        var maskWidth = window.document.body.clientWidth;
        var mask1 = "<div id='mask1' style='position:absolute; z-index:9000; display:none; left:0; top:0;background-color: #000000;opacity: 0.5;overflow: hidden;' onclick='deletemask()'> </div>";
        var cen = document.getElementById('cen');
        cen.onclick = function () {
        deletemask();
        }
        $(".res").css("bottom", "59px");
        $(".res").css("z-index", "9001");
        $("#1111").css("z-index", "9002");
        $('body').append(mask1);

        $('#mask1').css({
            'width': maskWidth
            , 'height': maskHeight
        });
        $('#mask1').show();
        $('#next_button6').remove();
        var btn6 = '<button type="button" id="next_button6" onClick="success31()" style="">다음</button>';
        $('#1111').append(btn6);
    }
}

function deletemask() {
    var ddd = $(".mcr").length;
    var ll = 59 - 102 * ddd + "px";
    $(".res").css("bottom", ll);
    $('#mask1').remove();
    $('#next_button6').remove();
    var btn6 = '<button type="button" id="next_button6" onClick="success3_3()" style="">선택완료</button>';
    $('#1111').append(btn6);
    var cen = document.getElementById('cen');
        cen.onclick = function () {
        success3_3();
        }
}

function success3() {
    var selectindex1 = getUrlParams();
    var checkemail = document.getElementById("checkemail");
    var checknumber = document.getElementById("checknumber");
    var email123 = localStorage.getItem("customeremail");
    $.ajax({
        type: "POST",
        url: server_address + "informupdate",
        data: JSON.stringify({
                "real_email": checkemail.value,
                "customer_phone_number" : checknumber.value,
                "email" :email123
            }),
        processData: false,
        contentType: "application/json",
        async: false,
        success: function (data) {
            if (data.status == 200) {
                localStorage.setItem("real_email" , checkemail.value);
                localStorage.setItem("customerPhone" , checknumber.value);
            } else {


            }
        }
        ,
        err: function (err) {
            alert(err.status);
        }
    });
    localurl = nametec + "/success3?";
    localurl = putQuery(localurl, "index", selectindex1.index);
    window.location.href = localurl;

}
function success31() {
    ajaxData1 = []
    let conList111 = document.getElementsByClassName("conList");
    for (let i = 0; i < conList111.length; i++){
    if ($( conList111[i] ).css( "border" ) == '1px solid rgb(74, 100, 245)'){
    ajaxData1.push(sessionStorage.getItem("result "+i))
    }

    }
    sessionStorage.setItem("ajaxData1",ajaxData1)
    sessionStorage.setItem("ajaxData","["+ajaxData1+"]")
    localurl = nametec + "/infomcheck?";
    localurl = putQuery(localurl, "index", selectindex);
    window.location.href = localurl;

}

function success4() {
    localurl = nametec + "/success4?";
    localurl = putQuery2(localurl, "index", selectindex, "key", selectindex2);
    window.location.href = localurl;
}

function login() {
    if (localStorage.getItem("customeremail") == null){
    localurl = nametec + "/login";
    window.location.href = localurl;
    }
    else{
    localurl = nametec + "/search1";
    window.location.href = localurl;
    }

}

function login31() {
    var res = getid("res").innerHTML;
    sessionStorage.setItem('price' , res);
    localurl = nametec + "/imform";
    window.location.href = localurl;
}
function login3() {
sessionStorage.setItem("lasturl",window.location.href);
    var res = getid("res").innerHTML;
    localurl = nametec + "/payment";
    sessionStorage.setItem('price' , res);
    window.location.href = localurl;
}
function lasturl() {
lasturl = sessionStorage.getItem("lasturl");
    window.location.href = lasturl;
}

function login2() {
    localurl = nametec + "/login2";
    window.location.href = localurl;
}

function exlogin() {
    var flag = true;
    flag = $('textarea#textA').val().length > 0 ? false : true;
    if (flag) {
        $('#textA').focus();
    } else {
        localurl = nametec + "/login";
        window.location.href = localurl;
    }
}

function imform(email) {
    localurl = nametec + "/imform?";
    localurl = putQuery(localurl, "email", email);
    window.location.href = localurl;
}

function imform23(email) {
    localurl = nametec + "/intro?";
    window.sessionStorage.setItem('email', email)
    window.location.href = localurl;
}

function imform2(email) {
    localurl = nametec + "/imform2?";
    localurl = putQuery(localurl, "email", email);
    window.location.href = localurl;
}

function imform3() {
    localurl = nametec + "/imform3";
    window.location.href = localurl;
}

function payment() {
    localurl = nametec + "/payment";
    window.location.href = localurl;
    apaddr = document.getElementById("textpostdet");
    text6 = document.getElementById("text6");
    sessionStorage.setItem("type",'0');
    sessionStorage.setItem("apaddr",apaddr.value+ "   " + text6.value);

}
function updatepayment1() {
    sessionStorage.setItem("type",'0');
    let apemail = sessionStorage.getItem("apemail");
    let apaddr = sessionStorage.getItem("addr");
    let appphonenumber = sessionStorage.getItem("appphonenumber");
    let resident = sessionStorage.getItem("resident");
    let enapname = sessionStorage.getItem("enapname");
    let krname = sessionStorage.getItem("krname");
    merchant_uid = getQueryString("merchant_uid");
    $.ajax({
        type: "POST",
        url: server_address + "updatepayment",
        data: JSON.stringify({
                "krname": krname,
                "enapname": enapname,
                "apemail": apemail,
                "appphonenumber": appphonenumber,
                "addr": apaddr,
                "resident": resident,
                "merchant_uid" : merchant_uid
            }),
        processData: false,
        contentType: "application/json",
        async: false,
        success: function (data) {
            if (data.status == 200) {
                window.location.href = "https://m.nametec.kr/finish";
            } else {


            }
        }
        ,
        err: function (err) {
            alert(err.status);
        }
    });

}
function updatepayment2() {
    sessionStorage.setItem("type",'1');
    let application_email = sessionStorage.getItem("application_email");
    let addr = sessionStorage.getItem("addr");
    let crn = sessionStorage.getItem("crn");
    let enapname = sessionStorage.getItem("enapname");
    let corporation_number = sessionStorage.getItem("corporation_number");
    let krname = sessionStorage.getItem("krname");
    let applicant = sessionStorage.getItem("applicant");
    let resident_number = sessionStorage.getItem("resident_number");
    let appphonenumber = sessionStorage.getItem("appphonenumber");
    merchant_uid = getQueryString("merchant_uid");
    let formData = new FormData();
    let inputimage = getid('ex_file');
    let file = inputimage.files[0];
    if (file == undefined){
alert('법인 인감은 필수입니다');
    }else{

   formData.append('filedata'  ,file ,  file.name);
   formData.append('filename'  , file.name);
   formData.append('application_email'  ,application_email );
   formData.append('addr'  ,addr );
   formData.append('crn'  ,crn );
   formData.append('enapname'  ,enapname );
   formData.append('corporation_number'  ,corporation_number );
   formData.append('krname'  ,krname );
   formData.append('applicant'  ,applicant );
   formData.append('resident_number'  ,resident_number );
   formData.append('appphonenumber'  ,appphonenumber );
   formData.append('merchant_uid'  ,merchant_uid );
    $.ajax({
        type: "POST",
        url: 'https://nametec.kr/updatepayment1',
        enctype: 'multipart/form-data',
        data:formData,
        processData: false,
        contentType: false,
        async: false,
        success: function (data) {
            if (data.status == 200) {
            window.location.href = "https://m.nametec.kr/finish";
            } else {


            }
        }
        ,
        err: function (err) {
            alert(err.status);
        }
    });

}
}
function payment1() {
    localurl = nametec + "/payment";
    window.location.href = localurl;
    apaddr = document.getElementById("textpostdet");
    text6 = document.getElementById("text6");
    sessionStorage.setItem("type",'0');
    sessionStorage.setItem("apaddr",apaddr.value+ "   " + text6.value);

}
function getQueryString(key) {

    // 전체 Url을 가져온다.
    var str = location.href;

    // QueryString의 값을 가져오기 위해서, ? 이후 첫번째 index값을 가져온다.
    var index = str.indexOf("?") + 1;

    // Url에 #이 포함되어 있을 수 있으므로 경우의 수를 나눴다.
    var lastIndex = str.indexOf("#") > -1 ? str.indexOf("#") + 1 : str.length;

    // index 값이 0이라는 것은 QueryString이 없다는 것을 의미하기에 종료
    if (index == 0) {
        return "";
    }

    // str의 값은 a=1&b=first&c=true
    str = str.substring(index, lastIndex);

    // key/value로 이뤄진 쌍을 배열로 나눠서 넣는다.
    str = str.split("&");

    // 결과값
    var rst = "";

    for (var i = 0; i < str.length; i++) {

        // key/value로 나눈다.
        // arr[0] = key
        // arr[1] = value
        var arr = str[i].split("=");

        // arr의 length가 2가 아니면 종료
        if (arr.length != 2) {
            break;
        }

        // 매개변수 key과 일치하면 결과값에 셋팅
        if (arr[0] == key) {
            rst = arr[1];
            break;
        }
    }
    return rst;
}
function payment12() {
    applicant = document.getElementById("text7");
    sessionStorage.setItem("applicant",applicant.value);
    resident_number1 = document.getElementById("text8-1");
    resident_number2 = document.getElementById("text8-2");
    sessionStorage.setItem("resident_number",resident_number1.value+resident_number2.value);
    application_email = document.getElementById("text9");
    sessionStorage.setItem("application_email",application_email.value);
    appphonenumber = document.getElementById("text10");
    sessionStorage.setItem("appphonenumber",appphonenumber.value);
    sessionStorage.setItem("type",'1');
    localurl = nametec + "/payment";
    window.location.href = localurl;
}


//function payment2backup() {
//var paytype = sessionStorage.getItem('type');
//let brandname = sessionStorage.getItem("brandname");
//let price = sessionStorage.getItem('price');
//let realprice = price.replace(/,/,"");
//let realprice2 = realprice.replace("원","");
//var customeremail = localStorage.getItem("customeremail");
//var customername = localStorage.getItem("customername");
//var customerPhone = localStorage.getItem("customerPhone");
//let postcode = sessionStorage.getItem("postcode");
//let addr = sessionStorage.getItem("addr");
//if (paytype == '0') {
//let searchcategory = sessionStorage.getItem("btn_value");
//let goodsSearchWord = sessionStorage.getItem("goodsSearchWord");
//let apemail = sessionStorage.getItem("apemail");
//let apaddr = sessionStorage.getItem("apaddr");
//let appphonenumber = sessionStorage.getItem("appphonenumber");
//let ajaxData = sessionStorage.getItem("ajaxData");
//let resident = sessionStorage.getItem("resident");
//let enapname = sessionStorage.getItem("enapname");
//let krname = sessionStorage.getItem("krname");
//$.ajax({
//        type: "POST",
//        url: server_address + "paymentdata",
//        data: JSON.stringify({
//                "customeremail": customeremail,
//                "searchcategory": searchcategory,
//                "goodsSearchWord": goodsSearchWord,
//                "apemail": apemail,
//                "apaddr": apaddr,
//                "appphonenumber": appphonenumber,
//                "ajaxData": ajaxData,
//                "resident": resident,
//                "enapname": enapname,
//                "brandname": brandname,
//                "krname": krname
//            }),
//        processData: false,
//        contentType: "application/json",
//        async: false,
//        success: function (data) {
//            if (data.status == 200) {
////                localurl = nametec + "/payment2";
////                window.location.href = localurl;
//
//            } else {
//
//
//            }
//        }
//        ,
//        err: function (err) {
//            alert(err.status);
//        }
//    });
//}
//else{
//var customerclass = localStorage.getItem("customerClass");
//let searchcategory = sessionStorage.getItem("btn_value");
//let goodsSearchWord = sessionStorage.getItem("goodsSearchWord");
//let application_email = sessionStorage.getItem("application_email");
//let appphonenumber = sessionStorage.getItem("appphonenumber");
//let ajaxData = sessionStorage.getItem("ajaxData");
//let resident_number = sessionStorage.getItem("resident_number");
//let enapname = sessionStorage.getItem("enapname");
//let krname = sessionStorage.getItem("krname");
//let corporation_number = sessionStorage.getItem("corporation_number");
//let crn = sessionStorage.getItem("crn");
//let applicant = sessionStorage.getItem("applicant");
//$.ajax({
//        type: "POST",
//        url: server_address + "paymentdata2",
//        data: JSON.stringify({
//                "customeremail": customeremail,
//                "customerclass" : customerclass,
//                "searchcategory": searchcategory,
//                "goodsSearchWord": goodsSearchWord,
//                "application_email": application_email,
//                "addr": addr,
//                "appphonenumber": appphonenumber,
//                "ajaxData": ajaxData,
//                "resident_number": resident_number,
//                "enapname": enapname,
//                "brandname": brandname,
//                "krname": krname,
//                "corporation_number": corporation_number,
//                "crn": crn,
//                "applicant" : applicant
//            }),
//        processData: false,
//        contentType: "application/json",
//        async: false,
//        success: function (data) {
//            if (data.status == 200) {
////                localurl = nametec + "/payment2";
////                window.location.href = localurl;
//            } else {
//
//
//            }
//        }
//        ,
//        err: function (err) {
//            alert(err.status);
//        }
//    });
//
//}
//IMP.request_pay({
//    pg : 'inicis', // version 1.1.0부터 지원.
//    pay_method : 'card',
//    merchant_uid : 'merchant_' + new Date().getTime(),
//    name : '상표 출원 신청 :' + brandname,
//    amount : 100,
////    amount : realprice2,
//    buyer_email : customeremail,
//    buyer_name : customername,
//    buyer_tel : customerPhone,
//    buyer_addr : addr,
//    buyer_postcode : postcode,
//    m_redirect_url : 'https://m.nametec.kr/payment2'
//}, function(rsp) {
//    if ( rsp.success ) {
//        var msg = '결제가 완료되었습니다.';
//        msg += '고유ID : ' + rsp.imp_uid;
//        msg += '상점 거래ID : ' + rsp.merchant_uid;
//        msg += '결제 금액 : ' + rsp.paid_amount;
//        msg += '카드 승인번호 : ' + rsp.apply_num;
//    } else {
//        var msg = '결제에 실패하였습니다.';
//        msg += '에러내용 : ' + rsp.error_msg;
//    }
//    alert(msg);
//});
//}
function getUrlParams() {
    var params = {};

    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    	function(str, key, value) {
        	params[key] = value;
        }
    );

    return params;
}
function payment2() {
var parm1 = getUrlParams();
merchant_uid1 = 'merchant_' + new Date().getTime();
if(parm1.parm == "T"){
var searchcategory1 = decodeURI(parm1.btn_value);
var selectclasses1 = decodeURI(parm1.selectclasses);
var goodsSearchWord1 = decodeURI(parm1.goodsSearchWord);
var ajaxData11 = decodeURI(parm1.ajaxData);
var brandname1 = decodeURI(parm1.brandname);
var customerClass1 = decodeURI(parm1.customerClass);
var customerPhone1 = decodeURI(parm1.customerPhone);
var customername1 = decodeURI(parm1.customername);
var customeremail1 = decodeURI(parm1.customeremail);
var token1 = decodeURI(parm1.token);
var utmRoute1 = decodeURI(parm1.utmRoute);
var coupon1 = decodeURI(parm1.coupon);
var realprice2 = decodeURI(parm1.realprice2);
    $.ajax({
        type: "POST",
        url: server_address + "paymentdata",
        data: JSON.stringify({
                "customeremail": customeremail1,
                "customerclass"  : customerClass1,
                "searchcategory": searchcategory1,
                "goodsSearchWord": goodsSearchWord1,
                "ajaxData": ajaxData11,
                "brandname": brandname1,
                "merchant_uid" : merchant_uid1,
                "price" : realprice2,
                "token" : token1,
                "utmRoute" : utmRoute1,
                "coupon" : coupon1
            }),
        processData: false,
        contentType: "application/json",
        async: false,
        success: function (data) {
            if (data.status == 200) {
            IMP.request_pay({
    pg : 'html5_inicis', // version 1.1.0부터 지원.
    pay_method : 'card',
    merchant_uid : merchant_uid1,
    name : '상표 출원 신청 :' + brandname1,
    amount : realprice2,
    buyer_email : customeremail1,
    buyer_name : customername1,
    buyer_tel : customerPhone1,
//    buyer_addr : 0,
//    buyer_postcode : 12345,
    m_redirect_url : 'https://m.nametec.kr/payment2?vbank=F',
    redirect_url : 'https://m.nametec.kr/payment2?vbank=F'
}, function(rsp) {
    if ( rsp.success ) {
        var msg = '결제가 완료되었습니다.';
        msg += '고유ID : ' + rsp.imp_uid;
        msg += '상점 거래ID : ' + rsp.merchant_uid;
        msg += '결제 금액 : ' + rsp.paid_amount;
        msg += '카드 승인번호 : ' + rsp.apply_num;
        location.href="https://m.nametec.kr/payment2?vbank=F&imp_success=true&imp_uid="+rsp.imp_uid;
    } else {
        var msg = '결제에 실패하였습니다.';
        msg += '에러내용 : ' + rsp.error_msg;
    }
    alert(msg);
});
            } else {

            }
        }
        ,
        err: function (err) {
            alert(err.status);
        }
    });
    }
else{
let coupon = sessionStorage.getItem("coupon");
var customerclass = localStorage.getItem("customerClass");
let brandname = sessionStorage.getItem("brandname");
let price = sessionStorage.getItem('price');
let realprice = price.replace(/,/,"");
let realprice2 = realprice.replace("원","");
sessionStorage.setItem('realprice2',realprice2);
var customeremail = localStorage.getItem("customeremail");
var customername = localStorage.getItem("customername");
var customerPhone = localStorage.getItem("customerPhone");
let searchcategory = sessionStorage.getItem("btn_value");
let goodsSearchWord = sessionStorage.getItem("goodsSearchWord");
let token3 = sessionStorage.getItem("token");
let ajaxData = sessionStorage.getItem("ajaxData");
let utmRoute = sessionStorage.getItem("utmRoute");
$.ajax({
        type: "POST",
        url: server_address + "paymentdata",
        data: JSON.stringify({
                "coupon" : coupon,
                "customeremail": customeremail,
                "customerclass"  : customerclass,
                "searchcategory": searchcategory,
                "goodsSearchWord": goodsSearchWord,
                "ajaxData": ajaxData,
                "brandname": brandname,
                "merchant_uid" : merchant_uid1,
                "price" : realprice2,
                "token" : token3,
                "utmRoute" : utmRoute
            }),
        processData: false,
        contentType: "application/json",
        async: false,
        success: function (data) {
            if (data.status == 200) {
            IMP.request_pay({
    pg : 'html5_inicis', // version 1.1.0부터 지원.
    pay_method : 'card',
    merchant_uid : merchant_uid1,
    name : '상표 출원 신청 :' + brandname,
    amount : realprice2,
    buyer_email : customeremail,
    buyer_name : customername,
    buyer_tel : customerPhone,
//    buyer_addr : 0,
//    buyer_postcode : 12345,
    m_redirect_url : 'https://m.nametec.kr/payment2?vbank=F'
}, function(rsp) {
    if ( rsp.success ) {
        var msg = '결제가 완료되었습니다.';
        msg += '고유ID : ' + rsp.imp_uid;
        msg += '상점 거래ID : ' + rsp.merchant_uid;
        msg += '결제 금액 : ' + rsp.paid_amount;
        msg += '카드 승인번호 : ' + rsp.apply_num;
        location.href="https://m.nametec.kr/payment2?vbank=F&imp_success=true&imp_uid="+rsp.imp_uid;
    } else {
        var msg = '결제에 실패하였습니다.';
        msg += '에러내용 : ' + rsp.error_msg;
    }
    alert(msg);
});
            } else {

            }
        }
        ,
        err: function (err) {
            alert(err.status);
        }
    });
}
}
function payment2_1() {
var parm1 = getUrlParams();
merchant_uid1 = 'merchant_' + new Date().getTime();
if(parm1.parm == "T"){
var searchcategory1 = decodeURI(parm1.btn_value);
var selectclasses1 = decodeURI(parm1.selectclasses);
var goodsSearchWord1 = decodeURI(parm1.goodsSearchWord);
var ajaxData11 = decodeURI(parm1.ajaxData);
var brandname1 = decodeURI(parm1.brandname);
var customerClass1 = decodeURI(parm1.customerClass);
var customerPhone1 = decodeURI(parm1.customerPhone);
var customername1 = decodeURI(parm1.customername);
var customeremail1 = decodeURI(parm1.customeremail);
var token1 = decodeURI(parm1.token);
var coupon1 = decodeURI(parm1.coupon);
var realprice2 = decodeURI(parm1.realprice2);
    $.ajax({
        type: "POST",
        url: server_address + "paymentdata",
        data: JSON.stringify({
                "customeremail": customeremail1,
                "customerclass"  : customerClass1,
                "searchcategory": searchcategory1,
                "goodsSearchWord": goodsSearchWord1,
                "ajaxData": ajaxData11,
                "brandname": brandname1,
                "merchant_uid" : merchant_uid1,
                "price" : realprice2,
                "token" : token,
                "coupon" : coupon1
            }),
        processData: false,
        contentType: "application/json",
        async: false,
        success: function (data) {
            if (data.status == 200) {
            IMP.request_pay({
    pg : 'html5_inicis', // version 1.1.0부터 지원.
    pay_method : 'vbank',
    merchant_uid : merchant_uid1,
    name : '상표 출원 신청 :' + brandname1,
    amount : 150,
    buyer_email : customeremail1,
    buyer_name : customername1,
    buyer_tel : customerPhone1,
//    buyer_addr : 0,
//    buyer_postcode : 12345,
    m_redirect_url : 'https://m.nametec.kr/payment2?vbank=T'
}, function(rsp) {
    if ( rsp.success ) {
        var msg = '결제가 완료되었습니다.';
        msg += '고유ID : ' + rsp.imp_uid;
        msg += '상점 거래ID : ' + rsp.merchant_uid;
        msg += '결제 금액 : ' + rsp.paid_amount;
        msg += '카드 승인번호 : ' + rsp.apply_num;
        location.href="https://m.nametec.kr/payment2?vbank=T&imp_success=true&imp_uid="+rsp.imp_uid;
    } else {
        var msg = '결제에 실패하였습니다.';
        msg += '에러내용 : ' + rsp.error_msg;
        history.back();
    }
    alert(msg);
});
            } else {

            }
        }
        ,
        err: function (err) {
            alert(err.status);
        }
    });
    }
else{
let coupon = sessionStorage.getItem("coupon");
var customerclass = localStorage.getItem("customerClass");
let brandname = sessionStorage.getItem("brandname");
let price = sessionStorage.getItem('price');
let realprice = price.replace(/,/,"");
let realprice2 = realprice.replace("원","");
var customeremail = localStorage.getItem("customeremail");
var customername = localStorage.getItem("customername");
var customerPhone = localStorage.getItem("customerPhone");
let searchcategory = sessionStorage.getItem("btn_value");
let goodsSearchWord = sessionStorage.getItem("goodsSearchWord");
let token4 = sessionStorage.getItem("token");
let ajaxData1 = sessionStorage.getItem("ajaxData");
let token5 = sessionStorage.getItem("token");
let utmdata = sessionStorage.getItem("utmRoute");
$.ajax({
        type: "POST",
        url: server_address + "paymentdatavbank",
        data: JSON.stringify({
                "coupon" : coupon,
                "customeremail": customeremail,
                "customerclass"  : customerclass,
                "searchcategory": searchcategory,
                "goodsSearchWord": goodsSearchWord,
                "ajaxData": ajaxData1,
                "brandname": brandname,
                "merchant_uid" : merchant_uid1,
                "price" : realprice2,
                "token" : token5,
                "utmdata" : utmdata
            }),
        processData: false,
        contentType: "application/json",
        async: false,
        success: function (data) {
            if (data.status == 200) {
            IMP.request_pay({
    pg : 'html5_inicis', // version 1.1.0부터 지원.
    pay_method : 'vbank',
    merchant_uid : merchant_uid1,
    name : '상표 출원 신청 :' + brandname,
    amount : realprice2,
    buyer_email : customeremail,
    buyer_name : customername,
    buyer_tel : customerPhone,
//    buyer_addr : 0,
//    buyer_postcode : 12345,
    m_redirect_url : 'https://m.nametec.kr/payment2?vbank=T'
}, function(rsp) {
    if ( rsp.success ) {
        var msg = '결제가 완료되었습니다.';
        msg += '고유ID : ' + rsp.imp_uid;
        msg += '상점 거래ID : ' + rsp.merchant_uid;
        msg += '결제 금액 : ' + rsp.paid_amount;
        msg += '카드 승인번호 : ' + rsp.apply_num;
        location.href="https://m.nametec.kr/payment2?vbank=T&imp_success=true&imp_uid="+rsp.imp_uid;
    } else {
        var msg = '결제에 실패하였습니다.';
        msg += '에러내용 : ' + rsp.error_msg;
         history.back();
    }
    alert(msg);
});
            } else {

            }
        }
        ,
        err: function (err) {
            alert(err.status);
        }
    });
}
}

function joinus1() {
    localurl = nametec + "/";
    window.location.href = localurl;
}

function select1(i, event) {
    flag1 = true;
    var conList = document.getElementsByClassName("conList")[i];

    if (conList.gridTemplateRows == "1fr 1fr") {
        event.stopPropagation();
    }

    printpay(i);
    printresult(i);
    var sp = document.getElementsByClassName("sp");
    sp[0].innerHTML = mon2.toLocaleString() + '원';

}


function printpay(i) {
    var conList = document.getElementsByClassName("conList")[i];
    conList.gridTemplateRows = "1fr 1fr";
    if (conList.style.border == "1px solid rgb(74, 100, 245)") {


        conList.childNodes[2].remove();
        selectindex[i] = 0;
        conList.style.border = "1px solid rgba(0, 0, 0, 0.14)";
        var in1 = conList.getElementsByClassName('in1')[0];
        var in2 = conList.getElementsByClassName('in3')[0];
        in1.getElementsByClassName("ru")[0].style.backgroundColor = "#898989";
        in1.getElementsByClassName("percent")[0].style.color = "#898989";
        in2.style.color = " #898989";
        flag1 = true;

        resultmon = resultmon - mon1 - mon2;
        $(".conPay1" + i).remove();
    } else {

        var aaa = document.createElement("img");
        aaa.className = "downa";
        aaa.src = "../static/image/downbluearrow@3x.png";
        aaa.onclick = function () {
            Mdetail(i, event)
        };


        conList.appendChild(aaa);

        selectindex[i] = 1;
        conList.style.border = "1px solid rgb(74, 100, 245)";
        var in1 = conList.getElementsByClassName('in1')[0];
        var in2 = conList.getElementsByClassName('in3')[0];
        in1.getElementsByClassName("ru")[0].style.backgroundColor = "#4a64f5";
        in1.getElementsByClassName("percent")[0].style.color = "#4a64f5";
        in2.style.color = "#4a64f5";
        resultmon += mon1 + mon2;
        var listContainer = document.getElementById("container2");
        var newDiv = document.createElement("div");
        newDiv.className = "conPay1" + i;
        $(newDiv).css('padding-top', '14.5px').css('padding-bottom', '14.5px').css('margin-left', '20px').css('margin-bottom', '-2px').css('width', '90%').css('border-bottom', ' 2px dashed lightgrey');
        listContainer.appendChild(newDiv);
        newDiv.innerHTML += '<div class="l1">' + in1.getElementsByClassName("ru")[0].innerHTML + '</div>';
        newDiv.innerHTML += '<div class="l2"><span> 특허청 관납료</span></div> <div style="color: #515151;display:inline;float:right;font-size: 14px;transform: translateY(4px);">' + mon1.toLocaleString() + '원 </div> <br>';
        newDiv.innerHTML += '<div class="l2"><span>네임텍 수수료</span></div> <div style="color: #515151;display:inline;float:right;font-size: 14px;transform: translateY(4px);">' + '<span class="sp">' + '44,000원' + '</span></div><br>';
    }
}


function printresult(i) {
    var conList = document.getElementsByClassName("conList")[i];
    if (resultmon > 0) {
        var listContainer = document.getElementById("container2");
        $("#result2").remove();
        var result = document.createElement("div");
        result.id = "result2";
        listContainer.appendChild(result);
        var l = document.getElementsByClassName("sp").length;
        resultmon = 62000 * l + 42000;
        result.innerHTML = ' <div style="width:90%;margin-left:20px;display:inline;float:left;font-size:25px;  font-weight: 500;border-top:2px solid black;margin-bottom: 20px;">총계<div style="display:inline;float:right;font-size:25px; ">' + resultmon.toLocaleString() + '원 </div></div> <br>';
        $("#next_button3").css('backgroundColor', '#4a64f5');
        $("#next_button3").css('color', '#ffffff');
    } else {
        $("#result2").remove();
        $("#next_button3").css('backgroundColor', '#d4d1d4');
        $("#next_button3").css('color', '#898989')
    }
}


function printmon() {

    var mon1 = 62000;
    var mon2 = 44000;
    resultmon += mon1 + mon2;


    var listContainer = document.getElementById("container2");
    var newDiv = document.createElement("div");
    newDiv.className = "conPay1";

    var conList = document.getElementsByClassName('contable')[0];
    var in1 = conList.getElementsByClassName('movein1')[0];
    in1.getElementsByClassName("ru")[0].style.backgroundColor = "#4a64f5";

    listContainer.appendChild(newDiv);

    newDiv.innerHTML += '<div style="font-size:16px;color: #515151;line-height: 2;text-align: left;">3류</div>';
    newDiv.innerHTML += '<div class="l2"">특허청 관납료</div> <div id="conpay1in1" style="color: #515151;display:inline;float:right;">' + mon1.toLocaleString() + '원 </div> <br>';
    newDiv.innerHTML += '<div class="l2">네임텍 수수료</div> <div id="conpay1in2" style="color: #515151;display:inline;float:right;">' + mon2.toLocaleString() + '원 </div><br>';

    $("#result2").remove();
    var result = document.createElement("div");
    result.id = "result2";
    listContainer.appendChild(result);
    result.innerHTML = ' <div style="width:90%; margin-left:20px;display:inline;float:left;font-size:25px;  font-weight: 500;border-top:2px solid black;margin-bottom: 20px;">총계<div style="display:inline;float:right;font-size:25px; ">' + resultmon.toLocaleString() + '원 </div></div> <br>';

}

function moremoney(i) {
    mon1 = 160000;
    mon2 = 160000;


    var checkbox1 = document.getElementById("checkbox" + i);
    var listContainer = document.getElementById("container2");
    if (checkbox1.checked) {
        selectindex2[i] = 1;
        selectindex[i] = 1;
        resultmon += mon1;
        resultmon += mon2;

        var newDiv1 = document.createElement("div");
        var newDiv2 = document.createElement("div");
        var conpay1in1 = document.getElementById("conpay" + i + "in1");
        var conpay1in2 = document.getElementById("conpay" + i + "in2");

        newDiv1.innerHTML += ' <div class="trs' + i + '"><br></div> <div id="divplus1' + i + '" style="color: #515151;float:right;">' + "+" + mon1.toLocaleString() + '원 </div>';
        newDiv2.innerHTML += '<div class="trs' + i + '"><br></div><div id="divplus2' + i + '" style="color: #515151;float:right;">' + "+" + mon2.toLocaleString() + '원 </div>';
        $(conpay1in1).after(newDiv1);
        $(conpay1in2).after(newDiv2);
        $("#result2").remove();
        var result = document.createElement("div");
        result.id = "result2";
        listContainer.appendChild(result);

        result.innerHTML = ' <div style="width:90%; margin-left:20px;display:inline;float:left;font-size:25px;border-top:2px solid black;  font-weight: 500;margin-bottom: 20px;margin-bottom: 20px;">총계<div style="display:inline;float:right;font-size:25px; ">' + resultmon.toLocaleString() + '원 </div></div> <br>';


        let janLastDate = new Date();
        var month2 = addMonth(janLastDate, 2);
        var month5 = addMonth(janLastDate, 5);
        var dock = document.getElementsByClassName('movein2')[i];
        var su1 = dock.getElementsByClassName('sucin2s')[1];
        var su2 = dock.getElementsByClassName('sucin2s')[2];
        su1.innerHTML = month2;
        su2.innerHTML = month5;
    } else {
        selectindex2[i] = 0;
        selectindex[i] = 0;
        var conList = document.getElementsByClassName('contable')[i];
        var in1 = conList.getElementsByClassName('movein1')[0];

        resultmon = resultmon - mon1;
        resultmon = resultmon - mon2;
        $("#divplus1" + i + "").remove();
        $("#divplus2" + i + "").remove();
        $("#result2").remove();

        $('.trs' + i + "").remove();
        var result = document.createElement("div");
        result.id = "result2";
        listContainer.appendChild(result);

        result.innerHTML = ' <div style="width:90%; margin-left:20px;display:inline;float:left;font-size:25px;  font-weight: 500;border-top:2px solid black;margin-bottom: 20px;">총계<div style="display:inline;float:right;font-size:25px; ">' + resultmon.toLocaleString() + '원 </div></div> <br>';
        let janLastDate = new Date();
        var month2 = addMonth(janLastDate, 9);
        var month5 = addMonth(janLastDate, 12);
        var dock = document.getElementsByClassName('movein2')[i];
        var su1 = dock.getElementsByClassName('sucin2s')[1];
        var su2 = dock.getElementsByClassName('sucin2s')[2];
        su1.innerHTML = month2;
        su2.innerHTML = month5;
    }

}

function moremoney11(i) {
    mon1 = 160000;
    mon2 = 160000;


    var checkbox1 = document.getElementById("checkbox" + i);
    if (checkbox1.checked) {
        checkbox1.checked = false;
    } else {
        checkbox1.checked = true;
    }

    var listContainer = document.getElementById("container2");
    if (checkbox1.checked) {
        selectindex2[i] = 1;
        selectindex[i] = 1;
        resultmon += mon1;
        resultmon += mon2;


        var conpay1in1 = document.getElementById("conpay" + i + "in1");
        var conpay1in2 = document.getElementById("conpay" + i + "in2");

        var newDiv1 = document.createElement("div");
        var newDiv2 = document.createElement("div");
        newDiv1.innerHTML += ' <div class="trs' + i + '"><br></div> <div id="divplus1' + i + '" style="color: #515151;float:right;">' + "+" + mon1.toLocaleString() + '원 </div>';
        newDiv2.innerHTML += '<div class="trs' + i + '"><br></div><div id="divplus2' + i + '" style="color: #515151;float:right;">' + "+" + mon2.toLocaleString() + '원 </div>';
        $(conpay1in1).after(newDiv1);
        $(conpay1in2).after(newDiv2);
        $("#result2").remove();
        var result = document.createElement("div");
        result.id = "result2";
        listContainer.appendChild(result);

        result.innerHTML = ' <div style="width:90%; margin-left:20px;display:inline;float:left;font-size:25px;border-top:2px solid black;  font-weight: 500;margin-bottom: 20px;margin-bottom: 20px;">총계<div style="display:inline;float:right;font-size:25px; ">' + resultmon.toLocaleString() + '원 </div></div> <br>';


        let janLastDate = new Date();
        var month2 = addMonth(janLastDate, 2);
        var month5 = addMonth(janLastDate, 5);
        var dock = document.getElementsByClassName('movein2')[i];
        var su1 = dock.getElementsByClassName('sucin2s')[1];
        var su2 = dock.getElementsByClassName('sucin2s')[2];
        su1.innerHTML = month2;
        su2.innerHTML = month5;
    } else {
        selectindex2[i] = 0;
        selectindex[i] = 0;
        var conList = document.getElementsByClassName('contable')[i];
        var in1 = conList.getElementsByClassName('movein1')[0];

        resultmon = resultmon - mon1;
        resultmon = resultmon - mon2;
        $("#divplus1" + i + "").remove();
        $("#divplus2" + i + "").remove();
        $("#result2").remove();

        $('.trs' + i + "").remove();
        var result = document.createElement("div");
        result.id = "result2";
        listContainer.appendChild(result);

        result.innerHTML = ' <div style="width:90%; margin-left:20px;display:inline;float:left;font-size:25px;  font-weight: 500;border-top:2px solid black;margin-bottom: 20px;">총계<div style="display:inline;float:right;font-size:25px; ">' + resultmon.toLocaleString() + '원 </div></div> <br>';
        let janLastDate = new Date();
        var month2 = addMonth(janLastDate, 9);
        var month5 = addMonth(janLastDate, 12);
        var dock = document.getElementsByClassName('movein2')[i];
        var su1 = dock.getElementsByClassName('sucin2s')[1];
        var su2 = dock.getElementsByClassName('sucin2s')[2];
        su1.innerHTML = month2;
        su2.innerHTML = month5;
    }

}

function colorchange() {
    $(".currentImform").css('border', 'none');
    $(".currentImform").css('color', '#000000');

    $(".boximform2").css('border', '1.5px solid #4a64f5');
    $(".boximform2").css('color', '#4a64f5');
}


function informcheck(e) {
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    var text3_1 = document.getElementById("text3-1");
    var text3_2 = document.getElementById("text3-2");
    var text4 = document.getElementById("text4");
    var text5 = document.getElementById("text5");
    var text6 = document.getElementById("text6");
    var checkspan = document.getElementById("checkspan");

    if (e.checked == true) {
        $('#checkspan').css("color", "#4a64f5");
        text1.value = "이름";
        text2.value = "name";
        text3_1.value = '991231';
        text3_2.value = '0000000';
        text4.value = "000@naver.com";
        text5.value = '01012345678';
        text6.value = "00로 00번지 00";
        $(".textcont").css("opacity", "1");
        $(".textcont").css("color", "#000000");
        $('#next_button6').attr("disabled", false);//활성화
        $('.sad1').remove();
        $('.sad2').remove();
        $('.sad3').remove();
        $('.imformname').css("visibility", "visible");

    } else {
        $('#checkspan').css("color", "#898989");
        text1.value = "한글 이름";
        text2.value = "영문 이름";
        text3_1.value = "주민등록번호";
        text3_2.value = "1111111";
        text4.value = "출원인 전화번호";
        text5.value = "출원인 이메일";
        text6.value = "출원인 등본상 주소";
        $(".textcont").css("opacity", "0.5");
        $(".textcont").css("color", "#e0e0e0");
        $('#next_button6').attr("disabled", true);//비활성화
        $('.imformname').css("visibility", "hidden");
    }
}

function printsaupja() {
    var container = document.getElementById('container');
    container.innerHTML = "   "
    container.innerHTML += '<div class="" id="textcon" style="  width:90%; margin:5%; ">'
        + '<div class="imformname"> 사업자 등록 번호</div>'
        + '<div class="inputdiv" style="width:28%; display:inline-block;">'
        + '<input autocomplete="off"; type="number" name="" value="" id="text5_1" class="textcont" placeholder="" style="border:none;width:95%;padding-left: 5%;">'
        + '</div>'
        + '<span style="width:5%;text-align:center; color:#b7b7b7; font-size:35px; font-weight:700;"> - </span>'
        + '       <div class="inputdiv"style="width:28%; display:inline-block;">'
        + '<input autocomplete="off"; type="number" name="" value="" id="text5_2" class="textcont" placeholder="" style="border:none;width:95%;padding-left: 5%;">'
        + '  </div>'
        + ' <span style="width:5%;text-align:center; color:#b7b7b7; font-size:35px; font-weight:700;"> - </span>'
        + '<div class="inputdiv"style="width:28%; display:inline-block;">'
        + '<input autocomplete="off"; type="number" name="" value="" id="text5_3" class="textcont" placeholder="" style="border:none;width:95%;padding-left: 5%;">'
        + '  </div>'
        + ' <div class="imformname" > 상호명</div>'
        + '   <div class="inputdiv">'
        + '<input autocomplete="off"; type="text" name="" value="" id="text1" class="textcont" placeholder="" style="border:none;">'
        + ' <img onClick="eraseInput(\'text1\')"  class= "x_button" src="../static/image/x_round@3x.png"  style="width: 16px; height: 16px; float:right;">'
        + '</div>'
        + '    <div class="imformname"> 대표자 성명</div>'
        + '   <div class="inputdiv">'
        + ' <input autocomplete="off"; type="text" name="" value="" id="text2" class="textcont" placeholder="" style="border:none;">'
        + '  <img onClick="eraseInput(\'text2\')"  class= "x_button" src="../static/image/x_round.png  "srcset="../static/image/x_round@2x.png 2x,../static/image/x_round@3x.png 3x" style="width: 16px; height: 16px; float:right;">'
        + ' </div>'
        + '  <div class="imformname" > 이메일 </div>'
        + '    <div class="inputdiv">'
        + '<input autocomplete="off"; type="email" name="" value="" id="text7" class="textcont" placeholder="" style="border:none;">'
        + ' <img onClick="eraseInput(\'text7\')"  class= "x_button" src="../static/image/x_round.png"srcset="../static/image/x_round@2x.png 2x,../static/image/x_round@3x.png 3x" style="width: 16px; height: 16px; float:right;">'
        + '</div>'
        + '</div>'

}

function printhyun() {
    var container = document.getElementById('container');
    container.innerHTML = "   "
    container.innerHTML += '<div class="" id="textcon" style="  width:90%; margin:5%; ">'
        + '  <div class="imformname" > 전화번호 </div>'
        + '    <div class="inputdiv">'
        + '<input autocomplete="off"; type="number" name="" value="" id="text7" class="textcont" placeholder="" style="border:none;">'
        + ' <img onClick="eraseInput(\'text7\')"  class= "x_button" src="../static/image/x_round.png"srcset="../static/image/x_round@2x.png 2x,../static/image/x_round@3x.png 3x" style="width: 16px; height: 16px; float:right;">'
        + '</div>'
        + '</div>'
}

function printjegue() {
    var container = document.getElementById('container');
    container.innerHTML = "   "

}

function makeim() {
    var radio1 = document.getElementsByName("radio1");
    var found = null;
    for (var i = 0; i < radio1.length; i++) {
        if (radio1[i].checked == true) {
            found = radio1[i];
            if (found.value == "1") {
                printsaupja();
            } else if (found.value == "2") {
                printhyun();
            } else if (found.value == "3") {
                printjegue();
            }
        }

    }


}


function menuClick() {
    var menu = document.getElementById("menuContainer");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {

        menu.style.display = "none";

    }


}

function activeGridItem(element, i) {

    indexList.push(i);
    if (element.classList.contains("active")) {
        element.classList.remove("active");
    } else {
        element.classList.add("active");
    }
}

// function listenGridCount() {
//     let items = document.getElementsByClassName("grid-item");
//     let count = 0;
//     for (let i = 0; i < items.length; i++) {
//         if (items[i].classList.contains("active")) {
//             count++;
//         }
//     }
//     let startBtn = document.getElementsByClassName("selectBtn")[0];
//     startBtn.innerHTML = "10개 중 " + count + "개 선택 완료";
//     if (count === 0) {
//         startBtn.classList.remove("active");
//     } else {
//         startBtn.classList.add("active");
//     }
// }
function reviseId() {
    var revise = document.getElementById('innerID');
    revise.innerHTML = "     "
    revise.innerHTML += '<div style="display: inline-block;width: 35%;float: left; font-size:16px; color:#898989;">이름</div>'
        + '<div style="display: inline-block;font-size:16px; width:45%;color:#4a64f5;border-bottom: 1px solid #4a64f5;">'
       + '<input type="text" id="membername" style="border: none;font-size:16px;margin-left: 5px;width:100%;"></div>'
        + '<div style="display: inline-block;float: right; font-size:16px; color:#4a64f5;cursor : pointer;" onclick="updatemypagename();">완료</div>'

       var membername = document.getElementById('membername');
       membername.value = sessionStorage.getItem("nickname");
}

function revisepass() {
    var revise = document.getElementById("innerPS")
    revise.innerHTML = "     "
    revise.innerHTML += '  <div style="display: inline-block;width: 35%;float: left; font-size:16px; color:#898989;">휴대폰 번호</div>'
        + ' <div style="display: inline-block;font-size:16px; width:45%;color:#4a64f5;border-bottom: 1px solid #4a64f5;"><input type="tel" id="membernum"style="border: none;font-size:16px;margin-left: 5px;width:100%;"></div>'
        + ' <div style="display: inline-block;float: right; font-size:16px; color:#4a64f5;cursor : pointer;" onclick="updatemypagenumber();">완료</div>'
        var membernum = document.getElementById('membernum');
       membernum.value = sessionStorage.getItem("memberphone");
}
function revisepass1() {
    var revise = document.getElementById("cusemail2")
    revise.innerHTML = "     "
    revise.innerHTML += '  <div style="display: inline-block;width: 35%;float: left; font-size:16px; color:#898989;">수신 이메일</div>'
        + ' <div style="display: inline-block;font-size:16px; width:45%;color:#4a64f5;border-bottom: 1px solid #4a64f5;"><input type="tel" id="membernum1"style="border: none;font-size:16px;margin-left: 5px;width:100%;"></div>'
        + ' <div style="display: inline-block;float: right; font-size:16px; color:#4a64f5;cursor : pointer;" onclick="updatemypagename1();">완료</div>'
        var membernum1 = document.getElementById('membernum1');
       membernum1.value = sessionStorage.getItem("real_email");
}
function eraseInput(element) {
    document.getElementById(element).innerHTML = "";
    document.getElementById(element).value = "";
    $('#tab-1').css("border-bottom", "solid 2px #b7b7b7");
    $('#next_button').css('background-color', '#efefef');
    $('#dam').css('color', '#b7b7b7');

}


function printdiv(data1) {
    var asdf = document.getElementById("asdf");
    let key1 = Object.keys(data1['goods']);

    var sample = document.getElementsByClassName("asdfg")[0];
    var parent = document.getElementById("gridCon");
    var data = data1['goods'];

    for (let i = 0; i < key1.length; i++) {
        let item = sample.cloneNode(true);
        item.innerHTML = key1[i] + ":" + data[key1[i]];
        parent.appendChild(item);
    }
    var items = document.getElementsByClassName("asdfg");
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        item.addEventListener('click', function () {
            activeGridItem(item, i);
            listenGridCount(i);
        }, false);
    }
}



function testajax3() {
    var oParams = getUrlParams();
    var encodeGoods = decodeURI(oParams.goods);
    $(document).ready(function () {

        $.ajax({

            url: server_address + "kiprisapi2",

            type: "get",

            accept: "application/json",


            data: {
                "상품명": encodeGoods,
                "류": oParams.index
            },


            dataType: "JSON",
            crossDomain: true,
            beforeSend: function () {
FunLoadingBarStart();
}
, complete: function () {
FunLoadingBarEnd();
}
            ,success: function (data1) {
                if (data1.status == 200) {
                    let key1 = Object.keys(data1['goods']);
                    var sample = document.getElementsByClassName("asdfg")[0];
                     sample.style.display = "block";
                    var parent = document.getElementById("parent");
                    var data = data1['goods'];
                    for (let i = 0; i < key1.length; i++) {
                        selectindex4[i] = 0;
                        var item = sample.cloneNode(true);
                        item.innerHTML = '<div><span class="ru" style="transform:translateY(-6px); display: inline-block;font-size: 14px;color: #ffffff;background-color: #898989; border-radius: 20px; width: 50px; padding: 3px 0 4px 0;text-align: center;margin-left: 15px;margin-right: 11px;"> ' + data[key1[i]] + '류</span>' + '<span class="up">' + key1[i] + '</span></div>';
                        item.className = "asdfg"

                        parent.appendChild(item);
                    }

                    sample.remove();


                    var items = document.getElementsByClassName("asdfg");
                    for (let i = 0; i < items.length; i++) {
                        let item = items[i];
                        item.addEventListener('click', function () {
                            activeGridItem2(item, i);
                            listenGridCount(i);
                        }, false);
                    }


                    var asdfg = document.getElementsByClassName("asdfg");
                    var selec = getParam("select");
                    selec = selec.split(",");
                    for (let i = 0; i < selec.length; i++) {
                        if (selec[i] == 1) {
                            activeGridItem3(asdfg[i + 1], i + 1);
                            listenGridCount(i);
                        }
                    }
                }


                if (data1.status == 401) {
                alert('상품을 검색 할 수 없습니다.');
                    history.back();
                }
                if (data1.status == 402) {
                alert('상품을 검색 할 수 없습니다.');
                history.back();
                }
// 	var asdf = document.getElementById("asdf");
// 	asdf.innerHTML = JSON.stringify(data1['possibility']['word'][i]);
// }

            },
            error: function (request, status, error) {

// fail handle
            }
        });
    });
}

function listenGridCount() {
    let items = document.getElementsByClassName("asdfg");
    let count = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains("active")) {
            count++;
        }
    }
}


function activeGridItem2(element, i) {
    let ru = document.getElementsByClassName("ru");
    if (element.classList.contains("active")) {
        element.classList.remove("active");
        ru[i].style.backgroundColor = "#898989";
        selectindex4[i - 1] = 0;
    } else {
        element.classList.add("active");
        ru[i].style.backgroundColor = "#4a64f5";
        selectindex4[i - 1] = 1;
    }
}

function activeGridItem3(element, i) {
    if (element.classList.contains("active")) {
        element.classList.remove("active");
        selectindex4[i] = 0;
    } else {
        element.classList.add("active");
        selectindex4[i] = 1;
    }
}

var classAjaxList = [];
var classAjaxListGoods = [];

function listenGridCount(index) {
    let items = document.getElementsByClassName("asdfg");
    let item1 = document.getElementsByClassName("ru")[index];
    let item2 = document.getElementsByClassName("up")[index];

    let itemn = item1.innerHTML + item2.innerHTML;

    let count = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains("active")) {
            count++;
        }
    }
    if (count == 11) {
        activeGridItem2(items[index], index);
        count--;
        return false;
    }


    classAjaxList.push(itemn);
    let startBtn = document.getElementsByClassName("selectBtn")[0];
    startBtn.innerHTML = "10개 중 " + count + "개 선택 완료";
    if (count === 0) {
        startBtn.classList.remove("active");
        $('#sel1234').attr("disabled", true);
    } else {
        startBtn.classList.add("active");
        $('#sel1234').attr("disabled", false);
    }
}

function classmove2(index) {

    // var aindex = index.toString().replaceAll("<","");
    // aindex = aindex.toString().replaceAll(">","");
    // aindex = aindex.toString().replaceAll("=","");
    // aindex = aindex.toString().replaceAll(",","");
    // aindex = aindex.toString().replaceAll(":","");
    // aindex = aindex.toString().replaceAll("/","");
    // aindex = aindex.toString().replaceAll('"',"");
    // aindex = aindex.toString().replaceAll('"',"");
    // aindex = aindex.toString().replaceAll("'","");
    // aindex = aindex.toString().replaceAll("'","");
    // aindex = aindex.toString().replaceAll("ru styletransform translateY(-3px); display inline-block; font-size 14px; color rgb(255 255 255); background-color rgb(74 100 245); border-radius 20px; width 50px; padding 3px 0px 4px; text-align center; margin-left 15px; margin-right 5px;","");
    // aindex = aindex.toString().replaceAll("span class ","");
    // aindex = aindex.toString().replaceAll("spanspan classup","");
    // aindex = aindex.toString().replaceAll("span","@");
    sessionStorage.setItem('selectclasses', index);
    var oParams = getUrlParams();
    var goodsName2 = decodeURI(oParams.key2);
    var successUrl = "http://m.nametec.kr/success?index=" + index + "&goods2=" + goodsName2 + "&select=" + selectindex4;
    // location.href = successUrl
    var key2 = getParam("key2");
    var index3 = getParam("index");
    var index2 = getParam("index2");
    var goods = getParam("goods");
    var intro5Url = "http://m.nametec.kr/search4?key2=" + key2 + "&index=" + index3 + "&index2=" + index2 + "&goods=" + goods + "&select=" + selectindex4;


    sessionStorage.setItem("successUrl", successUrl);
    sessionStorage.setItem("intro5Url", intro5Url);
}

function testajax4() {
    var oParams = getUrlParams();
    var encodeGoods = decodeURI(oParams.goods2);
    var encodeClass = decodeURI(oParams.index);
    $(document).ready(function () {

        $.ajax({

            url: server_address + "kiprisapi3",

            type: "get",

            accept: "application/json",


            data: {
                "상표명": encodeGoods,
                "류": encodeClass
            },


            dataType: "JSON",
            crossDomain: true,
            success: function (data1) {

                if (data1.status == 200) {
                    var btn = document.getElementsByClassName("start_button3");
                    var container = document.getElementsByClassName("container_a")[0];
                    var container_b = document.getElementsByClassName("container_b")[0];
                    var stylecon = document.getElementById("stylecon");
                    var stylecon_b = document.getElementById("stylecon_b");
                    var sample = document.getElementsByClassName("p1")[0];
                    var sample2 = document.createElement('div');
                    sample2.className = 'in2';
                    let key1 = Object.keys(data1['result']);
                    for (let i = 0; i < data1['result'].length; i++) {

                        let item = sample.cloneNode(true);
                        window.sessionStorage.setItem(i + "", JSON.stringify(data1['result'][i]));
                        var meta1 = JSON.parse(window.sessionStorage.getItem("result "+i + ""));
                        let item2 = sample2.cloneNode(true);
                        item.innerHTML = data1['result'][i]['percentage'].toFixed(0) + "%";
                        item2.innerHTML = data1['result'][i]['goods'];

                        if (Number(data1['result'][i]['percentage'].toFixed(0)) > 70) {
                            stylecon.prepend(item2);
                            stylecon.prepend(item);
                            container.style.display = 'block';
                            btn[0].style.display = 'block';
                        } else {
                            stylecon_b.prepend(item2);
                            stylecon_b.prepend(item);
                            container_b.style.display = "block";
                            btn[1].style.display = 'block';
                        }

                    }

                }

                if (data1.status == 401) {
                    var asdf = document.getElementById("asdf");
                    asdf.innerHTML = JSON.stringify(data1);
                }
// 	var asdf = document.getElementById("asdf");
// 	asdf.innerHTML = JSON.stringify(data1['possibility']['word'][i]);
// }

            },
            error: function (request, status, error) {

// fail handle

            }


        });


    });
}

function judgein1() { //개인 1페이지
    var get_input = $("#tab-1 input");
    judge = true;
    judge2 = true;
    judgenum = 0;
    var doc1 = document.getElementsByClassName("inputdiv");
    for (var t = 0; t < 3; t++) {
        if (doc1[t].style.borderBottom == "2px solid rgb(245, 74, 74)") {
            judge2 = false;
        }
    }
    for (var i = 0; i < 3; i++) {

        if (get_input[i].value == '') {
            judge = false;
            $('#next_button6').attr("disabled", true);//비활성화
        }
    }
    if (judge) {
        $('#next_button6').attr("disabled", true);//비활성화
        if (judge2) {
            $('#next_button6').attr("disabled", false);//활성화
        } else {
            $('#next_button6').attr("disabled", true);//비활성화
        }
    } else {
        $('#next_button6').attr("disabled", true);//비활성화
    }
}

function judgein11() { //법인 1페이지
    var get_input = $("#tab-2 input");
    judge = true;
    judge2 = true;
    judgenum = 0;
    var doc1 = document.getElementsByClassName("inputdiv");
    for (var t = 0; t < 2; t++) {
        if (doc1[t].style.borderBottom == "2px solid rgb(245, 74, 74)") {
            judge2 = false;
        }
    }
    for (var i = 0; i < 2; i++) {

        if (get_input[i].value == '') {
            judge = false;
            $('#next_button6').attr("disabled", true);//비활성화
        }
    }
    if (judge) {
        $('#next_button6').attr("disabled", true);//비활성화
        if (judge2) {
            $('#next_button6').attr("disabled", false);//활성화
        } else {
            $('#next_button6').attr("disabled", true);//비활성화
        }
    } else {
        $('#next_button6').attr("disabled", true);//비활성화
    }
}

function judgein2() {
    var get_input = $("#textcon2 input");
    judge = true;
    judge2 = true;
    judgenum = 0;
    var doc1 = document.getElementsByClassName("inputdiv");
    for (var t = 3; t < 5; t++) {
        if (doc1[t].style.borderBottom == "2px solid rgb(245, 74, 74)") {
            judge2 = false;
        }
    }
    for (var i = 0; i < 2; i++) {

        if (get_input[i].value == '') {
            judge = false;
            $('#next_button6').attr("disabled", true);//비활성화
        }
    }
    if (judge) {
        $('#next_button6').attr("disabled", true);//비활성화
        if (judge2) {
            $('#next_button6').attr("disabled", false);//활성화
        } else {
            $('#next_button6').attr("disabled", true);//비활성화
        }
    } else {
        $('#next_button6').attr("disabled", true);//비활성화
    }
}

function judgein22() {
    var get_input = $("#textcon2 input");
    judge = true;
    judge2 = true;
    judgenum = 0;
    var doc1 = document.getElementsByClassName("inputdiv");
    for (var t = 2; t < 7; t++) {
        if (doc1[t].style.borderBottom == "2px solid rgb(245, 74, 74)") {
            judge2 = false;
        }
    }
    for (var i = 0; i < 5; i++) {

        if (get_input[i].value == '') {
            judge = false;
            $('#next_button6').attr("disabled", true);//비활성화
        }
    }
    if (judge) {
        $('#next_button6').attr("disabled", true);//비활성화
        if (judge2) {
            $('#next_button6').attr("disabled", false);//활성화
        } else {
            $('#next_button6').attr("disabled", true);//비활성화
        }
    } else {
        $('#next_button6').attr("disabled", true);//비활성화
    }
}

function judgein24() {
    var get_input = $("#textcon24 input");
    judge = true;
    judge2 = true;
    judgenum = 0;
    var doc1 = document.getElementsByClassName("inputdiv");
    for (var t = 2; t < 7; t++) {
        if (doc1[t].style.borderBottom == "2px solid rgb(245, 74, 74)") {
            judge2 = false;
        }
    }
    for (var i = 0; i < 5; i++) {

        if (get_input[i].value == '') {
            judge = false;
            $('#next_button6').attr("disabled", true);//비활성화
        }
    }
    if (judge) {
        $('#next_button6').attr("disabled", true);//비활성화
        if (judge2) {
            $('#next_button6').attr("disabled", false);//활성화
        } else {
            $('#next_button6').attr("disabled", true);//비활성화
        }
    } else {
        $('#next_button6').attr("disabled", true);//비활성화
    }
}
function judgein3() {
    var get_input = $("#textcon3 input");
    judge = true;
    judge2 = true;
    judgenum = 0;
    var doc1 = document.getElementsByClassName("inputdiv");
    for (var t = 5; t < 8; t++) {
        if (doc1[t].style.borderBottom == "2px solid rgb(245, 74, 74)") {
            judge2 = false;
        }
    }
    for (var i = 0; i < 3; i++) {

        if (get_input[i].value == '') {
            judge = false;
            $('#next_button6').attr("disabled", true);//비활성화
        }
    }
    if (judge) {
        $('#next_button6').attr("disabled", true);//비활성화
        if (judge2) {
                    $('#next_button6').attr("disabled", false);//활성화
        } else {
            $('#next_button6').attr("disabled", true);//비활성화
        }
    } else {
        $('#next_button6').attr("disabled", true);//비활성화
    }
}

function judgein33() {
    var get_input = $("#textcon3-1 input");
    judge = true;
    judge2 = true;
    judgenum = 0;
    var doc1 = document.getElementsByClassName("inputdiv");
    for (var t = 9; t < 13; t++) {
        if (doc1[t].style.borderBottom == "2px solid rgb(245, 74, 74)") {
            judge2 = false;
        }
    }
    for (var i = 0; i < 5; i++) {

        if (get_input[i].value == '') {
            judge = false;
            $('#next_button6').attr("disabled", true);//비활성화
        }
    }
    if (judge) {
        $('#next_button6').attr("disabled", true);//비활성화
        if (judge2) {
                    $('#next_button6').attr("disabled", false);//활성화


        } else {
            $('#next_button6').attr("disabled", true);//비활성화
        }
    } else {
        $('#next_button6').attr("disabled", true);//비활성화
    }
}



function judgein4() {
$('#next_button6').attr("disabled", false);//비활성화
}
function successInnerHtml() {
    for (let i = 0; i < sessionStorage.length; i++) {
        var meta1 = JSON.parse(window.sessionStorage.getItem("result "+ i + ""));


        let boxtext = '<div class="container1" onclick="select1(' + i + ',' + 'event' + ')">';
        boxtext += '<div class="conList" >';
        boxtext += '<div class="in1">';
        boxtext += '<span class="ru">';
        boxtext += meta1['code'] + "류";
        boxtext += '</span>';
        boxtext += '<span class="percent">';
        boxtext += meta1['percentage'].toFixed(0) + "%";
        boxtext += '</span>';
        boxtext += '</div>';
        boxtext += '<div class="in3" id="bb' + i + '" style="margin-top:3px; color:#898989">';
        boxtext += '<span id="aa' + i + '">' + meta1['goods'] + '</span>';
        boxtext += '</div>';
        boxtext += '</div>';
        boxtext += '</div>';
        $(".container").append(boxtext)
        var aai = document.getElementById("aa" + i);
        aai.style.overflow = "hidden";
        aai.style.textOverflow = "ellipse";
        aai.style.display = "-webkit-box";
        aai.style.webkitLineClamp = "2";
        aai.style.webkitBoxOrient = "vertical";

        if ($("#aa" + i).css("height") == '30px') {
            $("#bb" + i).css("margin-top", "16px");
            $("#bb" + i).css("margin-bottom", "0px");
        }

        percent_move(meta1['percentage']);

    }
}

function percent_move() {
    console.clear();

// Get all the Meters
    const meters = document.querySelectorAll('svg[data-value] .meter');

    meters.forEach((path) => {
        // Get the length of the path
        let length = path.getTotalLength();
        // console.log(length) once and hardcode the stroke-dashoffset and stroke-dasharray in the SVG if possible
        // or uncomment to set it dynamically
        // path.style.strokeDashoffset = length;
        // path.style.strokeDasharray = length;

        // Get the value of the meter
        let value = parseInt(path.parentNode.getAttribute('data-value'));
        // Calculate the percentage of the total length
        let to = length * ((100 - value) / 100);
        // Trigger Layout in Safari hack https://jakearchibald.com/2013/animated-line-drawing-svg/
        path.getBoundingClientRect();
        // Set the Offset
        path.style.strokeDashoffset = Math.max(0, to);
    });
}




function printmovein(a) {


    let janLastDate = new Date();
    var tomorow = addDay(janLastDate);
    var month9 = addMonth(janLastDate, 9);
    var month12 = addMonth(janLastDate, 12);

    for (let i = 0; i < a.length; i++) {
        selectindex[i] = 0;
        if (a[i] == 1) {
            selectindex2[i] = 0;
            var meta1 = JSON.parse(window.sessionStorage.getItem("result " + i + ""));

            let boxtext1 = '<div class="contable" style="display:inline-block;">';
            boxtext1 += '<div class="movein1" style="">';
            boxtext1 += ' <span class="ru" style="margin-left: 0px;float: left; background-color: #4a64f5;">';
            boxtext1 += meta1['code'] + "류";
            boxtext1 += '  </span>';
            boxtext1 += '  <input type="checkbox" id="checkbox' + i + '" name="checkbox' + i + '" onclick="moremoney(' + i + ')" > ';
            boxtext1 += '  <label For="checkbox' + i + '">   </label>';
            boxtext1 += '  <div onclick="moremoney11(' + i + ')" style="font-size: 18px; color:#000000;display:inline;float: right;">심사기간단축</div>';
            boxtext1 += '  </div>';
            boxtext1 += '  <div class="movein2" style="margin-top:3px; color:#898989; display:inline-block;width:95%">';
            boxtext1 += '  <div class="sucin2">상표 출원 예상일 <span class="sucin2s">' + tomorow + '</span></div>';
            boxtext1 += ' <div class="sucin2">1차 심사결과 통지 예상일 <span class="sucin2s">' + month9 + '</span></div>';
            boxtext1 += ' <div class="sucin2">최종 결과 예상일 <span class="sucin2s">' + month12 + '</span></div>';
            boxtext1 += ' </div>';
            boxtext1 += '  </div>';
            $(".container").append(boxtext1);
        }
    }
    if (a.length == 1) {
        $(".contable").css("margin-left", "8.5%");


    }

    printpay1();
}


function printpay1() {
    var conTable = document.getElementsByClassName("contable");
    for (var i = 0; i < conTable.length; i++) {
        var meta1 = JSON.parse(window.sessionStorage.getItem("result " + i + ""));
        if (i == 0) {
            var listContainer = document.getElementById("container2");
            var newDiv = document.createElement("div");
            newDiv.className = "conPay1" + i;
            $(newDiv).css('padding-top', '14.5px').css('padding-bottom', '14.5px').css('margin-left', '20px').css('margin-bottom', '-2px').css('width', '90%').css('border-bottom', ' 2px dashed lightgrey');
            listContainer.appendChild(newDiv);
            newDiv.innerHTML += '<div class="l1">' + meta1['code'] + "류" + '</div>';
            newDiv.innerHTML += '<div class="l2"">특허청 관납료</div> <div id="conpay' + i + 'in1" style="color: #515151;display:inline;float:right;">' + mon1.toLocaleString() + '원 </div> <br>';
            newDiv.innerHTML += '<div class="l2">네임텍 수수료</div> <div id="conpay' + i + 'in2" style="color: #515151;display:inline;float:right;">' + mon2.toLocaleString() + '원 </div><br>';
        } else {
            var listContainer = document.getElementById("container2");
            var newDiv = document.createElement("div");
            newDiv.className = "conPay1" + i;
            $(newDiv).css('padding-top', '14.5px').css('padding-bottom', '14.5px').css('margin-left', '20px').css('margin-bottom', '-2px').css('width', '90%').css('border-bottom', ' 2px dashed lightgrey');
            listContainer.appendChild(newDiv);

            newDiv.innerHTML += '<div class="l1">' + meta1['code'] + "류" + '</div>';
            newDiv.innerHTML += '<div class="l2"">특허청 관납료</div> <div id="conpay' + i + 'in1" style="color: #515151;display:inline;float:right;">' + mon1.toLocaleString() + '원 </div> <br>';
            newDiv.innerHTML += '<div class="l2">네임텍 수수료</div> <div id="conpay' + i + 'in2" style="color: #515151;display:inline;float:right;">' + mon2.toLocaleString() + ' </div><br>';
        }
    }

    resultmon = 62000 * conTable.length + 44000;
    var listContainer = document.getElementById("container2");
    $("#result2").remove();
    var result = document.createElement("div");
    result.id = "result2";
    listContainer.appendChild(result);
    result.innerHTML = ' <div style="width:90%;margin-left:20px;display:inline;float:left;font-size:25px;  font-weight: 500;border-top:2px solid black;margin-bottom: 20px;">총계<div style="display:inline;float:right;font-size:25px; ">' + resultmon.toLocaleString() + '원 </div></div> <br>';

}

function addMonth(date, month) {
    // month달 후의 1일
    let addMonthFirstDate = new Date(
        date.getFullYear(),
        date.getMonth() + month,
        date.getDate()
    );

    // month달 후의 말일
    let addMonthLastDate = new Date(
        addMonthFirstDate.getFullYear(),
        addMonthFirstDate.getMonth() + month
        , 0
    );

    let result = addMonthFirstDate;
    if (date.getDate() > addMonthLastDate.getDate()) {
        result.setDate(addMonthLastDate.getDate());
    } else {
        result.setDate(date.getDate());
    }

    var year = result.getFullYear();
    var month = new String(result.getMonth() + 1);
    var day = new String(result.getDate());


    if (month.length == 1) {
        month = "0" + month;
    }
    if (day.length == 1) {
        day = "0" + day;
    }

    return year + "-" + month + "월 예상";
}

function addDay(date) {
    // month달 후의 1일
    let addMonthFirstDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 1
    );

    var year = addMonthFirstDate.getFullYear();
    var month = new String(addMonthFirstDate.getMonth() + 1);
    var day = new String(addMonthFirstDate.getDate());


    if (month.length == 1) {
        month = "0" + month;
    }
    if (day.length == 1) {
        day = "0" + day;
    }

    return year + "-" + month + "-" + day;
}

function getParam(sname) {

    var params = location.search.substr(location.search.indexOf("?") + 1);

    var sval = "";

    params = params.split("&");

    for (var i = 0; i < params.length; i++) {

        temp = params[i].split("=");

        if ([temp[0]] == sname) {
            sval = temp[1];
        }

    }

    return sval;

}

function finalresult(k) {
    let janLastDate = new Date();
    var tomorow = addDay(janLastDate);
    var month9 = addMonth(janLastDate, 9);
    var month12 = addMonth(janLastDate, 12);
    var month2 = addMonth(janLastDate, 2);
    var month5 = addMonth(janLastDate, 5);
    var more = 0;
    var cnt = 0;
    var cnt2 = 0;
    var btn_value = sessionStorage.getItem("btn_value");
    var btn_value2 = btn_value.split(',');
    var mon22 = "44,000원";
    let ajaxDatak = JSON.parse(sessionStorage.getItem('ajaxData'));
    for(let i = 0 ; i< ajaxDatak.length ; i++){
    ajaxDatak[i]['moremoney'] = 0;
    }
    sessionStorage.setItem("ajaxData",JSON.stringify(ajaxDatak));
    for (let i = 0; i < k.length; i++) {
        if (k[i] == 1) {
            cnt++;
            var meta1 = JSON.parse(window.sessionStorage.getItem("result " + i + ""));
//            let boxtext1 = '<div class="ru" style="display:inline-block; font-size:14px;border-radius: 20px;text-align: center; width: 50px;padding: 3px 0 4px 0;color: #ffffff;background-color:#4a64f5;margin-left:5%;">' + meta1['code'] + "류" + '</div> ';

           let boxtext1 = '  <div id="" style="font-size: 12px;color: #4a64f5;margin-left: 20px;"> 제품/서비스 ';
            boxtext1 += '</div>';
            boxtext1 +='  <div class="Regular" style="font-size: 16px;color: #000000;margin-left: 20px;display: inline-block;"> ' +btn_value2[i] ;
            boxtext1 += '</div>';
            boxtext1 += '<div style="float: right;margin-right: 5%;">';
            boxtext1 += '<label class="switch">';
            boxtext1 += '    <input type="checkbox" class="chchch" onclick="moremoney22(' + cnt2 + ')">';
            cnt2++;
            boxtext1 += '        <span class="slider round"></span>';
            boxtext1 += '</label>';
            boxtext1 += '</div>';
            boxtext1 += '  <div id="" style="font-size: 12px;color: #4a64f5;margin-right : 5%;text-align : right;margin-top : 10px;"> 심사기간 8개월 단축';
            boxtext1 += '</div>';
            boxtext1 += '  <div id="container2" style="">';
            boxtext1 += '   </div><div id="conPay1" style="margin-left:20px;margin-right:5%;margin-top:5%;">';
            boxtext1 += '   <div style="display:block;">  <div  style="color: #898989;opacity: 0.7; display:inline-block;float:left;">특허청 관납료</div>';
            boxtext1 += '  <div class="1st"  style="color: #515151;display:inline-block;float:right;">62,000원</div></div>';
            boxtext1 += ' <br>';
            boxtext1 += '  <div> <div class="l2" >네임텍 수수료</div>';
            boxtext1 += '  <div class="2nd" style="opacity: 1;color: #515151;display:inline-block;float:right;">' + mon22 + '</div></div>';
            boxtext1 += '  <div class="in2" style="margin:3px 17px 10px 0px;color:#898989; display:inline-block;width:100%;padding-bottom:10px;">';
            boxtext1 += '  <div class="sucin2"style="color: #898989;"><p style="display: inline;opacity: 0.7;">상표 출원 예상일</p> <span class="sucin2s">' + tomorow + '</span></div>';
            //boxtext1 += '   <div class="sucin2"style="color: #898989;"><p style="display: inline;opacity: 0.7;">1차 심사결과 통지 예상일 </p><span class="sucin2s" style=" color:#4a64f5;;">' + month9 + '</span></div>';
            boxtext1 += '    <div class="sucin2"style="color: #898989;"><p style="display: inline;opacity: 0.7;">최종 결과 예상일 </p><span class="sucin2s"style=" color:#4a64f5;">' + month12 + '</span></div>';
            boxtext1 += ' </div>';
            boxtext1 += '</div>';
            boxtext1 += '</div>';
            $(".container").append(boxtext1);
            if (i > 0) {
                var iin2 = document.getElementsByClassName("in2")[i - 1];
                iin2.style.borderBottom = "2px dashed #8989894a";
            }
        }
        var brandname = document.getElementById('res');
        brandname.innerHTML = comma(62000 * cnt + 44000 * cnt + 260000 * more) + "원";
        sessionStorage.setItem('price',comma(62000 * cnt + 44000 * cnt + 260000 * more) + "원")
    }
    // if (k.length == 1) {
    //     var listContainer = document.getElementById("container2");
    //     var res = document.getElementById("res");
    //     var mas = document.getElementById("mas");
    //     var result = document.createElement("div");
    //     result.id = "result2";
    //     listContainer.appendChild(result);
    //     result.innerHTML = ' <div style="width:90%;margin-left:20px;display:inline;float:left;font-size:25px;  font-weight: 500;margin-bottom: 20px;">' + mas.innerHTML + '<div style="display:inline;float:right;font-size:25px; ">' + res.innerHTML + '</div></div> <br>';
    //
    //     $("#res").remove();
    //     $("#mas").remove();
    //     $("#1111").css("padding-top", "0px");
    //     $("#1111").css("backgroundColor", "none");
    //     $("#1111").css("box-shadow", "none");
    //     $(".in2").css("border-bottom", "2px solid #000000");
    // }

}

function comma(num) {
    var len, point, str;

    num = num + "";
    point = num.length % 3;
    len = num.length;

    str = num.substring(0, point);
    while (point < len) {
        if (str != "") str += ",";
        str += num.substring(point, point + 3);
        point += 3;
    }

    return str;

}

function setThumbnail(event,el) {
var file = el.files;

	// file[0].size 는 파일 용량 정보입니다.
	if(file[0].size > 1024 * 1024 * 3){
		alert('3MB 이하 파일만 업로드 가능합니다.');
		location.reload()
	}
    var reader = new FileReader();
    reader.onload = function (event) {
        $(".thumb").remove();
        var img = document.createElement("img");
        img.className = "thumb";
        img.setAttribute("src", event.target.result);
        document.querySelector("div#image_container").appendChild(img);


    };
    reader.readAsDataURL(event.target.files[0]);
}

function Mdetail(i, event) {
    var conList = document.getElementsByClassName("conList")[i];

    if (conList.style.gridTemplateRows == "1fr 1fr") {
        conList.style.gridTemplateRows = "1fr";
        conList.childNodes[2].src = "../static/image/downbluearrow@3x.png";
    } else {
        conList.style.gridTemplateRows = "1fr 1fr";
        conList.childNodes[2].src = "../static/image/upbluearrow@3x.png";
    }
    event.stopPropagation()

}

//function showLoadingBar(step) {
//    let srcName = "sub_a@3x.png";
//    let srcName2 = "";
//    if (step === 0) {
//        srcName2 = "dot.png";
//    } else if (step === 1) {
//        $("#mask").remove();
//
//        srcName2 = "speech_bubble@3x.png";
//    } else if (step === 2) {
//        $("#mask").remove();
//
//        srcName2 = "speech_bubbleb@3x.png";
//    } else if (step === 3) {
//
//        $("#mask").css("display", "none");
//        return;
//    }
//
//    let sp = ++step;
//    time = 3000;
//    timerID = setTimeout(() => showLoadingBar(sp), time);
//    var maskHeight = $(document).height();
//    var maskWidth = window.document.body.clientWidth;
//    var mask = "<div id='mask' style='position:absolute; z-index:9000; display:none; left:0; top:0;background-color: #ffffff;'>";
//    mask += "<div id='loadingbar' style='position:absolute; top:0; width:100%; display:none; z-index:10000;'>";
//    mask += "<div style='width:271px; margin-top: 40px;'>";
//    mask += "    <img src='../static/image/loadingtext@3x.png' style='width:100%;margin-left:28px;' >";
//    mask += "</div>";
//    mask += "<div class='wrap'> <img class='chatbox' src='../static/image/" + srcName2 + "'  style='width:275px; height: 86px; position: fixed; top:202px;left:20px;z-index: 200000;'></div>";
//    mask += "<div style='width:100%;margin-top: 100px;'>";
//    mask += "    <img src='../static/image/characterb@3x.png' style='width:115%;'transform: translateX(30px);>    ";
//    mask += "</div>";
//    mask += "</div>";
//    mask += "</div>";
//
//    $('body').append(mask);
//
//    $('#mask').css({
//        'width': maskWidth
//        , 'height': maskHeight
//    });
//    $('#lodingbar').css({
//        'width': maskWidth
//    });
//    $('#mask').show();
//    $('#loadingbar').show();
//}

function new_move1() {
    var oParams = getUrlParams();
    var encodeGoods = decodeURI(oParams.goods2);
    var encodeClass = decodeURI(oParams.index);
    $(document).ready(function () {

        $.ajax({

            url: server_address + "kiprisapi3",

            type: "get",

            accept: "application/json",


            data: {
                "상표명": encodeGoods,
                "류": encodeClass
            },


            dataType: "JSON",
            crossDomain: true,
            beforeSend: function () {
            showLoadingBar();
                }
            , complete: function () {
            hideLoadingBar();
            }
            ,success: function (data1) {

                if (data1.status == 200) {
                var don = 106000
                window.sessionStorage.setItem("ajaxData", JSON.stringify(data1['result']));
                    for (let i = 0; i < data1['result'].length; i++) {
//                        if (i>0){
//                        don = 62000;
//                        }
                        var hwak = "확률 높음";

                        if (data1["result"][i]["percentage"].toFixed(0) < 50) {
                            hwak = "상담 필요";
                        } else {
                            rlwnstjs = rlwnstjs + 300;
                        }
                        selectindex[i] = 0;
                        if (data1['result'].length == 1) {
                            $(".container").css("text-align", "center");
                        }
                        if (rlwnstjs < 0) {
//                            $('.headLine')[0].innerHTML = '변리사 컨설팅을 통해 <br>진행이 가능해요!<img src="../static/image/glitter@3x.png" style="width: 20px;height: 20px;transform: translateY(-20px);">';
                       $('.headLine')[0].innerHTML = '변리사 컨설팅을 통해 <br>진행이 가능해요!';
                        $('#comment221')[0].innerHTML = '컨설팅 후에도 100프로 환불이 가능해요.'
                        }
                        for(let ik =0; ik < sessionStorage.length; ik++) {
                        var checkStorage = sessionStorage.key(ik)
                        storageIndex =  checkStorage.includes('result')
                        if (storageIndex == "true") {
                        sessionStorage.removeItem(ik);
                        }
                        }

                        window.sessionStorage.setItem("result "+i + "", JSON.stringify(data1['result'][i]));

                        let boxtext = '<div class="conList"  style="cursor:pointer;width: 70%; text-align: center; margin-right: 10px; margin-left:10px;margin-top: 0px;margin-bottom: 20px;" onclick="printpay_p(' + i + ')">';
                        boxtext += '<div class="select_Plus" style="width: 100%; text-align: right;font-size: 15px; color: #4a64f5">   </div>';
                        boxtext += '<div class="conList2" style="display: inline-block;width: 100%;height : 305px">';
                        boxtext += '<svg xmlns="http://www.w3.org/2000/svg" height="200" width="200" viewBox="0 0 200 200"';
                        boxtext += '     data-value="' + data1["result"][i]["percentage"].toFixed(0) + '">';
                        boxtext += '    <path class="bg" stroke="#d6dbff" d="M41 149.5a 80 80 0 1 1 117.93 0" fill="none"/>';
                        boxtext += '    <path class="meter" stroke="#4a64f5" d="M41 149.5a 80 80 0 1 1 117.93 0" fill="none"';
                        boxtext += '          stroke-dasharray="370" stroke-dashoffset="350"/>';
                        boxtext += '    <path class="ge" stroke-dasharray="1,10" d="M52 142a 65 66 0 1 1 97 0"  stroke="#e4e4e4" fill="none" stroke-width="1px"/>';
                        boxtext += '</svg>';
                        boxtext += '<div class="pef" style="transform: translateY(-145px);height: 0px;">  ';
                        boxtext += ' <div style="font-size: 32px;font-weight: bold;"> ' + data1["result"][i]["percentage"].toFixed(0) + '%</div>';
                        boxtext += ' <div style="font-size: 12px;color: #898989;">등록가능성</div> </div> ';
                        boxtext += '     <div style="transform: translateY(-60px);font-size: 12px; color: #b7b7b7;"><span style="transform: translateY(5px);">0 &nbsp &nbsp&nbsp </span> <div class="balloon"style="display: inline;transform: translateY(5px);" >' + hwak + '</div> <span style="transform: translateY(5px);">&nbsp100</span></div>';
                        boxtext += '<div class="" style="transform: translateY(-45px); font-family: MD;">  ';
                        boxtext += ' <div style="margin-left:-45%; display: inline-block; width: 49%;text-align: left;"> <div style="display: inline-block;"><img src="../static/image/tag_icon@3x.png" style="margin-left: 19px;margin-right:11px;width: 12px;float: left;transform: translateY(-10px);"></div><div style="display: inline-block;"> <div class="fontas" style="font-size: 15px; ">' + data1['result'][i]['lastgoods'] + '</div> </div></div>';
//                        boxtext += ' <div style="display: inline-block;width: 47%;text-align: left;margin-left: 1%;"> <div style="display: inline-block;"><img src="../static/image/price_icon@3x.png" style="width: 19px;float: left;transform: translateY(-10px);margin-left: 15px;margin-right:11px;"></div><div style="display: inline-block;"><div style="color: #898989;font-size:12px;">가격</div> <div class="fontas" style="font-size: 15px;">'+ don +"원"+'</div> </div></div> ';
                        boxtext += ' <div class="in4" style="transform:translateY(10px);margin-left:19px;text-align: left;font-size:12px;">  <span style="color: #898989;width: 99%;" id="nonew">' + data1["result"][i]["goods"] + '</span><div style="margin-left :calc(50% - 42px);"> <span style="margin-top : 20px; color : #4a64f5;position : absolute; left :  50% ;margin-left : -35px;">선택하기  <span style="font-size: 17px;font-weight: bold;margin-right: 20px;">+</span>  </span></div></div>';
                        boxtext += '</div>';

                        $(".container").append(boxtext)

                        percent_move();
                }









//                $(document).ready(function () {
//        $.ajax({
//            url: 'https://nametec.kr/gatdata',
//            type: "post",
//            data: JSON.stringify({
//                "brandName": sessionStorage.getItem('brandname'),
//                "selectClass" : sessionStorage.getItem('btn_value'),
//                "searchGoods": sessionStorage.getItem("goodsSearchWord"),
//                "email" : localStorage.getItem("customeremail"),
//                "else" : sessionStorage.getItem('ajaxData'),
//            }) ,
//            contentType:"application/json; charset=utf-8",
//            dataType: "JSON",
//            crossDomain: true,
//            success: function (data1) {
//                if (data1.status == 200) {
//
//
//                }
//
//                if (data1.status == 401) {
//
//                }
//            },
//            error: function (request, status, error) {
//// fail handle
//
//            }
//
//
//        });
//
//
//    });



































                }

                if (data1.status == 401) {
                    var asdf = document.getElementById("asdf");
                    asdf.innerHTML = JSON.stringify(data1);
                }
                if (data1.status == 400) {
                alert('에러');
                    history.back();
                }
// 	var asdf = document.getElementById("asdf");
// 	asdf.innerHTML = JSON.stringify(data1['possibility']['word'][i]);
// }

            },
            error: function (request, status, error) {

// fail handle

            }


        });


    });
}
function new_move() {
    var oParams = getUrlParams();
    customeremail2 = localStorage.getItem("customeremail")
    customername2 = localStorage.getItem("customername")
    encodeGoods = sessionStorage.getItem("brandname")
    tokenName = sessionStorage.getItem("token")
    encodeClass = sessionStorage.getItem("selectclasses")
    $(document).ready(function () {

        $.ajax({

            url: server_address + "kiprisapi3",

            type: "get",

            accept: "application/json",


            data: {
                "상표명": encodeGoods,
                "류": encodeClass,
                "customername" :customername2,
                "customeremail" : customeremail2,
                "token" : tokenName
            },


            dataType: "JSON",
            crossDomain: true,
            beforeSend: function () {
            showLoadingBar();
                }
            , complete: function () {
            hideLoadingBar();
            }
            ,success: function (data1) {

                if (data1.status == 200) {
                var don = 106000
                window.sessionStorage.setItem("ajaxData", JSON.stringify(data1['result']));
                    for (let i = 0; i < data1['result'].length; i++) {
                    arraydata = data1['result'][i]['lastgoods'].split("+")
//                        if (i>0){
//                        don = 62000;
//                        }
                        var hwak = "확률 높음";

                        if (data1["result"][i]["percentage"].toFixed(0) < 70) {//확률에 따른 위 문구 변경 코드
                            hwak = "상담 필요";
                        } else {
                            rlwnstjs = rlwnstjs + 300;
                        }
                        selectindex[i] = 0;
                        if (data1['result'].length == 1) {
                            $(".container").css("text-align", "center");
                        }
                        if (rlwnstjs < 0) {
//                            $('.headLine')[0].innerHTML = '변리사 컨설팅을 통해 <br>진행이 가능해요!<img id="damimg" src="../static/image/glitter@3x.png" style="width: 20px;height: 20px;transform: translateY(-20px);">';
                        $('.headLine')[0].innerHTML = '변리사 컨설팅을 통해 <br>진행이 가능해요!';
                        $('#comment221')[0].innerHTML = '컨설팅 후에도 100프로 환불이 가능해요.'
                        }
                        for(let ik =0; ik < sessionStorage.length; ik++) {
                        var checkStorage = sessionStorage.key(ik)
                        storageIndex =  checkStorage.includes('result')
                        if (storageIndex == "true") {
                        sessionStorage.removeItem(ik);
                        }
                        }

                        window.sessionStorage.setItem("result "+i + "", JSON.stringify(data1['result'][i]));

                        let boxtext = '<div class="conList"  style="cursor:pointer;width: 70%; text-align: center; margin-right: 10px; margin-left:10px;margin-top: 0px;margin-bottom: 20px;" onclick="printpay_p(' + i + ')">';
                        boxtext += '<div class="select_Plus" style="width: 100%; text-align: right;font-size: 15px; color: #4a64f5">   </div>';
                        boxtext += '<div class="conList2" style="display: inline-block;width: 100%; height : 305px">';
                        boxtext += '<svg xmlns="http://www.w3.org/2000/svg" height="200" width="200" viewBox="0 0 200 200"';
                        boxtext += '     data-value="' + data1["result"][i]["percentage"].toFixed(0) + '">';
                        boxtext += '    <path class="bg" stroke="#d6dbff" d="M41 149.5a 80 80 0 1 1 117.93 0" fill="none"/>';
                        boxtext += '    <path class="meter" stroke="#4a64f5" d="M41 149.5a 80 80 0 1 1 117.93 0" fill="none"';
                        boxtext += '          stroke-dasharray="370" stroke-dashoffset="350"/>';
                        boxtext += '    <path class="ge" stroke-dasharray="1,10" d="M52 142a 65 66 0 1 1 97 0"  stroke="#e4e4e4" fill="none" stroke-width="1px"/>';
                        boxtext += '</svg>';
                        boxtext += '<div class="pef" style="transform: translateY(-145px);height: 0px;">  ';
                        boxtext += ' <div style="font-size: 32px;font-weight: bold;"> ' + data1["result"][i]["percentage"].toFixed(0) + '%</div>';
                        boxtext += ' <div style="font-size: 12px;color: #898989;">등록가능성</div> </div> ';
                        boxtext += '     <div style="transform: translateY(-60px);font-size: 12px; color: #b7b7b7;"><span style="transform: translateY(5px);">0 &nbsp &nbsp&nbsp </span> <div class="balloon"style="display: inline;transform: translateY(5px);" >' + hwak + '</div> <span style="transform: translateY(5px);">&nbsp100</span></div>';
                        boxtext += '<div class="" style="transform: translateY(-45px); font-family: MD;">  ';
                        boxtext += ' <div style=" display: inline-block; width: 49%;float: left;"> <div style="display: inline-block;"><img src="../static/image/tag_icon@3x.png" style="margin-left: 19px;margin-right:11px;width: 12px;float: left;"></div><div style="display: inline-block;"><div class="Bold" style="font-size: 15px; ">' + arraydata[0] + '</a></div> </div></div>';
//                        boxtext += ' <div style="display: inline-block;width: 47%;text-align: left;margin-left: 1%;"> <div style="display: inline-block;"><img src="../static/image/price_icon@3x.png" style="width: 19px;float: left;transform: translateY(-10px);margin-left: 15px;margin-right:11px;"></div><div style="display: inline-block;"><div style="color: #898989;font-size:12px;">가격</div> <div class="fontas" style="font-size: 15px;">'+ don +"원"+'</div> </div></div> ';
                        boxtext += ' <div class="in4" style="transform:translateY(10px);margin-left:19px;text-align: left;font-size:12px;">  <span style="color: #898989;width: 99%;line-height:1.4;" id="nonew"> ' + data1["result"][i]["goods"] + '</span><div style="margin-left : calc(50% - 42px);"> <span style="margin-top : 20px; color : #4a64f5;position : absolute; left :  50%; margin-left : -35px;">선택하기  <span style="font-size: 17px;font-weight: bold;margin-right: 20px;">+</span>  </span></div></div>';
                        boxtext += '</div>';

                        $(".container").append(boxtext)

                        percent_move();
                }


                }

                if (data1.status == 401) {
                    var asdf = document.getElementById("asdf");
                    asdf.innerHTML = JSON.stringify(data1);
                }
                if (data1.status == 400) {
                alert('에러');
                    history.back();
                }

            },
            error: function (request, status, error) {


            }


        });


    });
}


function CheckEmail(str) {

    var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    if (!reg_email.test(str)) {

        return false;
//
    } else {

        return true;

    }

}
function printpay_p1(i) {
 printpay_p(i);
$(".res").css("bottom", "59px");
if(document.getElementById("res").innerHTML.replaceAll(" ","").replaceAll("\n","") == "0원"){
deletemask();
}
}

function printpay_p(i) {
//    damimg = document.getElementById("damimg");
    var meta1 = JSON.parse(window.sessionStorage.getItem('result '+i + ""));
    let conList = document.getElementsByClassName('conList')[i];
    if (selectindex[i] == 0) {
        conList.style.border = "1px solid rgb(74, 100, 245)";
//        damimg.style.display = "";
        mon2 = "44,000원";
        var datasplit = meta1['lastgoods'].split("+");
        let boxtext = '<div class="mcr" '+  ' id = mcr' + i +' style="">';
        boxtext += '    <div class="mcr_content">';
        boxtext += '    <div style="margin-bottom: 10px;">';
        boxtext += '    <div class="l2" style="opacity: 1;"><span class="spp" style="color: #515151;"> ' + datasplit[0] + ' </span></div>';
        boxtext += '    <img  src="../static/image/x_icon_gray@3x.png" ';
//        boxtext += '    onclick="delete_res(' + meta1['code'] + ',' + i + ')"  style="transform:translateY(5px);width: 11px; height: 11px;display:inline;float:right;" ><br></div>';
        boxtext += '    onclick="printpay_p1('+i+')"  style="cursor :pointer;transform:translateY(5px);width: 11px; height: 11px;display:inline;float:right;" ><br></div>';
        boxtext += '    <div class="l2"><span> 특허청 관납료</span></div>';
        boxtext += '       <div style="color: #515151;display:inline;float:right;font-size: 14px; "> 62,000원</div>';
        boxtext += '    <br>';
        boxtext += '             <div class="l2"><span>네임텍 수수료</span></div>';
        boxtext += '             <div style="color: #515151;display:inline;float:right;font-size: 14px;"><span';
        boxtext += '                 class="sp">' + mon2 + '</span></div>';
        boxtext += '                <br><br>';
        boxtext += '     </div>';
        boxtext += '    </div>';

        $(".res").append(boxtext)

        selectindex[i] = 1;
        $('#next_button6').remove();
        var btn6 = '<button type="button" id="next_button6" onClick="success3_3()" style="">선택완료</button>';
        $('#1111').append(btn6);
    } else {
        conList.style.border = "1px solid rgba(0, 0, 0, 0.14)";
//        damimg.style.display = "none";
        delete_sel(meta1['code'], i);
        var ddd = $(".mcr").length;
        var ll = 59 - 102 * ddd + "px";
        $(".res").css("bottom", ll);
    }

        var cnt = $(".mcr").length ;
        var remon = comma(62000 * cnt + 44000 * cnt) + "원";
        document.getElementById("res").innerText = remon;
        sessionStorage.setItem('price',remon)
        var ll = 59 - 102 * cnt + "px";
        $(".res").css("bottom", ll);
}

function delete_sel(ru, i) {

    var mcri = document.getElementById("mcr"+i);
    mcri.remove();
    selectindex[i] = 0;
    ru = " " + ru;
    var mp = document.getElementsByClassName("spp");
    for (let m = 0; m < mp.length; m++) {

        document.getElementsByClassName("conList")[i].style.border = "1px solid rgba(0, 0, 0, 0.14)";

        var cntt = $(".mcr").length;

        mon2 = "44,000원";
        var sspp = document.getElementsByClassName("sp");

        for (j = 0; j < sspp.length; j++) {
            if (j > 0) {
                mon2 = "44,000원";
            }
            sspp[j].innerHTML = mon2
        }

        var remona = comma(106000 * cntt ) + "원";
        if (cntt == 0) {
            remona = "0원";
            $('#next_button6').remove();
            var btn6 = '<button type="button" id="next_button6" onClick="success3_3()" style="background-color:#efefef; color: #b7b7b7">선택완료</button>';
            $('#1111').append(btn6);
        }
        document.getElementById("res").innerText = remona;
        sessionStorage.setItem('price', remona);
    }


}

function delete_res(ru, k) {

    document.getElementsByClassName("conList")[k].style.border = "1px solid rgba(0, 0, 0, 0.14)";
    if (10 > ru) {
        ru = " 0" + ru;
    } else {
        ru = " " + ru;
    }
    selectindex[k] = 0;
    var rja = document.createElement("div");
    rja.innerHTML = ru;
    var sp = document.getElementsByClassName("spp");
    for (let m = 0; m < sp.length; m++) {
        if (sp[m].innerHTML.split("류")[0].toString() == rja.innerHTML) {

            $(".mcr")[m].remove();
        }
    }
    var cnt = $(".mcr").length;
    mon2 = "44,000원";
    var spp = document.getElementsByClassName("sp");
    for (i = 0; i < spp.length; i++) {
        if (i > 0) {
            mon2 = "44,000원";
        }
        spp[i].innerHTML = mon2
    }

    var remon = comma(62000 * cnt + 44000) + "원";
    if (cnt == 0) {
        remon = "0원";
        $('#mask1').remove();
        $('#next_button6').remove();
        var btn6 = '<button type="button" id="next_button6" onClick="success3_3()" style="">선택완료</button>';
        $('#1111').append(btn6);
    }
    document.getElementById("res").innerText = remon;
    sessionStorage.setItem('price', remon);
}

$(document).ready(function () {
    let last_known_scroll_position = 0;
    let ticking = false;

    function doSomething(scroll_pos) {
        if (scroll_pos > rlwnstjs) {
            $('.headLine')[0].innerHTML = '변리사 컨설팅을 통해 <br>진행이 가능해요!';
        $('#comment221')[0].innerHTML = '컨설팅 후에도 100프로 환불이 가능해요.'
        } else {
            $('.headLine')[0].innerHTML = '와우! <br>바로 출원이 가능해요!';
        }
    }

    $('.container').scroll(function () {
        last_known_scroll_position = $('.container').scrollLeft();

        if (!ticking) {
            window.requestAnimationFrame(function () {
                doSomething(last_known_scroll_position);
                ticking = false;
            });

            ticking = true;
        }
    });
});

// $(document).ready(function(){
//     //스크롤 발생 이벤트 처리
//     $('#container').scroll(function(){
//         var scrollT = $(this).scrollTop(); //스크롤바의 상단위치
//         var scrollH = $(this).height(); //스크롤바를 갖는 div의 높이
//         var contentH = $('#divContent').height(); //문서 전체 내용을 갖는 div의 높이
//         if(scrollT + scrollH +1 >= contentH) { // 스크롤바가 아래 쪽에 위치할 때
//             $('#divContent').append(imgs);
//         }
//     });
// });


function moremoney22(i) {
    let janLastDate = new Date();
    mon1 = 160000;
    mon2 = 100000;

    var check1 = document.getElementsByClassName("chchch")[i];
    var in22 = document.getElementsByClassName("in2")[i];
    var months = in22.getElementsByClassName("sucin2s")[1];
    var month4 = addMonth(janLastDate, 4);
    var month12 = addMonth(janLastDate, 12);
    let ajaxDatak = JSON.parse(sessionStorage.getItem('ajaxData'));
    if (check1.checked) {
    ajaxDatak[i]['moremoney'] = 1;
    sessionStorage.setItem("ajaxData",JSON.stringify(ajaxDatak));
        var conpay1in1 = document.getElementsByClassName("1st")[i];
        var conpay1in2 = document.getElementsByClassName("2nd")[i];

        var newDiv1 = document.createElement("div");
        var newDiv2 = document.createElement("div");
        newDiv1.innerHTML += ' <div class="trs' + i + '"><br></div> <div id="divplus1' + i + '" style="color: #4a64f5;float:right;">' + "+" + mon1.toLocaleString() + '원 </div>';
        newDiv2.innerHTML += '<div class="trs' + i + '"><br></div><div id="divplus2' + i + '" style="color: #4a64f5;float:right;">' + "+" + mon2.toLocaleString() + '원 </div>';
        $(conpay1in1).after(newDiv1);
        $(conpay1in2).after(newDiv2);
        months.innerHTML = month4;

        var monmon = document.getElementById("res").innerText.split(",")[0] + "000";
        money123 = (parseInt(monmon) + 260000).toLocaleString() + "원";
        document.getElementById("res").innerText = (parseInt(monmon) + 260000).toLocaleString() + "원";
        sessionStorage.setItem('price', money123);
    } else {
    ajaxDatak[i]['moremoney'] = 0;
    sessionStorage.setItem("ajaxData",JSON.stringify(ajaxDatak));
        $('.trs' + i + "").remove();
        $('#divplus1' + i + "").remove();
        $('#divplus2' + i + "").remove();

        var monmon = document.getElementById("res").innerText.split(",")[0] + "000";
        money1234 = (parseInt(monmon) - 260000).toLocaleString() + "원";
        document.getElementById("res").innerText = (parseInt(monmon) - 260000).toLocaleString() + "원";
        sessionStorage.setItem('price', money1234);
        months.innerHTML = month12;
    }

}

function chchangle(str) {
    var pattern = /([^가-힣{2,4}\x20])/i;
    if (pattern.test(str)) {
        return true;
    } else {
        return false;
    }

}

function chceng(str) {
    var pattern = /([^\x20a-zA-Z])/i;
    if (pattern.test(str)) {
        return true;
    } else {
        return false;
    }

}

function test6num(str) {
    if (str.length == 6) {
        return true;
    } else {
        return false;
    }

}

function test7num(str) {

    if (str.length == 7) {
        return true;
    } else {
        return false;
    }

}

function test11num(str) {

    if (str.length == 11) {
        return false;
    } else {
        return true;
    }

}

function test13num(str) {

    if (str.length == 13) {
        return false;
    } else {
        return true;
    }

}

function test10num(str) {

    if (str.length == 10) {
        return false;
    } else {
        return true;
    }

}

function backinform1_1() {
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");

    document.getElementsByClassName("circle1")[1].style.backgroundColor = "#efefef";
    document.getElementsByClassName("bar1")[0].style.backgroundColor = "#efefef";

    $("#next_button6").removeAttr("onclick");
    $(".menu2").removeAttr("onclick");

    $(".menu2").attr("onclick", "history.back()");
    $("#next_button6").attr("onclick", "inform1_2()");


    page1.style.display = "block";
    page2.style.display = "none";

    $('#next_button6').attr("disabled", false);

}

function backinform2_1() {
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2-2");

    document.getElementsByClassName("circle1")[1].style.backgroundColor = "#efefef";
    document.getElementsByClassName("bar1")[0].style.backgroundColor = "#efefef";

    $("#next_button6").removeAttr("onclick");
    $(".menu2").removeAttr("onclick");

    $(".menu2").attr("onclick", "history.back()");
    $("#next_button6").attr("onclick", "inform1_2()");


    page1.style.display = "block";
    page2.style.display = "none";

    $('#next_button6').attr("disabled", false);

}
function backinform4_1() {
    var page1 = document.getElementById("page1");
    var page3 = document.getElementById("page3");
    var page4 = document.getElementById("page4");

    document.getElementsByClassName("circle1")[3].style.backgroundColor = "#efefef";
    document.getElementsByClassName("bar1")[2].style.backgroundColor = "#efefef";

    $("#next_button6").removeAttr("onclick");
    $(".menu2").removeAttr("onclick");

    $(".menu2").attr("onclick", "backinform1_2()");
    $("#next_button6").attr("onclick", "imform4()");


    page3.style.display = "block";
    page4.style.display = "none";

    $('#next_button6').attr("disabled", false);

}
function backinform5_1() {
    var page1 = document.getElementById("page1");
    var page3 = document.getElementById("page3");
    var page4 = document.getElementById("page4");

    document.getElementsByClassName("circle1")[4].style.backgroundColor = "#efefef";
    document.getElementsByClassName("bar1")[3].style.backgroundColor = "#efefef";

    $("#next_button6").removeAttr("onclick");
    $(".menu2").removeAttr("onclick");

    $(".menu2").attr("onclick", "backinform4_1()");
    $("#next_button6").attr("onclick", "updatepayment12()");


    page4.style.display = "block";
    page5.style.display = "none";

    $('#next_button6').attr("disabled", false);

}
function backinform5_2() {
    var page1 = document.getElementById("page1");
    var page3 = document.getElementById("page3");
    var page4 = document.getElementById("page4");

    document.getElementsByClassName("circle1")[4].style.backgroundColor = "#efefef";
    document.getElementsByClassName("bar1")[3].style.backgroundColor = "#efefef";

    $("#next_button6").removeAttr("onclick");
    $(".menu2").removeAttr("onclick");

    $(".menu2").attr("onclick", "backinform4_2()");
    $("#next_button6").attr("onclick", "updatepayment22()");


    page4.style.display = "block";
    page5.style.display = "none";

    $('#next_button6').attr("disabled", false);

}
function backinform4_2() {
    var page2 = document.getElementById("page2-2");
    var page3 = document.getElementById("page2-3");
    var page4 = document.getElementById("page4");
    document.getElementsByClassName("circle1")[3].style.backgroundColor = "#efefef";
    document.getElementsByClassName("bar1")[2].style.backgroundColor = "#efefef";

    $("#next_button6").removeAttr("onclick");
    $(".menu2").removeAttr("onclick");

    $(".menu2").attr("onclick", "backinform2_2()");
    $("#next_button6").attr("onclick", "imform5()");


    page3.style.display = "block";
    page4.style.display = "none";

    $('#next_button6').attr("disabled", false);

}
function backinform1_2() {
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");

    document.getElementsByClassName("circle1")[2].style.backgroundColor = "#efefef";
    document.getElementsByClassName("bar1")[1].style.backgroundColor = "#efefef";

    $("#next_button6").removeAttr("onclick");
    $(".menu2").removeAttr("onclick");

    $(".menu2").attr("onclick", "backinform1_1()");
    $("#next_button6").attr("onclick", "inform1_3()");


    page2.style.display = "block";
    page3.style.display = "none";

    $('#next_button6').attr("disabled", false);

}
function backinform2_2() {
    var page2 = document.getElementById("page2-2");
    var page3 = document.getElementById("page2-3");

    document.getElementsByClassName("circle1")[2].style.backgroundColor = "#efefef";
    document.getElementsByClassName("bar1")[1].style.backgroundColor = "#efefef";

    $("#next_button6").removeAttr("onclick");
    $(".menu2").removeAttr("onclick");

    $(".menu2").attr("onclick", "backinform2_1()");
    $("#next_button6").attr("onclick", "inform2_31()");


    page2.style.display = "block";
    page3.style.display = "none";

    $('#next_button6').attr("disabled", false);

}

function inform1_2() {


if(nowtab == 'tab-1'){
var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    document.getElementsByClassName("circle1")[1].style.backgroundColor = "#4a64f5";
    document.getElementsByClassName("bar1")[0].style.backgroundColor = "#4a64f5";

    $("#next_button6").removeAttr("onclick");
    $(".menu2").removeAttr("onclick");

    $(".menu2").attr("onclick", "backinform1_1()");
    $("#next_button6").attr("onclick", "inform1_3()");

    page1.style.display = "none";
    page2.style.display = "block";



    $('#next_button6').attr("disabled", false);
    krapname = document.getElementById("text1");
    sessionStorage.setItem("krname",krapname.value)
    enapname = document.getElementById("text2");
    sessionStorage.setItem("enapname",enapname.value)
    resident = document.getElementById("text3-1");
    resident2 = document.getElementById("text3-2");
    sessionStorage.setItem("resident",resident.value + resident2.value)

}
else{
krapname = document.getElementById("text11");
    sessionStorage.setItem("krname",krapname.value)
   enapname = document.getElementById("text22");
    sessionStorage.setItem("enapname",enapname.value)
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2-2");
    document.getElementsByClassName("circle1")[1].style.backgroundColor = "#4a64f5";
    document.getElementsByClassName("bar1")[0].style.backgroundColor = "#4a64f5";

    $("#next_button6").removeAttr("onclick");
    $(".menu2").removeAttr("onclick");

    $(".menu2").attr("onclick", "backinform2_1()");
    $("#next_button6").attr("onclick", "inform2_31()");

    page1.style.display = "none";
    page2.style.display = "block";


    $('#next_button6').attr("disabled", true);
}
}
function inform2_2() {

    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    document.getElementsByClassName("circle1")[1].style.backgroundColor = "#4a64f5";
    document.getElementsByClassName("bar1")[0].style.backgroundColor = "#4a64f5";

    $("#next_button6").removeAttr("onclick");
    $(".menu2").removeAttr("onclick");

    $(".menu2").attr("onclick", "backinform2_1()");
    $("#next_button6").attr("onclick", "inform2_3()");

    page1.style.display = "none";
    page2.style.display = "block";

$('#next_button6').attr("disabled", true);

}
function imform4() {
apaddr = document.getElementById("textpostdet");
    text6 = document.getElementById("text6");
    sessionStorage.setItem("addr",apaddr.value+ "   " + text6.value);
document.getElementsByClassName("circle1")[3].style.backgroundColor = "#4a64f5";
    document.getElementsByClassName("bar1")[2].style.backgroundColor = "#4a64f5";
    var page3 = document.getElementById("page3");
    var page2_3 = document.getElementById("page2-3");
    var page4 = document.getElementById("page4");
    document.getElementsByClassName("circle1")[1].style.backgroundColor = "#4a64f5";
    document.getElementsByClassName("bar1")[0].style.backgroundColor = "#4a64f5";

    $("#next_button6").removeAttr("onclick");
    $(".menu2").removeAttr("onclick");

    $(".menu2").attr("onclick", "backinform4_1()");
    $("#next_button6").attr("onclick", "updatepayment12()");

    page3.style.display = "none";
    page2_3.style.display = "none";
    page4.style.display = "block";

$('#next_button6').attr("disabled", true);

}
function updatepayment12() {
document.getElementsByClassName("circle1")[4].style.backgroundColor = "#4a64f5";
    document.getElementsByClassName("bar1")[3].style.backgroundColor = "#4a64f5";
    var page4 = document.getElementById("page4");
    var page5 = document.getElementById("page5");
    document.getElementsByClassName("circle1")[1].style.backgroundColor = "#4a64f5";
    document.getElementsByClassName("bar1")[0].style.backgroundColor = "#4a64f5";

    $("#next_button6").removeAttr("onclick");
    $(".menu2").removeAttr("onclick");

    $(".menu2").attr("onclick", "backinform5_1()");
    $('#next_button6').attr("disabled", true);
    $("#next_button6").attr("onclick", "updatepayment1()");

    page4.style.display = "none";
    page5.style.display = "block";

}
function updatepayment22() {
document.getElementsByClassName("circle1")[4].style.backgroundColor = "#4a64f5";
    document.getElementsByClassName("bar1")[3].style.backgroundColor = "#4a64f5";
    var page4 = document.getElementById("page4");
    var page5 = document.getElementById("page5");
    document.getElementsByClassName("circle1")[1].style.backgroundColor = "#4a64f5";
    document.getElementsByClassName("bar1")[0].style.backgroundColor = "#4a64f5";

    $("#next_button6").removeAttr("onclick");
    $(".menu2").removeAttr("onclick");

    $(".menu2").attr("onclick", "backinform5_2()");
    $('#next_button6').attr("disabled", true);
    $("#next_button6").attr("onclick", "updatepayment2()");

    page4.style.display = "none";
    page5.style.display = "block";

}
function imform5() {
applicant = document.getElementById("text7");
    sessionStorage.setItem("applicant",applicant.value);
    resident_number1 = document.getElementById("text8-1");
    resident_number2 = document.getElementById("text8-2");
    sessionStorage.setItem("resident_number",resident_number1.value+resident_number2.value);
    application_email = document.getElementById("text9");
    sessionStorage.setItem("application_email",application_email.value);
    appphonenumber = document.getElementById("text10");
    sessionStorage.setItem("appphonenumber",appphonenumber.value);
    sessionStorage.setItem("type",'1');
document.getElementsByClassName("circle1")[3].style.backgroundColor = "#4a64f5";
    document.getElementsByClassName("bar1")[2].style.backgroundColor = "#4a64f5";
    var page3 = document.getElementById("page3");
    var page2_3 = document.getElementById("page2-3");
    var page4 = document.getElementById("page4");
    document.getElementsByClassName("circle1")[1].style.backgroundColor = "#4a64f5";
    document.getElementsByClassName("bar1")[0].style.backgroundColor = "#4a64f5";

    $("#next_button6").removeAttr("onclick");
    $(".menu2").removeAttr("onclick");

    $(".menu2").attr("onclick", "backinform4_2()");
    $("#next_button6").attr("onclick", "updatepayment22()");

    page3.style.display = "none";
    page2_3.style.display = "none";
    page4.style.display = "block";

$('#next_button6').attr("disabled", true);

}
function inform1_3() {

    var page3 = document.getElementById("page3");
    var page2 = document.getElementById("page2");
    document.getElementsByClassName("circle1")[2].style.backgroundColor = "#4a64f5";
    document.getElementsByClassName("bar1")[1].style.backgroundColor = "#4a64f5";

    $("#next_button6").removeAttr("onclick");
    $(".menu2").removeAttr("onclick");

    $(".menu2").attr("onclick", "backinform1_2()");
    $("#next_button6").attr("onclick", "imform4()");

    page2.style.display = "none";
    page3.style.display = "block";


    $('#next_button6').attr("disabled", true);
    appphonenumber = document.getElementById("text5");
    sessionStorage.setItem("appphonenumber",appphonenumber.value)
    apemail = document.getElementById("text4");
    sessionStorage.setItem("apemail",apemail.value)

}

function inform2_3() {

    var page3 = document.getElementById("page3");
    var page2 = document.getElementById("page2");
    document.getElementsByClassName("circle1")[2].style.backgroundColor = "#4a64f5";
    document.getElementsByClassName("bar1")[1].style.backgroundColor = "#4a64f5";

    $("#next_button6").removeAttr("onclick");
    $(".menu2").removeAttr("onclick");

    $(".menu2").attr("onclick", "backinform2_2()");
    $("#next_button6").attr("onclick", "imform4()");

    page2.style.display = "none";
    page3.style.display = "block";


    $('#next_button6').attr("disabled", true);

}


function inform2_31() {
    corporation_number = document.getElementById("text44");
    sessionStorage.setItem("corporation_number", corporation_number.value);
    crn = document.getElementById("text55");
    sessionStorage.setItem("crn", crn.value);
    addr1 = document.getElementById("textpost-23");
    addr2 = document.getElementById("text61");
    sessionStorage.setItem("addr", addr1.value+"  " + addr2.value);
    var page3 = document.getElementById("page2-3");
    var page2 = document.getElementById("page2-2");
    document.getElementsByClassName("circle1")[2].style.backgroundColor = "#4a64f5";
    document.getElementsByClassName("bar1")[1].style.backgroundColor = "#4a64f5";

    $("#next_button6").removeAttr("onclick");
    $(".menu2").removeAttr("onclick");

    $(".menu2").attr("onclick", "backinform2_2()");
    $("#next_button6").attr("onclick", "imform5()");

    page2.style.display = "none";
    page3.style.display = "block";


    $('#next_button6').attr("disabled", true);

}
function checkboxClickk() {
    var boxBox = document.getElementById("boxBox-1");
    var chemark1 = document.getElementById("chmark1");
    var chemark2 = document.getElementById("chmark2");
    if (boxBox.src == "https://m.nametec.kr/static/image/check_box@3x.png") {
        boxBox.src = "../static/image/box@3x.png";
        chemark1.src = "../static/image/check_gray@3x.png";
        chemark2.src = "../static/image/check_gray@3x.png";
$('#next_button6').attr("disabled", true);//비활성화

    } else {
        boxBox.src = "../static/image/check_box@3x.png";
        chemark1.src = "../static/image/check@3x.png";
        chemark2.src = "../static/image/check@3x.png";
        $('#next_button6').removeAttr("disabled");//비활성화
    }
//    judgein3();

}
function checkboxClick() {
    var boxBox = document.getElementById("boxBox");
    var chemark1 = document.getElementById("chmark1-1");
    var chemark2 = document.getElementById("chmark2-1");
    if (boxBox.src == "https://m.nametec.kr/static/image/check_box@3x.png") {
        boxBox.src = "../static/image/box@3x.png";
        chemark1.src = "../static/image/check_gray@3x.png";
        chemark2.src = "../static/image/check_gray@3x.png";

    } else {
        boxBox.src = "../static/image/check_box@3x.png";
        chemark1.src = "../static/image/check@3x.png";
        chemark2.src = "../static/image/check@3x.png";
    }
    judgein33();

}
function checkmarkClick1() {
    var agreeA = document.getElementById("agreeA");
    var checkagree1 = document.getElementById("checkagree1");
    var chemark1 = document.getElementById("chmark1");
    if (chemark1.src == "https://m.nametec.kr/static/image/grc@2x.png") {
        chemark1.src = "../static/image/bluech@2x.png";
        agreeA.style.color = "#4a64f5";
        flag1 = false;
        checkagree1.style.backgroundColor = "#edeffe";
    } else {
        chemark1.src = "https://m.nametec.kr/static/image/grc@2x.png";
        agreeA.style.color = "#898989";
        flag1 = true;
        checkagree1.style.backgroundColor = "#efefef";
    }
    judgein5();
}
function judgein5(){
    var chemark1 = document.getElementById("chmark1");
    var chemark2 = document.getElementById("chmark2");
    if (chemark1.src == "https://m.nametec.kr/static/image/bluech@2x.png" && chemark2.src == "https://m.nametec.kr/static/image/bluech@2x.png") {
    $('#next_button6').attr("disabled", false);
    }
    else{
    $('#next_button6').attr("disabled", true);
    }
}
function checkmarkClick2() {
    var agreeB = document.getElementById("agreeB");
    var checkagree2 = document.getElementById("checkagree2");
    var chemark2 = document.getElementById("chmark2");
    if (chemark2.src == "https://m.nametec.kr/static/image/grc@2x.png") {
        chemark2.src = "../static/image/bluech@2x.png";
        agreeB.style.color = "#4a64f5";
        flag2 = false;
        checkagree2.style.backgroundColor = "#edeffe";
    } else {
        chemark2.src = "../static/image/grc@2x.png";
        agreeB.style.color = "#898989";
        checkagree2.style.backgroundColor = "#efefef";
        flag2 = true;
    }
    judgein5();
}

function checkmarkClick11() {
    var boxBox = document.getElementById("boxBox");
    var chemark1 = document.getElementById("chmark1-1");
    var chemark2 = document.getElementById("chmark2-1");
    if (chemark1.src == "https://m.nametec.kr/static/image/check_gray@3x.png") {
        chemark1.src = "../static/image/check@3x.png";
        flag = false;
    } else {
        boxBox.src = "../static/image/box@3x.png";
        chemark1.src = "../static/image/check_gray@3x.png";
        flag = true;
    }
    judgein33();
}

function checkmarkClick22() {
    var boxBox = document.getElementById("boxBox");
    var chemark1 = document.getElementById("chmark1-1");
    var chemark2 = document.getElementById("chmark2-1");
    if (chemark2.src == "https://m.nametec.kr/static/image/check_gray@3x.png") {
        chemark2.src = "../static/image/check@3x.png";
        flag = false;
    } else {
        boxBox.src = "../static/image/box@3x.png";
        chemark2.src = "../static/image/check_gray@3x.png";
        flag = true;
    }
    judgein33();
}

function putingam() {
    ex_file = document.getElementById("ex_file").files[0].name;
    $('#ingam').innerText = ex_file
    judgein33();
}



function lastpay(i) {
var namep = document.getElementById("namep");
var moremoney = document.getElementById("moremoney");
namep.innerHTML = localStorage.getItem("customername") +"님의 <br> 상표 출원이 신청되었습니다."
var phonenumber12 = document.getElementById("phonenumber");
var cusnumber = localStorage.getItem("customerPhone");
phonenumber12.innerHTML = cusnumber.slice(0,3) + "-" + cusnumber.slice(3,7) + "-" + cusnumber.slice(7,11);
var brandname = document.getElementById("brandname");
brandname.innerHTML = sessionStorage.getItem("brandname");
var real_email = document.getElementById("email");
real_email.innerHTML = localStorage.getItem("real_email");
var price = document.getElementById("price");
price.innerHTML = sessionStorage.getItem("price");
let ajaxData = JSON.parse(sessionStorage.getItem('ajaxData'));
if (ajaxData.length > 1 ){
btn_value.innerHTML =ajaxData[0]['lastgoods'].split("+")[0] +" 외 " + (ajaxData.length -1) +"종" ;
}else{
btn_value.innerHTML =ajaxData[0]['lastgoods'].split("+")[0] ;
}
let janLastDate = new Date();
if (i == 'Y'){

moremoney.innerHTML = '우선출원'
var month5 = addMonth(janLastDate, 4);
}else if(i =="N"){
moremoney.innerHTML = '일반출원'
var month5 = addMonth(janLastDate, 12);
}else{
var month5 = addMonth(janLastDate, 4);
let ajaxData = sessionStorage.getItem('ajaxData');
ajaxDataJson = JSON.parse(ajaxData);
let firstcount = 0;
let general  = 0 ;
for (let i = 0; i < ajaxDataJson.length; i++) {
if(ajaxDataJson[i]['moremoney'] == "1"){
firstcount++;
}else{
general++;

}



}
moremoney.innerHTML = '우선출원 '+firstcount+'건 / '+"일반출원 " +general+"건";
}
resultList   =sessionStorage.getItem('ajaxData1');
resultList1 =  "[" + resultList + "]"
resultList2 = JSON.parse(resultList1)
//var insertryu = document.getElementById("insertryu");
for (let i = 0; i < resultList2.length; i++) {
let item = document.createElement('div');
item.className = 'ru';
item.style.backgroundColor = "#4a64f5";
item.innerHTML = resultList2[i]['code'] + "류";
//insertryu.append(item)
}

    var month2 = addMonth(janLastDate, 0);

    var text1 = document.getElementsByClassName("sucin2s")[0];
    var text2 = document.getElementsByClassName("sucin2s")[1];
    var text3 = document.getElementsByClassName("sucin2s")[2];

    text1.innerHTML = month2;
    text2.innerHTML = month5;

}

function maxLengthCheck(object) {
    if (object.value.length > object.maxLength) {
        object.value = object.value.slice(0, object.maxLength);
    }

}

function isKorJumin(ssn1, ssn2) {
    var n = 2;``
    var sum = 0;
    for (var i = 0; i < ssn1.length; i++) {
        sum += parseInt(ssn1.substr(i, 1)) * n++;
    }
    for (var i = 0; i < ssn2.length - 1; i++) {
        sum += parseInt(ssn2.substr(i, 1)) * n++;
        if (n == 10) {
            n = 2;
        }
    }
    var checkSum = 11 - sum % 11;
    if (checkSum == 11) {
        checkSum = 1;
    }
    if (checkSum == 10) {
        checkSum = 0;
    }
    if (checkSum != parseInt(ssn2.substr(6, 1))) {
        return false;
    }
    return true;
}




function getmypage(customeremaildata) {
   product = "";
    $.ajax({
        type: "POST",
        url: server_address + "getmypage",
        data: JSON.stringify({
                "email": customeremaildata
            }),
        processData: false,
        contentType: "application/json",
        async: false,
        success: function (data) {
            if (data.status == 200) {
                product = data.data;
            } else {


            }
        }
        ,
        err: function (err) {
            alert(err.status);
        }
    });
    return product

}
function getid(id) {
    return document.getElementById(id);
}

function setmypagedata(data) {


    var wholeLog = data[0];
    var customername = getid("customername");
    customername.innerHTML = wholeLog['nickname'];
    var customeremail1 = getid("customeremail");
    customeremail1.innerHTML = wholeLog['email'];

}


function getmypage1(customeremaildata) {
   product = "";
    $.ajax({
        type: "POST",
        url: server_address + "showapplicationstatus",
        data: JSON.stringify({
                "email": customeremaildata
            }),
        processData: false,
        contentType: "application/json",
        async: false,
        success: function (data) {
            if (data.status == 200) {
                product = data.data;
            } else {


            }
        }
        ,
        err: function (err) {
            alert(err.status);
        }
    });
    return product

}

function setmypagedata1(data) {


    var wholeLog = data;
    var log_table = getid("application_show")
    if (data.length == 0){
    log_table.style.display = "none";
    }
    for (let i = 0; i < wholeLog.length; i++) {
        let dataItem = wholeLog[i];
        let div1 = document.createElement("div");
        if (i == wholeLog.length-1){
        div1.style = "margin-left:5%; margin-right:5%; margin-top:22px;";
        }else{
        div1.style = "margin-left:5%; margin-right:5%; margin-top:22px; margin-bottom : 22px;";
        }
        let divstatus1 = document.createElement("div");
        divstatus1.id = "maindiv" +i;
        divstatus1.style = "cursor : pointer;";
        let divstatus = document.createElement("div");
        let div3 = document.createElement("div");
        div3.style = "display:inline-block; margin-left : 110px;";
        let divdate = document.createElement("div");
        divdate.style = "font-size: 12px;color: #b7b7b7;overflow:hidden; text-overflow:ellipsis; white-space:nowrap;width : 140px;";
        let divname = document.createElement("div");
        divname.style = "display:inline-block;";
        let imgdiv = document.createElement("IMG")
        imgdiv.id = "imgdiv" +i;
        imgdiv.style = "float:right; display: inline-block;margin-top:16px;width:10px;";
        imgdiv.setAttribute('src', '../static/image/mypagearrow@3x.png');

        div3.appendChild(divname);
        div3.appendChild(divdate);
        divstatus.innerHTML = dataItem['progress_status'];
        if(dataItem['progress_status'].length>5){
        divstatus.style = "font-size: 16px; color:#4a64f5;text-align : center; display: inline-block;width : 70px; transform: translateY(-5px);position :absolute; ";
        }else{
        divstatus.style = "font-size: 16px; color:#4a64f5;text-align : center; display: inline-block;width : 70px; transform: translateY(-5px);position :absolute;margin-top : 15px; ";
        }
        divdate.innerHTML = dataItem['category'];
        if (dataItem['real_brandname'] == null || dataItem['real_brandname'] == ""){
        divname.innerHTML = dataItem['brandname'];
        }else{
        divname.innerHTML = dataItem['real_brandname'];
        }
let div4 = document.createElement("div");
        div4.style.width = "111%";
        div4.style.height = "1px";
        div4.style.marginLeft = "-5.5%";
        div4.style.backgroundColor = "#e0e0e0";
        div4.style.marginTop = "20px";

let div5 = document.createElement("div");
div5.id = "div5" +i;
        div5.style.backgroundColor = 'rgb(' + 250 + ',' + 250 + ',' + 250 + ')';
        div5.style.height = "50px";
        div5.style.width = "111%";
        div5.style.marginLeft = "-5.5%";
        div5.className = "backGR";
        div5.style.display = "none";
        divstatus1.appendChild(divstatus);
        divstatus1.appendChild(div3);
        divstatus1.appendChild(imgdiv);
        div1.appendChild(divstatus1);
        div5.style.height = '335px';
        let paydiv = document.createElement("div");
        let divpay = document.createElement("div");
        let paya = document.createElement("div");
        let applibtn1 = document.createElement("div");
        applibtn1.style.fontSize = "12px";
        applibtn1.style.position = "absolute";
        applibtn1.style.borderRadius = "5px";
        applibtn1.style.boxShadow = "1px 1px 4px 0 rgba(0,0,0,0.1)";
        applibtn1.style.textAlign = "center";
        applibtn1.style.height = "36px";
        applibtn1.style.width = "130px";
        applibtn1.style.left = "50%";
        applibtn1.style.marginLeft = "30px";
        applibtn1.style.marginTop = "18px";
        applibtn1.style.lineHeight = "3";
        if(dataItem['done']=='1'){
        applibtn1.style.backgroundColor = "#efefef";
        applibtn1.style.color = "#898989";
        applibtn1.innerHTML = "출원인 정보 입력완료";
        }else{
        applibtn1.style.backgroundColor = "#fff";
        applibtn1.style.color = "#4a64f5";
        applibtn1.style.cursor = "pointer";
        applibtn1.innerHTML = "출원인 정보 입력하기";
        applibtn1.onclick = function () {
        location.href="https://m.nametec.kr/imform?merchant_uid=" +dataItem['merchant_uid'];
        }
        }
//        paya.style.marginLeft = "5%";
        paya.innerHTML = dataItem['payment_date_rework'];
        divpay.innerHTML = '결제일';
//        divpay.style.marginLeft = "5%";
        divpay.style.paddingTop = "10px";
//        divpay.style.marginBottom = "13px";
        divpay.style.color = "#898989";
        paya.style.color = "#515151";
        paya.style.paddingBottom = "8px";
        paydiv.appendChild(divpay);
        paydiv.appendChild(paya);
        paydiv.appendChild(applibtn1);
        paydiv.style.borderBottom = "1px solid #e0e0e0";
        paydiv.style.marginLeft = "5%";
        paydiv.style.marginRight = "5%";


        let paydiv2 = document.createElement("div");
        let divpay1 = document.createElement("div");
        let paya1 = document.createElement("div");
        let applibtn = document.createElement("div");
        applibtn.style.fontSize = "12px";
        applibtn.style.position = "absolute";
        applibtn.style.borderRadius = "5px";
        applibtn.style.boxShadow = "1px 1px 4px 0 rgba(0,0,0,0.1)";

        applibtn.style.textAlign = "center";
        applibtn.style.height = "36px";
        applibtn.style.width = "130px";
        applibtn.style.left = "50%";
        applibtn.style.marginLeft = "30px";
        applibtn.style.marginTop = "18px";
        applibtn.style.lineHeight = "3";
//        paya.style.marginLeft = "5%";
        if(dataItem['applicant']=='미기입'){
        paya1.innerHTML = '내용 없음';
        }else{
        paya1.innerHTML = dataItem['applicant'];
        }
        if(dataItem['details_of_application']==null){
        applibtn.style.backgroundColor = "#efefef";
        applibtn.style.color = "#898989";
        applibtn.innerHTML = "출원 내역 상세보기";
        }else{
        applibtn.style.backgroundColor = "#fff";
        applibtn.style.color = "#4a64f5";
        applibtn.innerHTML = "출원 내역 상세보기";
        applibtn.style.cursor = "pointer";
        applibtn.onclick = function () {
        window.open('https://m.nametec.kr/static/data/'+dataItem['details_of_application']);
        }
        }
        divpay1.innerHTML = '출원인 정보';
//        divpay.style.marginLeft = "5%";
        divpay1.style.paddingTop = "10px";
//        divpay.style.marginBottom = "13px";
        divpay1.style.color = "#898989";
        paya1.style.color = "#515151";
        paya1.style.paddingBottom = "8px";
        paydiv2.appendChild(divpay1);
        paydiv2.appendChild(paya1);
        paydiv2.appendChild(applibtn);
        paydiv2.style.borderBottom = "1px solid #e0e0e0";
        paydiv2.style.marginLeft = "5%";
        paydiv2.style.marginRight = "5%";


        let paydiv3 = document.createElement("div");
        let divpay2 = document.createElement("div");
        let paya2 = document.createElement("div");
        let applibtn2 = document.createElement("div");
        applibtn2.style.fontSize = "12px";
        applibtn2.style.position = "absolute";
        applibtn2.style.borderRadius = "5px";
        applibtn2.style.boxShadow = "1px 1px 4px 0 rgba(0,0,0,0.1)";
        applibtn2.style.textAlign = "center";
        applibtn2.style.height = "36px";
        applibtn2.style.width = "130px";
        applibtn2.style.left = "50%";
        applibtn2.style.marginLeft = "30px";
        applibtn2.style.marginTop = "18px";
        applibtn2.style.lineHeight = "3";
//        if(dataItem['done']=='1'){
        applibtn2.style.backgroundColor = "#efefef";
        applibtn2.style.color = "#898989";
        applibtn2.innerHTML = "등록료 결제하기";
//        }else{
//        applibtn2.style.backgroundColor = "#fff";
//        applibtn2.style.color = "#4a64f5";
//        applibtn2.innerHTML = "출원인 정보 입력하기";
//        }
//        paya.style.marginLeft = "5%";
        if(dataItem['application_date']=='0'|| dataItem['application_date']==""){
        paya2.innerHTML = '날짜 미정';
        }
        else{
        paya2.innerHTML = dataItem['application_date'];
        }
        divpay2.innerHTML = '출원일';
//        divpay.style.marginLeft = "5%";
        divpay2.style.paddingTop = "10px";
//        divpay.style.marginBottom = "13px";
        divpay2.style.color = "#898989";
        paya2.style.color = "#515151";
        paya2.style.paddingBottom = "8px";
        paydiv3.appendChild(divpay2);
        paydiv3.appendChild(paya2);
        paydiv3.appendChild(applibtn2);
        paydiv3.style.borderBottom = "1px solid #e0e0e0";
        paydiv3.style.marginLeft = "5%";
        paydiv3.style.marginRight = "5%";




        let paydiv4 = document.createElement("div");
        let divpay3 = document.createElement("div");
        let paya3 = document.createElement("div");

//        if(dataItem['registration_date']=='0' || dataItem['registration_date']== ""){
        paya3.innerHTML = '납부일 미정';
//        }
//        else{
////        paya3.innerHTML = dataItem['application_date'];
//        }
        divpay3.innerHTML = '등록료 납부상태';
//        divpay.style.marginLeft = "5%";
        divpay3.style.paddingTop = "10px";
//        divpay.style.marginBottom = "13px";
        divpay3.style.color = "#898989";
        paya3.style.color = "#515151";
        paya3.style.paddingBottom = "8px";
        paydiv4.appendChild(divpay3);
        paydiv4.appendChild(paya3);
        paydiv4.style.borderBottom = "1px solid #e0e0e0";
        paydiv4.style.marginLeft = "5%";
        paydiv4.style.marginRight = "5%";



        let paydiv5 = document.createElement("div");
        let divpay4 = document.createElement("div");
        let paya4 = document.createElement("div");
//        paya.style.marginLeft = "5%";
        if(dataItem['registration_date']=='0' || dataItem['registration_date']== ""){
        paya4.innerHTML = '날짜 미정';
        }else{
        paya4.innerHTML = dataItem['registration_date'];
        }
        divpay4.innerHTML = '등록일';
//        divpay.style.marginLeft = "5%";
        divpay4.style.paddingTop = "10px";
//        divpay.style.marginBottom = "13px";
        divpay4.style.color = "#898989";
        paya4.style.color = "#515151";
        paya4.style.paddingBottom = "8px";
        paydiv5.appendChild(divpay4);
        paydiv5.appendChild(paya4);
        paydiv5.style.paddingLeft = "5%";
        paydiv5.style.paddingRight = "5%";
        paydiv5.style.borderBottom = "1px solid #e0e0e0";



        divstatus1.onclick = function () {
        mypageonclick1(i);
        }
        div5.appendChild(paydiv);
        div5.appendChild(paydiv2);
        div5.appendChild(paydiv3);
        div5.appendChild(paydiv4);
        div5.appendChild(paydiv5);
        div1.appendChild(div4);
        div1.appendChild(div5);
        log_table.appendChild(div1);


    }
}


function getmypage2(applicationseq) {
   product = "";
    $.ajax({
        type: "POST",
        url: server_address + "showapplicationstatusbyseq",
        data: JSON.stringify({
                "seq": applicationseq
            }),
        processData: false,
        contentType: "application/json",
        async: false,
        success: function (data) {
            if (data.status == 200) {
                product = data.data;
            } else {


            }
        }
        ,
        err: function (err) {
            alert(err.status);
        }
    });
    return product

}


function setmypagedata2(data) {
var wholeLog = data;
    var statuspr = getid("statuspr");
    let dataItem = wholeLog[0];
if(dataItem['real_brandname'] == null){
    var application_date = getid("application_date");
    var registration_date = getid("registration_date");
    var krname = getid("krname");
    krname.innerHTML = dataItem['kr_name'];
    statuspr.innerHTML = dataItem['progress_status'];
    var payday = getid("payment_date");
    payday.innerHTML = dataItem['payment_date_rework'];
    var name1 = getid("name1");
    name1.innerHTML = dataItem['brandname'] +"("+ dataItem['application_class']+")" ;
    var applicant_status = getid("applicant_status");
    if(dataItem['applicant_status']=='0') {
    applicant_status.innerHTML = '개인';
    }else{
    applicant_status.innerHTML = '법인';
    }
    var payday1 = getid("payment_date1");
    payday1.innerHTML = dataItem['payment_date_rework'];
//    var payment_number111 = getid("payment_number");
//    payment_number111.innerHTML = dataItem['payment_number']
    if(dataItem['application_date_rework']==0){

    }
    else {
    application_date.style = "margin-bottom: 40px;";
    let div7 = document.createElement('div');
    div7.style = "display: inline-block; font-size:16px; color:#898989;"
    div7.innerHTML = '출원일'
    let div71 = document.createElement('div');
    div71.innerHTML = dataItem['application_number'].substring(0,2) +"-" + dataItem['application_number'].substring(2,6)+ "-" + dataItem['application_number'].substring(6,13) ;
    div71.style = "display: inline-block; float: right; margin-top : 5px; margin-left : 5px; font-size:12px; color:#898989;";
    div7.append(div71);
    let div6 = document.createElement('div');
    div6.style = "display: inline-block;float: right; font-size:16px; color:#898989;";
    div6.innerHTML = dataItem['application_date_rework'];
    application_date.appendChild(div7);
    application_date.appendChild(div6);
    }
    if(dataItem['application_date_rework']==0){

    }
    else {
    registration_date.style = "margin-bottom: 40px;";
    let div8 = document.createElement('div');
    div8.style = "display: inline-block; font-size:16px; color:#898989;"
    div8.innerHTML = '등록일'
    let div81 = document.createElement('div');
    div81.innerHTML = dataItem['registration_number'].substring(0,2) + "-" + dataItem['registration_number'].substring(2,9);
    div81.style = "display: inline-block; float: right; margin-top : 5px; margin-left : 5px; font-size:12px; color:#898989;";
    div8.append(div81);
    let div9 = document.createElement('div');
    div9.style = "display: inline-block;float: right; font-size:16px; color:#898989;";
    div9.innerHTML = dataItem['registration_date_rework'];
    registration_date.appendChild(div8);
    registration_date.appendChild(div9);
    }
    }
    else{
    var application_date = getid("application_date");
    var registration_date = getid("registration_date");
    var krname = getid("krname");
    krname.innerHTML = dataItem['kr_name'];
    statuspr.innerHTML = dataItem['progress_status'];
    var payday = getid("payment_date");
    payday.innerHTML = dataItem['payment_date_rework'];
    var name1 = getid("name1");
    name1.innerHTML = dataItem['real_brandname'] +"("+ dataItem['real_application_class']+")" ;
    var applicant_status = getid("applicant_status");
    if(dataItem['applicant_status']=='0') {
    applicant_status.innerHTML = '개인';
    }else{
    applicant_status.innerHTML = '법인';
    }
    var payday1 = getid("payment_date1");
    payday1.innerHTML = dataItem['payment_date_rework'];
//    var payment_number111 = getid("payment_number");
//    payment_number111.innerHTML = dataItem['payment_number']
    if(dataItem['application_date_rework']==0){

    }
    else {
    application_date.style = "margin-bottom: 40px;";
    let div7 = document.createElement('div');
    div7.style = "display: inline-block; font-size:16px; color:#898989;"
    div7.innerHTML = '출원일'
    let div71 = document.createElement('div');
    div71.innerHTML = dataItem['application_number'].substring(0,2) +"-" + dataItem['application_number'].substring(2,6)+ "-" + dataItem['application_number'].substring(6,13) ;
    div71.style = "display: inline-block; float: right; margin-top : 5px; margin-left : 5px; font-size:12px; color:#898989;";
    div7.append(div71);
    let div6 = document.createElement('div');
    div6.style = "display: inline-block;float: right; font-size:16px; color:#898989;";
    div6.innerHTML = dataItem['application_date_rework'];
    application_date.appendChild(div7);
    application_date.appendChild(div6);
    }
    if(dataItem['application_date_rework']==0){

    }
    else {
    registration_date.style = "margin-bottom: 40px;";
    let div8 = document.createElement('div');
    div8.style = "display: inline-block; font-size:16px; color:#898989;"
    div8.innerHTML = '등록일'
    let div81 = document.createElement('div');
    div81.innerHTML = dataItem['registration_number'].substring(0,2) + "-" + dataItem['registration_number'].substring(2,9);
    div81.style = "display: inline-block; float: right; margin-top : 5px; margin-left : 5px; font-size:12px; color:#898989;";
    div8.append(div81);
    let div9 = document.createElement('div');
    div9.style = "display: inline-block;float: right; font-size:16px; color:#898989;";
    div9.innerHTML = dataItem['registration_date_rework'];
    registration_date.appendChild(div8);
    registration_date.appendChild(div9);
    }
    }
}



function setmypagedata3(data) {


    var wholeLog = data;
    var cusname = getid("cusname");
    var cusemail = getid('cusemail');
    var cusemail1 = getid('cusemail1');
    var cuspn = getid("cuspn");
    var snscon = getid("snscon");
    let dataItem = wholeLog[0];
    cusname.innerHTML = dataItem['nickname'];
    sessionStorage.setItem("nickname" , dataItem['nickname']);
    sessionStorage.setItem("real_email" , dataItem['real_email']);
    cusemail.innerHTML = dataItem['email'];
    cusemail1.innerHTML = dataItem['real_email'];
    cuspn.innerHTML = dataItem['customer_phone_number'];
    sessionStorage.setItem("memberphone" , dataItem['customer_phone_number']);
    if (dataItem['class']=='kakao'){
    snscon.innerHTML = '카카오 연결';
    }else{
    snscon.innerHTML = '네이버 연결';
    }
}
function updatemypagename() {
   var nameval = getid("membername");
    $.ajax({
        type: "POST",
        url: server_address + "updatemypagename",
        data: JSON.stringify({
                "email": localStorage.getItem("customeremail"),
                "nameval" : nameval.value
            }),
        processData: false,
        contentType: "application/json",
        async: false,
        success: function (data) {
            if (data.status == 200) {
            localStorage.setItem("customername",nameval.value);
                location.reload();
            } else {

            }
        }
        ,
        err: function (err) {
            alert(err.status);
        }
    });
    return product

}
function updatemypagename1() {
   var nameva1l = getid("membernum1");
    $.ajax({
        type: "POST",
        url: server_address + "updatemypagename1",
        data: JSON.stringify({
                "email": localStorage.getItem("customeremail"),
                "nameval" : nameva1l.value
            }),
        processData: false,
        contentType: "application/json",
        async: false,
        success: function (data) {
            if (data.status == 200) {
            localStorage.setItem("real_email",nameva1l.value);
                location.reload();
            } else {

            }
        }
        ,
        err: function (err) {
            alert(err.status);
        }
    });
    return product

}

function updatemypagenumber() {
   var nameval = getid("membernum");
   if (/^01([0]?)([0-9]{4})([0-9]{4})$/.test(nameval.value)) {

    $.ajax({
        type: "POST",
        url: server_address + "updatemypagenumber",
        data: JSON.stringify({
                "email": localStorage.getItem("customeremail"),
                "nameval" : nameval.value
            }),
        processData: false,
        contentType: "application/json",
        async: false,
        success: function (data) {
            if (data.status == 200) {
            alert('수정 완료.')
                location.reload();
            } else {
            alert();

            }
        }
        ,
        err: function (err) {
            alert(err.status);
        }
    });
    return product
    }
    else{
    alert('전화번호 규격을 맞춰주세요. ex)01012341234')
    }

}



function deletecustomer() {
let email = localStorage.getItem("customeremail");
        $.ajax({
        type: "POST",
        url: server_address + "deletecustomer",
        data: JSON.stringify({
                "email": email
            }),
        processData: false,
        contentType: "application/json",
        async: false,
        success: function (data) {
            if (data.status == 200) {
            localStorage.removeItem('customeremail');
            localStorage.removeItem('customername');
            localStorage.removeItem('customerPhone');
            localStorage.removeItem('customerToken');
            alert('삭제되었습니다');
            location.href="https://m.nametec.kr"

            } else {


            }
        }
        ,
        err: function (err) {
            alert(err.status);
        }
    });
    }
function YorN() {
        if (!confirm("정말 탈퇴하시겠습니까?")) {

        } else {
        deletecustomer();
        }
    }

function mypageonclick1(i){
maindiv = document.getElementById('maindiv' +i);
imgdiv = document.getElementById('imgdiv' +i);
div5 = document.getElementById('div5'+i);
imgdiv.setAttribute('src', '../static/image/uparrow@3x.png');
        div5.style.display = "";
maindiv.onclick = function () {
        mypageonclick2(i);
        }
}
function mypageonclick2(i){
imgdiv = document.getElementById('imgdiv'+i);
maindiv = document.getElementById('maindiv'+i);
div5 = document.getElementById('div5'+i);
imgdiv.setAttribute('src', '../static/image/mypagearrow@3x.png');
        div5.style.display = "none";
maindiv.onclick = function () {
        mypageonclick1(i);
        }
}


function getimformdata(seq) {
   product = "";
    $.ajax({
        type: "POST",
        url: server_address + "getimformdata",
        data: JSON.stringify({
                "merchant_uid": seq
            }),
        processData: false,
        contentType: "application/json",
        async: false,
        success: function (data) {
            if (data.status == 200) {
                product = data.data;
            } else {


            }
        }
        ,
        err: function (err) {
            alert(err.status);
        }
    });
    return product

}
function getimformdata2(seq) {
   product1 = "";
    $.ajax({
        type: "POST",
        url: server_address + "getimformdata2",
        data: JSON.stringify({
                "merchant_uid": seq
            }),
        processData: false,
        contentType: "application/json",
        async: false,
        success: function (data) {
            if (data.status == 200) {
                product1 = data.data;
                if (data.done == 1){
                location.href="https://m.nametec.kr/finish";
                }
                document.getElementById('text1').value = product1[0]['nickname'];
                document.getElementById('text7').value = product1[0]['nickname'];
                document.getElementById('text5').value = product1[0]['customer_phone_number'];
                document.getElementById('text10').value = product1[0]['customer_phone_number'];
//
                document.getElementById('text4').value = product1[0]['real_email'];
                document.getElementById('text9').value = product1[0]['real_email'];
            } else {


            }
        }
        ,
        err: function (err) {
            alert(err.status);
        }
    });
    return product

}
function setimformdata(data) {


    var wholeLog = data;
    var log_table = getid("imformtable");
    var logoinsert = getid("logoinsert")
    var real_logo_id = getid("real_logo_id")
    real_logo_id.innerHTML = wholeLog[0]['real_brandname']
    var img = new Image();
    if (wholeLog[0]['real_logo'] == null || wholeLog[0]['real_logo'] == "" || wholeLog[0]['real_logo'] == "None"){
    logoinsert.innerHTML = '이미지 없음';
    }else{
    var img = new Image();
    img.src = 'https://m.nametec.kr/static/data/'+wholeLog[0]['real_logo'];
    img.style.height = "74px";
    logoinsert.appendChild(img)
    }
    for (let i = 0; i < wholeLog.length; i++) {
        var sad2 = document.createElement("div");
        let dataItem = wholeLog[i];
        var sad = document.createElement("div");
        var category = document.createElement("div");
        var category2 = document.createElement("div");
        var classcategory = document.createElement("div");
        var classcategory2 = document.createElement("div");
        var goods = document.createElement("div");
        var box = document.createElement("div");
        category.innerHTML = "카테고리";
        category.className = "Regular";
        category.style.fontSize = "12px";
        category.style.marginTop = "10px";
        category2.style.fontSize = "16px";
        category.style.color = "#4a64f5";
        category2.className = "Medium";
        category2.innerHTML = dataItem['category'];

        classcategory.innerHTML = "류";
        classcategory.className = "Regular";
        classcategory.style.fontSize = "12px";
        classcategory.style.marginTop = "10px";
        classcategory2.style.fontSize = "16px";
        classcategory.style.color = "#4a64f5";
        classcategory2.className = "Medium";
        classcategory2.innerHTML = dataItem['real_application_class']+"류";
        goods.innerHTML = "지정상품";
        goods.className = "Regular";
        goods.style.fontSize = "12px";
        goods.style.marginTop = "10px";
        goods.style.color = "#4a64f5";
        sad.style.borderBottom = "2px dashed #8989894a";
        box.classname = "Regular";
        box.style.width = "85%";
        box.style.height = "145px";
//        box.style.margin = "";
        box.style.border = "solid 1px #b7b7b7";
        box.style.backgroundColor = "#ffffff";
        box.style.backgroundColor = "#ffffff";
        box.style.paddingBottom  = "3.5px";
        box.style.paddingTop  = "3.5px";


        box.style.fontSize = "12px";
        box.style.overflow = "scroll";
        box.style.paddingLeft = "2px";
        box.style.marginBottom = "10px";
        var goodsList = dataItem['real_goods'].split(',');
//        alert(JSON.stringify(dataItem));
        for (k = 0; k < goodsList.length; k++){
        box.innerHTML += (k+1)+". "+goodsList[k]+'<br>';
        }
        sad2.appendChild(category);
        sad2.appendChild(category2);
        sad2.appendChild(classcategory);
        sad2.appendChild(classcategory2);
        sad2.appendChild(goods);
        sad2.appendChild(box);
        sad2.appendChild(sad);
        log_table.appendChild(sad2);
    }

}
function checkagree1(){
var  checkagree = document.getElementById("checkagree");
checkagree.style.backgroundColor= "#edeffe";
document.getElementById("imgcheck").src = "../static/image/blc@2x.png";
checkagree.onclick = function () {
checkagree2();
}
$("#next_button6").removeAttr("disabled");
}

function checkagree2(){
var  checkagree = document.getElementById("checkagree");
checkagree.style.backgroundColor= "#efefef";
document.getElementById("imgcheck").src = "../static/image/grc@2x.png";
checkagree.onclick = function () {
checkagree1();

}
$("#next_button6").attr("disabled",true);
}

function loginWithKakao() {
window.Kakao.init("e3234163a151f0558554e49a33bbbe27");
    Kakao.isInitialized();
    Kakao.Auth.authorize({
    redirectUri: encodeURI('https://m.nametec.kr/search1'),


    })
  }
 function loginWithKakao2() {
window.Kakao.init("e3234163a151f0558554e49a33bbbe27");
    Kakao.isInitialized();
    Kakao.Auth.authorize({
    redirectUri: encodeURI('https://m.nametec.kr'),


    })
  }

