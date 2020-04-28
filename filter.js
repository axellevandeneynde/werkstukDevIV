$(function () {
    // create doelgroep tabs
    const doelgroepen = ['volwassenen', 'familie'];

    doelgroepen.forEach(function(e){
        newTab(e, "#doelgroepTabs");
    })
    // create genre tabs
    const genres = ['comedy','concert','theater','multidisciplinair','literatuur','dans','muziektheater','figurentheater','circus','opera'];
    
    genres.forEach(function(e){
        newTab(e, "#genreTabs");
    })

    // keep track of selected doelgroepen

    let displayedDoelgroepen = [];

    //keep track of selected genres
    let displayedGenres = [];

    $.getJSON( './data.json', function( data ){  //asynchronus 
        for(let i = 0; i < data.length; i++){ // forEach not working because of naming object keys
            const title = data[i].name;
            const genre = nameGenre(data[i]['genre-v2']);
            const doelgroep = nameDoelgroep(data[i]['category']);
            $('#listItems').append(`<div class= "item ${genre} ${doelgroep}" id="title"><h2>${title}</h2><p>${genre}, ${doelgroep}</p></div>`);
        }
        $('#genreTabs').on('click','.tab', function(){
            const selectedGenre = $(this).attr('id');
            updateGenres(selectedGenre);
            showSelectedItems();
        })
        $('#doelgroepTabs').on('click','.tab', function(){ 
            const selectedDoelgroep = $(this).attr('id');
            updateDoelgroep(selectedDoelgroep);
            showSelectedItems();
        })

    })
// show double filtered items
function showSelectedItems(){
    if(displayedDoelgroepen.length == 0 && displayedGenres.length == 0){  //nothing selected
        $('.item').show();
    }
    else if(displayedDoelgroepen.length == 0) { // only genre selected
        $('.item').hide();
    for (var i = 0; i < displayedGenres.length; i++){
        $('.' + displayedGenres[i]).show();
    }}else if(displayedGenres.length == 0){  //only doelgroep slected
        $('.item').hide();
        for (var i = 0; i < displayedDoelgroepen.length; i++){
        $('.' + displayedDoelgroepen[i]).show();
    }}else{ // select items with two classes
        $('.item').hide(); 
        for (var i = 0; i < displayedDoelgroepen.length; i++){
            for (var y = 0; y < displayedGenres.length; y++){
                const selector = "." + displayedDoelgroepen[i] + "." + displayedGenres[y];
                console.log(selector);
                $(selector).show();
            }
        }
    }

}

// update displayed doelgroep
 function updateDoelgroep(selected){
    const isActive = checkIfTabActive(displayedDoelgroepen, selected);
    if(isActive){
        deactivateDoelgroep(selected)
    } else{
        activateDoelgroep(selected)
    }
 }

// update displayed genres

function updateGenres(selectedGenre){
    const isActive = checkIfTabActive(displayedGenres, selectedGenre);
    if(isActive){
        deactivateGenre(selectedGenre)
    }else{
        activateGenre(selectedGenre)
    }
}



// Check if a tab is already selected
function checkIfTabActive(array, toCheck){
    for (var i = 0; i < array.length; i++){
        if(array[i] == toCheck){
            return true;
        }
    };
    return false;
}

// change actiavted status tab
function deactivateGenre(selected){
    _.pull(displayedGenres, selected);
    setColor(selected, false);
}

function activateGenre(selected){
    displayedGenres.push(selected);
    setColor(selected, true);
}

function deactivateDoelgroep(selected){
    _.pull(displayedDoelgroepen, selected);
    setColor(selected, false);
}

function activateDoelgroep(selected){
    displayedDoelgroepen.push(selected);
    setColor(selected, true);
}

function setColor(selected, active){
    const activeColor = "red";
    const inactiveColor = "lightgrey";
    if(active){
        $('.tab#' + selected).css('background', activeColor);
    }else{
        $('.tab#' + selected).css('background', inactiveColor);
    }

}

// create tabs
function newTab(nameTab, place){
    $(place).append(`<button class="tab" id="${nameTab}">${nameTab}</button>`);
}


//convert uuid's in human words
function nameGenre(uuid){
    switch(uuid){
        case '5e8590ab786f15dd8d7fdedc':
            return 'comedy';
        case '5e858fe7f29125b1216a43c5':
            return 'concert';
        case '5e7f791c831026496022722d':
            return 'theater';
        case '5e8590403b5ddb6443d03ea0':
            return 'multidisciplinair';
        case '5e8590b4f29125202d6a43c8':
            return 'literatuur'
        case '5e7f7906b39e212d7d868831':
            return 'dans'
        case '5e7e3eed0a1abb2190eb7c26':
            return 'muziektheater'
        case '5e85908bfb7f9b26cabd68f4':
            return 'figurentheater'
        case '5e85d2cb3b5ddb6ee3d03f0c':
            return 'circus'
        case '5e7f7942a1676ddf89b435f4':
            return 'opera'
        default:
            console.log('genre not recognized')
            return ''      
    }
}
function nameDoelgroep(uuid){
    switch(uuid){
        case '5e74d76a323fa1246360d029':
            return 'familie'
        case '5e74d69ddafdf1330dd603cf':
            return 'volwassenen'
        default:
            console.log('no doelgroep recognized')
            return ''
    }
}

})