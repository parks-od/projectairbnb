// 공유탭 전환
$('#tab--account-settings-main-navigation-tabs--0').click(function(){
    $('#panel--account-settings-main-navigation-tabs--0').show();
    $('#panel--account-settings-main-navigation-tabs--1').hide();
    $('#tab--account-settings-main-navigation-tabs--0').attr('class', '_fd0fliz')   
    $('#tab--account-settings-main-navigation-tabs--1').attr('class', '_tns11i')
})

// 서비스탭 전환
$('#tab--account-settings-main-navigation-tabs--1').click(function(){
    $('#panel--account-settings-main-navigation-tabs--1').show();
    $('#panel--account-settings-main-navigation-tabs--0').hide();
    $('#tab--account-settings-main-navigation-tabs--1').attr('class', '_fd0fliz')
    $('#tab--account-settings-main-navigation-tabs--0').attr('class', '_tns11i')
})



// 활동 공유 토글
$('#btn1').click(function(){
    $(this).toggleClass('_1x8lx0do _1hzx1vsg');
    $('#toggle1').toggleClass('_16g1cyy8 _vr1ztso');
    $('#btn1 svg').toggle();
})

// 데이터 공유 토글
$('#btn2').click(function(){
    $(this).toggleClass('_1x8lx0do _1hzx1vsg');
    $('#toggle2').toggleClass('_16g1cyy8 _vr1ztso');
    $('#btn2 svg').toggle();
})

// 자세히 알아보기 열기
$('._15rpys7s').click(function(){
    $('#popup1').show();
})
// 자세히 알아보기 닫기
$('._oda838').click(function(){
    $('#popup1').hide();
})


