
function loadingProcess(){
    openLoading();
    // 타이머를 이용해 로딩창 종료
    setTimeout(closeLoading, 3000);
}

// 로딩창 키는 함수
function openLoading() {
    //화면 높이와 너비를 구합니다.
    let maskHeight = $(document).height();
    let maskWidth = window.document.body.clientWidth;
    //출력할 마스크를 설정해준다.
    let mask ="<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
    // 로딩 이미지 주소 및 옵션
    let loadingImg ='';
    loadingImg += "<div id='loadingImg' style='position:absolute; top: calc(50% - (200px / 2)); width:100%; z-index:99999999;'>";
    loadingImg += " <img src='https://loadingapng.com/animation.php?image=4&fore_color=000000&back_color=FFFFFF&size=128x128&transparency=1&image_type=0&uncacher=75.5975991029623' style='position: relative; display: block; margin: 0px auto;'/>";
    loadingImg += "</div>";
    //레이어 추가
    $('body')
        .append(mask)
        .append(loadingImg)
    //마스크의 높이와 너비로 전체 화면을 채운다.
    $('#mask').css({
        'width' : maskWidth,
        'height': maskHeight,
        'opacity' :'0.3'
    });
    //마스크 표시
    $('#mask').show();
    //로딩 이미지 표시
    $('#loadingImg').show();
}

// 로딩창 끄는 함수
function closeLoading() {
    $('#mask, #loadingImg').hide();
    $('#mask, #loadingImg').empty();
}

let id = parseInt($('#iddiv').text())
$(function () {
    loadingProcess()
    let id = parseInt($('#iddiv').text())
    let mem_id = parseInt($('#iddiv2').text())
    console.log(mem_id)

    let lodging = new Vue({
        el: '#hostList',
        data: {
            lodgingApiResponse:{
                lodgingId:{}
            },
            lodgingRoomApiResponse:{},
            lodgingDurationApiResponse:{},
            lodgingBeforeApiResponse:{},
            lodgingIsresvApiResponse:{},
            lodgingLocationApiResponse:{},
            lodgingLocationDetailApiResponse:{},
            lodgingPicturesApiResponse:{},
            lodgingPolicyApiResponse:{},
            lodgingPriceApiResponse:{},
            lodgingRoleApiResponse:{},
            lodgingRoomApiResponse:{},
            lodgingRulesApiResponse:{},
            memberApiResponse:{}
        }
    });
    searchStart(id);
    function searchStart(id) {
        $.get("/api/room/hosTlist/"+id, function (response){
            console.dir(response.data.lodgingApiResponse.lodgingId);
            lodging.data = response.data;
            console.log(lodging.data)
            $("#suk1").attr("href","/pages/hostedit/"+lodging.data.lodgingApiResponse.lodgingId);
            $("#suk2").attr("href","/pages/host_edit_pricing/"+lodging.data.lodgingApiResponse.lodgingId);
            $("#suk3").attr("href","/pages/policies/"+lodging.data.lodgingApiResponse.lodgingId);
            $("#suk4").attr("href","/pages/host_edit_for_guests/"+lodging.data.lodgingApiResponse.lodgingId);
        })
    }
})
// --------------------------------------------------------------- 위에 노건들


// /*체크인 가능시간 수정하기 버튼 눌렀을 때*/
// $('#su1').on('click',function(){
//     $('#first_1').attr('class', 'first_1');
//     $('#susu1').attr('class', 'susu1 _kkkkkkk');
// })
// /*체크인 가능시간 닫기 버튼 눌렀을 때*/
// $('#ekerl1').on('click',function(){
//     $('#first_1').attr('class', 'first_1 _kkkkkkk');
//     $('#susu1').attr('class', 'susu1');
//     $("#wjwkd1").attr("disabled", true)
// })
// /*체크인 가능시간 닫기 버튼 눌렀을 때*/
// $('#cnlth1').on('click',function(){
//     $('#first_1').attr('class', 'first_1 _kkkkkkk');
//     $('#susu1').attr('class', 'susu1');
//     $("#wjwkd1").attr("disabled", true)
// })
// /*체크인 셀렉트 버튼 눌렀을 때 저장버튼 활성*/
// $('#select1').on("change",function(){
//     $("#wjwkd1").attr("disabled", false)
// })
// /*------------------------------------------------------------------------------------*/
//
// /*주말1박요금 수정하기 버튼 눌렀을 때*/
// $('#su2').on('click',function(){
//     $('#first_2').attr('class', 'first_2');
//     $('#susu2').attr('class', 'susu2 _kkkkkkk');
// })
// /*주말1박요금 닫기 버튼 눌렀을 때*/
// $('#ekerl2').on('click',function(){
//     $('#first_2').attr('class', 'first_2 _kkkkkkk');
//     $('#susu2').attr('class', 'susu2');
//     $("#wjwkd2").attr("disabled", true)
// })
// /*주말1박요금닫기 버튼 눌렀을 때*/
// $('#cnlth2').on('click',function(){
//     $('#first_2').attr('class', 'first_2 _kkkkkkk');
//     $('#susu2').attr('class', 'susu2');
//     $("#wjwkd2").attr("disabled", true)
// })
// /*주말1박요금 버튼 눌렀을 때 저장버튼 활성*/
// $('#weekend').on("change",function(){
//     $("#wjwkd2").attr("disabled", false)
// })
//
// /*------------------------------------------------------------------------------------*/
//
// /*최대숙박일수 수정하기 버튼 눌렀을 때*/
// $('#su3').on('click',function(){
//     $('#first_3').attr('class', 'first_3');
//     $('#susu3').attr('class', 'susu3 _kkkkkkk');
// })
// /*최대숙박일수 닫기 버튼 눌렀을 때*/
// $('#ekerl3').on('click',function(){
//     $('#first_3').attr('class', 'first_3 _kkkkkkk');
//     $('#susu3').attr('class', 'susu2');
//     $("#wjwkd3").attr("disabled", true)
// })
// /*최대숙박일수 취소 버튼 눌렀을 때*/
// $('#cnlth3').on('click',function(){
//     $('#first_3').attr('class', 'first_3 _kkkkkkk');
//     $('#susu3').attr('class', 'susu3');
//     $("#wjwkd3").attr("disabled", true)
// })
// /*최대숙박일수 버튼 눌렀을 때 저장버튼 활성*/
// $('#week3').on("change",function(){
//     $("#wjwkd3").attr("disabled", false)
// })
// /*최대숙박일수 텍스트 입력시 저장버튼 활성 버튼*/
// $('#xprtmxm3').on("change keydown paste textarea",function(){
//     if($("#xprtmxm3").val()=='')
//         $("#wjwkd3").attr("disabled", false)
// })
//
// /*------------------------------------------------------------------------------------*/
//
// /*예약마감 수정하기 버튼 눌렀을 때*/
// $('#su4').on('click',function(){
//     $('#first_4').attr('class', 'first_4');
//     $('#susu4').attr('class', 'susu4 _kkkkkkk');
// })
// /*예약마감 닫기 버튼 눌렀을 때*/
// $('#ekerl4').on('click',function(){
//     $('#first_4').attr('class', 'first_4 _kkkkkkk');
//     $('#susu4').attr('class', 'susu4');
//     $("#wjwkd4").attr("disabled", true)
// })
// /*예약마감 취소 버튼 눌렀을 때*/
// $('#cnlth4').on('click',function(){
//     $('#first_4').attr('class', 'first_4 _kkkkkkk');
//     $('#susu4').attr('class', 'susu4');
//     $("#wjwkd4").attr("disabled", true)
// })
// /*체크인 셀렉트 저장버튼 활성 눌렀을 때*/
// $('#select4').on("change",function(){
//     $("#wjwkd4").attr("disabled", false)
// })
// $('#select5').on("change",function(){
//     $("#wjwkd4").attr("disabled", false)
// })
//
// /*------------------------------------------------------------------------------------*/
//
// /*준비시간 수정하기 버튼 눌렀을 때*/
// $('#su5').on('click',function(){
//     $('#first_5').attr('class', 'first_5');
//     $('#susu5').attr('class', 'susu5 _kkkkkkk');
// })
// /*준비시간 닫기 버튼 눌렀을 때*/
// $('#ekerl5').on('click',function(){
//     $('#first_5').attr('class', 'first_5 _kkkkkkk');
//     $('#susu5').attr('class', 'susu5');
//     $("#wjwkd5").attr("disabled", true)
// })
// /*준비시간 취소 버튼 눌렀을 때*/
// $('#cnlth5').on('click',function(){
//     $('#first_5').attr('class', 'first_5 _kkkkkkk');
//     $('#susu5').attr('class', 'susu5');
//     $("#wjwkd5").attr("disabled", true)
// })
// /*준비시간 셀렉트 저장버튼 활성 눌렀을 때*/
// $('#select6').on("change",function(){
//     $("#wjwkd5").attr("disabled", false)
// })
//
// /*------------------------------------------------------------------------------------*/
//
// /*예약가능시간 수정하기 버튼 눌렀을 때*/
// $('#su6').on('click',function(){
//     $('#first_6').attr('class', 'first_6');
//     $('#susu6').attr('class', 'susu6 _kkkkkkk');
// })
// /*예약가능시간 닫기 버튼 눌렀을 때*/
// $('#ekerl6').on('click',function(){
//     $('#first_6').attr('class', 'first_6 _kkkkkkk');
//     $('#susu6').attr('class', 'susu6');
//     $("#wjwkd6").attr("disabled", true)
// })
// /*예약가능시간 취소 버튼 눌렀을 때*/
// $('#cnlth6').on('click',function(){
//     $('#first_6').attr('class', 'first_6 _kkkkkkk');
//     $('#susu6').attr('class', 'susu6');
//     $("#wjwkd6").attr("disabled", true)
// })
// /*예약가능시간 셀렉트 저장버튼 활성 눌렀을 때*/
// $('#select7').on("change",function(){
//     $("#wjwkd6").attr("disabled", false)
// })
//
// /*------------------------------------------------------------------------------------*/
//
// /*체크인 요일제한 수정하기 버튼 눌렀을 때*/
// $('#su7').on('click',function(){
//     $('#first_7').attr('class', 'first_7');
//     $('#susu7').attr('class', 'susu7 _kkkkkkk');
// })
// /*체크인 요일제한 닫기 버튼 눌렀을 때*/
// $('#ekerl7').on('click',function(){
//     $('#first_7').attr('class', 'first_7 _kkkkkkk');
//     $('#susu7').attr('class', 'susu7');
//     $("#wjwkd7").attr("disabled", true)
// })
// /*체크인 요일제한 취소 버튼 눌렀을 때*/
// $('#cnlth7').on('click',function(){
//     $('#first_7').attr('class', 'first_7 _kkkkkkk');
//     $('#susu7').attr('class', 'susu7');
//     $("#wjwkd7").attr("disabled", true)
// })
// /*체크인 요일제한 셀렉트 저장버튼 활성 눌렀을 때*/
// $('._1yf4i4f').on("change",function(){
//     $("#wjwkd7").attr("disabled", false)
// })
//
//
// /*------------------------------------------------------------------------------------*/
//
// /*맞춤숙박 기간 수정하기 버튼 눌렀을 때*/
// $('#su8').on('click',function(){
//     $('#first_8').attr('class', 'first_8');
//     $('#susu8').attr('class', 'susu8 _kkkkkkk');
// })
// /*맞춤숙박 기간 닫기 버튼 눌렀을 때*/
// $('#ekerl8').on('click',function(){
//     $('#first_8').attr('class', 'first_8 _kkkkkkk');
//     $('#susu8').attr('class', 'susu8');
//     $("#wjwkd8").attr("disabled", true)
// })
// /*맞춤숙박 기간 취소 버튼 눌렀을 때*/
// $('#cnlth8').on('click',function(){
//     $('#first_8').attr('class', 'first_8 _kkkkkkk');
//     $('#susu8').attr('class', 'susu8');
//     $("#wjwkd8").attr("disabled", true)
// })
// /*맞춤숙박 기간 셀렉트 저장버튼 활성 눌렀을 때*/
// $('._1yf4i4f').on("change",function(){
//     $("#wjwkd8").attr("disabled", false)
// })
// /*셀렉트 확인 */
//
//
// /*맞춤숙박 기간 수정하기 버튼 눌렀을 때*/
// $('#cnrkgkrl').on('click',function(){
//     $('#first_9').attr('class', 'first_9');
//     $('#first_8').attr('class', 'first_8 _kkkkkkk');
// })
// /*맞춤숙박 기간 삭제 버튼 눌렀을 때*/
// $('#tkrwp').on('click',function(){
//     $('#first_9').attr('class', 'first_9');
//     $('#first_8').attr('class', 'first_8 _kkkkkkk');
// })
// /*맞춤숙박 기간 닫기 버튼 눌렀을 때*/
// $('#ekerl9').on('click',function(){
//     $('#first_9').attr('class', 'first_9 _kkkkkkk');
//     $('#susu8').attr('class', 'susu8');
//     $("#wjwkd9").attr("disabled", true)
// })
// /*맞춤숙박 기간 취소 버튼 눌렀을 때*/
// $('#cnlth9').on('click',function(){
//     $('#first_9').attr('class', 'first_9 _kkkkkkk');
//     $('#susu8').attr('class', 'susu8');
//     $("#wjwkd9").attr("disabled", true)
// })
//
// /*------------------------------------------------------------------------------------*/
//
// /*최소숙박 기간 수정하기 버튼 눌렀을 때*/
// $('#su10').on('click',function(){
//     $('#first_10').attr('class', 'first_10');
//     $('#susu10').attr('class', 'susu10 _kkkkkkk');
// })
// /*최소숙박 기간 닫기 버튼 눌렀을 때*/
// $('#ekerl10').on('click',function(){
//     $('#first_10').attr('class', 'first_10 _kkkkkkk');
//     $('#susu10').attr('class', 'susu10');
//     $("#wjwkd10").attr("disabled", true)
// })
// /*최소숙박 기간 취소 버튼 눌렀을 때*/
// $('#cnlth10').on('click',function(){
//     $('#first_10').attr('class', 'first_10 _kkkkkkk');
//     $('#susu10').attr('class', 'susu10');
//     $("#wjwkd10").attr("disabled", true)
// })
// /*최소숙박 기간 셀렉트 저장버튼 활성 눌렀을 때*/
// $('._yrzsibu').on("change",function(){
//     $("#wjwkd10").attr("disabled", false)
// })
// /*셀렉트 확인 */
//
//
// /*최소숙박 맞춤설정 버튼 눌렀을 때*/
// $('#chlth').on('click',function(){
//     $('#first_11').attr('class', 'first_11');
//     $('#first_10').attr('class', 'first_10 _kkkkkkk');
// })
//
// /*최소숙박 맞춤설정 닫기 버튼 눌렀을 때*/
// $('#ekerl11').on('click',function(){
//     $('#first_11').attr('class', 'first_11 _kkkkkkk');
//     $('#susu10').attr('class', 'susu10');
//     $("#wjwkd11").attr("disabled", true)
// })
// /*최소숙박 맞춤설정 취소 버튼 눌렀을 때*/
// $('#cnlth11').on('click',function(){
//     $('#first_11').attr('class', 'first_11 _kkkkkkk');
//     $('#susu10').attr('class', 'susu10');
//     $("#wjwkd11").attr("disabled", true)
// })
//
// $('._c5rhl5').on("change",function(){
//     $("#wjwkd11").attr("disabled", false)
// })
// /*------------------------------------------------------------------------------------*/
//
// /*추가게스트 수정하기 버튼 눌렀을 때*/
// $('#su12').on('click',function(){
//     $('#first_12').attr('class', 'first_12');
//     $('#susu12').attr('class', 'susu12 _kkkkkkk');
// })
// /*추가게스트 닫기 버튼 눌렀을 때*/
// $('#ekerl12').on('click',function(){
//     $('#first_12').attr('class', 'first_12 _kkkkkkk');
//     $('#susu12').attr('class', 'susu12');
//     $("#wjwkd12").attr("disabled", true)
// })
// /*추가게스트 취소 버튼 눌렀을 때*/
// $('#cnlth12').on('click',function(){
//     $('#first_12').attr('class', 'first_12 _kkkkkkk');
//     $('#susu12').attr('class', 'susu12');
//     $("#wjwkd12").attr("disabled", true)
// })
// /*추가게스트 셀렉트 저장버튼 활성 눌렀을 때*/
// $('._1jg0g92a').on("change",function(){
//     $("#wjwkd12").attr("disabled", false)
// })
//
//
//여행자 게스트 숫자
function pCount1(){
    $("#wjwkd12").attr("disabled", false)
    const val = Number(document.querySelector("#c1").innerText);
    document.querySelector("#c1").innerText=val+1;
    if(val+1 > 0){
        $('#btn_min').removeAttr("disabled")
    }
}
function mCount1(){
    $("#wjwkd12").attr("disabled", false)
    const val = Number(document.querySelector("#c1").innerText);
    document.querySelector("#c1").innerText=val-1;
    if((document.querySelector("#c1").innerText)==0){
        $('#btn_min').attr("disabled","")
    }
}

// // function pPrice(){
// //     let sum = parseInt($('#myp.pricing.extraGuestFee.edit-price-per-extra-person-input_amount').val()) + 1000;
// //     $('#undefined-input').val(sum)
// //     if(parseInt($('#undefined-input').val()) >= 11000){
// //         $('#discount').attr('disabled', false);
// //     }
// // }
// //
// // function mPrice1(){
// //     let min = parseInt($('#undefined-input').val()) - 1000;
// //     $('#undefined-input').val(min)
// //     if(parseInt($('#undefined-input').val()) <= 10000){
// //         $('#discount').attr('disabled', true);
// //     }
// // }
//
// /*------------------------------------------------------------------------------------*/
// /* 반려 동물 수수료 팝업 */
// /*반려 동물 수수료 수정하기 버튼 눌렀을 때*/
// $('#pop22').on('click',function(){
//     $('#first_13').attr('class', 'first_13');
// })
// /*반려 동물 수수료 닫기 버튼 눌렀을 때*/
// $('#ekerl13').on('click',function(){
//     $('#first_13').attr('class', 'first_13 _kkkkkkk');
//     $("#wjwkd13").attr("disabled", true)
// })
// /*반려 동물 수수료 셀렉트 저장버튼 활성 눌렀을 때*/
// $('#ghkftjd').on("change",function(){
//     $("#wjwkd13").attr("disabled", false)
// })
//
// /*------------------------------------------------------------------------------------*/
// /* 청소비 팝업 */
// /*청소비 수정하기 버튼 눌렀을 때*/
// $('#pop33').on('click',function(){
//     $('#first_14').attr('class', 'first_14');
// })
// /*청소비 닫기 버튼 눌렀을 때*/
// $('#ekerl14').on('click',function(){
//     $('#first_14').attr('class', 'first_14 _kkkkkkk');
//     $("#wjwkd14").attr("disabled", true)
// })
//
// /*청소비 단기숙박 버튼 활성 눌렀을 때*/
// $('.first_17').on('click',function(){
//     $('.first_17').attr('class', 'first_17 _kkkkkkk')
//     $('.first_16').attr('class', 'first_16');
//     $('.first_15').attr('class', 'first_15');
//
// })
// /*청소비 단기숙박 버튼 활성 눌렀을 때*/
// $('.first_16').on('click',function(){
//     $('.first_16').attr('class', 'first_16 _kkkkkkk')
//     $('.first_17').attr('class', 'first_17');
//     $('.first_15').attr('class', 'first_15 _kkkkkkk');
//
// })
//
//
// /*------------------------------------------------------------------------------------*/
// /* 피드백 팝업 */
// /*피드백 버튼 눌렀을 때*/
// $('#popup44').on('click',function(){
//     $('#first_18').attr('class', 'first_18');
// })
// /*피드백 닫기 버튼 눌렀을 때*/
// $('#ekerl18').on('click',function(){
//     $('.first_18').attr('class', 'first_18 _kkkkkkk');
//     $("#button642").attr("disabled", true)
// })
// /*피드백셀렉트 버튼 활성 눌렀을 때*/
// $('._1fnnolo').on("change",function(){
//     $("#button642").attr("disabled", false)
// })
//
//
// /*------------------------------------------------------------------------------------*/
//
// /*스마트요금 수정하기 버튼 눌렀을 때*/
// $('#su19').on('click',function(){
//     $('#first_19').attr('class', 'first_19');
//     $('#susu19').attr('class', 'susu19 _kkkkkkk');
// })
// /*스마트요금 닫기 버튼 눌렀을 때*/
// $('#ekerl19').on('click',function(){
//     $('#first_19').attr('class', 'first_19 _kkkkkkk');
//     $('#susu19').attr('class', 'susu19');
//     $("#wjwkd19").attr("disabled", true)
// })
// /*스마트요금 취소 버튼 눌렀을 때*/
// $('#cnlth19').on('click',function(){
//     $('#first_19').attr('class', 'first_19 _kkkkkkk');
//     $('#susu19').attr('class', 'susu19');
//     $("#wjwkd12").attr("disabled", true)
// })
//
// /*스마트요금 수정하기 버튼 눌렀을 때*/
// $('#bu_20').on('click',function(){
//     $('#first_19').attr('class', 'first_19 _kkkkkkk');
//     $('#susu19').attr('class', 'susu19 _kkkkkkk');
//     $('#first_20').attr('class', 'first_20');
// })
// /*스마트요금 수정하기 버튼 눌렀을 때*/
// $('#bu_21').on('click',function(){
//     $('#first_20').attr('class', 'first_20 _kkkkkkk');
//     $('#susu19').attr('class', 'susu19 _kkkkkkk');
//     $('#first_19').attr('class', 'first_19');
// })
//
//
// /*스마트요금 닫기 버튼 눌렀을 때*/
// $('#ekerl20').on('click',function(){
//     $('#first_20').attr('class', 'first_20 _kkkkkkk');
//     $('#susu19').attr('class', 'susu19');
//     $("#wjwkd20").attr("disabled", true)
// })
// /*스마트요금 취소 버튼 눌렀을 때*/
// $('#cnlth20').on('click',function(){
//     $('#first_20').attr('class', 'first_20 _kkkkkkk');
//     $('#susu19').attr('class', 'susu19');
//     $("#wjwkd12").attr("disabled", true)
// })
//
//
//
// // 통화 로직
//
//
//     // let arr = ['AED', 'ARS', 'AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CZK', 'DKK', 'EUR', 'GBP', 'HKD',
//     //     'HRK', 'HUF', 'IDR', 'ILS', 'JPY', 'KRW', 'MAD', 'MXN', 'MYR', 'NOK', 'NZD', 'PEN', 'PHP', 'PLN', 'RON', 'RUB', 'SAR',
//     //     'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'UAH', 'USD', 'UYU', 'VND', 'ZAR']
//     // for(let i in arr){
//
// //     }
// // }

/*------------- vue -----------------*/

/*------------- 숙소 제목, 숙소 상태 vue -----------------*/
$(function () {
    setTimeout(function(){}, 1000);
    let id = parseInt($('#iddiv').text())

    /*------------- 숙소 제목, 숙소 상태 vue -----------------*/
    let lodgingBasic = new Vue({
        el: '#lodging_basic',
        data: {
            lodgingTitle: {},
            lodgingStatus: {}
        }
    });

    lodgingBasicsearch(id); // function 실행시켜주기 위해서 함수 호출

    function lodgingBasicsearch(id) {
        $.get("/api/room/hostoption15_1/" + id, function (response){
            lodgingBasic.data = response.data;
            lodgingBasic.lodgingTitle = response.data.lodgingTitle;
            lodgingBasic.lodgingStatus = response.data.lodgingStatus;
            $("#lodging_basic").val(response.data);
            /* 운영 상태에 따른 색상 변경 */
            if(lodgingBasic.lodgingStatus === '운영 중'){
                $('.status_color').attr('style', 'height: 10px; width: 10px; fill: rgb(0, 138, 5);')
            }

            if(lodgingBasic.lodgingStatus === '운영 중지'){
                $('.status_color').attr('style', 'height: 10px; width: 10px; fill: rgb(193, 53, 21);')
            }

            if(lodgingBasic.lodgingStatus === '비활성화'){
                $('.status_color').attr('style', 'height: 10px; width: 10px; fill: rgb(40, 40, 40);')
            }
        })
    }


    /*------------ 요금(기본 요금, 숙소 통화) vue-----------*/
    let lodgingPrice1 = new Vue({
        el: '#lodging_price1',
        data: {
            priceNormal: {},
            priceTo: {}
        },
        /*--- vue 버튼 -----*/
        methods: {
            /*스마트요금 수정하기 버튼 눌렀을 때*/
            openPopup1(){
                $('#first_19').attr('class', 'first_19');
                $('#susu19').attr('class', 'susu19 _kkkkkkk');
            },
            /*스마트요금 닫기 버튼 눌렀을 때*/
            closePopup1(){
                $('#first_19').attr('class', 'first_19 _kkkkkkk');
                $('#susu19').attr('class', 'susu19');
                $("#wjwkd19").attr("disabled", true)
            },
            /* 요금값 변경 시 버튼 활성화 */
            changeBtn1(){
                $("#wjwkd19").attr("disabled", false)
            },
            /* 변경된 기본 요금 업데이트 */
            saveBtn1(){
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode:"ok",
                    description:"ok",
                    data:{
                        lodgingId: parseInt($('#iddiv').text()) ,
                        priceNormal: parseInt($('#rlqhsdyrma').val())
                    }
                }
                $.post({
                    url: '/api/room/hostoption13',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response){
                        lodgingPrice1.priceNormal = response.data.priceNormal;
                        $('#first_19').attr('class', 'first_19 _kkkkkkk');
                        $('#susu19').attr('class', 'susu19');
                        $("#wjwkd19").attr("disabled", true)
                    },
                    error: function(){
                        location.reload();
                    }
                });
            },
            /*숙소 통화 수정하기 버튼 눌렀을 때*/
            openPopup2() {
                $('#first_1').attr('class', 'first_1');
                $('#susu1').attr('class', 'susu1 _kkkkkkk');
            },
            /*숙소 통화 닫기 버튼 눌렀을 때*/
            closePopup2(){
                $('#first_1').attr('class', 'first_1 _kkkkkkk');
                $('#susu1').attr('class', 'susu1');
                $("#wjwkd1").attr("disabled", true)
            },
            /*숙소 통화 버튼 눌렀을 때 저장버튼 활성*/
            changeBtn2(){
                $("#wjwkd1").attr("disabled", false)
            },
            /*숙소 통화 저장버튼 눌렀을때 수정된 통화 업데이트*/
            saveBtn2(){
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode:"ok",
                    description:"ok",
                    data:{
                        lodgingId: parseInt($('#iddiv').text()) ,
                        priceTo: $('#select1').val()
                    }
                }

                $.post({
                    url: '/api/room/hostedit_6',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(){
                        location.href='/pages/host_edit_pricing/' + parseInt($('#iddiv').text());
                    },
                    error: function(){
                        location.reload();
                    }
                });
            }
        }
    });

    lodgingPrice1search(id); // function 실행시켜주기 위해서 함수 호출

    function lodgingPrice1search(id) {
        $.get("/api/room/lodging_price_1/" + id, function (response) {
            lodgingPrice1.data = response.data;
            lodgingPrice1.priceNormal = response.data.priceNormal;
            lodgingPrice1.priceTo = response.data.priceTo;
            $("#lodging_price1").val(response.data);
            // 숙소 통화 로직
            let sign = lodgingPrice1.priceTo
            if(sign === 'AED') {
                $('.logic_priceTo').text(' د.إ')
            }
            if(sign === 'ARS') {
                $('.logic_priceTo').text('AR$')
            }
            if(sign === 'AUD') {
                $('.logic_priceTo').text('A$')
            }
            if(sign === 'BGN') {
                $('.logic_priceTo').text('лв')
            }
            if(sign === 'BRL') {
                $('.logic_priceTo').text('R$')
            }
            if(sign === 'CAD') {
                $('.logic_priceTo').text('C$')
            }
            if(sign === 'CHF') {
                $('.logic_priceTo').text('Fr')
            }
            if(sign === 'CLP') {
                $('.logic_priceTo').text('CLP$')
            }
            if(sign === 'CNY') {
                $('.logic_priceTo').text('¥')
            }
            if(sign === 'COP') {
                $('.logic_priceTo').text('COL$')
            }
            if(sign === 'CRC') {
                $('.logic_priceTo').text('₡')
            }
            if(sign === 'CZK') {
                $('.logic_priceTo').text('Kč')
            }
            if(sign === 'DKK') {
                $('.logic_priceTo').text('kr')
            }
            if(sign === 'EUR') {
                $('.logic_priceTo').text('€')
            }
            if(sign === 'GBP') {
                $('.logic_priceTo').text('£')
            }
            if(sign === 'HKD') {
                $('.logic_priceTo').text('HK$')
            }
            if(sign === 'HRK') {
                $('.logic_priceTo').text('KN')
            }
            if(sign === 'HUF') {
                $('.logic_priceTo').text('fillér')
            }
            if(sign === 'IDR') {
                $('.logic_priceTo').text('Rp')
            }
            if(sign === 'ILS') {
                $('.logic_priceTo').text('₪')
            }
            if(sign === 'JPY') {
                $('.logic_priceTo').text('¥')
            }
            if(sign === 'KRW') {
                $('.logic_priceTo').text('₩')
            }
            if(sign === 'MAD') {
                $('.logic_priceTo').text('.د.م')
            }
            if(sign === 'MXN') {
                $('.logic_priceTo').text('Mex$')
            }
            if(sign === 'MYR') {
                $('.logic_priceTo').text('RM')
            }
            if(sign === 'NOK') {
                $('.logic_priceTo').text('krN')
            }
            if(sign === 'NZD') {
                $('.logic_priceTo').text('NZ$')
            }
            if(sign === 'PEN') {
                $('.logic_priceTo').text('S/')
            }
            if(sign === 'PHP') {
                $('.logic_priceTo').text('₱')
            }
            if(sign === 'PLN') {
                $('.logic_priceTo').text('zł')
            }
            if(sign === 'RON') {
                $('.logic_priceTo').text('leu')
            }
            if(sign === 'RUB') {
                $('.logic_priceTo').text('₽')
            }
            if(sign === 'SAR') {
                $('.logic_priceTo').text('SAR')
            }
            if(sign === 'SEK') {
                $('.logic_priceTo').text('kr')
            }
            if(sign === 'SGD') {
                $('.logic_priceTo').text('S$')
            }
            if(sign === 'THB') {
                $('.logic_priceTo').text('฿')
            }
            if(sign === 'TRY') {
                $('.logic_priceTo').text('₺')
            }
            if(sign === 'TWD') {
                $('.logic_priceTo').text('NT$')
            }
            if(sign === 'UAH') {
                $('.logic_priceTo').text('₴')
            }
            if(sign === 'USD') {
                $('.logic_priceTo').text('$')
            }
            if(sign === 'UYU') {
                $('.logic_priceTo').text('$U')
            }
            if(sign === 'VND') {
                $('.logic_priceTo').text('₫')
            }
            if(sign === 'ZAR') {
                $('.logic_priceTo').text('R')
            }
        })
    }
    /*-------------- 추가요금(청소비, 반려동물 수수료, 추가 게스트 수수료, 주말 1박 요금) vue --------------*/
    let lodgingPrice2 = new Vue({
        el: '#lodging_price2',
        data: {
            priceClean: {},
            priceCleanShort: {},
            pricePet: {},
            priceExtra: {},
            priceWeekend: {}
        },
        methods: {
            /*청소비 수정하기 버튼 눌렀을 때*/
            openPopup3(){
                $('#first_14').attr('class', 'first_14');
            },
            /*청소비 닫기 버튼 눌렀을 때*/
            closePopup3(){
                $('#first_14').attr('class', 'first_14 _kkkkkkk');
                $("#wjwkd14").attr("disabled", true)
            },
            saveBtn3(){
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode:"ok",
                    description:"ok",
                    data:{
                        lodgingId: parseInt($('#iddiv').text()) ,
                        priceClean: $('#cjdthql').val(),
                        priceCleanShort: $('#cjdthqlsub').val()
                    }
                }

                $.post({
                    url: '/api/room/hostedit_7',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response){
                        lodgingPrice2.priceClean = response.data.priceClean;
                        lodgingPrice2.priceCleanShort = response.data.priceCleanShort;
                        $('#first_14').attr('class', 'first_14 _kkkkkkk');
                        $("#wjwkd14").attr("disabled", true)
                        // location.href='/pages/host_edit_pricing/' + parseInt($('#iddiv').text());
                    },
                    error: function(){
                        location.reload();
                    }
                });
            },
            /* 단기 숙박 청소비 열기 */
            openSub3(){
                $('.first_17').attr('class', 'first_17 _kkkkkkk')
                $('.first_16').attr('class', 'first_16');
                $('.first_15').attr('class', 'first_15');
            },
            /* 단기 숙박 청소비 닫기 */
            closeSub3(){
                $('.first_16').attr('class', 'first_16 _kkkkkkk')
                $('.first_17').attr('class', 'first_17');
                $('.first_15').attr('class', 'first_15 _kkkkkkk');
            },
            /* 반려동물 수수료 수정하기 버튼 눌렀을 때 */
            openPopup4(){
                $('#first_13').attr('class', 'first_13');
            },
            /* 반려동물 수수료 닫기 버튼 눌렀을 때 */
            closePopup4(){
                $('#first_13').attr('class', 'first_13 _kkkkkkk');
                $("#wjwkd13").attr("disabled", true)
            },
            /* 반려동물 수수료 업데이트 */
            saveBtn4(){
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode:"ok",
                    description:"ok",
                    data:{
                        lodgingId: parseInt($('#iddiv').text()),
                        pricePet: $('#ghkftjd').val()
                    }
                }

                $.post({
                    url: '/api/room/hostedit_8',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response){
                        lodgingPrice2.pricePet = response.data.pricePet;
                        $('#first_13').attr('class', 'first_13 _kkkkkkk');
                        $("#wjwkd13").attr("disabled", true)
                        // location.href='/pages/host_edit_pricing/' + parseInt($('#iddiv').text());
                    },
                    error: function(){
                        location.reload();
                    }
                });
            },
            /* 추가 게스트 수수료 수정하기 버튼 눌렀을 때 */
            openPopup5(){
                $('#first_12').attr('class', 'first_12');
                $('#susu12').attr('class', 'susu12 _kkkkkkk');
            },
            /*  추가 게스트 수수료 닫기 버튼 눌렀을 때 */
            closePopup5(){
                $('#first_12').attr('class', 'first_12 _kkkkkkk');
                $('#susu12').attr('class', 'susu12');
                $("#wjwkd12").attr("disabled", true)
            },
            /*추가게스트 인풋 변경됐을 때 버튼 활성화*/
            changeBtn5(){
                $("#wjwkd12").attr("disabled", false)
            },
            /* 추가 게스트 업데이트 */
            saveBtn5(){
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode:"ok",
                    description:"ok",
                    data:{
                        lodgingId: parseInt($('#iddiv').text()) ,
                        priceExtra: parseInt($('#cnrkrptmxm').val())
                    }
                }

                $.post({
                    url: '/api/room/hostedit_9_1',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response){
                        lodgingPrice2.priceExtra = response.data.priceExtra;
                        $('#first_12').attr('class', 'first_12 _kkkkkkk');
                        $('#susu12').attr('class', 'susu12');
                        $("#wjwkd12").attr("disabled", true)
                        // location.href='/pages/host_edit_pricing/' + parseInt($('#iddiv').text());
                    },
                    error: function(){
                        location.reload();
                    }
                });
            },
            /* 주말 1박 요금 수정하기 버튼 눌렀을 때 */
            openPopup6(){
                $('#first_2').attr('class', 'first_2');
                $('#susu2').attr('class', 'susu2 _kkkkkkk');
            },
            /* 주말 1박 요금 닫기 버튼 눌렀을 때 */
            closePopup6(){
                $('#first_2').attr('class', 'first_2 _kkkkkkk');
                $('#susu2').attr('class', 'susu2');
                $("#wjwkd2").attr("disabled", true)
            },
            /* 주말 1박 요금 변경시 저장버튼 활성화*/
            changeBtn6(){
                $("#wjwkd2").attr("disabled", false)
            },
            // 주말 1박 요금 업데이트
            saveBtn6(){
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode:"ok",
                    description:"ok",
                    data:{
                        lodgingId: parseInt($('#iddiv').text()) ,
                        priceWeekend: $('#weekend').val()
                    }
                }

                $.post({
                    url: '/api/room/hostedit_9',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response){
                        lodgingPrice2.priceWeekend = response.data.priceWeekend;
                        $('#first_2').attr('class', 'first_2 _kkkkkkk');
                        $('#susu2').attr('class', 'susu2');
                        $("#wjwkd2").attr("disabled", true)
                        // location.href='/pages/host_edit_pricing/' + parseInt($('#iddiv').text());
                    },
                    error: function(){
                        location.reload();
                    }
                });
            }
        }
    });

    lodgingPrice2search(id);

    function lodgingPrice2search(id) {
        $.get("/api/room/lodging_price_1/" +id, function (response) {
            console.dir(response)
            lodgingPrice2.data = response.data;
            lodgingPrice2.priceClean = response.data.priceClean;
            lodgingPrice2.priceCleanShort = response.data.priceCleanShort
            lodgingPrice2.pricePet = response.data.pricePet;
            lodgingPrice2.priceExtra = response.data.priceExtra;
            lodgingPrice2.priceWeekend = response.data.priceWeekend;
            console.log(lodgingPrice2.data)
            $("#lodging_price1").val(response.data);
        })
    }

    let lodigngDuration = new Vue({
        el: '#lodigng_duration',
        data: {
            durationMin: {},
            durationDaymin: {},
            durationMax: {},
            durationCustom: {},
            durationCustommin: {},
            durationCustomdays: {}
        },
        methods: {
            /* 최소 숙박 일수 수정 버튼 클릭 시 */
            openPopup7(){
                $('#first_10').attr('class', 'first_10');
                $('#susu10').attr('class', 'susu10 _kkkkkkk');
            },
            /* 최소 숙박 일수 닫기 버튼 클릭 시 */
            closePopup7(){
                $('#first_10').attr('class', 'first_11 _kkkkkkk');
                $('#susu10').attr('class', 'susu10');
                $("#wjwkd10").attr("disabled", true)
            },
            /* 최소 숙박 일수 값 변경 시 버튼 활성화 */
            changeBtn7(){
                $("#wjwkd10").attr("disabled", false)
            },
            /* 최소 숙박일수 맞춤 설정하기 클릭 시 */
            openSub7(){
                $('#first_11').attr('class', 'first_11');
                $('#first_10').attr('class', 'first_10 _kkkkkkk');
            },
            /* 최소 숙박일수 맞춤 닫기 클릭 시 */
            closeSub7(){
                $('#first_11').attr('class', 'first_11 _kkkkkkk');
                $('#susu10').attr('class', 'susu10');
                $("#wjwkd11").attr("disabled", true)
            },
            /* 최소 숙박 일수 값 업데이트 */
            saveBtn7(){
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode:"ok",
                    description:"ok",
                    data:{
                        lodgingId: parseInt($('#iddiv').text()) ,
                        durationMin: $('#duration_min').val()
                    }
                }

                $.post({
                    url: '/api/room/hostedit_10',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response){
                        lodigngDuration.durationMin = response.data.durationMin;
                        $('#first_11').attr('class', 'first_11 _kkkkkkk');
                        $('#susu10').attr('class', 'susu10');
                        $("#wjwkd11").attr("disabled", true)
                        // location.href='/pages/host_edit_pricing/' + parseInt($('#iddiv').text());
                    },
                    error: function(){
                        location.reload();
                    }
                });
            },
            /* 최대 숙박 일수 수정 버튼 클릭 시 */
            openPopup8(){
                $('#first_3').attr('class', 'first_3');
                $('#susu3').attr('class', 'susu3 _kkkkkkk');
            },
            /* 최대 숙박 일수 닫기 버튼 클릭 시 */
            closePopup8(){
                $('#first_3').attr('class', 'first_3 _kkkkkkk');
                $('#susu3').attr('class', 'susu2');
                $("#wjwkd3").attr("disabled", true)
            },
            /* 최대 숙박 일수 값 변경 시 버튼 활성화 */
            changeBtn8(){
                $("#wjwkd3").attr("disabled", false)
            },
            /* 최대 숙박 일 수 값 업데이트 */
            saveBtn8(){
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode:"ok",
                    description:"ok",
                    data:{
                        lodgingId: parseInt($('#iddiv').text()) ,
                        durationMax: $('#xprtmxm3').val()
                    }
                }

                $.post({
                    url: '/api/room/hostedit_12',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response){
                        lodigngDuration.durationMax = response.data.durationMax;
                        $('#first_3').attr('class', 'first_3 _kkkkkkk');
                        $('#susu3').attr('class', 'susu2');
                        $("#wjwkd3").attr("disabled", true)
                        // location.href='/pages/host_edit_pricing/' + parseInt($('#iddiv').text());
                    },
                    error: function(){
                        location.reload();
                    }
                });
            },
            /* 맞춤 숙박 기간 수정 버튼 클릭 시 */
            openPopup9(){
                $('#first_8').attr('class', 'first_8');
                $('#susu8').attr('class', 'susu8 _kkkkkkk');
            },
            /* 맞춤 숙박 기간 닫기 버튼 클릭 시 */
            closePopup9(){
                $('#first_8').attr('class', 'first_8 _kkkkkkk');
                $('#susu8').attr('class', 'susu8');
                $("#wjwkd8").attr("disabled", true)
            },
            /* 맞춤 숙박 기간 값 변경시 버튼 활성화 */
            changeBtn9(){
                $("#wjwkd8").attr("disabled", false)
            },
            /* 다른 요건 추가하기 버튼 클릭 시 */
            openSub9(){
                $('#first_9').attr('class', 'first_9');
                $('#first_8').attr('class', 'first_8 _kkkkkkk');
            },
            /* 다른 요건 추가하기 닫기 버튼 클릭 시 */
            closeSub9(){
                $('#first_9').attr('class', 'first_9 _kkkkkkk');
                $('#susu8').attr('class', 'susu8');
                $("#wjwkd9").attr("disabled", true)
            },
            /* 맞춤 숙박 기간 값 업데이트 */
            saveBtn9(){
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode:"ok",
                    description:"ok",
                    data:{
                        lodgingId: parseInt($('#iddiv').text()),
                        durationCustom: $('#duration_custom').val(),
                        durationCustommin: parseInt($('#duration_custommin').val()),
                        durationCustomdays: $('#duration_customdays').val()
                    }
                }

                $.post({
                    url: '/api/room/hostedit_13',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response){
                        lodigngDuration.durationCustom = response.data.durationCustom;
                        lodigngDuration.durationCustommin = response.data.durationCustommin;
                        lodigngDuration.durationCustomdays = response.data.durationCustomdays;
                        $('#first_8').attr('class', 'first_8 _kkkkkkk');
                        $('#susu8').attr('class', 'susu8');
                        $("#wjwkd8").attr("disabled", true)
                        // location.href='/pages/host_edit_pricing/' + parseInt($('#iddiv').text());
                    },
                    error: function(){
                        location.reload();
                    }
                });
            }
        }
    });

    lodigngDurationsearch(id);

    function lodigngDurationsearch(id) {
        $.get("/api/room/price_weekend/" + id, function (response) {
            console.dir(lodigngDuration.data)
            lodigngDuration.data = response.data;
            lodigngDuration.durationMin = response.data.durationMin;
            lodigngDuration.durationDaymin = response.data.durationDaymin;
            lodigngDuration.durationMax = response.data.durationMax;
            lodigngDuration.durationCustom = response.data.durationCustom;
            lodigngDuration.durationCustommin = response.data.durationCustommin;
            lodigngDuration.durationCustomdays = response.data.durationCustomdays;
            console.log(lodigngDuration.data)
            $("#lodigng_duration").val(response.data);
        })
    }

    let lodgingIsresv = new Vue({
        el: '#lodging_isresv',
        data: {
            isresvDueday: {},
            isresvDuetime: {},
            isresvReady: {},
            isresvLimit: {},
            isresvStart: {},
            isresvEnd: {}
        },
        methods: {
            /* 예약 마감 시한  수정 클릭 시 */
            openPopup10(){
                $('#first_4').attr('class', 'first_4');
                $('#susu4').attr('class', 'susu4 _kkkkkkk');
            },
            /* 예약 마감 시한 닫기 클릭 시 */
            closePopup10(){
                $('#first_4').attr('class', 'first_4 _kkkkkkk');
                $('#susu4').attr('class', 'susu4');
                $("#wjwkd4").attr("disabled", true)
            },
            changeBtn10(){
                $("#wjwkd4").attr("disabled", false)
            },
            saveBtn10(){
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode:"ok",
                    description:"ok",
                    data:{
                        lodgingId: parseInt($('#iddiv').text()),
                        isresvDueday: $('#select4').val(),
                        isresvDuetime: $('#select5').val()
                    }
                }

                $.post({
                    url: '/api/room/hostedit_14',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response){
                        lodgingIsresv.isresvDueday = response.data.isresvDueday;
                        lodgingIsresv.isresvDuetime = response.data.isresvDuetime;
                        $('#first_4').attr('class', 'first_4 _kkkkkkk');
                        $('#susu4').attr('class', 'susu4');
                        $("#wjwkd4").attr("disabled", true)
                        // location.href='/pages/host_edit_pricing/' + parseInt($('#iddiv').text());
                    },
                    error: function(){
                        location.reload();
                    }
                });
            },
            /* 준비시간 수정 클릭 시 */
            openPopup11(){
                $('#first_5').attr('class', 'first_5');
                $('#susu5').attr('class', 'susu5 _kkkkkkk');
            },
            /* 준비시간 닫기 클릭 시 */
            closePopup11(){
                $('#first_5').attr('class', 'first_5 _kkkkkkk');
                $('#susu5').attr('class', 'susu5');
                $("#wjwkd5").attr("disabled", true)
            },
            /* 준비시간 값 변경 시 */
            changeBtn11(){
                $("#wjwkd5").attr("disabled", false)
            },
            saveBtn11(){
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode:"ok",
                    description:"ok",
                    data:{
                        lodgingId: parseInt($('#iddiv').text()),
                        isresvReady: $('#select6').val()
                    }
                }

                $.post({
                    url: '/api/room/hostedit_15',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response){
                        lodgingIsresv.isresvReady = response.data.isresvReady;
                        $('#first_5').attr('class', 'first_5 _kkkkkkk');
                        $('#susu5').attr('class', 'susu5');
                        $("#wjwkd5").attr("disabled", true)
                        // location.href='/pages/host_edit_pricing/' + parseInt($('#iddiv').text());
                    },
                    error: function(){
                        location.reload();
                    }
                });
            },
            /* 예약 가능 기간 수정 클릭 시 */
            openPopup12(){
                $('#first_6').attr('class', 'first_6');
                $('#susu6').attr('class', 'susu6 _kkkkkkk');
            },
            /* 예약 가능 기간 닫기 클릭 시 */
            closePopup12(){
                $('#first_6').attr('class', 'first_6 _kkkkkkk');
                $('#susu6').attr('class', 'susu6');
                $("#wjwkd6").attr("disabled", true)
            },
            changeBtn12(){
                $("#wjwkd6").attr("disabled", false)
            },
            saveBtn12(){
                let checkinNN = document.querySelector("#date1").value
                let checkin1 = checkinNN.substring(0,4)
                let checkin2 = checkinNN.substring(5,7)
                let checkin3 = checkinNN.substring(8,10)
                let checkin = checkin1+'-'+checkin2+'-'+checkin3+'T00:00:00'

                let checkoutNN = document.querySelector("#date2").value
                let checkout1 = checkoutNN.substring(0,4)
                let checkout2 = checkoutNN.substring(5,7)
                let checkout3 = checkoutNN.substring(8,10)
                let checkout = checkout1+'-'+checkout2+'-'+checkout3+'T00:00:00'

                $('#dateval1').text(checkin)
                $('#dateval2').text(checkout)
                let jsonData = {
                    data: {
                        lodgingId: parseInt($('#iddiv').text()),
                        isresvStart: $('#dateval1').text(),
                        isresvEnd: $('#dateval2').text()
                    }
                }
                $.post({
                    url: '/api/room/hostedit_16',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function (response) {
                        location.href='/pages/host_edit_pricing/' + parseInt($('#iddiv').text());
                    },
                    error: function () {
                        alert('등록실패!');
                    }
                });
            }

            // /* 체크인 요일 제한 수정 클릭 시 */
            // openPopup13(){
            //     $('#first_7').attr('class', 'first_7');
            //     $('#susu7').attr('class', 'susu7 _kkkkkkk');
            // },
            // /* 체크인 요일 제한 닫기 클릭 시 */
            // closePopup13(){
            //     $('#first_7').attr('class', 'first_7 _kkkkkkk');
            //     $('#susu7').attr('class', 'susu7');
            //     $("#wjwkd7").attr("disabled", true)
            // }
        }
    });

    lodgingIsresvsearch(id);

    function lodgingIsresvsearch(id) {
        $.get("/api/room/lodging_isresv_1/" + id, function (response) {
            console.dir(response)
            lodgingIsresv.data = response.data;
            lodgingIsresv.isresvDueday = response.data.isresvDueday;
            lodgingIsresv.isresvDuetime = response.data.isresvDuetime;
            lodgingIsresv.isresvReady = response.data.isresvReady;
            lodgingIsresv.isresvLimit = response.data.isresvLimit;
            lodgingIsresv.isresvStart = response.data.isresvStart;
            lodgingIsresv.isresvEnd = response.data.isresvEnd;
            console.log(lodgingIsresv.data)
            $("#lodging_isresv").val(response.data);
            let start = lodgingIsresv.isresvStart;
            let end = lodgingIsresv.isresvEnd
            $('#tnrqkrrlrks').text((start).substring(0, 10) + ' 부터 ' + (end).substring(0, 10) +' 까지')
            if(start === null && end === null){
                $('#tnrqkrrlrks').text('선택되지 않음');
            }
        })
    }

})
