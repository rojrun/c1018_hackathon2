$(document).ready(initializeApp);

function initializeApp() {
    $(".title").click(function() {
        location.reload();
    });
    $("<button>").addClass("randomizerButton").click(createMeal).text("Click for Random Beer and Munchies").appendTo(".main_content");
}

function createMeal() {
    $(".randomizerButton").remove();

    var contentBeer = $("<div>").addClass("contentBeer").appendTo(".main_content");
    var newBeerBttn = $("<button>").addClass("newBeer").click(recreateBeer).text("New Beer").appendTo(".contentBeer");
    var beerName = $("<div>").addClass("beerName").appendTo(".contentBeer");
    var beerMap = $("<div>").addClass("map").appendTo(".contentBeer");
    var beerDescription = $("<div>").addClass("beerDescription").appendTo(".contentBeer");

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

function recreateMeal() {
    $("iframe").remove(); 
    var food = new Food();
    var youTube = new Youtube();
    food.getFoodItem(youTube.getData);
}

function recreateBeer() {
    $(".contentBeer").remove();
    new Beer();
}

function initMap(location, title) {
    var newLocation = location;
    var map = new google.maps.Map(
        $('.map')[0], {zoom: 6, center: newLocation});
    var image = 'beerglasses.png';
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
