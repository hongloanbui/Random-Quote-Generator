// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var message="";


var randomQuote =[
  {
    quote:"I never look back darling, it distracts from the now.",
    source:" - Edna Mode",
    citation: "<i>The Incredibles, 2004</i>"
  },
  {
    quote: "Endurance is the crowning quality, And patience all the passion of great hearts.",
    source:" - James Russell Lowell",
    citation: false
  },
  {
    quote: "Popularity is not an indication of quality.",
    source: " - Vanna Bonta",
    citation: false
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: " - Oscar Wilde",
    citation: false
  },
  {
    quote:"Nature can be lethal. But it doesn't hold a candle to man.",
    source: " - Samuel L. Jackson",
    citation:"<i>Deep Blue Sea, 1999</i>"
  }
];



// Create the getRandomQuuote function and name it getRandomQuote

function getRandomQuote(randomQuote){
  Math.floor(Math.random() * randomQuote.length)+1;
  return getRandomQuote;
    console.log(getRandomQuote);
}


// Create the printQuote funtion and name it printQuote

function printQuote (message){
   var outputDiv = document.getElementById("output");
   outputDiv.innerHTML = message;
}
for (getRandomQuote){

  message +="<h1>"+ randomQuote.quote +"</h1>";
  message+="<h2>"+ randomQuote.source +"</h2>"
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
