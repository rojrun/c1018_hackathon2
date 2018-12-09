class Recipes{
    constructor(){
        this.callBack = null;
        this.sendDataToYoutube = this.sendDataToYoutube.bind(this);
        this.randomNumber1 = Math.floor(Math.random()*25)+1
        this.randomPageNumber = Math.floor(Math.random()*100)+1
    }

    sendDataToYoutube( recipeData ){
        if(recipeData.count>0){
            this.callBack(recipeData.recipes[1].title);
        }
    }

    getRecipeData(callBack){
        this.callBack = callBack;
        let recipeObject = {
            url: 'https://www.food2fork.com/api/search',
            method: 'get',
            dataType: 'json',
            data:{
                key: '074b75a8150c14232378c4a730358dc3',
                page: this.randomPageNumber
            }
        }

            $.ajax(recipeObject).then(this.sendDataToYoutube)
            
            $.ajax(recipeObject).then(function(response){
                var recipeUrl = response.recipes[1].source_url;
                //var recipeUrlEmbed = recipeUrl
                console.log(recipeUrl);
                let recipeIframe = $("<iframe>").attr('src', recipeUrl);
                $('.recipe').append(recipeIframe);
            })

    }
}


