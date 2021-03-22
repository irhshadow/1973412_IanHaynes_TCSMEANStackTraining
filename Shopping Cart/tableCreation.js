(function makeTable() {
    var names = JSON.parse(localStorage.getItem("cartItems"));
    var values = JSON.parse(localStorage.getItem("cartValues"));
    var tbl = document.createElement("table");
    var head = tbl.insertRow();
    var headers = ["Item Name", "Price"];
    for (var i = 0; i < 2; i++) {
        var data_1 = head.insertCell();
        data_1.appendChild(document.createTextNode(headers[i]));
    }
    for (var i = 0; i < values.length; i++) {
        var row_1 = tbl.insertRow();
        var entry_1 = names[i];
        var data_2 = row_1.insertCell();
        data_2.appendChild(document.createTextNode(entry_1));
        data_2.style.border = "1px solid black";
        entry_1 = values[i];
        data_2 = row_1.insertCell();
        data_2.appendChild(document.createTextNode(entry_1));
        data_2.style.border = "1px solid black";
    }
    var row = tbl.insertRow();
    var entry = localStorage.getItem("totalValue");
    var data = row.insertCell();
    data.appendChild(document.createTextNode(entry));
    document.getElementById("body").appendChild(tbl);
}());
