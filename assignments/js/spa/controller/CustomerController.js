
// array
var customerArr = [];

$('#btn_Add_New_Customer').click(function () {
    let customerID = $('#txt_Cus_ID').val();
    let customerName = $('#txt_Cus_Name').val();
    let customerAddress = $('#txt_Cus_Address').val();
    let customerSalary = $('#txt_Cus_Salary').val();

    var customerOne = {
        "id": customerID,
        "name": customerName,
        "address": customerAddress,
        "salary": customerSalary
    };

    //add to the array
    customerArr.push(customerOne);

    var row = "<tr><td>" + customerID + "" + "</td><td>" + customerName + "</td><td>" + customerAddress +
        "</td><td>" + customerSalary + "</td></tr>";

    $('#tbl_Customer_Body').append(row);
    alert("Customer save successfully.");
    getCustTblRowData();
    $('#staticBackdrop').modal('hide');

});