
/*숙소제목 수정하기 버튼 눌렀을 때*/ 
$('#su1').on('click',function(){
    $('#first_1').attr('class', 'first_1');
    $('#susu1').attr('class', 'susu1 _kkkkkkk');
})
/*숙소제목닫기 버튼 눌렀을 때*/ 
$('#ekerl1').on('click',function(){
    $('#first_1').attr('class', 'first_1 _kkkkkkk');
    $('#susu1').attr('class', 'susu1');
    $("#wjwkd1").attr("disabled", true)
})
/*숙소제목 취소 버튼 눌렀을 때*/ 
$('#cnlth1').on('click',function(){
    $('#first_1').attr('class', 'first_1 _kkkkkkk');
    $('#susu1').attr('class', 'susu1');
    $("#wjwkd1").attr("disabled", true)
})
/*숙소제목 저장버튼 활성 눌렀을 때*/ 
$('#dlsvnt1').on("change",function(){
    $("#wjwkd1").attr("disabled", false)
})
/*-------------------------------------------------- */
/*숙소설명 수정하기 버튼 눌렀을 때*/ 
$('#su2').on('click',function(){
    $('#first_2').attr('class', 'first_2');
    $('#susu2').attr('class', 'susu1 _kkkkkkk');
})
/*숙소설명닫기 버튼 눌렀을 때*/ 
$('#ekerl2').on('click',function(){
    $('#first_2').attr('class', 'first_2 _kkkkkkk');
    $('#susu2').attr('class', 'susu2');
    $("#wjwkd2").attr("disabled", true)
})
/*숙소설명 취소 버튼 눌렀을 때*/ 
$('#cnlth2').on('click',function(){
    $('#first_2').attr('class', 'first_2 _kkkkkkk');
    $('#susu2').attr('class', 'susu2');
    $("#wjwkd2").attr("disabled", true)
})
/*숙소설명 텍스트 작성 시 저장 활성 */ 
$('._159914b').on("change",function(){
    $("#wjwkd2").attr("disabled", false)
})


/*-------------------------------------------------- */
//게스트 수
function pCount1(){    
    const val = Number(document.querySelector("#c1").innerText);
    document.querySelector("#c1").innerText=val+1;
    if(val+1 > 0){
        $('#discount1').removeAttr("disabled")
    }  
}
function mCount1(){
    const val = Number(document.querySelector("#c1").innerText);
    document.querySelector("#c1").innerText=val-1;
    if((document.querySelector("#c1").innerText)==0){
        $('#discount1').attr("disabled","")
    }
}


/*-------------------------------------------------- */
/*숙소설명 수정하기 버튼 눌렀을 때*/ 
$('#su3').on('click',function(){
    $('#first_3').attr('class', 'first_3');
    $('#susu3').attr('class', 'susu1 _kkkkkkk');
})
/*숙소설명닫기 버튼 눌렀을 때*/ 
$('#ekerl3').on('click',function(){
    $('#first_3').attr('class', 'first_3 _kkkkkkk');
    $('#susu3').attr('class', 'susu3');
    $("#wjwkd3").attr("disabled", true)
})
/*숙소설명 취소 버튼 눌렀을 때*/ 
$('#cnlth3').on('click',function(){
    $('#first_3').attr('class', 'first_3 _kkkkkkk');
    $('#susu3').attr('class', 'susu3');
    $("#wjwkd3").attr("disabled", true)
})
/*숙소설명 텍스트 작성 시 저장 활성 */ 
$('#dlsvnt33').on("change",function(){
    $("#wjwkd3").attr("disabled", false)
})

/*-------------------------------------------------- */
/*언어 수정하기 버튼 눌렀을 때*/ 
$('#su4').on('click',function(){
    $('#first_4').attr('class', 'first_4');
    $('#susu4').attr('class', 'susu4 _kkkkkkk');
})
/*언어 닫기 버튼 눌렀을 때*/ 
$('#ekerl4').on('click',function(){
    $('#first_4').attr('class', 'first_4 _kkkkkkk');
    $('#susu4').attr('class', 'susu4');
    $("#wjwkd4").attr("disabled", true)
})
/*언어 취소 버튼 눌렀을 때*/ 
$('#cnlth4').on('click',function(){
    $('#first_4').attr('class', 'first_4 _kkkkkkk');
    $('#susu4').attr('class', 'susu4');
    $("#wjwkd4").attr("disabled", true)
})
/*언어 셀렉트 시 저장 활성 */ 
$('._1iwku6d').on("change",function(){
    $("#wjwkd4").attr("disabled", false)
})

/*-------------------------------------------------- */
/*숙소상태 수정하기 버튼 눌렀을 때*/ 
$('#su5').on('click',function(){
    $('#first_5').attr('class', 'first_5');
    $('#susu5').attr('class', 'susu5 _kkkkkkk');
})
/*숙소상태 닫기 버튼 눌렀을 때*/ 
$('#ekerl5').on('click',function(){
    $('#first_5').attr('class', 'first_5 _kkkkkkk');
    $('#susu5').attr('class', 'susu5');
    $("#wjwkd5").attr("disabled", true)
})
/*숙소상태 취소 버튼 눌렀을 때*/ 
$('#cnlth5').on('click',function(){
    $('#first_5').attr('class', 'first_5 _kkkkkkk');
    $('#susu5').attr('class', 'susu5');
    $("#wjwkd5").attr("disabled", true)
})
/*숙소상태 셀렉트 시 저장 활성 */ 
$('._83s1a2').on("change",function(){
    $("#wjwkd5").attr("disabled", false)
})
/*숙소상태 셀렉트 시 저장 활성 */ 
$('._g4rlqtx').on("change",function(){
    $("#wjwkd5").attr("disabled", false)
})

/*-------------------------------------------------- */
/*비활성 수정하기 버튼 눌렀을 때*/ 
$('#qlghkftjd').on('click',function(){
    $('#first_6').attr('class', 'first_6');
    $('#susu5').attr('class', 'susu5 _kkkkkkk');
})
/*비활성 닫기 버튼 눌렀을 때*/ 
$('#ekerl6').on('click',function(){
    $('#first_6').attr('class', 'first_6 _kkkkkkk');
    $('#susu5').attr('class', 'susu5');
    $("#wjwkd6").attr("disabled", true)
})
/*비활성 취소 버튼 눌렀을 때*/ 
$('#cnlth6').on('click',function(){
    $('#first_6').attr('class', 'first_6 _kkkkkkk');
    $('#susu5').attr('class', 'susu5');
    $("#wjwkd6").attr("disabled", true)
})
/*비활성 셀렉트 시 저장 활성 */ 
$('._83s1a2').on("change",function(){
    $("#wjwkd6").attr("disabled", false)
})












