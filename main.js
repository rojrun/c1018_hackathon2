$(document).ready(initializeApp)

function initializeApp(){
    $(".randomizerButton").click(openModal);
    var coordFinder = new Coordinates("2427+Malibu+Way+Del+Mar,+CA+92014");
    coordFinder.getCoords(initMap)
    var youTube = new Youtube();
    var recipe = new Recipes();
    recipe.getRecipeData(youTube.getData)
}

function openModal(){
    $("#myModal").modal("show");
    $(".modal-body > p").text('balls');
 }
 
function initMap(location) {
    // The location of Uluru
    console.log('init map location: ',location);
    var uluru = location
    // The map, centered at Uluru
    var map = new google.maps.Map(
        $('#map')[0], {zoom: 12, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }


