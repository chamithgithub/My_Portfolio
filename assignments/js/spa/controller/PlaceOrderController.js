//array
var cartArr = [];

//order count
var idNum = 1;


function clearAllFields() {
    clearQtyInput();
    $('#date').val("");
    $('#txtBalanceAmt').val("");
    $('#lblGrandTotal').text(" 0/=");
    $('#lblSubTotal').text(" 0/=");
    $('#txtCashAmt').val("");
    $('#tbl_Cart_Body').empty();
    $('#cbxSelectItemCode').val("None");
    $('#cbxSelectCustID').val("");
    $('#txtCusName').val("");
    $('#txtCusAddress').val("");
    $('#txtCusSalary').val("");
    $('#txtItemName').val("");
    $('#txtAvailableQTYOnHand').val("");
    $('#txtUnitPrice').val("");
    $('#txtDiscountGiven').val("0");
}

//load all item codes to the combo box
function loadAllItemCodes() {
    //clear combo box
    $('#cbxSelectItemCode').empty();
    $('#cbxSelectItemCode').append("<option>None</option>");

    for (let itm of itemArr) {
        $('#cbxSelectItemCode').append("<option>" + itm.id + "</option>");
    }
}

//set item details to the textfields
$('#cbxSelectItemCode').change(function () {
    //clear before adding
    $('#txtItemName,#txtAvailableQTYOnHand,#txtUnitPrice').val("");
    //search item
    var item = searchItemByID($(this).val());
    $('#txtItemName').val(item.name);
    $('#txtAvailableQTYOnHand').val(item.qty_On_Hand);
    $('#txtUnitPrice').val(item.price_per_unit);
});


//add items to cart
$('#btnAddToCart').click(function () {
    var id = $('#cbxSelectItemCode').val();
    var qty = $('#selectQTY').val();
    if (id == "None") {
        //error alert
        alert("No item selected!");
        //clear qty field
        clearQtyInput();
    } else {
        //search item
        if (searchItemInCart(id) != null) {
            //update item qty
            if (updateItemQty(id, qty)) {
                loadAllItemsToTbl();
                calculateSubTotal();
                clearQtyInput();
            } else {
                alert("Something went wrong.");
            }
        } else {
            if (qty == "") {
                alert("Please select quantity!");
            } else {
                var cartObj = {
                    "item_Code": id,
                    "item_Name": $('#txtItemName').val(),
                    "unit_Price": $('#txtUnitPrice').val(),
                    "qty_Bought": qty
                };
                //add to cart array
                cartArr.push(cartObj);
                //load all items
                loadAllItemsToTbl();
                //clear qty field
                clearQtyInput();
                //calculate sub total
                calculateSubTotal();
                //get selected table row data
                getCartTblRowData();
            }
        }
    }
});

//clear qty input field
function clearQtyInput() {
    $('#selectQTY').val("");
}

//load all items in the cart to the table
function loadAllItemsToTbl() {
    $('#tbl_Cart_Body').empty();
    for (const itm of cartArr) {
        var row = "<tr><td>" + itm.item_Code + "" + "</td><td>" + itm.item_Name + "</td><td>" + itm.unit_Price +
            "</td><td>" + itm.qty_Bought + "</td></tr>";
        //add to table
        $('#tbl_Cart_Body').append(row);
    }
    getCartTblRowData();
}

//search item in cart
function searchItemInCart(id) {
    for (const itm of cartArr) {
        if (itm.item_Code == id) {
            return itm;
        }
    }
    return null;
}

//update item qty in cart
function updateItemQty(id, newQty) {
    var itm = searchItemInCart(id);
    if (itm != null) {
        var oldQty = parseInt(itm.qty_Bought);
        var qtyToAdd = parseInt(newQty);
        itm.qty_Bought = oldQty + qtyToAdd;
        return true;
    } else {
        return false;
    }
}

//generate new order id
function generateOrderID() {
    $('#cbxSelectOrderID').val("O00-" + idNum);
}

$(window).on('load', function () {
    let today = new Date().toLocaleDateString();
    //set current date
    $('#date').text(today);
    //set order id
    $('#cbxSelectOrderID').val("O00-" + idNum);
})

