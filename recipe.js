class Recipes{
    constructor(){
        this.callBack = null;
        this.sendDataToYoutube = this.sendDataToYoutube.bind(this);
        this.randomNumber1 = Math.floor(Math.random()*25)+1
        this.randomNumber2 = Math.floor(Math.random()*100)+1
        // console.log(randomNumber1)
        // console.log(randomNumber2)
    }

    sendDataToYoutube( recipeData ){
        if(recipeData.count>0){
            //this.callBack( recipeData.recipes[0].title);
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
                //page: '4',
                page: this.randomNumber2
                //q: 'chicken%20breast',
            }
        }

            $.ajax(recipeObject).then( this.sendDataToYoutube )
            
    }

}


    //  $.ajax(recipeObject).then(response => this.organResponse(paramaters).fail())
    //      console.log(response)
    

