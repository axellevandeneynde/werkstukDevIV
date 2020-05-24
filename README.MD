## Functional analysis
 1. The first filter, filters the items based on the audience. The audience is split into two   categories: 'volwassenen' & 'familie'.
 2. the second filter is based on genre. categories are: 'concert', 'theater', 'multidisciplinair', 'literatuur', 'comedy', 'dans', 'muziektheater', 'figurentheater','circus', 'opera'. based on the datastructure (json-file), it's not the intention to be able to dynamically add new categories. the genre tabs also shows how any items there are in the genre.
 3. Multiple filters can be selected at the same time. even on the same level.
 4. When no filters are selected, all the items are shown. 
 5. when a genre is selected, a 'filters wissen' option is displayed. This erases all filters (also the audience filter).

 ## incoming data-structure: 
under the key 'category':
 - 'familie' is represented with id '5e74d76a323fa1246360d029'.
 - 'volwassenen' is represented with id '5e74d69ddafdf1330dd603cf'

 under the key 'genre-v2' (key 'genre', does still exists, but not in all items. why was the genre changed by an id istead of a name? why keep unused keys?, why are 'key-takeaways' filled in manually?):
 - 'comedy' is represented with id '5e8590ab786f15dd8d7fdedc',
 - 'concert' is represented with id '5e858fe7f29125b1216a43c5',
 - 'theater' is represented with id '5e7f791c831026496022722d',
 - 'multidisciplinair' is represented with id '5e8590403b5ddb6443d03ea0',
 - 'literatuur' is represented with id '5e8590b4f29125202d6a43c8',
 - 'dans' is represented with id '5e7f7906b39e212d7d868831',
 - 'muziektheater' is represented with id '5e7e3eed0a1abb2190eb7c26',
 - 'figurentheater' is represented with id '5e85908bfb7f9b26cabd68f4',
 - 'circus' is represented with id '5e85d2cb3b5ddb6ee3d03f0c',
 - 'opera' is represented with id '5e7f7942a1676ddf89b435f4'

 => JSON not up to date with website or missing items in JSON? (28/04/2020)

# Development 4: Opdracht Werkstuk
## Short
Podiumaanhuis.be is a new website that offers full video's of theater pieces. It's created very quickly using Webflow, a  very simple website creating platform. Now the organisation wants to recreate the app from scratch, using HTML, CSS and Javascript.

One feature is the option to filter the video entries based on genres and audience. Using the JSON fetch the entries, show them on the page, and recreate the filter like it is presented on podiumaanhuis.be.

## Requirements
- Write out your approach in the readme.md file. Do a functional analysis of the existing app. Plan your data, functions and the flow of your app.
- It must work. This is the most important requirement. Don't worry too much about clean code or functional programming in the beginning. Create the app, and iterate.
- Push your iterations to github.
- Try to make your code as functional & pure as possible.
- Try to avoid side effects as much as possible.
- Write tests for at least 2 functions
- Show the result on the webpage
- COMMENTS COMMENTS COMMENTS

## Resources
https://www.podiumaanhuis.be/
https://github.com/pmcp/ehbdev4werkstuk
https://docs.google.com/presentation/d/1tlhfJPTmw0MP4kfKSdszo4bUSKwG9xRcuSmzhbkiNaw/edit?usp=sharing



 


