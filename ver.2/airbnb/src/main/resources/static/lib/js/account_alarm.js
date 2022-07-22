/* 계정으로 전환 */
$('#tab--notification-preferences--1').on('click', function(){
    $(this).attr('class', '_fd0fliz');
    $('#tab--notification-preferences--0').attr('class', '_tns11i');
    $('#panel--notification-preferences--1').show();
    $('#panel--notification-preferences--0').hide();
})
/* 혜택 및 업데이트 전환 */
$('#tab--notification-preferences--0').on('click', function(){
    $(this).attr('class', '_fd0fliz');
    $('#tab--notification-preferences--1').attr('class', '_tns11i');
    $('#panel--notification-preferences--1').hide();
    $('#panel--notification-preferences--0').show();
})

/* 실적 및 축하 수정*/
$('.btn1').on('click', function(){
    $('#popup1').show();
    $('.title').text('실적 및 축하');
    $('.content').text('호스팅에서 의미 있는 순간에 도달할 때나 슈퍼호스트 지위를 달성했을 때 소식을 받아보세요.');
})

/* 유용한 팁과 정보 */
$('.btn2').on('click', function(){
    $('#popup2').show();
    $('.title').text('유용한 팁과 정보');
    $('.content').text('데이터에 기반한 유용한 팁과 정보로 호스팅 목표 달성에 도움을 받으세요.');
    $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').show();
})

/* 요금 트렌드 및 제안 */
$('.btn3').on('click', function(){
    $('#popup3').show();
    $('.title').text('요금 트렌드 및 제안');
    $('.content').text('데이터에 기반한 유용한 팁과 정보로 요금을 최적화하세요.');
    $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').show();
})

/* 호스팅 혜택 */
$('.btn4').on('click', function(){
    $('#popup4').show();
    $('.title').text('호스팅 혜택');
    $('.content').text('제휴사 제품 할인, 특별 프로모션 등 에어비앤비가 드리는 혜택을 이용하세요.');
    $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').show();
})

/* 뉴스 및 업데이트 */
$('.btn5').on('click', function(){
    $('#popup5').show();
    $('.title').text('뉴스 및 업데이트');
    $('.content').text('에어비앤비에서 선보이는 새로운 기능, 앱·서비스 변경 사항에 대한 정보를 가장 먼저 받아보세요.');
    $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').show();
})

/* 현지 법률과 규정 */
$('.btn6').on('click', function(){
    $('#popup6').show();
    $('.title').text('현지 법률과 규정');
    $('.content').text('호스팅 지역의 단기 임대 법규에 대한 최신 소식을 받아보세요.');
    $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').show();
})

/* 여행 아이디어 및 특가 */
$('.btn7').on('click', function(){
    $('#popup7').show();
    $('.title').text('여행 아이디어 및 특가');
    $('.content').text('영감을 주는 숙소, 체험, 특가 정보');
    $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
})

/* 여행 계획 */
$('.btn8').on('click', function(){
    $('#popup8').show();
    $('.title').text('여행 계획');
    $('.content').text('에어비앤비가 추천해드리는 숙소와 체험을 보며 여행 계획을 세워보세요.')
    $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
})

/* 뉴스 및 프로그램 */
$('.btn9').on('click', function(){
    $('#popup9').show();
    $('.title').text('뉴스 및 프로그램');
    $('.content').text('새로운 프로그램에 관한 소식과 뉴스를 받아보세요.')
    $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
})

/* 피드백 */
$('.btn10').on('click', function(){
    $('#popup10').show();
    $('.title').text('피드백');
    $('.content').text('에어비앤비에 대한 만족도와 개선 방안을 알려주세요.')
    $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
})

/* 여행 규정 */
$('.btn11').on('click', function(){
    $('#popup11').show();
    $('.title').text('여행 규정');
    $('.content').text('스마트한 여행을 위해 최신 여행 규정을 확인하세요.')
    $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
})

/* 팝업 닫기 */
$('._e296pg > svg').on('click', function(){
    $('#popup1').hide();
    $('#popup2').hide();
    $('#popup3').hide();
    $('#popup4').hide();
    $('#popup5').hide();
    $('#popup6').hide();
    $('#popup7').hide();
    $('#popup8').hide();
    $('#popup9').hide();
    $('#popup10').hide();
    $('#popup11').hide();
    $('#popup12').hide();
    $('#popup13').hide();
    $('#popup14').hide();
    $('#popup15').hide();
    $('#popup16').hide();
    $('#popup17').hide();
    $('#popup18').hide();
})

/* 팝업 토글 버튼 */
$('#toggle1').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round1').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle1 ._svg').toggle();
})  

$('#toggle2').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round2').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle2 ._svg').toggle();
})  

$('#toggle3').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round3').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle3 ._svg').toggle();
})  

//

$('#toggle4').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round4').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle4 svg').toggle();
})  

$('#toggle5').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round5').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle5 svg').toggle();
})  

$('#toggle6').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round6').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle6 svg').toggle();
})  

//

$('#toggle7').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round7').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle7 svg').toggle();
})  

$('#toggle8').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round8').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle8 svg').toggle();
})  

$('#toggle9').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round9').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle9 svg').toggle();
})  

//

$('#toggle10').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round10').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle10 svg').toggle();
})  

$('#toggle11').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round11').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle11 svg').toggle();
})  

$('#toggle12').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round12').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle12 svg').toggle();
})  

//

$('#toggle13').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round13').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle13 svg').toggle();
})  

$('#toggle14').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round14').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle14 svg').toggle();
})  

$('#toggle15').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round15').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle15 svg').toggle();
})  

//

$('#toggle16').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round16').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle16 svg').toggle();
})  

$('#toggle17').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round17').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle17 svg').toggle();
})  

$('#toggle18').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round18').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle18 svg').toggle();
})

//

$('#toggle19').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round19').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle19 svg').toggle();
})  

$('#toggle20').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round20').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle20 svg').toggle();
})

//

$('#toggle21').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round21').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle21 svg').toggle();
})  

$('#toggle22').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round22').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle22 svg').toggle();
})

//

$('#toggle23').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round23').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle23 svg').toggle();
})  

$('#toggle24').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round24').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle24 svg').toggle();
})

//

$('#toggle25').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round25').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle25 svg').toggle();
})  

$('#toggle26').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round26').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle26 svg').toggle();
})

//

$('#toggle27').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round27').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle27 svg').toggle();
})  

$('#toggle28').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round28').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle28 svg').toggle();
})

//

$('#toggle29').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round29').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle29 svg').toggle();
})

//

$('#toggle30').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round30').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle30 svg').toggle();
})

//

$('#toggle31').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round31').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle31 svg').toggle();
})

//

$('#toggle32').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round32').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle32 svg').toggle();
})

//

$('#toggle33').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round33').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle33 svg').toggle();
})

$('#toggle34').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round34').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle34 svg').toggle();
})

//

$('#toggle35').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round35').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle35 svg').toggle();
})

$('#toggle36').on('click', function(){
    $(this).toggleClass("_8lt637i _17z7clia");
    $('#toggle_round36').toggleClass("_16g1cyy8 _vr1ztso");
    $('#toggle36 svg').toggle();
})



// 모든 마케팅 이메일에 대한 수신 동의 취소 팝업창 
$('#undefinedEMAIL-row-checkbox').on('click', function(){
    $('#popup18').show();
})

//수신 동의 취소
$('._za4ekfm').on('click', function(){
    $('#popup18').hide();
})

// //수신 거부
// $('._1ku51f04').on('click', function(){
//     $('#undefinedEMAIL-row-checkbox').attr('class','._smt4n2a')
//     $('._41yoza').attr('class','._1v5cvwv4')
//     $('#popup18').hide();
// })

// 계정 활동
$('.btn12').on('click', function(){
    $('#popup12').show();
    $('.title').text('계정 활동');
    $('.content').text('예약, 계정 활동, 에어비앤비 이용 약관과 같은 법률 정보에 관한 최신 소식을 받아보세요.')
    $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
    $('#HOST_LISTING_ACTIVITYEMAIL').attr('class', 'rcem0st d750e13 dir dir-ltr')
    
})

// 숙소 활동
$('.btn13').on('click', function(){
    $('#popup13').show();
    $('.title').text('숙소 활동');
    $('.content').text('예약 알림으로 모든 예약을 효율적으로 관리하세요.')
    $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
    $('#HOST_LISTING_ACTIVITYEMAIL').attr('class', 'rcem0st d750e13 dir dir-ltr')
})

// 게스트 정책
$('.btn14').on('click', function(){
    $('#popup14').show();
    $('.title').text('게스트 정책');
    $('.content').text('에어비앤비 이용에 관한 중요한 정보를 받아보세요.')
    $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
    $('#HOST_LISTING_ACTIVITYEMAIL').attr('class', 'rcem0st d750e13 dir dir-ltr')
})

// 호스트 정책
$('.btn15').on('click', function(){
    $('#popup15').show();
    $('.title').text('호스트 정책');
    $('.content').text('에어비앤비 규정 및 정책 변경 사항, 세금 및 규제 관련 최신 소식을 받아보세요')
    $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
    $('#HOST_LISTING_ACTIVITYEMAIL').attr('class', 'rcem0st d750e13 dir dir-ltr')
})

// 알림
$('.btn16').on('click', function(){
    $('#popup16').show();
    $('.title').text('알림');
    $('.content').text('예약 및 계정 활동과 관련한 중요한 알림을 받아보세요.')
    $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
    $('#HOST_LISTING_ACTIVITYEMAIL').attr('class', 'rcem0st d750e13 dir dir-ltr')
})

//  게스트, 호스트가 보내는 메시지
$('.btn17').on('click', function(){
    $('#popup17').show();
    $('.title').text('메시지');
    $('.content').text('호스트나 게스트가 보낸 중요한 메시지를 놓치지 말고 확인하세요.')
    $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
    $('#HOST_LISTING_ACTIVITYEMAIL').attr('class', 'rcem0st d750e13 dir dir-ltr')
})






