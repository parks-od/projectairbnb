//숙소 옵션 선택시 선택되었다는 효과
$('._dkkqb8').on('click',function(e){
    $('._28hxjy8').attr("class", "_dkkqb8");
    $(this).attr("class","_28hxjy8");
});
//숙소 옵션 선택시에만 다음페이지로 넘어가게
$("._dkkqb8").click(function(){
    $("._1ku51f04").removeAttr("disabled");
});
