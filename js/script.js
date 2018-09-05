// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

//declaration of variables involved in creating final string printed to webpage
var message="";
var quoteText="";
var sourceText="";
var citationText="";

//quote object array

var quotes =[
  {
    quote:'"I never look back darling, it distracts from the now."',
    source:" - Edna Mode",
    citation: "<i>The Incredibles, 2004</i>"
  },
  {
    quote: '"Endurance is the crowning quality, And patience all the passion of great hearts."',
    source:" - James Russell Lowell",
    citation: false
  },
  {
    quote: '"Popularity is not an indication of quality."',
    source: " - Vanna Bonta",
    citation: false
  },
  {
    quote: '"Be yourself; everyone else is already taken."',
    source: " - Oscar Wilde",
    citation: false
  },
  {
    quote: '“Get busy living or get busy dying.”',
    source: " - Stephen King",
    citation: false
  }
];



// Create the getRandomQuote function and name it getRandomQuote

//function creating a random number for index in array

function getRandomQuote(quotes){
  return Math.floor(Math.random() * quotes.length);
    }
// for loop to create string of variables from array

for(var i=0; i<=1; i++){
    i = getRandomQuote(quotes);
    quoteText = quotes[i].quote;
    sourceText = quotes[i].source;
    message +="<h1>"+ quoteText +"</h1>";
    message+="<h2>"+ sourceText +"</h2><br>";
  if(quotes[i].citation != false){
    citationText = quotes[i].citation;
  message += "<h3>"+ citationText +"</h3><br>";
  i+=1;
  }
}



// Create the printQuote funtion and name it printQuote

function printQuote (message){
 var outputDiv = document.getElementById("quote-box");
 outputDiv.innerHTML = message;
}

//printing string of variables to page

printQuote(message);


//set timer to automatically reload page and create new random quote
setTimeout(function(){
   window.location.reload(1);
}, 5000);


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

//button click by guest to create new random quote

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
