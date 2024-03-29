
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

// place order btn on action
$('#btn_Place_Order').click(function () {
    $('#dashboard_main_container').css('visibility', 'hidden');
    $('#header_container').css('visibility', 'visible');
    $('#place_order_main_container').css('visibility', 'visible');
});

//-------------------------------header home nav++++++++++++++++

//-------------------------------header home nav++++++++++++++++

$('#btn_To_Home').click(function () {
    $('#header_container').css('visibility', 'hidden');
    $('#customer_main_container').css('visibility', 'hidden');
    $('#item_main_container').css('visibility', 'hidden');
    $('#orders_main_container').css('visibility', 'hidden');
    $('#place_order_main_container').css('visibility', 'hidden');
    $('#dashboard_main_container').css('visibility', 'visible');
});

//header Customer nav bar
$('#btn_To_Customer').click(function () {
    $('#customer_main_container').css('visibility', 'visible');
    $('#item_main_container').css('visibility', 'hidden');
    $('#place_order_main_container').css('visibility', 'hidden');
    $('#dashboard_main_container').css('visibility', 'hidden');
    $('#header_container').css('visibility', 'visible');
    $('#orders_main_container').css('visibility', 'hidden');
});

//header items nav bar
$('#btn_To_Item').click(function () {
    $('#customer_main_container').css('visibility', 'hidden');
    $('#orders_main_container').css('visibility', 'hidden');
    $('#place_order_main_container').css('visibility', 'hidden');
    $('#dashboard_main_container').css('visibility', 'hidden');
    $('#header_container').css('visibility', 'visible');
    $('#item_main_container').css('visibility', 'visible');
});

//header Order nav bar
$('#btn_To_Orders').click(function () {
    $('#customer_main_container').css('visibility', 'hidden');
    $('#orders_main_container').css('visibility', 'visible');
    $('#place_order_main_container').css('visibility', 'hidden');
    $('#dashboard_main_container').css('visibility', 'hidden');
    $('#header_container').css('visibility', 'visible');
    $('#item_main_container').css('visibility', 'hidden');
});

//header placeOrder nav
$('#btn_To_placeOrders').click(function () {
    $('#customer_main_container').css('visibility', 'hidden');
    $('#manage_orders_main_container').css('visibility', 'hidden');
    $('#place_order_main_container').css('visibility', 'visible');
    $('#dashboard_main_container').css('visibility', 'hidden');
    $('#header_container').css('visibility', 'visible');
    $('#item_main_container').css('visibility', 'hidden');
});
