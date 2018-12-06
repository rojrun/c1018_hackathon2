$(document).ready(initializeApp)

function initializeApp(){
    //$(".randomizerButton").click(modulePopUp)
    //$(".randomizerButton").click(modulePopUp)
    //getData();
    var youTube = new Youtube();
    var recipe = new Recipes();
    recipe.getRecipeData(youTube.getData)
    //getRecipeData();
}

function modulePopUp(){
    console.log('hi')
    var moduleBox = $('<div>',{
        class: 'module', 
    })
    $('.bodyContainer').append(moduleBox)

}


function openModal(message){
    $("#myModal").modal("show");
    $(".modal-body > p").text(message);
 }

