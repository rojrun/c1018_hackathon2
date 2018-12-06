
$(document).ready(start);
var drink;
function start(){
    drink = new Beer;
}

class Beer {
    constructor (){
        this.getRandomBeer = this.getRandomBeer();
    }
    getRandomBeer (){
        let ajaxOptions = {
            dataType: 'json',
            url: 'proxies/randombeer.php',
            method:'get',
            data:{
                key: 'b9dea19c057881357318d0bd68522753',
                abv: "",
                hasLabels: "Y",
                withBreweries: "Y",
            },
            success: function(response){
                console.log(response);
            },
            errors: function(response){
                console.log(response);
            }
        };

        $.ajax(ajaxOptions).then(function(response){
            console.log(response);
            var beerName = response.data.name;
            var breweryName = response.data.breweries[0].name;
            var breweryAddress = response.data.breweries[0].locations[0].streetAddress;
            var breweryPostalCode = response.data.breweries[0].locations[0].streetAddress.postalCode;
        });
    }
}
