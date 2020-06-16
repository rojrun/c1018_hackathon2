class Beer {
    constructor() {
        this.getRandomBeer = this.getRandomBeer();
    }

    getRandomBeer() {
        let ajaxOptions = {
            dataType: "json",
            url: "proxies/randombeer.php",
            method:"get",
            data: {
                url: "http://api.brewerydb.com/v2/beer/random",
                key: beerAPI,
                abv: "",
                hasLabels: "Y",
                withBreweries: "Y"
            },
            errors: function(response){
            }
        };

        $.ajax(ajaxOptions).then(function(response){
            let beerName = response.data.name;
            let beerDescription = response.data.style.description;
            $('.beerName').text('Your random beer is ' + beerName);
            $('.beerDescription').text('Description: ' + beerDescription);
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
