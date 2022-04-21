// Array of quotes
let apiQuote= [];
const quoteText= document.getElementById('quote');
const quoteBtn=document.getElementById('new-quote');
const twitter=document.getElementById('twitter');
const authorText= document.getElementById('author');
// Arrow function generating new quoate 
const getNewQuoate =()=>{
const quote=apiQuote[Math.floor(Math.random() * apiQuote.length)];
// checking if author is not know.

if(!quote.text){
  authorText.textContent='Unknown';
}
else{
  authorText.textContent=quote.author;
}
//Checking quote lenght 
if(quote.text.length>=50){
  quoteText.classList.add('long-text');
}
else{
  quoteText.classList.remove('long-text');
}
quoteText.textContent=quote.text;
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


// Making a tweet function 
function makeTweet() {
const tweetUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
window.open(tweetUrl, '_blank');

}

//Event Lisetners 

quoteBtn.addEventListener('click',getNewQuoate );
twitter.addEventListener('click', makeTweet );