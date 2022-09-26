
$(document).ready(function () {
    $('#close1').click(function(){
        $('#ltrdiv1').hide();
    })
    $('#reform').click(function(){
        $('#ltrdiv1').show();
    })
    $('._101nvu7m').click(function(){
        $('#ltrdiv2').show();
    })
    $('._101nvu7m').on('click', function(e) {
        $('#ltrdiv2').show()
        $(document).on('click', function(e) {
            console.log($(e.target))
            if($(e.target).closest('._18s57l6i').length < 1){
                $('#ltrdiv2').hide();
            }
            if(($(this) === '._oda838') && ($(this) === '._11vbjbm') && ($(this) === 'path') && ($(this) === 'svg')){
                $('#ltrdiv2').hide();
            }
        });
        e.stopPropagation();
    });

    $('._oda838').click(function(){
        $('#ltrdiv3').hide();

    })
    $('#jasahi').click(function(){
        $('#ltrdiv3').show();
    })
});
$('.backroom').on('click',function (){
   history.back();
});

$(function (){
    let start = $('#isresv_start').text().split("/")
    let end = $('#isresv_end').text().split("/")
    start[0] = "20"+start[0];
    end[0] = "20"+end[0];
    let startDate = new Date(start[0],start[1],start[2]);
    let endDate = new Date(end[0],end[1],end[2]);
    let btMs = endDate.getTime() - startDate.getTime();
    let btDay = btMs /(1000*60*60*24);
    let guest = parseInt($('#guest').text());

    console.log(btDay);
    $('#bak').text(btDay);
    let total = guest*btDay*parseInt(parseInt($('#price').text()));
    console.log(total)
    $('#total0').val(total);
    $('#totalprice').text(total.toLocaleString('ko-KR'));
    $('#price').text(parseInt($('#price').text())*guest);
    $('#price').text(parseInt($('#price').text()).toLocaleString('ko-KR'));
    $('#totals').text(total.toLocaleString('ko-KR'));
    console.log(total)
    // $('._6901pxv').click(function (){
    //     let tot = total;
    //     let jsonData = {
    //                 data: {
    //                     lodgingName: $('#LISTING_CARD-title').text(),
    //                     category: $('#LISTING_CARD_category').text(),
    //                     price: tot
    //                 }
    //             }
    //     $.post({
    //         url:'/api/kakaopay',
    //         data: JSON.stringify(jsonData),
    //         dataType:"json",
    //         contentType: 'application/json',
    //         origin:'http://localhost:8080',
    //         success:function (){
    //         },
    //         error:function (error){
    //             console.log(error);
    //         }
    //     });
    // });
});

