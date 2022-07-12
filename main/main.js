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

//필터 팝업 on/off
//필터 팝업 닫기
$('._e296pg > svg').on('click',function(){
    $('.popup2').hide();
    $('.popup3').hide();
});

//필터 팝업 열기
$('.v1tureqs').on('click',function(){
    $('.popup2').show();
});

//숙소 리스트 하트(위시리스트)
$('.ckqgked').on('click',function(){
    let heart = $(this);  
    //위시리스트에 없는 경우
    if($(this).find("path, polygon, circle").attr('fill')=='rgba(0, 0, 0, 0.5)'){
        $('.popup3').show();
            $('._11eqlma4').eq(0).on('click',function(){
                //위시리스트 이름 정하기로 형식 변경
                $('._rii3jc').empty();
                $('._rii3jc').attr('class','_1xisdli');
                $('._1xisdli').append(
                    '<div class="_1jj61m9"><label class="_1yw7hpv" for="name-list-input-save-to-list-modal"><div class="_1jn0ze9"><div class="_11hx67x">이름</div></div><div dir="ltr"><div class="_js9i23"><input maxlength="50" class="_c5rhl5" id="name-list-input-save-to-list-modal" autocomplete="off" type="text" aria-describedby="" value=""></div></div> </label></div><div class="_v72lrv"><div class="_pxnjg" id="character_maximum_guidance_text">최대 50자</div></div>'
                );
                $('._1xisdli').after(
                    '<footer class="_zgc1p6"><button disabled="" type="button" class="_148dgdpk">새로 만들기</button></footer>'
                    );
                //이름에 focus 갈때 효과 추가
                $('._1jj61m9').on('click',function(){
                    $('._1jj61m9').attr('class','_yqkdtbl');
                    $('._1jn0ze9').attr('class','_1m2ich98');
                    $('._fywymp7').attr('class','_usmffxk');
                    $('._c5rhl5').attr('class','_c5rhl5 focus-visible');
                })

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

//메인 숙소 사진 hover시
$('.c4mnd7m').on('mouseenter',function(){
    //console.log($(this));
    $(this > '.s134m7bb').addClass('swcqrz4')
});

