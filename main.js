$(document).ready(initializeApp)

function initializeApp(){
    $(".randomizerButton").click(openModal);
    // var coordFinder = new Coordinates("2427+Malibu+Way+Del+Mar,+CA+92014");
    // coordFinder.getCoords(initMap)
    var beer = new Beer();
    var youTube = new Youtube();
    var recipe = new Recipes();
    recipe.getRecipeData(youTube.getData)
}


function openModal(){
    $("#myModal").modal("show");
    $(".modal-body > p").text('balls');
 }
function initMap(location, title) {
    var newLocation = location;
    var brewery = title
    var map = new google.maps.Map(
        $('#map')[0], {zoom: 6, center: newLocation});
    var marker = new google.maps.Marker({position: newLocation, map: map });
    var info = new google.maps.InfoWindow({
        content: title
    })
    marker.addListener('click', function() {
        info.open(map, marker);
      });
  }


