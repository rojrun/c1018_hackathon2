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
            console.log(response);
            let videoUrl = response.video[0].id
            $('iframe').attr('src', "https://www.youtube.com/embed/"+videoUrl);
            var recipeTitleToDom = recipeTitle
    
            recipeTitleToDom = $('<div>',{
                class: 'recipeTitle',
                text: recipeTitleToDom
            })
            $('.modal-body').append(recipeTitleToDom)
        })
            let videoUrl = response.video[0].id;
            let iframe = $("<iframe>").attr('src', "https://www.youtube.com/embed/" + videoUrl);
            $(".backgroundImage").append(iframe);
        });
    }
}


