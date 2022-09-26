$(document).ready(function(e){

    $('#pay3btn').click(function(){
        $('#itrdiv').show();
        $('._oda838, ._1dj2p4gk, .submitbtn').on('click',function(){
            $('#itrdiv').hide();
        })
    })
    console.log($(e.target))
    $('#pay3btn').on('click', function(e) {
        $('#itrdiv').show()
        $(document).on('click', function(e) {
            if($(e.target).closest('._1ucy1zjv').length < 1){
                
                $('#itrdiv').hide();
            }
        });
        e.stopPropagation();
    });
    // _1jj61m9 _yqkdtbl
    // _1jn0ze9  _1m2ich98
    // _js9i23   _fywymp7

    // $('._c5rhl5').click(function(e){

    // })
})