
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

    // $('#reform').on('click', function(e) {
    //     $('#itrdiv1').show()
    //     $(document).on('click', function(e) {
    //         if($(e.target).closest('._r0674k').length < 1){
    //             $('#itrdiv1').hide();
    //         }
    //     });
    //     e.stopPropagation();
    // });

    // $('.msc963k').on('click', function(e) {
    //     $('#itrdiv1').show()
    //     $(document).on('click.msc963k', function(e) {
    //         if($(e.target).closest('.m1sbgceq').length < 1){
    //             $('#itrdiv1').hide();
    //         }
    //     });
    //     e.stopPropagation();
    // });

// });

