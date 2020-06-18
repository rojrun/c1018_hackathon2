class Beer {
    constructor() {
        this.getRandomBeer = this.getRandomBeer();
    }

    getRandomBeer() {
        let ajaxOptions = {
            url: "proxies/randombeer.php", //using proxy for CORS policy
            dataType: "json",
            method:"get",
            data: {
                url: "http://api.brewerydb.com/v2/beer/random",
                key: beerAPI,
                abv: "",
                hasLabels: "Y",
                withBreweries: "Y"
            }
        };

        $.ajax(ajaxOptions).then(function(response){
            let beerName = response.data.name;
            let beerDescription = response.data.style.description;
            $("<h3>").text("Your random beer is " + beerName).appendTo(".beerName");
            $('<p>').text('Description: ' + beerDescription).appendTo(".beerDescription");

            // response data to be used for google map
            let breweryName = response.data.breweries[0].name;
            let breweryAddress = response.data.breweries[0].locations[0].streetAddress;
            let breweryLocality = response.data.breweries[0].locations[0].locality;
            let breweryState = response.data.breweries[0].locations[0].region;
            let breweryPostalCode = response.data.breweries[0].locations[0].postalCode;

            let yearOpened = response.data.breweries[0].locations[0].yearOpened;
            if (yearOpened === undefined) {
                yearOpened = "unknown";
            }

            let title = breweryName + ' <br>' + ' Year Opened: ' + yearOpened + ' <br>' + breweryAddress + ' <br>' + breweryLocality + ', ' + breweryState + ' ' + breweryPostalCode;
            let address = breweryAddress.replace(/\s/g, '+') + '+' + breweryPostalCode;
            $("<p>").text("Brewery Info:").appendTo(".breweryInfo");
            $("<blockquote>").html(title).appendTo(".breweryInfo");
            
            let newCoords = new Coordinates (address).getCoords(initMap, title);
        });
    }
}
