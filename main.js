$(document).ready(initializeApp)

function initializeApp(){
    //$(".randomizerButton").click(modulePopUp)
    $(".randomizerButton").click(openModal);
    getData();
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

function openModal(){
    $("#myModal").modal("show");
    $(".modal-body > p").text('balls');
 }

