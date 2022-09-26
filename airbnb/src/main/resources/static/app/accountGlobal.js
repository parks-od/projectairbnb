$(function () {

    let global1 = new Vue({
        el: '#global1',
        data: {
            preferLan: {}
        }
    });

    let id = parseInt($('#iddiv').text())

    PreferLansearch(id);

    function PreferLansearch(id) {
        $.get("/api/user/memGlobal?id="+id, function (response) {
            console.dir(response);
            global1.data = response.data;
            $("#preferred_locale").val(response.data.preferLan);
            $("#div1").text(response.data.preferLan);
        })
    }

    function preferLanUpdating() {
        let jsonData = {
            data: {
                memId: parseInt($('#iddiv').text()),
                preferLan: $('#preferred_locale').val()
            }
        }
        $.post({
            url: '/api/user/preferLan',
            data: JSON.stringify(jsonData),
            dataType: 'json',
            contentType: 'application/json',
            success: function (response) {
                global1.data = response.data
                $("#preferred_locale").val(response.data.preferLan);
                $("#div1").text(response.data.preferLan);
            },
            error: function () {
                alert('등록실패!');

            }
        });
    }
    $('#preferLansubmit').click( () => {
        preferLanUpdating();
    })









    let global2 = new Vue({
        el: '#global2',
        data: {
            preferCurr: {}
        }
    });


    preferCurrsearch(id);
    function preferCurrsearch(id) {
        $.get("/api/user/memGlobal?id="+id, function (response) {
            console.dir(response);
            global2.global2 = response.data;
            $("#native_currency").val(response.data.preferCurr);
            $("#div2").text(response.data.preferCurr);
        })
    }
    // const id = parseInt($('#iddiv').text());
    function preferCurrUpdating() {
        let jsonData = {
            data: {
                memId: parseInt($('#iddiv').text()),
                preferCurr: $('#native_currency').val()
            }
        }
        $.post({
            url: '/api/user/preferCurr',
            data: JSON.stringify(jsonData),
            dataType: 'json',
            contentType: 'application/json',
            success: function (response) {
                global2.data = response.data
                console.log(global2.data)
                $("#native_currency").val(response.data.preferCurr);
                $("#div2").text(response.data.preferCurr);
            },
            error: function () {
                alert('등록실패!');

            }
        });
    }
    $('#preferCurrsubmit').click( () => {
        preferCurrUpdating();
    })











    let global3 = new Vue({
        el: '#global3',
        data: {
            onTimes: {}
        }
    });

    onTimessearch(id);
    function onTimessearch(id) {
        $.get("/api/user/memGlobal?id="+id, function (response) {
            console.dir(response);
            global3.global3 = response.data;
            $("#timezone").val(response.data.onTimes);
            $("#div3").text(response.data.onTimes);
        })
    }

    function onTimesUpdating() {
        jsonData = {
            data: {
                memId: parseInt($('#iddiv').text()),
                onTimes: $('#timezone').val()
            }
        }
        $.post({
            url: '/api/user/onTimes',
            data: JSON.stringify(jsonData),
            dataType: 'json',
            contentType: 'application/json',
            success: function (response) {
                global3.global3 = response.data
                console.log(global3.data)
                $("#timezone").val(response.data.onTimes);
                $("#div3").text(response.data.onTimes);
            },
            error: function () {
                alert('등록실패!');

            }
        });
    }
    $('#onTimessubmit').click( () => {
        onTimesUpdating();
    })
})

