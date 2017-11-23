/* GLOBAL VARIABLES */
var listOfProducts;
var numberOfAddedProducts = 0;

/*Hämta produkter från json filen och lägg i javascript variabeln*/
fetch("./products.json")
.then(function(response) {
    return response.json();
})
.then(function(products) {
    listOfProducts = products;
    createUIFromLoadedProducts();
});


/*Använder produktdatan för att skapa synlig produktlist på sidan*/
function createUIFromLoadedProducts() {
    
    

    /*ovan gammalt!*/


    /*nedan nytt!*/


    //anropa variabeln main i index.html
    var main = document.getElementById("main");
    
    //sen anropas variabeln produktlist för att skapa ett element
    var productList =document.createElement("div");
    productList.className = 'productListClass';

    //loopa genom listan
    for(var index = 0; index < listOfProducts.length; index++) {

        //Anropa Ny function

        var productListItem = createProductListItem(listOfProducts[index]);

        //lägg till productlistItem till productlist
        productList.appendChild(productListItem);

    }

    //skriv ut productList till Main
    main.appendChild(productList);

}

//Nu skapar vi functionen, utanför vår tidigare funktion

function createProductListItem(productItem) {
    var productListItem = document.createElement("div");
    productListItem.className = 'productListItemClass';
 
    
    //Titel
    var getTitle = document.createElement("h1");
    getTitle.innerText = " " + productItem.title;
    productListItem.appendChild(getTitle);

    //Description
    var getDescription = document.createElement("h5");
    getDescription.innerText = " " + productItem.description;
    productListItem.appendChild(getDescription); 

    //Image
    var getImage = document.createElement("img");
    getImage.src = "assets/" + productItem.image;
    productListItem.appendChild(getImage);

    //Price
    var getPrice = document.createElement("p");
    getPrice.innerText = "Pris: " + productItem.price + " SEK";
    productListItem.appendChild(getPrice);

//lägga till knapp

var buttonElement = document.createElement("button");
//lägg till element för ikon i knapp
var basketIcon = document.createElement("i");
//lägg till klass för fontawesome
basketIcon.className = 'fa fa-cart-arrow-down fa-3x';
buttonElement.appendChild(basketIcon);

//span för den är Inline
var basketText = document.createElement("span");
basketText.innerText = " Lägg till i varukorgen";
buttonElement.appendChild(basketText);
buttonElement.onclick = function() {
    numberOfAddedProducts += 1;
    console.log(numberOfAddedProducts);

/*Räknare*/
var counter = document.getElementById("counter");
counter.innerText = numberOfAddedProducts;
}
productListItem.appendChild(buttonElement);
//skriv ut funktionen med return
return productListItem;

}

