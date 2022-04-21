// Array of quotes
let apiQuote= [];
// Arrow function generating new quoate 
const getNewQuoate =()=>{
const quote=apiQuote[Math.floor(Math.random() * apiQuote.length)];

console.log(quote);
}


/* http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?
/* https://type.fit/api/quotes*/

// ? Get Quotes from Api!

async function getQuotes(){
  const urlApi='https://type.fit/api/quotes';
  try {
    const response= await fetch(urlApi);
    apiQuote= await response.json();
    getNewQuoate();  
  } catch (error) {
    
  }
}

// Load
getQuotes();