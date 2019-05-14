$(document).ready(initializeApp);

function initializeApp() {
    var randomizerButton = $("<button>").addClass("randomizerButton").click(createMeal).text("Click for Random Munchies and Beer").appendTo(".main_content");
    // $(".randomizerButton").click(createMeal);
    // $('.newRecipe').hide();
    // $('.newBeer').hide();
    // $('.newRecipe').click(recreateMeal);
    // $('.newBeer').click(recreateBeer);
}

{/* <div class="contentRecipe">
            <div class="recipe"></div>
            <div class="youtube"></div>
        </div>
        <div class="contentBeer"><strong id="beerName"></strong>
            <div id="beerDescription"></div>
            <div class="content map"></div>
        </div> */}

function createMeal() {
    // $(".title").hide();
    $(".randomizerButton").remove();
    var newRecipeBttn = $("<button>").addClass("newRecipe").click(recreateMeal).text("New Recipe").appendTo(".main_content");
    var contentRecipe = $("<div>").addClass("contentRecipe").appendTo(".main_content");
    var recipe = $("<div>").addClass("recipe").appendTo(".contentRecipe");
    var youtube = $("<div>").addClass("youtube").appendTo(".contentRecipe");
    var newBeerBttn = $("<button>").addClass("newBeer").click(recreateBeer).text("New Beer").appendTo(".main_content");
    // $('.newRecipe').show();
    // $('.newBeer').show();
    var beer = new Beer();
    var youTube = new Youtube();
    var recipe = new Recipes();
    recipe.getRecipeData(youTube.getData);
}

function recreateMeal() {
    $('iframe').remove()
    var youTube = new Youtube();
    var recipe = new Recipes();
    recipe.getRecipeData(youTube.getData);
}

function recreateBeer(){
    new Beer();
}

function initMap(location, title) {
    var newLocation = location;
    var map = new google.maps.Map(
        $('.map')[0], {zoom: 6, center: newLocation});
    var image = '205339134Untitled-3-512.png';
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
