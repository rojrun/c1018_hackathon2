class Recipes {
    constructor() {
        this.callBack = null;
        this.sendDataToYoutube = this.sendDataToYoutube.bind(this);
        this.randomNumber1 = Math.floor(Math.random()*25)+1;
        this.randomPageNumber = Math.floor(Math.random()*100)+1;
    }

    sendDataToYoutube( recipeData ) {
        if(recipeData.count>0){
            this.callBack(recipeData.recipes[1].title);
        }
    }

    getRecipeData(callBack) {
        this.callBack = callBack;
        var recipeObject = {
            url: "https://www.food2fork.com/api/search",
            method: "get",
            dataType: "json",
            data: {
                key: recipeAPI,
                page: this.randomPageNumber
            }
        }

        $.ajax(recipeObject).then(this.sendDataToYoutube);
        
        $.ajax(recipeObject).then(function(response){
            var sourceUrl = response.recipes[1].source_url;
            var imageUrl = response.recipes[1].image_url;
            $("<img>").attr("src", imageUrl).addClass("recipeImage").appendTo(".recipe").click(function(){
                window.open(sourceUrl, "_blank");
            });
        });
    }
}


