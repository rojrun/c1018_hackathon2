$(document).ready(startApp);

function startApp () {
    getData()
}


function getData() {
    var ajaxOptions = {
        url: 'http://s-apis.learningfuze.com/hackathon/youtube/search.php',
        method: 'post',
        dataType: 'json',
        data: {
            q: 'coors beer',
            maxResults: 10,
            type: 'video',

        }

    };

    $.ajax(ajaxOptions).then(function (response) {
        console.log(response);
    })
}

