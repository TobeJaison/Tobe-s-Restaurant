window.onload = function () {
    var order = (sessionStorage.getItem("order"));
    var orderDetails = JSON.parse(order);
    console.log(orderDetails);

    var totalPriceDiv = document.getElementById("totalPrice");


    var subTotal = 0;
    var tax = 0.02;
    var totalPrice = 0;

    for (var i = 0; i < orderDetails.length; i++) {
       
        var orderItem = document.createElement("div");
        orderItem.className = "item";

        var orderItem2 = document.createElement("div");
        orderItem2.className = "item2";

        //orderItem.style.display = "inline-block";
        var title = document.createElement("span");
        title.innerHTML = orderDetails[i].title;
        title.className = "text";

        var image = document.createElement("img");
        image.src = orderDetails[i].image_URL;
        image.style.width = "50px";
        image.style.height = "50px";
        image.alt = orderDetails[i].title;

        var quantity = document.createElement("span");
        quantity.innerHTML = "Quantity: " + orderDetails[i].quantity;
        quantity.className = "text2";

        var price = document.createElement("span");
        price.innerHTML = "Price: $" + (orderDetails[i].price * orderDetails[i].quantity).toFixed(2);
        price.className = "text3";


        subTotal += parseFloat(orderDetails[i].price * orderDetails[i].quantity);
      

        orderItem.appendChild(image);
        orderItem.appendChild(title);
        orderItem2.appendChild(quantity);
        orderItem2.appendChild(price);

        
        var display = document.getElementById("image-and-title");
        display.appendChild(orderItem);

        var display2 = document.getElementById("quantity-and-price");
        display2.appendChild(orderItem2);
    }
    var currentTotal = document.createElement("p");
    currentTotal.innerHTML = "Subtotal: $" + subTotal.toFixed(2);
    currentTotal.id = "subTotal";

    tax = tax * subTotal;
    var taxTotal = parseFloat(tax);


    var newTotal = document.createElement("p");
    newTotal.innerHTML = "Tax: $" + taxTotal.toFixed(2);;
         
    newTotal.id = "orderTaxPrice";

    totalPrice = taxTotal + subTotal;
   

    var totalBalance = document.createElement("h3");
    totalBalance.innerHTML = "Total Balance: $" + totalPrice.toFixed(2);
    totalBalance.class = "totalPrice";

    totalPriceDiv.appendChild(currentTotal);
    totalPriceDiv.appendChild(newTotal);
    totalPriceDiv.appendChild(totalBalance);


    function cardTypeValidate() {
        var card = $("#cardType").val();
        if (card == "blank") {
            alert("Card type is a required field");
            $("#cardType").css("border-color", "red");
            return false;
        }
        $("#cardType").css("border-color", "");
        return true;
    }
    function cardHolderNameValidate() {
        var cardHolderName = $("#cardHolder").val();

        if (cardHolderName == "") {
            alert("Name on card is a required field");
            $("#cardHolder").css("border-color", "red");
            
            return false;
        }
        if (isNaN(cardHolderName) == false) {
            alert("Name on card must only have characters");
            $("#cardHolder").css("border-color", "red");
            return false;
        }
        $("#cardHolder").css("border-color", "");
        return true;
    }
    function cardNumberValidate() {
        var digits = $("#sixteenDigitNumber").val();
        
        if (digits == "") {
            alert("Sixteen digit card number is a required field");
            $("#sixteenDigitNumber").css("border-color", "red");
            return false;
        }
            
        if (isNaN(digits)) {
            alert("The card number can only be numbers");
            $("#sixteenDigitNumber").css("border-color", "red");
              
            return false;
        }
        if (digits.length != 16) {
            alert("You must enter a sixteen digit card number");
            $("#sixteenDigitNumberr").css("border-color", "red");
            return false;
        }
        $("#sixteenDigitNumber").css("border-color", "");
        return true;
    }
    function expirationDateValidate() {
        var expiration = $("#expirationDate").val();

        if (expiration == "") {
            alert("Expiration date is a required field");
            $("#expirationDate").css("border-color", "red");
            return false;
        }
        if (expiration.charAt(2) != "/") {
            alert("Date must contain a forward slash (/) after the first two digits");
            $("#expirationDate").css("border-color", "red");
            return false;
        }
       
        if (expiration.length != 7) {
            alert("Date must be in the format MM / YYYY");
            $("#expirationDate").css("border-color", "red");
            return false;
        }
        $("#expirationDate").css("border-color", "");
         return true;
        
    }
    function cvvValidate() {
        var cvvCode = $("#cvv").val();

        if (cvvCode == "") {
            alert("CVV is a required field");
            $("#cvv").css("border-color", "red");
            return false;
        }
        if (isNaN(cvvCode)) {
            alert("The CVV code contains only numbers");
            $("#cvv").css("border-color", "red");
            return false;
        }
        if (cvvCode.length != 3) {
            alert("CVV is the three digit code on back of your card");
            $("#cvv").css("border-color", "red");
            return false;
        }
        $("#cvv").css("border-color", "");
        return true;
    }
    $("#orderBtn").click(function () {

        
        var card = cardTypeValidate();
        var cardHolderName = cardHolderNameValidate();
        var number = cardNumberValidate();
        var expiration = expirationDateValidate();
        var cvvCode = cvvValidate();

        if (card != false && cardHolderName != false && number != false && expiration != false && cvvCode != false) {
            alert("Thank You for ordering. Your order has been placed.")

            location.href = "./index.html";
        }
        
   
        
    });

    window.onunload = function () {
        sessionStorage.clear();
    }
};