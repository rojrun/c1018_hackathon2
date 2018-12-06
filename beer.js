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
            errors: function(response){
                console.log(response);
            }
        };

        $.ajax(ajaxOptions).then(function(response){
            var beerName = response.data.name;
            var beerDescription = response.data.style.description
            var shortenedBeerDescription = beerDescription.substring(0,1000) + "..."
            shortenedBeerDescription = $('<div>',{
                text: shortenedBeerDescription,
                class: 'beerDescription'
            })
            beerName = $('<div>',{
                text: beerName,
                class: 'beerName'
            })
            $('.modal-body').append(beerName);
            $('.modal-body').append(shortenedBeerDescription);
            var breweryName = response.data.breweries[0].name;
            var breweryAddress = response.data.breweries[0].locations[0].streetAddress;
            var breweryPostalCode = response.data.breweries[0].locations[0].streetAddress.postalCode;
            let breweryName = response.data.breweries[0].name;
            let breweryAddress = response.data.breweries[0].locations[0].streetAddress;
            let breweryLocality = response.data.breweries[0].locations[0].locality;
            let breweryState = response.data.breweries[0].locations[0].region;
            let breweryPostalCode = response.data.breweries[0].locations[0].postalCode;
            let breweryType = response.data.breweries[0].locations[0].locationTypeDisplay
            let yearOpened = response.data.breweries[0].locations[0].yearOpened
            let title = breweryName + ' <br>' + breweryType + ' <br>' + ' Year Opened: ' + yearOpened + ' <br>' + breweryAddress + ' <br>' + breweryLocality + ', ' + breweryState + ' ' + breweryPostalCode;
            let address = breweryAddress.replace(/\s/g, '+') + '+' + breweryPostalCode;
            let newCoords = new Coordinates (address).getCoords(initMap, title);
        });
    }
}


