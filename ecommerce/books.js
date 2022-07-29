let books;
//create the variable

async function renderBooks(filter){
  //we are defining a function that will render the books on the html page. We are passing a filter argument for the filter feature

const booksWrapper = document.querySelector('.books');
//This is going to select the div.books which currently has nothing inside of it. Outputs =>         <div class="books"></div>



booksWrapper.classList += ' books__loading'
//We add the loading class to the books div which displays the spinner


if (!books){
 books = await getBooks()
}
//This puts the array of fake data objects in the const books

//When I made the promise at the bottom I added await here, this makes the JS wait for the promise to resolve, when you use await you need to put async infront of the function. This was causing some glitches when it switched between sorting filters because the books is already loaded by that point. So we made a null variable called books at the top of the page. if it's null that means the books havent loaded for the first time yet and so we get the books. If it does exist afterwards then skip this part

booksWrapper.classList.remove('books__loading')
//after waiting for the promise to resolve, we remove the books loading class to display the content


if (filter ==='LOW_TO_HIGH'){
books.sort((a,b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice) ); 
}
//The sort needs to be by the sale price if possible. so we use the OR operator, if the sale price exists, it will use that price. If it doesnt ecist it will return false and use the secondary original price

else if (filter ==='HIGH_TO_LOW'){
  books.sort((a,b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)  );
}
else if (filter ==='RATING'){
  books.sort((a,b) => b.rating - a.rating );
}
//This is for the filter. 


const booksHtml = books.map((book) => {
//array map to cycle through each element in the array and return a code with each piece of info from each object

return `<div class="book">
<figure class="book__img--wrapper">
<img class="book__img" src="${book.url}" alt="">
</figure>
<div class="book__title">
${book.title}
</div>
<div class="book__ratings">
${showRating(book.rating)}
</div>
<div class="book__price">
${priceHtml(book.originalPrice, book.salePrice)}
</div>
</div>`

//This is regarding the sale price and original price. How will we do this. If theres no sale, then just show reg price. We will write a function
}).join('')

 //This is the HTML code we want to add to the page, because it's being stored in a new array we need to use join to turn it into a string

 
booksWrapper.innerHTML = booksHtml
//add the coded html to the actual document
}

setTimeout(() => {
  //We use this to push this command at the end so that js has time to read the html document
  renderBooks()
})














//Pricing: if theres no sale show the regular price, if the regularprice is an integer, format it properly


function priceHtml(originalPrice, salePrice){
  //We are defining a function to deal with the price nonsense. In the code we called the function and passed through 2 parameters, the OGprice and Sale price. These names could be anything but we called it the same thing for simplicity



  if (!salePrice){
    //if there isnt a sale price then do this
    return `$${originalPrice.toFixed(2)}`
    //return a $ so that the price shows an actual $ next to the price. Then we need to open JS with the ${} and put in the original price. tofixed2 means make the number 2 deciaml places
  }

    return `<span class="book__price--normal">$${originalPrice.toFixed(2)}</span> $${salePrice.toFixed(2)}`

    //This will run if there is a sale price because this is like the default. Imagine there was always a sale price, we would run this exact code everytime. but since some sale prices can be null we take care of that with the if
  
}


















  //Filter results
//on the select we add onchange="filterBooks()" so when the user makes a change to the list it'll call this function



function filterBooks(){
//This function filters the books


  filterValue = document.getElementById("filter").value;
//get the value that the filter was changed to and store it in a variable



  return renderBooks(filterValue)
  //return this function by passing the filter selection into the renderbooks function

}
























function showRating(num){
  //Returning the appropriate stars for the rating
  
     let countWholeStar = Math.floor(num)
  //passing the number into the function from the code ${showRating(books[i].rating)}
     let ratings = ""
  //ratings is a blank string for now
    
     for (let i = 1; i <= countWholeStar; i++) {
  //for each integer in countwholestar Ex 4 add the fa-star 4 times
         ratings = ratings + `<i class="fas fa-star"></i>`
      //this adds the code to the variable
     }
  
     let countHalfStar = num % 1
  //this lets us know if there is a decimal in the rating
  
  
     if (countHalfStar > 0){
  
      //if there is a rating, we assume it's .5 and add the half star code
        ratings = ratings + `<i class="fas fa-star-half-alt"></i>`
  }
  return ratings
  }
  
  

























  
  // FAKE DATA
function getBooks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve ([
        {
          id: 1,
          title: "Crack the Coding Interview",
                    url: "assets/crack the coding interview.png",
          originalPrice: 49.95,
          salePrice: 14.95,
          rating: 4.5,
        },
        {
          id: 2,
          title: "Atomic Habits",
          url: "assets/atomic habits.jpg",
          originalPrice: 39,
          salePrice: null,
          rating: 5,
        },
        {
          id: 3,
          title: "Deep Work",
          url: "assets/deep work.jpeg",
          originalPrice: 29,
          salePrice: 12,
          rating: 5,
        },
        {
          id: 4,
          title: "The 10X Rule",
          url: "assets/book-1.jpeg",
          originalPrice: 44,
          salePrice: 19,
          rating: 4.5,
        },
        {
          id: 5,
          title: "Be Obsessed Or Be Average",
          url: "assets/book-2.jpeg",
          originalPrice: 32,
          salePrice: 17,
          rating: 4,
        },
        {
          id: 6,
          title: "Rich Dad Poor Dad",
          url: "assets/book-3.jpeg",
          originalPrice: 70,
          salePrice: 12.5,
          rating: 5,
        },
        {
          id: 7,
          title: "Cashflow Quadrant",
          url: "assets/book-4.jpeg",
          originalPrice: 11,
          salePrice: 10,
          rating: 4,
        },
        {
          id: 8,
          title: "48 Laws of Power",
          url: "assets/book-5.jpeg",
          originalPrice: 38,
          salePrice: 17.95,
          rating: 4.5,
        },
        {
          id: 9,
          title: "The 5 Second Rule",
          url: "assets/book-6.jpeg",
          originalPrice: 35,
          salePrice: null,
          rating: 4,
        },
        {
          id: 10,
          title: "Your Next Five Moves",
          url: "assets/book-7.jpg",
          originalPrice: 40,
          salePrice: null,
          rating: 4,
        },
        {
          id: 11,
          title: "Mastery",
          url: "assets/book-8.jpeg",
          originalPrice: 30,
          salePrice: null,
          rating: 4.5,
        },
      ])
    }, 1000);

  })

}
