
window.onload = function () {
    function food(title, image_URL, price,quantity) {
        this.title = title;
        this.image_URL = image_URL;
        this.price = price;
        this.quantity = quantity;
           
    }
    //Some of the event handlers are at the end of the page
        /*Chicken Sandwitches*/

    var ChickenSandwich1 = new food("Cripsy Buffalo Chicken Sandwich", "images/CrispyBuffaliChickSand.jpg",5.00,0);
    var ChickenSandwich2 = new food("Crispy Chicken Sandwich", "images/CrispyChicSand.jpg",3.50,0);
    var ChickenSandwich3 = new food("Grilled Chicken Sandwich", "images/GrilledChickenSand.jpg", 4.20,0);
    var ChickenSandwich4 = new food("Honey Mustard Chicken Sandwich", "images/Honey-Mustard-Chicken-Sand.jpg",4.00,0);
    var ChickenSandwich5 = new food("Spicy Fried Chicken Sandwich", "images/spicy-fried-chicken-sandwich.jpg", 3.25,0);
    var ChickenSandwich6 = new food("Barbecue Chicken Sandwich", "images/bbq-chicken-sandwich.jpg", 2.50,0);

    var sandwichArr = [ChickenSandwich1, ChickenSandwich2, ChickenSandwich3, ChickenSandwich4, ChickenSandwich5, ChickenSandwich6]

    /*Salads*/

    var Salad1 = new food("Avocado and Tomato Salad", "images/avocado-and-tomato-salad-1524672116.png",2.00,0);
    var Salad2 = new food("Chicken Caesar Salad", "images/chicken-caesar-salad.jpg", 3.00,0);
    var Salad3 = new food("Fruit Salad", "images/fruit-salad.jpg", 2.50,0);
    var Salad4 = new food("Grilled Chicken Salad", "images/Grill Chicken Salad.jpg", 1.50,0);
    var Salad5 = new food("Macaroni Salad", "images/Macaroni-Salad.jpg", 3.00,0);
    var Salad6 = new food("Vegetable Salad", "images/vegetable-salad.jpeg",2.00,0);
        
    var saladArr = [Salad1, Salad2, Salad3, Salad4, Salad5, Salad6];

    /*Pizza */

    var Pizza1 = new food("Cheese Pizza", "images/Cheese-Pizza.jpeg",4.00,0);
    var Pizza2 = new food("Mushroom Pizza", "images/Mushroom-Pizza.jpg", 6.00,0);
    var Pizza3 = new food("Pepperoni Pizza", "images/Pepperoni.jpg",7.00,0);
    var Pizza4 = new food("Sausage Pizza", "images/Sausage-Pizza.png",5.00,0);
    var Pizza5 = new food("Vegeterian Pizza","images/Vegeterian-Pizza.jpg",5.50,0);
    var Pizza6 = new food("Buffalo Chicken Pizza", "images/Buffalo-Chicken-Pizza.jpg",6.50,0);
       
    var pizzaArr = [Pizza1, Pizza2, Pizza3, Pizza4, Pizza5, Pizza6];

    /*Soda */

    var Soda1 = new food("Coco Cola", "images/Coca-Cola-logo.png", 2.00,0);
    var Soda2 = new food("Coco Cola Zero", "images/coco-cola-zero.jpg", 2.00,0);
    var Soda3 = new food("Fanta", "images/fanta.png", 1.00,0);
    var Soda4 = new food("Mountain Dew","images/mountain-dew-logo.png" ,3.00,0);
    var Soda5 = new food("Pepsi", "images/pepsi-logo.png", 2.50,0);
    var Soda6 = new food("Sprite", "images/sprite.jpg", 3.00,0);

    var sodaArr = [Soda1, Soda2, Soda3, Soda4, Soda5, Soda6];

       

       
       
    // var items = chickenArr.concat(saladArr.concat(pizzagArr.concat(sodaArr)));
     
        
        
    $(".container2").hide();
    var itemList = function (arr,food) {
        // Get the professor selected from the drop-down list
        $(".container").hide();
        $(".container2").show();


        let display = document.getElementById("column1");
            
        display.innerHTML = "";

        document.getElementById("foodType").innerHTML = food;
          

        for (var i = 0; i < 3; i++) {
                
            let title = document.createElement("h3");
            title.innerHTML = arr[i].title;
            let newLine = document.createElement("br");
            let imageFile = arr[i].image_URL;
            let image = createImage(imageFile, "300px", "300px");

            let price = document.createElement("p");
            price.innerHTML = "Price: $" + arr[i].price;
            price.setAttribute("class","cost");

            let addToOrderBtn = document.createElement("button");
            addToOrderBtn.setAttribute("id", "btn" + i);

            addToOrderBtn.setAttribute("name", "btn" + i);
            addToOrderBtn.setAttribute("type", "button");
            addToOrderBtn.setAttribute("class", "addBtn");
            addToOrderBtn.innerHTML = "Add to Order";
            addToOrderBtn.addEventListener("click", addItems);
                

            let qtyLabel = document.createElement("label");
            qtyLabel.setAttribute("for", "btn" + i);
            qtyLabel.innerHTML = "Quantity";
            qtyLabel.setAttribute("class", "qtyLabel");

            let txtBox = document.createElement("input");
            txtBox.setAttribute("type", "number");
            txtBox.setAttribute("id", "qty" + i);
            txtBox.setAttribute("class", "qty");
            txtBox.setAttribute("name", "quantity");
            txtBox.setAttribute("Placeholder", "qty");
            txtBox.setAttribute("min", 1);
            txtBox.setAttribute("max", 10);
                
            let itemDiv = document.createElement("div");
                    
            
                   

            itemDiv.className = "itemContainer";
            itemDiv.appendChild(title);
             
            itemDiv.appendChild(image);
                
               
            itemDiv.appendChild(price);
               
            itemDiv.appendChild(qtyLabel);
              
            itemDiv.appendChild(txtBox);
            itemDiv.appendChild(newLine);
            itemDiv.appendChild(addToOrderBtn);

                
            display.appendChild(itemDiv);
                   
                           
        }

            

        let display2 = document.getElementById("column2");

        display2.innerHTML = "";

            
        for (var i = 3; i < arr.length; i++) {

            let title = document.createElement("h3");
            title.innerHTML = arr[i].title;
            let newLine = document.createElement("br");
            let imageFile = arr[i].image_URL;
            let image = createImage(imageFile, "300px", "300px");

            let price = document.createElement("p");
            price.innerHTML = "Price: $" + arr[i].price;
            price.setAttribute("class", "cost2");

            let addToOrderBtn = document.createElement("button");
            addToOrderBtn.setAttribute("id", "btn" + i);

            addToOrderBtn.setAttribute("name", "btn" + i);
            addToOrderBtn.setAttribute("type", "button");
            addToOrderBtn.setAttribute("class", "addBtn2");
            addToOrderBtn.innerHTML = "Add to Order";
            addToOrderBtn.addEventListener("click", addItems);

            let qtyLabel = document.createElement("label");
            qtyLabel.setAttribute("for", "btnTwo" + i);
            qtyLabel.innerHTML = "Quantity";
            qtyLabel.setAttribute("class", "qtyLabel2");

            let txtBox = document.createElement("input");
            txtBox.setAttribute("type", "number");
            txtBox.setAttribute("id", "qty" + i);
            txtBox.setAttribute("class", "qty2");
            txtBox.setAttribute("name", "quantity");
            txtBox.setAttribute("Placeholder", "qty");
            txtBox.setAttribute("min", 1);
            txtBox.setAttribute("max", 10);

            let itemDiv2 = document.createElement("div");




            itemDiv2.className = "itemContainer2";
            itemDiv2.appendChild(title);

            itemDiv2.appendChild(image);


            itemDiv2.appendChild(price);

            itemDiv2.appendChild(qtyLabel);

            itemDiv2.appendChild(txtBox);
            itemDiv2.appendChild(newLine);
            itemDiv2.appendChild(addToOrderBtn);


            display2.appendChild(itemDiv2);


        }

    };
    var orderArr = [];
    var addItems = function () {
        
        var index = this.id.replace("btn", "");
        var qty = document.getElementById("qty" + index);

        var foodItem = document.getElementById("foodType").innerHTML;
        var amount = parseInt(qty.value);
        
        if (amount > 10) {
            alert("Item can't have a quantity more than ten");
            qty.value = "";
        }
        else {
            if (foodItem == "Sandwiches") {
                if (isNaN(amount) != true) {
                    sandwichArr[index].quantity = amount;
                    orderArr.push(sandwichArr[index]);
                    alert(sandwichArr[index].title + " has been added to your order");
                    qty.value = "";
                }
                else {
                    alert(sandwichArr[index].title + " must have a quantity");
                }
            }
            else if (foodItem == "Salads") {
                if (isNaN(amount) != true) {

                    saladArr[index].quantity = amount;
                    orderArr.push(saladArr[index]);
                    alert(saladArr[index].title + " has been added to your order");
                    qty.value = "";
                }
                else {
                    alert(saladArr[index].title + " must have a quantity");
                }
            }
            else if (foodItem == "Pizzas") {
                if (isNaN(amount) != true) {
                    pizzaArr[index].quantity = amount;
                    orderArr.push(pizzaArr[index]);
                    alert(pizzaArr[index].title + " has been added to your order");
                    qty.value = "";
                }
                else {
                    alert(pizzaArr[index].title + " must have a quantity");
                }
            }
            else {
                if (isNaN(amount) != true) {

                    sodaArr[index].quantity = amount;
                    orderArr.push(sodaArr[index]);
                    alert(sodaArr[index].title + " has been added to your order");
                    qty.value = "";
                }
                else {
                    alert(sodaArr[index].title + " must have a quantity");
                }
            }
        }
       
    }
    function createImage(file, width, height) {
        var image = document.createElement("img");
        var imageFile = file;

        if (image != null && image != undefined) {
            image.src = imageFile;
            image.style.width = width;
            image.style.height = height;
               
        }
    return image;           
    }
    var sandwichList = function () {
        let name = "Sandwiches";
        itemList(sandwichArr, name);
           
    };
    var saladList = function () {
        let name = "Salads";
        itemList(saladArr, name);
            
    };
    var pizzaList = function () {
        let name = "Pizzas";
        itemList(pizzaArr, name);
            
    };
    var sodaList = function () {
        let name = "Sodas";
        itemList(sodaArr, name);
            
    };

    var menu = function () {
        $(".container").show();
        $(".container2").hide();
    }
    var orderDetailsPage = function () {
        if (orderArr.length > 0) {
            location.href = "./order.html";
        }
        else {
            alert("There are no items added to your order. Please, add items to your order inorder to proceed to checkout.");
        }
    };

    document.getElementById("sandwichBtn").onclick = sandwichList;
    document.getElementById("saladBtn").onclick = saladList;
    document.getElementById("pizzaBtn").onclick = pizzaList;
    document.getElementById("sodaBtn").onclick = sodaList;
    document.getElementById("menuBtn").onclick = menu;
    document.getElementById("checkOutBtn").onclick = orderDetailsPage;
    
    window.onunload = function () {
        sessionStorage.setItem("order", JSON.stringify(orderArr));
    }
};

