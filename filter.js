'use strict'

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

    const data = $.getJSON( './data.json');
    

    data.then(function(data){  // executed when data is loaded
        //create divs with shows
        for(let i = 0; i < data.length; i++){ // forEach not working because of naming object keys
            const title = data[i].name;
            const genre = nameGenre(data[i]['genre-v2']);
            const doelgroep = nameDoelgroep(data[i]['category']);
            $('#listItems').append(`<div class= "item ${genre} ${doelgroep}" id="title"><h2>${title}</h2><p>${genre}, ${doelgroep}</p></div>`);
        }
        //filter on click
        $('#genreTabs').on('click','.tab', function(){
            const selectedGenre = $(this).attr('id');
            updateGenres(selectedGenre);
            try{showSelectedItems()}catch(err){  //is there an error??
                console.log('showSelectedItemd' + err);
            }
        })
        $('#doelgroepTabs').on('click','.tab', function(){ 
            const selectedDoelgroep = $(this).attr('id');
            updateDoelgroep(selectedDoelgroep);
            showSelectedItems();
        })
    });


// show double filtered items
function showSelectedItems(){
    //nothing selected
    if(displayedDoelgroepen.length == 0 && displayedGenres.length == 0){
        $('.item').show();
    }

    // only genre selected
    else if(displayedDoelgroepen.length == 0) { 
        $('.item').hide();
    for (var i = 0; i < displayedGenres.length; i++){
        $('.' + displayedGenres[i]).show();
    }}
    
    //only doelgroep selected
    else if(displayedGenres.length == 0){  
        $('.item').hide();
        for (var i = 0; i < displayedDoelgroepen.length; i++){
        $('.' + displayedDoelgroepen[i]).show();
        }}
    
    // select items with two classes
    else{ 
    $('.item').hide(); 
    for (var i = 0; i < displayedDoelgroepen.length; i++){
        for (var y = 0; y < displayedGenres.length; y++){
            const selector = "." + displayedDoelgroepen[i] + "." + displayedGenres[y];
            $(selector).show();
            }
        }
    }

}

// update displayed doelgroep
 function updateDoelgroep(selected){
    const isActive = checkIfTabActive(displayedDoelgroepen, selected);
    if(isActive){
        deactivate(selected, "doelgroep")
    } else{
        activate(selected, "doelgroep")
    }
 }

// update displayed genres

function updateGenres(selectedGenre){
    const isActive = checkIfTabActive(displayedGenres, selectedGenre);
    if(isActive){
        deactivate(selectedGenre, 'genre')
    }else{
        activate(selectedGenre, 'genre')
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

// change activated status tab
function activate(selected, category ){
    if(category == 'genre'){
        displayedGenres.push(selected);
    }
    if(category == 'doelgroep'){
        displayedDoelgroepen.push(selected);
    }
    setColor(selected, true);
}

function deactivate(selected, category){
    if(category == 'genre'){
        _.pull(displayedGenres, selected);
    }
    if(category == 'doelgroep'){
        _.pull(displayedDoelgroepen, selected);
    }
    setColor(selected, false);
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