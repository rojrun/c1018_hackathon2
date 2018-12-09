$(document).ready(initializeApp);

function initializeApp(){
    $(".column").hide();
    $(".newRecipe").hide();
    $(".randomizerButton").click(createMeal);
    $('.newRecipe').click(recreateMeal)
}

function createMeal(){
    $(".title").hide();
    $(".randomizerButton").hide();
    $(".column").show();
    $(".newRecipe").show();
    $('#beerDescription').css('background-color', 'white')
    var beer = new Beer();
    var youTube = new Youtube();
    var recipe = new Recipes();
    recipe.getRecipeData(youTube.getData);
}
function recreateMeal() {
    $(".title").hide();
    $(".randomizerButton").hide();
    $('#beerDescription').css('background-color', 'white')
    var beer = new Beer();
    var youTube = new Youtube();
    var recipe = new Recipes();
    recipe.getRecipeData(youTube.getData);
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
