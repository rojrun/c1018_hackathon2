$(document).ready(initializeApp);

function initializeApp(){
    $(".randomizerButton").click(createMeal);
}

function createMeal(){
    $(".title").hide();
    $(".randomizerButton").hide();
    var beer = new Beer();
    var youTube = new Youtube();
    var recipe = new Recipes();
    recipe.getRecipeData(youTube.getData);
}

function initMap(location, title) {
    var newLocation = location;
    var map = new google.maps.Map(
        $('.map')[0], {zoom: 6, center: newLocation});
    var marker = new google.maps.Marker({position: newLocation, map: map });
    var info = new google.maps.InfoWindow({
        content: title
    })
    marker.addListener('click', function() {
        info.open(map, marker);
      });
  }

