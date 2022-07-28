//로그인 메인
$('.forlog').on('click',function(){
    $('.login_main').show();
});
//닫기
$('._pa35zs').on('click',function(){
    $('.login_main').hide();
});
// $('#email-login-email').attr('name', 'email');
// $('#email-login-email-pw').attr('name', 'memPw');zz
$('#social-member').on('click',function(){
    $('.login_main').hide();
    $('.login_member').show();
    //체크박스1 클릭
    $('#email-signupuser_profile_info-row-checkbox').attr('value', 'N');
    $('#email-signupuser_profile_info-row-checkbox').on('click',function(){
        $(this).next().empty();
        $(this).toggleClass('checkbox1');
        $(this).toggleClass('_1yf4i4f _smt4n2a');
        $(this).next().toggleClass('_41yoza _1v5cvwv4');
        $(this).next().append('<span class="_1oj8hra"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg></span>');
        if($('#email-signupuser_profile_info-row-checkbox').is('.checkbox1')){
            $('#email-signupuser_profile_info-row-checkbox').attr('value', 'Y');
        }else{
            $('#email-signupuser_profile_info-row-checkbox').attr('value', 'N');
        }
    });
    //체크박스2 클릭
    $('#email-signupuser_sub-row-checkbox').attr('value', 'N');
    $('#email-signupuser_sub-row-checkbox').on('click',function(){
        $(this).next().empty();
        $(this).toggleClass('_1yf4i4f _smt4n2a');
        $(this).toggleClass('checkbox2');
        $(this).next().toggleClass('_41yoza _1v5cvwv4');
        $(this).next().append('<span class="_1oj8hra"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg></span>');
        if($('#email-signupuser_sub-row-checkbox').is('.checkbox2')){
            $('#email-signupuser_sub-row-checkbox').attr('value', 'Y');
        }else{
            $('#email-signupuser_sub-row-checkbox').attr('value', 'N');
        }
    });

    //뒤로가기
    $('.backmain').on('click',function(){
        $('.login_main').show();
        $('.login_member').hide();
    });
});

function member(){
    const first_name = $('#email-signup-userfirst');
    const last_name = $('#email-signup-userlast');
    const birth = $('#email-signup-date');
    const email = $('#email-signup-email');
    let year = birth.val().substring(0,4);
    const password = $('#email-signup-password');
    const checkbox = $('#email-signupuser_profile_info-row-checkbox');

    const nameCheck = /^[가-힣|a-z|A-Z|]+$/;
    const emailcheck = /^[a-zA-Z0-9\-\.]+@[a-zA-Z0-9\-\.]+\.[a-zA-Z0-9]/;
    const pwExp = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[#?!@$ %^&*-]).{6,20}$/;

    if (!(nameCheck.test(first_name.val()))){
        $(first_name).val('');
        $(first_name).focus();
        alert('이름을 입력 하세요');
        return false;
    }

    if (!(nameCheck.test(last_name.val()))){
        $(last_name).val('');
        $(last_name).focus();
        alert('성을 입력 하세요');
        return false;
    }

    if (year >= 2004 || (birth.val()=='')){
        $(birth).val('');
        alert('만 18세 이상만 에어비앤비를 이용할 수 있습니다');
        return false;
    }

    if (!(emailcheck.test(email.val()))){
        $(email).val('');
        $(email).focus();
        alert('이메일 형식에 맞게 입력 하세요');
        return false;
    }

    if (!(pwExp.test(password.val()))){
        $(password).val('');
        $(password).focus();
        alert('비밀번호 형식에 맞게 입력 하세요');
        return false;
    }

    if(!(checkbox.val('Y'))){
        alert('개인정보 수집 및 이용에 동의해야합니다.');
        return false;
    }

    let jsonData = {
        transaction_time: new Date(),
        resultCode:"ok",
        description:"ok",
        data:{
            memFirstname: $('#email-signup-userfirst').val(),
            memName: $('#email-signup-userlast').val(),
            birth: $('#email-signup-date').val(),
            email: $('#email-signup-email').val(),
            memPw: $('#email-signup-password').val(),
            isLogshare: ($('#email-signupuser_profile_info-row-checkbox').val() + "\u00A0" + $('#email-signupuser_sub-row-checkbox').val())
        }
    }
    $.post({
        url: '/api/user',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(){
            location.href='/pages';
        },
        error: function(){
            location.reload();
        }
    });
}

// function emailCheck(){
//     const email = $('#email-login-email');
//     const emailcheck = /^[a-zA-Z0-9\-\.]+@[a-zA-Z0-9\-\.]+\.[a-zA-Z0-9]/;
//
//     if (!(emailcheck.test(email.val()))){
//         $(email).val('');
//         $(email).focus();
//         alert('이메일 형식에 맞게 입력 하세요');
//         return false;
//     }
//     return true;
// }
//
