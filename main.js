$(document).ready(initializeApp)

function initializeApp(){
    //$(".randomizerButton").click(modulePopUp)
    $(".randomizerButton").click(modulePopUp)
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