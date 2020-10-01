

$(document).ready(function () {
    $("#msgid").html("This is Hello World by JQuery");

    $("#channel-add-ussd").on('click', function (event) {
        event.preventDefault();
        $(".ussd").append('<li><span>*167#</span><em><button class="btn-ussd-delete">X</button></em></li>')
    });


    $("#channel-show-ussd").on('click', function (event) {
        event.preventDefault();
        $(".ussd li").each((index, li) => {
            if (index != 0) console.log(li.innerText);
        })
    });


    /*
    $(".btn-ussd-delete").on('click', function (event) {
        event.preventDefault();
        $(this).parents("li").remove();
    });
    */

    $(document).on('click', ".btn-ussd-delete", function () {
        event.preventDefault();
        $(this).parents("li").remove();
    });




});