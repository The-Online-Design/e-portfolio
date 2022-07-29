


async function onSearchChange(event){

    const searchterm = event.target.value

renderMovies(searchterm)
}
//This gets the text from inside the search bar and passes it to our render function




const getMovieDiv = document.querySelector('.movies')

//This selectes the movies element so we can add each movie element inside of it

async function renderMoviesFirst(search){
//This is our render movie function, on a new page load we want to load the latest movies

    const loading = document.body.classList += " loading"
//First start by showing the loading screen
    const moviesRaw = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f82e6abd5a1f637365b8438d9735e5f2&with_original_language=en&region=US`)
 
   const movies = await moviesRaw.json()

   //this is how you fetch an api

   document.body.classList.remove("loading")
   //when its done loading remove the loading classes to hide the spinner

   movieResults = movies.results

   //the api returns an object where the array of movies are inside the results 

   movieResultsTrim = movieResults.slice(0, 6)
//Trim the array to the first 6 results
 



    getMovieDiv.innerHTML = movieResultsTrim.map (elem => movieHtml(elem)).join('')

    //were adding the code to the html, map through each element in the array and run the html function. join at the end to make it a big string we can add
 }
 renderMoviesFirst()

//run the function so the latest movies show first





















async function renderMovies(search){
if (search == false){
    renderMoviesFirst()
}
//if the search is empty then just return the latest movies

    const loading = document.body.classList += " loading"
//add loading screen while we get the results
    const changeTextToResults = document.querySelector('.search__text').innerHTML = `Search Results for ${search}`
//change the test from latest movies to search results after they search
    const moviesRaw = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=f82e6abd5a1f637365b8438d9735e5f2&with_original_language=en&region=US&query=${search}`)
 
   const movies = await moviesRaw.json()
//ping the api


   movieResults = movies.results
//the array is stores in the object that is returned
   movieResultsTrim = movieResults.slice(0, 6)
   //trim the array down to 6 results

   if (movieResultsTrim.length === 0){
    document.querySelector('.search__text').innerHTML = "Your search returned 0 results. Please try broadening your search."
    document.body.classList.remove("loading")
   }
   //if the array is empty there were no results. politely tell the customer


    getMovieDiv.innerHTML = movieResultsTrim.map (elem => movieHtml(elem)).join('')

    //add the code to the html document by mapping through each array element and running the moviehtml function
    




















    //This section waits for the images to load before showing it on the page
    var imgs = document.images,
    len = imgs.length,
    counter = 0;

[].forEach.call( imgs, function( img ) {
    if(img.complete)
      incrementCounter();
    else
      img.addEventListener( 'load', incrementCounter, false );
} );

function incrementCounter() {
    counter++;
    if ( counter === len ) {
        document.body.classList.remove("loading")
    }
}
    //This section waits for the images to load before showing it on the page

 }






 const monthNames = ["January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December"]

 //The api returns release dates as number so we use this to convert it to text



 const genres = [
    {"genre" : "Action",          
    "id" : 28}, 
    {"genre" : "Adventure",       
    "id" : 12}, 
    {"genre" : "Animation",       
    "id" : 16}, 
    {"genre" : "Comedy",          
    "id" : 35}, 
    {"genre" : "Crime",           
    "id" : 80}, 
    {"genre" : "Documentary",     
    "id" : 99}, 
    {"genre" : "Drama",           
    "id" : 18}, 
    {"genre" : "Family",          
    "id" : 10751}, 
    {"genre" : "Fantasy",         
    "id" : 14}, 
    {"genre" : "History",         
    "id" : 36}, 
    {"genre" : "Horror",          
    "id" : 27}, 
    {"genre" : "Music",           
    "id" : 10402}, 
    {"genre" : "Mystery",         
    "id" : 9648}, 
    {"genre" : "Romance",         
    "id" : 10749}, 
    {"genre" : "Science Fiction", 
    "id" : 878}, 
    {"genre" : "TV Movie",        
    "id" : 10770}, 
    {"genre" : "Thriller",        
    "id" : 53}, 
    {"genre" : "War",             
    "id" : 10752}, 
    {"genre" : "Western",         
    "id" : 37},    

]
//the api has numbers for genres so we use this as an index


 function movieHtml(elem){

    const dateString = elem.release_date;
    //get the release date and store it in dateString
    const year = dateString.substring(0, 4);
    //the year is the first 4 characters
    const month = Number(dateString.substring(5, 7));
    //the month is the 5th and 7th characters, convert this to a number because now it's a string
    const monthName = monthNames[month -1];
//when month is converted to a number, take away 1 and get that element from the the monthNames array. Why take away one? jan is 1 but the first element in the array is 0


    const day = Number(dateString.substring(8, 10));
//The date is the 8th and 10th character
    const date = monthName +' ' + day +' ' + year
    //build the date by adding all the values together









const genreNames = elem.genre_ids.map(elem => convertGenre(elem))
//the genre ids returns an array, we map through it and run the convertGenre functions    

const genreNamesString = genreNames.slice(0, 2).join(', ')
//only keep the first 2 elements in the array of genres



 

    return  `<div class="movie">
    <figure class="movie__img--wrapper">
        <img class="movie__img" src="${posterPath(elem.poster_path)}" alt="">
    </figure>
    <div class="movie__info">
    <h3 class="movie__title"><span class="purple">${elem.original_title}</span></h3>

    <p class="movie__genre">${genreNamesString}</p>
    <p class="movie__year"><span class="purple">${date}</span></p>
    </div>
</div>`
  }
//This is the code we insert into html with the proper values


function posterPath(address){
   
    if (!address){
        return `./assets/poster404.png`
    }

    return `https://image.tmdb.org/t/p/original/${address}`
  
}
//if the poster returns a null value, it has no poster and show the 404 error for that poster



  
  function convertGenre(id){
    const found = genres.find(element => element.id === id).genre
    return found
    
    }

//the genre array has numbers, in the genres array, find the id that matches, then return the value for it's genre


    function openMenu (){
        document.body.classList += "menu--open"
    }
    
    // if theres many classes already you need a space before menu
    
    function closeMenu (){
        document.body.classList.remove('menu--open')
    }
    

//this is for the burger menu for mobile




























function contact(event){

    //Create a new function with 1 parameter. We call this function on the form onsubmit="contact(event)" 
    
    
        event.preventDefault()
        //This stops the form from reloading the page
    
        const loading = document.querySelector('.modal__overlay--loading')
    
        //Select the loading screen overlay
    
        const success = document.querySelector('.modal__overlay--success')
    
        //Select the success screen overlay
    
        const fail = document.querySelector('.modal__overlay--fail')
    
        //Select the fail screen
    
        loading.classList += " modal__overlay--visible"
    
        //Show the loading screen
    
        emailjs
        .sendForm(
            'service_134e045',
            'template_jrs2ozk',
            event.target,
            '08o0h8_F-efYPg4Xp'
    
            //This is for the emailJS
    
        )
        .then(() => {
    
            //Wait for the emil to send ... THEN do the following code
    
    
           // throw new Error("error")
           //This is for testing purposes
    
    
            loading.classList.remove("modal__overlay--visible")
            //from loading screen, make z index -1 to hide it
            success.classList += " modal__overlay--visible"
            //On success, make the success screen z indez 1
    
        }).catch(() => {
            //If theres an error then do this
    
            loading.classList.remove("modal__overlay--visible")
            //hide loading screen
            fail.classList += " modal__overlay--visible"
            //show fail screen
       
        })
    
    
    
    }
    
    let isModalOpen = false
    //first run the modal is not open
    function toggleModal(){
    
        if (isModalOpen){
            //if it's open then change the bool and remove the modal open class
            isModalOpen = false
            return document.body.classList.remove("modal__open")
        }
        //if it's false, then set it to true and add .modal__open to the body. Notice the space " modal__open"
        isModalOpen = true
        document.body.classList += " modal__open"
    }
    
    //This is for clicking an element that has onclick="toggleModal()" and having the modal appear and disappear when clicking it