$(document).ready(initializeApp)

function initializeApp(){
    //$(".randomizerButton").click(modulePopUp)
    $(".randomizerButton").click(modulePopUp)
    var coordFinder = new Coordinates("2427+Malibu+Way+Del+Mar,+CA+92014");
    coordFinder.getCoords(initMap)
}
function modulePopUp(){
    console.log('hi')
    var moduleBox = $('<div>',{
        class: 'module', 
    })
    $('.bodyContainer').append(moduleBox)
}
function initMap(location) {
    // The location of Uluru
    console.log('init map location: ',location);
    var uluru = location
    // The map, centered at Uluru
    var map = new google.maps.Map(
        $('#map')[0], {zoom: 6, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }





