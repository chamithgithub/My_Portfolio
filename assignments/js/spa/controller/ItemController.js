// array
var itemArr = [];

$('#btn_Add_New_Item').click(function () {
    let itemCode = $('#txt_Item_Code').val();
    let itemName = $('#txt_Item_Name').val();
    let ppu = $('#txt_Price_Per_Unit').val();
    let qtyOnHand = $('#txt_QTY_On_Hand').val();

    var itemOne = {
        "id": itemCode,
        "name": itemName,
        "price_per_unit": ppu,
        "qty_On_Hand": qtyOnHand
    };
    //add to the array
    itemArr.push(itemOne);

    var row = "<tr><td>" + itemCode + "" + "</td><td>" + itemName + "</td><td>" + ppu +
        "</td><td>" + qtyOnHand + "</td></tr>";

    // add to the table
    $('#tbl_Item_Body').append(row);
    // alert
    alert("Item saved successfully.");

    getItemTblRowData();

    loadAllItemCodes();
    //close modal
    $('#staticBackdrop4').modal('hide');
});