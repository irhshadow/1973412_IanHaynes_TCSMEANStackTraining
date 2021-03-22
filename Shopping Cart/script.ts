
function addItem(element) {
    let value: string = "";
    let item: string = "";
    switch (element) {
        case "button1":
            value = "1500";
            item = "Computer";
            break;
        case "button2":
            value = "800";
            item = "Phone";
            break;
        case "button3":
            value = "100";
            item = "Blanket";
            break;
        case "button4":
            value = "2000";
            item = "Bed";
            break;
        case "button5":
            value = "400";
            item = "TV";
            break;
        case "button6":
            value = "20";
            item = "Phone Case";
            break;
    }
    let cartItems = new Array<string>();
    let cartValues = new Array<string>();

    let cartItemsString = localStorage.getItem("cartItems");
    if (cartItemsString != null)
        cartItems = JSON.parse(cartItemsString);

    let cartValuesString = localStorage.getItem("cartValues");
    if (cartValuesString != null)
        cartValues = JSON.parse(cartValuesString);

    cartItems.push(item);
    cartValues.push(value);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartValues", JSON.stringify(cartValues));
    let sum: number = 0;

    for (let i = 0; i < cartValues.length; i++) {
        sum += parseInt(cartValues[i]);
        localStorage.setItem("totalValue", JSON.stringify(sum));
    }

    document.getElementById("total").innerHTML = 'Cart Size: ' + sum;
}

(function cartSize() {
    let sum = localStorage.getItem("totalValue");
    document.getElementById("total").innerHTML = 'Cart Size: ' + sum;
}());