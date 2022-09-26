    $(function () {
    let id = parseInt($('#iddiv2').text())

    let memName = new Vue({
        el: '#memName',
        data: {
            memFirstname: {}
        }
    });

    memberNamesearch(id); // function 실행시켜주기 위해서 함수 호출

    function memberNamesearch(id) {
        $.get("/api/room/hostoption16/" + id, function (response){
            memName.data = response.data;
            memName.memFirstname = response.data.memFirstname;
            $("#memName").val(response.data);
        })
    }
})



