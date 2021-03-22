(function makeTable(){
    let names = JSON.parse(localStorage.getItem("cartItems"));
    let values = JSON.parse(localStorage.getItem("cartValues"));

    let tbl = document.createElement("table");
    let head = tbl.insertRow();
    let headers = ["Item Name", "Price"];

    for(let i=0; i<2; i++){
        let data = head.insertCell();
        data.appendChild(document.createTextNode(headers[i]));
    }

    for(let i=0; i<values.length; i++){
        let row = tbl.insertRow();
        let entry = names[i];
        let data = row.insertCell();
        data.appendChild(document.createTextNode(entry));
        data.style.border = "1px solid black";

        entry = values[i];
        data = row.insertCell();
        data.appendChild(document.createTextNode(entry));
        data.style.border = "1px solid black";

    }

    let row = tbl.insertRow();
    let entry = localStorage.getItem("totalValue");
    let data = row.insertCell();
    data.appendChild(document.createTextNode(entry));

    document.getElementById("body").appendChild(tbl);
}());


