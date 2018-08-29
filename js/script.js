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

function getRandomQuote(quotes){
  return Math.floor(Math.random() * quotes.length);
    }
for(var i=0; i< quotes.length; i+=1){
    i = getRandomQuote(quotes);
    quoteText = quotes[i].quote;
    sourceText = quotes[i].source;
    message +="<h1>"+ quoteText +"</h1><br>";
    message+="<h2>"+ sourceText +"</h2>";
  if(quotes[i].citation != false){
    citationText = quotes[i].citation;
  message += "<h3>"+ citationText +"</h3>";
  i+=1
  }
}



// Create the printQuote funtion and name it printQuote

function printQuote (message){
 var outputDiv = document.getElementById("quote-box");
 outputDiv.innerHTML = message;
}

printQuote(message);



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
