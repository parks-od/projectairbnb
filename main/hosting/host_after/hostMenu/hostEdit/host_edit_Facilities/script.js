/*에어컨 팝업 */
$('#check_toggle4').on('click',function(){
    $('#first_1').attr('class', 'first_1');
})

/*최소숙박 맞춤설정 닫기 버튼 눌렀을 때*/ 
$('#ekerl1').on('click',function(){
    $('#first_1').attr('class', 'first_1 _kkkkkkk');
    $("#wjwkd1").attr("disabled", true)
})
/*최소숙박 맞춤설정 취소 버튼 눌렀을 때*/ 
$('#cnlth1').on('click',function(){
    $('#first_1').attr('class', 'first_1 _kkkkkkk');
    $("#wjwkd1").attr("disabled", true)
})
$('._e296pg').on("change",function(){
    $("#wjwkd1").attr("disabled", false)
})


/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 에어컨 */
$(".check3").click(function () {
    _id = $(this).attr("v3_popular.ac.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.ac.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.ac.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle3").attr('class', '_1hwl8fxn')
        $("#check_toggle4").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.ac.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle3").attr('class', '_15okx3g')
        $("#check_toggle4").attr('class', '_1hwl8fxn')
        
    }
})

$(".check4").click(function () {
    _id = $(this).attr("v3_popular.ac.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.ac.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle4").attr('class', '_1hwl8fxn')
        $("#check_toggle3").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle4").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 필수품목 */
$(".check1").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        
    }
})

$(".check2").click(function () {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})


