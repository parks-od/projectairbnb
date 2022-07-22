// 환불 정책 수정 팝업

$('#btn1').on('click', function(){
    $('#content1').hide()
    $('#popup1').css('display', 'block')
    $("#save_btn1").attr("disabled", true)
})

$('#close_btn1').on('click', function(){
    $('#content1').show()
    $('#popup1').css('display', 'none')
})

$('#cancel_btn1').on('click', function(){
    $('#content1').show()
    $('#popup1').css('display', 'none')
})

$('._83s1a2').on("change",function(){
    $("#save_btn1").attr("disabled", false)
})


$('._g4rlqtx').on("change",function(){
    $("#save_btn1").attr("disabled", false)
})

// 즉시 예약 수정 팝업
$('#btn2').on('click', function(){
    $('#content2').hide()
    $('#popup2').css('display', 'block')
    $("#save_btn2").attr("disabled", true)
})

$('#close_btn2').on('click', function(){
    $('#content2').show()
    $('#popup2').css('display', 'none')
})

$('#cancel_btn2').on('click', function(){
    $('#content2').show()
    $('#popup2').css('display', 'none')
})

$('._83s1a2').on("change",function(){
    $("#save_btn2").attr("disabled", false)
})


$('._g4rlqtx').on("change",function(){
    $("#save_btn2").attr("disabled", false)
})

$('#slide_toggle2').click(function(){
    $(this).toggleClass('_1x8lx0do _1hzx1vsg');
    $('#slide2').toggleClass(' _16g1cyy8 _vr1ztso');
    $('#slide_toggle2 svg').toggle();
    $("#save_btn2").attr("disabled", false)
})

$('#slide_toggle3').click(function(){
    $(this).toggleClass('_1x8lx0do _1hzx1vsg');
    $('#slide3').toggleClass(' _16g1cyy8 _vr1ztso');
    $('#slide_toggle3 svg').toggle();
    $("#save_btn2").attr("disabled", false)
})

$('#slide_toggle4').click(function(){
    $(this).toggleClass('_1x8lx0do _1hzx1vsg');
    $('#slide4').toggleClass(' _16g1cyy8 _vr1ztso');
    $('#slide_toggle4 svg').toggle();
    $("#save_btn2").attr("disabled", false)
})


// 체크인 가능 시간 수정 팝업
$('#btn3').on('click', function(){
    $('#content3').hide()
    $('#popup3').css('display', 'block')
    $("#save_btn3").attr("disabled", true)
})

$('#close_btn3').on('click', function(){
    $('#content3').show()
    $('#popup3').css('display', 'none')
})

$('#cancel_btn3').on('click', function(){
    $('#content3').show()
    $('#popup3').css('display', 'none')
})

$('._1iwku6d').on('change', function(){
    $("#save_btn3").attr("disabled", false)
})

// 체크 아웃 수정 팝업

$('#btn4').on('click', function(){
    $('#content4').hide()
    $('#popup4').css('display', 'block')
    $("#save_btn4").attr("disabled", true)
})

$('#close_btn4').on('click', function(){
    $('#content4').show()
    $('#popup4').css('display', 'none')
})

$('#cancel_btn4').on('click', function(){
    $('#content4').show()
    $('#popup4').css('display', 'none')
})

$('._1iwku6d').on('change', function(){
    $("#save_btn4").attr("disabled", false)
})

// 추가 규칙 수정 팝업

$('#btn5').on('click', function(){
    $('#content5').hide()
    $('#popup5').css('display', 'block')
    $("#save_btn5").attr("disabled", true)
})

$('#close_btn5').on('click', function(){
    $('#content5').show()
    $('#popup5').css('display', 'none')
})

$('#cancel_btn5').on('click', function(){
    $('#content5').show()
    $('#popup5').css('display', 'none')
})

$('._159914b').on('change', function(){
    $("#save_btn5").attr("disabled", false)
})

// 숙소 주요 용도 수정 팝업
$('#btn6').on('click', function(){
    $('#content6').hide()
    $('#popup6').css('display', 'block')
    $("#save_btn6").attr("disabled", true)
})

$('#close_btn6').on('click', function(){
    $('#content6').show()
    $('#popup6').css('display', 'none')
})

$('#cancel_btn6').on('click', function(){
    $('#content6').show()
    $('#popup6').css('display', 'none')
})

$('._83s1a2').on('change', function(){
    $("#save_btn6").attr("disabled", false)
})

// 체크 박스 라벨

// 어린이에게 적합함
$(".check1").click(function () {
    _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})


// 유아에게 적합함

$(".check3").click(function () {
    _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle3").attr('class', '_1hwl8fxn')
        $("#check_toggle4").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle3").attr('class', '_15okx3g')
        $("#check_toggle4").attr('class', '_1hwl8fxn')
        
    }
})

$(".check4").click(function () {
    _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle4").attr('class', '_1hwl8fxn')
        $("#check_toggle3").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle3").attr('class', '_15okx3g')
    }
})


// 반려동물 입실가능

$(".check5").click(function () {
    _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle5").attr('class', '_1hwl8fxn')
        $("#check_toggle6").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle5").attr('class', '_15okx3g')
        $("#check_toggle6").attr('class', '_1hwl8fxn')
        
    }
})

$(".check6").click(function () {
    _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle6").attr('class', '_1hwl8fxn')
        $("#check_toggle5").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle5").attr('class', '_15okx3g')
    }
})

// 흡연 가능

$(".check7").click(function () {
    _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle7").attr('class', '_1hwl8fxn')
        $("#check_toggle8").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle7").attr('class', '_15okx3g')
        $("#check_toggle8").attr('class', '_1hwl8fxn')
        
    }
})

$(".check8").click(function () {
    _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle8").attr('class', '_1hwl8fxn')
        $("#check_toggle7").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle7").attr('class', '_15okx3g')
    }
})

// 이벤트 허용

$(".check9").click(function () {
    _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle9").attr('class', '_1hwl8fxn')
        $("#check_toggle10").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle9").attr('class', '_15okx3g')
        $("#check_toggle10").attr('class', '_1hwl8fxn')
        
    }
})

$(".check10").click(function () {
    _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle10").attr('class', '_1hwl8fxn')
        $("#check_toggle9").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle9").attr('class', '_15okx3g')
    }
})

// 체크 박스 라벨 끝


// 게스트 필수조건 슬라이드 토글

$('#slide_toggle1').click(function(){
    $(this).toggleClass('_1x8lx0do _1hzx1vsg');
    $('#slide1').toggleClass(' _16g1cyy8 _vr1ztso');
    $('#slide_toggle1 svg').toggle();
})



// // 참고할거

// $('#ekerl5').on('click',function(){
//     $('#first_5').attr('class', 'first_5 _kkkkkkk');
//     $('#susu5').attr('class', 'susu5');
//     $("#wjwkd5").attr("disabled", true)
// })
// /*숙소상태 취소 버튼 눌렀을 때*/ 
// $('#cnlth5').on('click',function(){
//     $('#first_5').attr('class', 'first_5 _kkkkkkk');
//     $('#susu5').attr('class', 'susu5');
//     $("#wjwkd5").attr("disabled", true)
// })
// /*숙소상태 셀렉트 시 저장 활성 */ 
// $('._83s1a2').on("change",function(){
//     $("#wjwkd5").attr("disabled", false)
// })
// /*숙소상태 셀렉트 시 저장 활성 */ 
// $('._g4rlqtx').on("change",function(){
//     $("#wjwkd5").attr("disabled", false)
// })
