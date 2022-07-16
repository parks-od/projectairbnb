let slide_cnt = 0;
let index = $('.c4mnd7m');

//카테고리 스크롤 다음
$('.nzjlmas').on('click',function(){
    $('.p1rbh6uo').addClass('b1ntzptz');
    slide_cnt++;
    $('.category_slide').animate({right:+300*slide_cnt + 'px'},500);
});
//카테고리 스크롤 이전
$('.p1rbh6uo').on('click',function(){
    if(index < index.length-1){  
    slide_cnt--;
    $('.category_slide').animate({left:-100*slide_cnt + 'px'},500);
    }
});

//숙소 리스트 하트(위시리스트)
$('.ckqgked').on('click',function(){
    let heart = $(this);  
    //위시리스트에 없는 경우
    if($(this).find("path, polygon, circle").attr('fill')=='rgba(0, 0, 0, 0.5)'){
        $('.popup3').show();
            $('._11eqlma4').eq(0).on('click',function(){
                //위시리스트 이름 정하기로 형식 변경
                $('.popup3').hide();
                $('.popup4').show();
                //이름에 focus 갈때 효과 추가
                $('._1jj61m9').on('click',function(){
                    $('._1jj61m9').attr('class','_yqkdtbl');
                    $('._1jn0ze9').attr('class','_1m2ich98');
                    $('._fywymp7').attr('class','_usmffxk');
                    $('._c5rhl5').attr('class','_c5rhl5 focus-visible');
                })
                $('._c5rhl5').keyup(function(){
                    if($('._c5rhl5').val().length > 0){
                        $('._148dgdpk').removeAttr("disabled");
                    }else if($('._c5rhl5').val().length == 0){
                        $('._148dgdpk').attr("disabled","true");
                    }
                });
            });
            // $('._11eqlma4').on('click',function(){
            //     $(heart).find("path, polygon, circle").attr('fill', '#FF385C');
            //     $('.popup3').hide();
            // });
    }
    //위시리스트에 있는 경우
    else{
        $(this).find("path, polygon, circle").attr('fill', 'rgba(0, 0, 0, 0.5)');
    }
});

//필터 팝업 on/off
//필터 팝업 닫기
$('._e296pg > svg').on('click',function(){
    $('.popup2').hide();
    $('.popup3').hide();
    $('.popup4').hide();
});

//필터 팝업 열기
$('.v1tureqs').on('click',function(){
    $('.popup2').show();
    //체크형
    $('._1yf4i4f').on('click',function(){
        if($(this).is(':checked')){
            //이미 체크 되어 있을 때
            $(this).attr('class','_smt4n2a');
            $(this).next().attr('class','_1v5cvwv4');
            $(this).next().append('<span class="_1oj8hra"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg></span>');
        }else{
            //체크 되어 있지 않을 때
            $(this).attr('class','_1yf4i4f');
            $(this).next().attr('class','_41yoza');
            $(this).next().empty();
            }
    });
    
    //침실과 침대 체크 (못함)
    $('._1710jwy').on('click',function(){
        $(this).toggleClass('_11yc859a');
    });

    //건물 유형 선택
    $('._1h52lk5').on('click',function(){
        $(this).toggleClass('_1h52lk5 _joxslpg')
    });

    //예약 옵션1
    $('#filterItem-7842838992373410220-switch-ib-true').on('click', function(){
        $(this).toggleClass("_17z7clia _1x8lx0do");
        $('#toggle1').toggleClass("_vr1ztso _16g1cyy8");
        $('#filterItem-7842838992373410220-switch-ib-true ._svg').toggle();
    }) 

    //예약 옵션2
    $('#filterItem-7842838992373410220-switch-amenities-51').on('click', function(){
        $(this).toggleClass("_17z7clia _1x8lx0do");
        $('#toggle2').toggleClass("_vr1ztso _16g1cyy8");
        $('#filterItem-7842838992373410220-switch-amenities-51 ._svg').toggle();
    }) 
});