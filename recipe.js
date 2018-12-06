class Recipes{
    constructor(){
        this.callBack = null;
        this.sendDataToYoutube = this.sendDataToYoutube.bind(this);
        this.randomNumber1 = Math.floor(Math.random()*25)+1
        this.randomNumber2 = Math.floor(Math.random()*100)+1
    }

    sendDataToYoutube( recipeData ){
        console.log(recipeData);
        if(recipeData.count>0){
            this.callBack( recipeData.recipes[this.randomNumber1].title);
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
                page: this.randomNumber2
                //q: 'chicken%20breast',
            }
        }

            $.ajax(recipeObject).then( this.sendDataToYoutube )
    }

}


