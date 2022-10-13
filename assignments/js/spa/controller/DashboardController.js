
// // =========
$('#header_container').css('visibility', 'hidden');
$('#customer_main_container').css('visibility', 'hidden');


// customer btn on action
$('#btn_Customer').click(function () {
    $('#dashboard_main_container').css('visibility', 'hidden');
    $('#header_container').css('visibility', 'visible');
    $('#customer_main_container').css('visibility', 'visible');
});
