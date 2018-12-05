$(document).ready(initializeApp)

function initializeApp(){
    //$(".randomizerButton").click(modulePopUp)
    $(".randomizerButton").click(modulePopUp)
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

function modulePopUp(){
    console.log('hi')
    var moduleBox = $('<div>',{
        class: 'module', 
    })
    $('.bodyContainer').append(moduleBox)

}


// function openModal(message){
//     $("#myModal").modal("show");
//     $(".modal-body > p").text(message);
//  }

