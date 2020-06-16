class Food {
    constructor() {
        this.getFoodItem = this.getFoodItem.bind(this);
        this.callBack = null;
        this.sendDataToYoutube = this.sendDataToYoutube.bind(this);
    }

    sendDataToYoutube( recipeData ) {
        if(recipeData.count > 0){
            this.callBack(recipeData.recipes[1].title);
        }
    }

    getFoodItem(callBack) {
        this.callBack = callBack;
        var proteinArray = ["chicken", "fish", "steak", "snacks"];
        var protein = proteinArray[Math.floor(Math.random() * proteinArray.length)];
        console.log(protein);
        var foodObject = {
            url: "http://www.recipepuppy.com/api/",
            method: "get",
            dataType: "json",
            data: {
                q: protein
            }
        }

        $.ajax(foodObject).then(function(response) {
            var foodSelection = response.results[Math.floor(Math.random() * response.results.length)];
            console.log("repsonse", foodSelection);
            var foodTitle = foodSelection.title;
            var foodThumbnail = foodSelection.thumbnail;
            if (foodThumbnail === "") {
                console.log("no pic");
            }
            console.log("title", foodTitle);
            console.log("pic", foodThumbnail);
            $("<p>").
            $("<img>").attr("src", foodThumbnail).addClass("recipeImage").appendTo(".recipe");
        });

        $.ajax(foodObject).then(this.sendDataToYoutube);
    }
}
