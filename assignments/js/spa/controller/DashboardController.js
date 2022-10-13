
// // =========
$('#header_container').css('visibility', 'hidden');
$('#customer_main_container').css('visibility', 'hidden');
$('#item_main_container').css('visibility', 'hidden');
$('#orders_main_container').css('visibility', 'hidden');
$('#place_order_main_container').css('visibility', 'hidden');

// customer btn on action
$('#btn_Customer').click(function () {
    $('#dashboard_main_container').css('visibility', 'hidden');
    $('#header_container').css('visibility', 'visible');
    $('#customer_main_container').css('visibility', 'visible');
});

// item btn on action
$('#btn_Item').click(function () {
    $('#dashboard_main_container').css('visibility', 'hidden');
    $('#header_container').css('visibility', 'visible');
    $('#item_main_container').css('visibility', 'visible');
});

//  orders btn on action
$('#btn_Manage_Orders').click(function () {
    $('#dashboard_main_container').css('visibility', 'hidden');
    $('#header_container').css('visibility', 'visible');
    $('#orders_main_container').css('visibility', 'visible');
});

