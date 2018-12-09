class Youtube{
    constructor(){
    }
    getData(recipeTitle) {
        var ajaxOptions = {
            url: 'http://s-apis.learningfuze.com/hackathon/youtube/search.php',
            method: 'post',
            dataType: 'json',
            data: {
                q: "how to cook " + recipeTitle,
                maxResults: 1,
                type: 'video',
            }
        };
        $.ajax(ajaxOptions).then(function (response) {
            $('.recipe').text(recipeTitle);
            let videoUrl = response.video[0].id;
            console.log(videoUrl);
            let iframe = $("<iframe>").attr('src',"https://www.youtube.com/embed/" + videoUrl);
            $(".youtube").append(iframe);

        })
    }
}

