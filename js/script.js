// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var message= "";


var quotes =[
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



// Create the getRandomQuote function and name it getRandomQuote

function getRandomQuote(randomQuote){
  var index= Math.floor(Math.random() * quotes.length)+1;
  for(i=quotes[index];){
  message +="<h1>"+ quotes.quote[i] +"</h1><br>";
  message+="<h2>"+ quotes.source[i] +"</h2>";
  }
  if(quotes.citation != false){
  message += "<h3>"+ quotes.citation[i] +"</h3>";
  }
}



// Create the printQuote funtion and name it printQuote

function printQuote (message){
 var outputDiv = document.getElementById("quote-box");
 outputDiv.innerHTML = "quote-box";
}
message += "hi";
printQuote(message);


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
