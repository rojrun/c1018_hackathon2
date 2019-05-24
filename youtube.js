class Youtube {
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
            $('.recipe').text("Your random recipe is " + recipeTitle);
            var videoUrl = response.video[0].id;
            $("<iframe>").attr("src", "https://www.youtube.com/embed/" + videoUrl).appendTo(".youtube");   
        });
    }
}

