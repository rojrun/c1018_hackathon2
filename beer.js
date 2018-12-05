



$(document).ready(start);
var drink;
function start(){
    drink = new Beer;
}

class Beer {
    constructor (){
        this.getRandomBeer();
    }
    getRandomBeer (){
        var ajaxOptions = {
            format: 'json',
            url: 'https://sandbox-api.brewerydb.com/v2/beer/random',
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
        });
    }
}
