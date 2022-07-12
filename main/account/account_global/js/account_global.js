
// 선호하는 언어 수정
$('.btn1').click(function(){
    $('.btn_cancel1').show();
    $(this).hide();
    $('.dropdown1').show();
    $('.content1').text('선호하는 언어에 따라 에어비앤비 페이지의 내용과 커뮤니케이션 방식이 업데이트됩니다.');
    $('.btn_save1').css('visibility', 'visible');
})

// 선호하는 언어 취소
$('.btn_cancel1').click(function(){
    $('.btn1').show();
    $(this).hide();
    $('.dropdown1').hide();
    $('.content1').text('한국어');
    $('.btn_save1').css('visibility', 'hidden');
})

// 선호하는 통화 수정
$('.btn2').click(function(){
    $('.btn_cancel2').show();
    $(this).hide();
    $('.dropdown2').show();
    $('.content2').hide();
    $('.btn_save2').css('visibility', 'visible');
})

// 선호하는 통화 취소
$('.btn_cancel2').click(function(){
    $('.btn2').show();
    $(this).hide();
    $('.dropdown2').hide();
    $('.content2').show();
    $('.btn_save2').css('visibility', 'hidden');
})

// 시간대 수정
$('.btn3').click(function(){
    $('.btn_cancel3').show();
    $(this).hide();
    $('.dropdown3').show();
    $('.content3').hide();
    $('.btn_save3').css('visibility', 'visible');
})

// 시간대 취소
$('.btn_cancel3').click(function(){
    $('.btn3').show();
    $(this).hide();
    $('.dropdown3').hide();
    $('.content3').show();
    $('.btn_save3').css('visibility', 'hidden');
})