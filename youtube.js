class Youtube{
    constructor(){
    }
    getData(recipeTitle) {
        var ajaxOptions = {
            url: 'http://s-apis.learningfuze.com/hackathon/youtube/search.php',
            method: 'post',
            dataType: 'json',
            data: {
                q: recipeTitle,
                maxResults: 1,
                type: 'video',
    
            }
        };
        $.ajax(ajaxOptions).then(function (response) {
            console.log(response);
            let videoUrl = response.video[0].id
            $('iframe').attr('src', "https://www.youtube.com/embed/"+videoUrl);
        })
    }


}

