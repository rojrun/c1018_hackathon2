class Recipes{
    constructor(){
        this.callBack = null;
        this.sendDataToYoutube = this.sendDataToYoutube.bind(this);
    }

    sendDataToYoutube( recipeData ){
        if(recipeData.count>0){
            this.callBack( recipeData.recipes[0].title);
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
                page: '2',
                //q: 'chicken%20breast',
            }
        }

            $.ajax(recipeObject).then( this.sendDataToYoutube )
            
    }

}


    //  $.ajax(recipeObject).then(response => this.organResponse(paramaters).fail())
    //      console.log(response)
    

