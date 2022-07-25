function count(){
    let pep = Number(document.querySelector("#c5").innerText)+Number(document.querySelector("#c6").innerText)
    +Number(document.querySelector("#c7").innerText);
    $('#pepcnt').text(`게스트 ${pep}명`);
}

// 게스트 인원 바를 선택 시 
$('._1gpyw79').on('click',function(){
    if($('._r2ourjn').css('display')=='block'){
        $('._r2ourjn').hide();
    }else{
        $('._r2ourjn').show();
    }
});
//닫기 버튼 클릭 시 
$('._za4ekfm').on('click',function(){
    $('._r2ourjn').hide();
});


//여행자 게스트 숫자
function pCount5(){    
    const val = Number(document.querySelector("#c5").innerText);
    document.querySelector("#c5").innerText=val+1;
    if(val+1 > 0){
        $('#discount5').removeAttr("disabled")
    }
    count();  
}
function mCount5(){
    const val = Number(document.querySelector("#c5").innerText);
    document.querySelector("#c5").innerText=val-1;
    if((document.querySelector("#c5").innerText)==1){
        $('#discount5').attr("disabled","")
    }
    count();
}

function pCount6(){    
    const val = Number(document.querySelector("#c6").innerText);
    document.querySelector("#c6").innerText=val+1;
    if(val+1 > 0){
        $('#discount6').removeAttr("disabled")
    }  
    count();
}
function mCount6(){
    const val = Number(document.querySelector("#c6").innerText);
    document.querySelector("#c6").innerText=val-1;
    if((document.querySelector("#c6").innerText)==0){
        $('#discount6').attr("disabled","")
    }
    count();
}


function pCount7(){    
    const val = Number(document.querySelector("#c7").innerText);
    document.querySelector("#c7").innerText=val+1;
    if(val+1 > 0){
        $('#discount7').removeAttr("disabled")
    }  
    count();
}
function mCount7(){
    const val = Number(document.querySelector("#c7").innerText);
    document.querySelector("#c7").innerText=val-1;
    if((document.querySelector("#c7").innerText)==0){
        $('#discount7').attr("disabled","")
    }
    count();
}

function pCount8(){    
    const val = Number(document.querySelector("#c8").innerText);
    document.querySelector("#c8").innerText=val+1;
    if(val+1 > 0){
        $('#discount8').removeAttr("disabled")
    }  
}
function mCount8(){
    const val = Number(document.querySelector("#c8").innerText);
    document.querySelector("#c8").innerText=val-1;
    if((document.querySelector("#c8").innerText)==0){
        $('#discount8').attr("disabled","")
    }
    count();
}
// 기본 요금 상세 내역 팝업 
$('.pop_btn1').on('click', function(){
    $('.sub_modal1').show();
});

$('._1wv4knt').on('click',function(){
    // 기본요금상세내역 팝업 종료
    $('.sub_modal1').hide();
    //에어비앤비 서비스수수료 안내 modal 종료
    $('.sub_modal2').hide();
});
    //숙소 신고하기 modal 종료
$('._oda838').on('click',function(){
    $('.sub_modal3').hide();
    $('.sub_modal4').hide();
    //알아두어야 할 사항 (환불 정책)
    $('.sub_modal6').hide();
    $('.sub_modal7').hide();
});
//에어비앤비 서비스수수료 안내 modal
$('.pop_btn2').on('click',function(){
    $('.sub_modal2').show();
});
//숙소 편의시설 modal
$('.b65jmrv').on('click',function(){
    $('.sub_modal4').show();
}); 
//숙소 신고하기 
//modal1
$('.pop_btn3').on('click',function(){
    $('.sub_modal3').show();
});
//신고 선택후 다음 버튼
$('._1ku51f04').on('click',function(){
    $('.sub_modal3').hide();
    $('.sub_modal7').show();
    $('.backbtn1').on('click',function(){
        $('.sub_modal7').hide();
        $('.sub_modal3').show();
    });
    $('._159914b').keyup(function(){
        if($('._159914b').val().length > 0){
            $('._1ku51f04').removeAttr("disabled");
        }else if($('._159914b').val().length == 0){
            $('._1ku51f04').attr("disabled","true");
        }
    });
});
//호스트 소개 확장 버튼
$('.pop_btn4').on('click',function(){
    $('._1ojpw5l').removeClass('_1ojpw5l');
    $(this).remove();
});
//알아두어야 할 사항 (건강과 안전)
$('._pa35zs').on('click',function(){
    $('.sub_modal5').hide();
});
$('.pop_btn5').on('click',function(){
    $('.sub_modal5').show();
});
//알아두어야 할 사항 (환불 정책)
$('.pop_btn6').on('click',function(){
    $('.sub_modal6').show();
});

//예약 체크인 + 체크아웃
$('._16l1qv1').on('click',function(){
    $('._13ah4vr').show();
    //닫기
    $('._1lerwp6l').on('click',function(){
        $('._13ah4vr').hide();
    });
})

//달력 버튼 클릭시()
$('.gj-icon').on('click',function(){    
    $("#datepicker4").on("change",function(){
        $('.datefour').val($(this).val());
        $('.datefour').text($(this).val());
    });

    $("#datepicker5").on("change",function(){
        $('.datefive').val($(this).val());
        $('.datefive').text($(this).val());
    });
});

