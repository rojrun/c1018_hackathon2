class Youtube{
    constructor(){
    }

    getData(recipeTitle) {
        console.log("get data is running with" , recipeTitle)
        var ajaxOptions = {
            url: 'http://s-apis.learningfuze.com/hackathon/youtube/search.php',
            method: 'post',
            dataType: 'json',
            data: {
                q: recipeTitle,
                maxResults: 10,
                type: 'video',
    
            }
        };
        $.ajax(ajaxOptions).then(function (response) {
            console.log(response);
        })
    }


}


