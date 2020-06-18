class Food {
    constructor() {
        this.getFoodItem = this.getFoodItem.bind(this);
    }

    getFoodItem(callback) {
        var proteinArray = ["chicken", "fish", "pork", "lamb", "steak", "snacks"]; 
        var protein = proteinArray[Math.floor(Math.random() * proteinArray.length)]; //randomizing through protein array
        var foodObject = {
            url: "proxies/randombeer.php", //using proxy for CORS policy
            method: "get",
            dataType: "json",
            data: {
                url: "http://www.recipepuppy.com/api/",
                q: protein
            }
        }

        $.ajax(foodObject).then(function(response) {
            var foodSelection = response.results[Math.floor(Math.random() * response.results.length)];
            var foodTitle = foodSelection.title;
            var ingredients = foodSelection.ingredients;
            callback(foodTitle);
            $("<h3>").text("Your random recipe is " + foodTitle).appendTo(".recipeTitle");
            $("<p>").text("Ingredients: " + ingredients).appendTo(".recipeIngredients");
        });  
    }
}
