class Youtube {
    constructor() {
        this.getData = this.getData.bind(this);
    }

    getData(foodTitle) {
        var ajaxOptions = {
            url: 'http://s-apis.learningfuze.com/hackathon/youtube/search.php',
            method: 'post',
            dataType: 'json',
            data: {
                q: "how to cook " + foodTitle,
                maxResults: 1,
                type: 'video',
            }
        };
        
        $.ajax(ajaxOptions).then(function (response) {
            var videoUrl = response.video[0].id;
            $("<iframe>").attr("src", "https://www.youtube.com/embed/" + videoUrl).appendTo(".youtube");   
        });
    }
}

