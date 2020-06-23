$(document).ready(initializeApp);

function initializeApp() {  //landing page with title and start button
    $(".title").click(function() {
        location.reload();
    });
    $("<button>").addClass("randomizerButton").click(createMeal).text("Click for Random Beer and Munchies").appendTo(".main_content");
}

function createMeal() {
    $(".randomizerButton").remove();

    //beer content with button
    var contentBeer = $("<div>").addClass("contentBeer").appendTo(".main_content");
    var newBeerBttn = $("<button>").addClass("newBeer").click(recreateBeer).text("New Beer").appendTo(".contentBeer");
    var beerName = $("<div>").addClass("beerName").appendTo(".contentBeer");
    var breweryInfo = $("<div>").addClass("breweryInfo").appendTo(".contentBeer");
    var beerMap = $("<div>").addClass("map").appendTo(".contentBeer");
    var beerDescription = $("<div>").addClass("beerDescription").appendTo(".contentBeer");

    //recipe content with button
    var contentRecipe = $("<div>").addClass("contentRecipe").appendTo(".main_content");
    var newRecipeBttn = $("<button>").addClass("newRecipe").click(recreateMeal).text("New Recipe").appendTo(".contentRecipe");
    var recipeTitle = $("<div>").addClass("recipeTitle").appendTo(".contentRecipe");
    var recipeIngredients = $("<div>").addClass("recipeIngredients").appendTo(".contentRecipe");
    var youtubeContent = $("<div>").addClass("youtube").appendTo(".contentRecipe");
    
    var beer = new Beer();
    var food = new Food();
    var youTube = new Youtube();
    food.getFoodItem(youTube.getData);
}

function recreateBeer() {
    $(".beerName, .breweryInfo, .map, .beerDescription").empty(); //deletes children nodes of .contentBeer
    new Beer();
}

function recreateMeal() {
    $(".recipeTitle, .recipeIngredients, .youtube").empty(); //deletes children nodes of .contentRecipe
    var food = new Food();
    var youTube = new Youtube();
    food.getFoodItem(youTube.getData);
}

function initMap(location, title) { //gets brewery address from beer.js and displays on google map
    var newLocation = location;
    var map = new google.maps.Map(
        $('.map')[0], {zoom: 6, center: newLocation});
    var image = 'images/beerglasses.png';
    var marker = new google.maps.Marker({
        icon: image,
        position: newLocation,
        map: map,
        label: 'Brewery Location'
    });
    var info = new google.maps.InfoWindow({
        content: title
    });
    marker.addListener('click', function() {
        info.open(map, marker);
    });
}
