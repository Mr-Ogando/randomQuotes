// Get API

async function gettingApi() {
// Using proxy url to be abel  to get the api, because 
  const proxyUrl= 'https://cors-anywher.herokuapp.com/'
  const apiUrl= 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
try {
  const response= await fetch(proxyUrl + apiUrl);
  const data=  await response.json();
  console.log(data);
} catch (error) {
  console.log("Error ", error);
}
  
}

// load 
gettingApi();
