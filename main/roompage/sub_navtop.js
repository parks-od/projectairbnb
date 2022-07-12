function resetNav(){
    //블록효과 css 제거
    $('._1kxfihfz').attr('class','_1t9u8f6n');
    $('.chec1').attr('class','_14nll2z1 chec1');
    $('.chec2').attr('class','_14nll2z1 chec2');
    $('._1gqzge1b').attr('class','_17kpbwhx');
    //다운된 효과 제거
    $('._xhcgu32').attr('class','_yu5dnq');
    $('._wxu8ir').hide();
}

function travelwhere(){
    resetNav();
    //여행지 블록효과 css 적용
    $('._1t9u8f6n').attr('class','_1kxfihfz');
    //여행지에 드롭 다운 
    $('._yu5dnq').attr('class','_xhcgu32');
}

function travelCheckin(){
    resetNav();
    //체크인 블록효과 css 적용
    $('.chec1').attr('class','_1ky3o1vf chec1');
    //화면 블랙아웃
}

function travelCheckOut(){
    resetNav();
    //체크아웃 블록효과 css 적용
    $('.chec2').attr('class','_1ky3o1vf chec2');
    //화면 블랙아웃
}

function travelGuest(){
    resetNav();

    //여행자 블록효과 css 적용
    $('._17kpbwhx').attr('class','_1gqzge1b');
    //여행자 팝업
    $('._wxu8ir').show();
    //화면 블랙아웃

}

//상단 메뉴바 검색 시작하기
$('.ffc0w66').on('click',function(){
    // 상단 메뉴바 중  공통사항 
    $('._1d8im2uw').removeClass('_1d8im2uw');
    $('._1d8im2uw').attr('class','_1hpx3rih');
    $('._4acemm4').attr('class','_1ys9m4ab');
    $('._1up2wiaw').attr('class','_1uog1jkc');
    $('.c1oqx6sn').attr('class','c1lt77mq ceyij5b dir dir-ltr');
});

//여행지
$('._1t9u8f6n').on('click',function(){
    travelwhere();
});

$('._14nll2z1').on('click',function(){
    //체크인
    if($(this).attr('tabindex') == 0){
        travelCheckin();
    }

    //체크 아웃
    if($(this).attr('tabindex') == 1){
        travelCheckOut();
    }
});

//여행자
$('._17kpbwhx').on('click',function(){
    travelGuest();
});
    


//여행지 6개중 선택
$('._bi7q1f').on('click',function(){
    $('#bigsearch-query-stays_location_inspirations-input').val($(this).find('.a8jt5op').html());   
    $('._as2q9p7').attr('class','_bi7q1f');
    $(this).attr('class','_as2q9p7');
    travelCheckin();
});

$('._as2q9p7').on('click',function(){
    $('#bigsearch-query-location-input').val('유연한 검색');   
    travelCheckin();
});

//달력 버튼 클릭시
$('._f8btejl').on('click',function(){    
    if($('._59t1ky').length == 0){
        console.log($('._59t1ky').length);
        $(this).attr('class','_59t1ky');
        $('.datefir').html(($(this).parent().data('testid')).substr(15));
        travelCheckOut();
    }else if($('._59t1ky').length == 1){
        console.log($('._59t1ky').length);
        $(this).attr('class','_59t1ky');
        $('.datesec').html(($(this).parent().data('testid')).substr(15));
        travelGuest();
    }else{
        travelGuest();
    }
});

//여행자 게스트 숫자
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

function pCount2(){    
    const val = Number(document.querySelector("#c2").innerText);
    document.querySelector("#c2").innerText=val+1;
    if(val+1 > 0){
        $('#discount2').removeAttr("disabled")
    }  
}
function mCount2(){
    const val = Number(document.querySelector("#c2").innerText);
    document.querySelector("#c2").innerText=val-1;
    if((document.querySelector("#c2").innerText)==0){
        $('#discount2').attr("disabled","")
    }
}


function pCount3(){    
    const val = Number(document.querySelector("#c3").innerText);
    document.querySelector("#c3").innerText=val+1;
    if(val+1 > 0){
        $('#discount3').removeAttr("disabled")
    }  
}
function mCount3(){
    const val = Number(document.querySelector("#c3").innerText);
    document.querySelector("#c3").innerText=val-1;
    if((document.querySelector("#c3").innerText)==0){
        $('#discount3').attr("disabled","")
    }
}

function pCount4(){    
    const val = Number(document.querySelector("#c4").innerText);
    document.querySelector("#c4").innerText=val+1;
    if(val+1 > 0){
        $('#discount4').removeAttr("disabled")
    }  
}
function mCount4(){
    const val = Number(document.querySelector("#c4").innerText);
    document.querySelector("#c4").innerText=val-1;
    if((document.querySelector("#c4").innerText)==0){
        $('#discount4').attr("disabled","")
    }
}
// 숙소선택 
$('.chec1').on('click',function(){
    resetNav();
    //숙소 밑줄
    $('.tnrruw1').eq(0).addClass('t1s6zadl');
    $('.tnrruw1').eq(1).removeClass('t1s6zadl');

    //체험선택후 숙소 선택 시
    if($('.chdozwg').length < 1){
    }
});
//체험 클릭 
$('.chec2').on('click',function(){
    resetNav();
    //체험 밑줄
    $('.tnrruw1').eq(0).removeClass('t1s6zadl');
    $('.tnrruw1').eq(1).addClass('t1s6zadl');

    //ui변경
    $('.chdozwg').attr('class','c2frgdd change1 dir dir-ltr');
});



